import { validate } from "@/lib/validate";
import type { Validator } from "@/lib/validate";

type ValidatorMap<T> = { readonly [K in keyof T]: readonly Validator[] };

export class FormState<T extends Record<string, string>> {
  fields:  T;
  errors:  Partial<Record<keyof T, string>> = {};
  touched: Partial<Record<keyof T, true>>   = {};
  sending  = false;
  sent     = false;

  private readonly validators: ValidatorMap<T>;

  constructor(initial: T, validators: ValidatorMap<T>) {
    this.fields     = { ...initial } as T;
    this.validators = validators;
  }

  private check(key: keyof T, val: string): string | null {
    return validate(val, ...this.validators[key]);
  }

  touch(key: keyof T): void {
    this.touched[key] = true;
    const err = this.check(key, this.fields[key]);
    if (err) this.errors[key] = err;
    else     delete this.errors[key];
  }

  set(key: keyof T, val: string): void {
    this.fields = { ...this.fields, [key]: val } as T;
    if (this.touched[key]) {
      const err = this.check(key, val);
      if (err) this.errors[key] = err;
      else     delete this.errors[key];
    }
  }

  isValid(): boolean {
    const errs:    Partial<Record<keyof T, string>> = {};
    const touched: Partial<Record<keyof T, true>>   = {};
    for (const key of Object.keys(this.validators) as (keyof T)[]) {
      touched[key] = true;
      const err = this.check(key, this.fields[key]);
      if (err) errs[key] = err;
    }
    this.errors  = errs;
    this.touched = touched;
    return Object.keys(errs).length === 0;
  }

  err(key: keyof T): string | undefined {
    return this.touched[key] ? this.errors[key] : undefined;
  }
}

export type Validator = (val: string) => string | null;

export function required(label = "این فیلد"): Validator {
  return (val) => val.trim() ? null : `${label} الزامی است`;
}

export function minLength(min: number, label = "این فیلد"): Validator {
  return (val) => val.trim().length >= min
    ? null
    : `${label} باید حداقل ${min} کاراکتر باشد`;
}

export function maxLength(max: number, label = "این فیلد"): Validator {
  return (val) => val.trim().length <= max
    ? null
    : `${label} نباید بیشتر از ${max} کاراکتر باشد`;
}

export function email(): Validator {
  return (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())
    ? null
    : "آدرس ایمیل معتبر نیست";
}

export function iranPhone(): Validator {
  return (val) => /^09\d{9}$/.test(val.trim())
    ? null
    : "شماره موبایل باید با ۰۹ شروع شده و ۱۱ رقم داشته باشد";
}

export function selectRequired(label = "این فیلد"): Validator {
  return (val) => val ? null : `${label} را انتخاب کنید`;
}

/** Run validators in order; return the first error or null. */
export function validate(val: string, ...validators: Validator[]): string | null {
  for (const v of validators) {
    const err = v(val);
    if (err) return err;
  }
  return null;
}

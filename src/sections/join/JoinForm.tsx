import m from "mithril";
import { Btn }         from "@/components/ui/Btn";
import { Field }       from "@/components/ui/Field";
import { Select }      from "@/components/ui/Select";
import { SuccessCard } from "@/components/ui/SuccessCard";
import { joinRoles }   from "@/data/join";
import { validate, required, minLength, maxLength, email, selectRequired } from "@/lib/validate";

interface FormFields {
  name:  string;
  email: string;
  role:  string;
  bio:   string;
}

type FieldKey = keyof FormFields;

function validateField(key: FieldKey, val: string): string | null {
  switch (key) {
    case "name":  return validate(val, required("نام"), minLength(2, "نام"), maxLength(60, "نام"));
    case "email": return validate(val, required("ایمیل"), email());
    case "role":  return validate(val, selectRequired("نقش مورد نظر"));
    case "bio":   return validate(val, required("معرفی"), minLength(20, "معرفی"), maxLength(600, "معرفی"));
  }
}

export class JoinForm implements Mithril.ClassComponent {
  fields:  FormFields = { name: "", email: "", role: "", bio: "" };
  errors:  Partial<Record<FieldKey, string>> = {};
  touched: Partial<Record<FieldKey, true>>   = {};
  sending  = false;
  sent     = false;

  touch(key: FieldKey) {
    this.touched[key] = true;
    const err = validateField(key, this.fields[key]);
    if (err) this.errors[key] = err;
    else     delete this.errors[key];
  }

  set(key: FieldKey, val: string) {
    this.fields[key] = val;
    if (this.touched[key]) {
      const err = validateField(key, val);
      if (err) this.errors[key] = err;
      else     delete this.errors[key];
    }
  }

  isValid(): boolean {
    const keys: FieldKey[] = ["name", "email", "role", "bio"];
    const errs: Partial<Record<FieldKey, string>> = {};
    for (const k of keys) {
      const err = validateField(k, this.fields[k]);
      if (err) errs[k] = err;
    }
    this.errors  = errs;
    this.touched = { name: true, email: true, role: true, bio: true };
    return Object.keys(errs).length === 0;
  }

  submit(e: Event) {
    e.preventDefault();
    if (!this.isValid()) { m.redraw(); return; }
    this.sending = true;
    setTimeout(() => { this.sending = false; this.sent = true; m.redraw(); }, 900);
  }

  err(key: FieldKey): string | undefined {
    return this.touched[key] ? this.errors[key] : undefined;
  }

  view() {
    return (
      <div class="bg-card border border-ui rounded-3xl p-8 sm:p-10">
        <h2 class="text-xl font-black text-fore mb-7">فرم درخواست همکاری</h2>
        {this.sent ? (
          <SuccessCard
            title="درخواست شما ثبت شد!"
            subtitle="تیم ما در اسرع وقت با شما تماس خواهد گرفت."
            class="py-12"
            iconSize="w-16 h-16"
          />
        ) : (
          <form onsubmit={(e: Event) => this.submit(e)} class="space-y-5" novalidate>
            <div class="grid sm:grid-cols-2 gap-5">
              <Field
                label="نام" required
                value={this.fields.name}
                error={this.err("name")}
                oninput={(v: string) => this.set("name", v)}
                onblur={() => this.touch("name")}
              />
              <Field
                label="ایمیل" type="email" required ltr
                value={this.fields.email}
                error={this.err("email")}
                oninput={(v: string) => this.set("email", v)}
                onblur={() => this.touch("email")}
              />
            </div>
            <Select
              label="نقش مورد نظر" required
              value={this.fields.role}
              error={this.err("role")}
              onchange={(v: string) => { this.set("role", v); this.touch("role"); }}
              onblur={() => this.touch("role")}
              options={joinRoles}
              placeholder="انتخاب کنید..."
            />
            <Field
              label="دربارهٔ خودت بنویس" required rows={4}
              placeholder="مهارت‌ها، تجربیات و انگیزهٔ همکاری... (حداقل ۲۰ کاراکتر)"
              value={this.fields.bio}
              error={this.err("bio")}
              oninput={(v: string) => this.set("bio", v)}
              onblur={() => this.touch("bio")}
            />
            <Btn type="submit" disabled={this.sending} class="w-full py-4 rounded-2xl">
              {this.sending ? "در حال ارسال..." : "ارسال درخواست"}
            </Btn>
          </form>
        )}
      </div>
    );
  }
}

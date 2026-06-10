import m from "mithril";
import { Btn }         from "@/components/ui/Btn";
import { Field }       from "@/components/ui/Field";
import { SuccessCard } from "@/components/ui/SuccessCard";
import { validate, required, minLength, maxLength, email } from "@/lib/validate";

interface FormFields {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

type FieldKey = keyof FormFields;

function validateField(key: FieldKey, val: string): string | null {
  switch (key) {
    case "name":    return validate(val, required("نام"), minLength(2, "نام"), maxLength(60, "نام"));
    case "email":   return validate(val, required("ایمیل"), email());
    case "subject": return validate(val, required("موضوع"), minLength(3, "موضوع"), maxLength(100, "موضوع"));
    case "message": return validate(val, required("پیام"), minLength(10, "پیام"), maxLength(1000, "پیام"));
  }
}

export class ContactForm implements Mithril.ClassComponent {
  fields:  FormFields = { name: "", email: "", subject: "", message: "" };
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
    const keys: FieldKey[] = ["name", "email", "subject", "message"];
    const errs: Partial<Record<FieldKey, string>> = {};
    for (const k of keys) {
      const err = validateField(k, this.fields[k]);
      if (err) errs[k] = err;
    }
    this.errors  = errs;
    this.touched = { name: true, email: true, subject: true, message: true };
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
    if (this.sent) {
      return <SuccessCard title="پیام شما ارسال شد!" subtitle="در اسرع وقت با شما در ارتباط خواهیم بود." />;
    }
    return (
      <form onsubmit={(e: Event) => this.submit(e)} class="space-y-4" novalidate>
        <div class="grid sm:grid-cols-2 gap-4">
          <Field
            label="نام و نام خانوادگی" required
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
        <Field
          label="موضوع" required
          value={this.fields.subject}
          error={this.err("subject")}
          oninput={(v: string) => this.set("subject", v)}
          onblur={() => this.touch("subject")}
        />
        <Field
          label="پیام" required rows={5}
          placeholder="پیام خود را اینجا بنویسید..."
          value={this.fields.message}
          error={this.err("message")}
          oninput={(v: string) => this.set("message", v)}
          onblur={() => this.touch("message")}
        />
        <Btn type="submit" disabled={this.sending} class="w-full py-4 rounded-2xl">
          {this.sending ? "در حال ارسال..." : "ارسال پیام"}
        </Btn>
      </form>
    );
  }
}

import m from "mithril";
import { Btn }         from "@/components/ui/Btn";
import { Field }       from "@/components/ui/Field";
import { SuccessCard } from "@/components/ui/SuccessCard";
import { required, minLength, maxLength, email } from "@/lib/validate";
import { FormState }   from "@/lib/form";

type FormFields = { name: string; email: string; subject: string; message: string };

const VALIDATORS = {
  name:    [required("نام"),    minLength(2, "نام"),    maxLength(60,   "نام")   ],
  email:   [required("ایمیل"), email()                                           ],
  subject: [required("موضوع"), minLength(3, "موضوع"),  maxLength(100,  "موضوع") ],
  message: [required("پیام"),  minLength(10, "پیام"),  maxLength(1000, "پیام")  ],
};

export class ContactForm implements Mithril.ClassComponent {
  private form = new FormState<FormFields>(
    { name: "", email: "", subject: "", message: "" },
    VALIDATORS,
  );

  submit(e: Event): void {
    e.preventDefault();
    if (!this.form.isValid()) { m.redraw(); return; }
    this.form.sending = true;
    setTimeout(() => { this.form.sending = false; this.form.sent = true; m.redraw(); }, 900);
  }

  view(): m.Vnode {
    const { form } = this;
    if (form.sent) {
      return <SuccessCard title="پیام شما ارسال شد!" subtitle="در اسرع وقت با شما در ارتباط خواهیم بود." />;
    }
    return (
      <form onsubmit={(e: Event) => this.submit(e)} class="space-y-4" novalidate>
        <div class="grid sm:grid-cols-2 gap-4">
          <Field
            label="نام و نام خانوادگی" required
            value={form.fields.name}
            error={form.err("name")}
            oninput={(v: string) => form.set("name", v)}
            onblur={() => form.touch("name")}
          />
          <Field
            label="ایمیل" type="email" required ltr
            value={form.fields.email}
            error={form.err("email")}
            oninput={(v: string) => form.set("email", v)}
            onblur={() => form.touch("email")}
          />
        </div>
        <Field
          label="موضوع" required
          value={form.fields.subject}
          error={form.err("subject")}
          oninput={(v: string) => form.set("subject", v)}
          onblur={() => form.touch("subject")}
        />
        <Field
          label="پیام" required rows={5}
          placeholder="پیام خود را اینجا بنویسید..."
          value={form.fields.message}
          error={form.err("message")}
          oninput={(v: string) => form.set("message", v)}
          onblur={() => form.touch("message")}
        />
        <Btn type="submit" disabled={form.sending} class="w-full py-4 rounded-2xl">
          {form.sending ? "در حال ارسال..." : "ارسال پیام"}
        </Btn>
      </form>
    );
  }
}

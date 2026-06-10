import m from "mithril";
import { Btn }         from "@/components/ui/Btn";
import { Field }       from "@/components/ui/Field";
import { Select }      from "@/components/ui/Select";
import { SuccessCard } from "@/components/ui/SuccessCard";
import { joinRoles }   from "@/data/join";
import { required, minLength, maxLength, email, selectRequired } from "@/lib/validate";
import { FormState }   from "@/lib/form";

type FormFields = { name: string; email: string; role: string; bio: string };

const VALIDATORS = {
  name:  [required("نام"),    minLength(2, "نام"),    maxLength(60,  "نام")  ],
  email: [required("ایمیل"), email()                                         ],
  role:  [selectRequired("نقش مورد نظر")                                     ],
  bio:   [required("معرفی"), minLength(20, "معرفی"), maxLength(600, "معرفی")],
};

export class JoinForm implements Mithril.ClassComponent {
  private form = new FormState<FormFields>(
    { name: "", email: "", role: "", bio: "" },
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
    return (
      <div class="bg-card border border-ui rounded-3xl p-8 sm:p-10">
        <h2 class="text-xl font-black text-fore mb-7">فرم درخواست همکاری</h2>
        {form.sent ? (
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
            <Select
              label="نقش مورد نظر" required
              value={form.fields.role}
              error={form.err("role")}
              onchange={(v: string) => { form.set("role", v); form.touch("role"); }}
              onblur={() => form.touch("role")}
              options={joinRoles}
              placeholder="انتخاب کنید..."
            />
            <Field
              label="دربارهٔ خودت بنویس" required rows={4}
              placeholder="مهارت‌ها، تجربیات و انگیزهٔ همکاری... (حداقل ۲۰ کاراکتر)"
              value={form.fields.bio}
              error={form.err("bio")}
              oninput={(v: string) => form.set("bio", v)}
              onblur={() => form.touch("bio")}
            />
            <Btn type="submit" disabled={form.sending} class="w-full py-4 rounded-2xl">
              {form.sending ? "در حال ارسال..." : "ارسال درخواست"}
            </Btn>
          </form>
        )}
      </div>
    );
  }
}

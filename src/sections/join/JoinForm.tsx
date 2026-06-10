import m from "mithril";
import { Btn }         from "@/components/ui/Btn";
import { Field }       from "@/components/ui/Field";
import { Select }      from "@/components/ui/Select";
import { SuccessCard } from "@/components/ui/SuccessCard";
import { joinRoles }   from "@/data/join";

export class JoinForm implements Mithril.ClassComponent {
  name    = "";
  email   = "";
  role    = "";
  bio     = "";
  sending = false;
  sent    = false;

  submit(e: Event) {
    e.preventDefault();
    this.sending = true;
    setTimeout(() => { this.sending = false; this.sent = true; m.redraw(); }, 900);
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
          <form onsubmit={(e: Event) => this.submit(e)} class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <Field label="نام" required value={this.name} oninput={(v: string) => { this.name = v; }} />
              <Field label="ایمیل" type="email" required ltr value={this.email} oninput={(v: string) => { this.email = v; }} />
            </div>
            <Select
              label="نقش مورد نظر"
              value={this.role}
              onchange={(v: string) => { this.role = v; }}
              options={joinRoles}
              placeholder="انتخاب کنید..."
            />
            <Field
              label="دربارهٔ خودت بنویس"
              required
              rows={4}
              placeholder="مهارت‌ها، تجربیات و انگیزهٔ همکاری..."
              value={this.bio}
              oninput={(v: string) => { this.bio = v; }}
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

import m from "mithril";
import { Btn }         from "@/components/ui/Btn";
import { Field }       from "@/components/ui/Field";
import { SuccessCard } from "@/components/ui/SuccessCard";

export class ContactForm implements Mithril.ClassComponent {
  name    = "";
  email   = "";
  subject = "";
  message = "";
  sending = false;
  sent    = false;

  submit(e: Event) {
    e.preventDefault();
    this.sending = true;
    setTimeout(() => { this.sending = false; this.sent = true; m.redraw(); }, 900);
  }

  view() {
    if (this.sent) {
      return <SuccessCard title="پیام شما ارسال شد!" subtitle="در اسرع وقت با شما در ارتباط خواهیم بود." />;
    }
    return (
      <form onsubmit={(e: Event) => this.submit(e)} class="space-y-4">
        <div class="grid sm:grid-cols-2 gap-4">
          <Field label="نام و نام خانوادگی" required value={this.name} oninput={(v: string) => { this.name = v; }} />
          <Field label="ایمیل" type="email" required ltr value={this.email} oninput={(v: string) => { this.email = v; }} />
        </div>
        <Field label="موضوع" required value={this.subject} oninput={(v: string) => { this.subject = v; }} />
        <Field label="پیام" required rows={5} value={this.message} oninput={(v: string) => { this.message = v; }} />
        <Btn type="submit" disabled={this.sending} class="w-full py-4 rounded-2xl">
          {this.sending ? "در حال ارسال..." : "ارسال پیام"}
        </Btn>
      </form>
    );
  }
}

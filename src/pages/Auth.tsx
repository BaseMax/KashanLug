import m from "mithril";
import { Layout }   from "@/components/Layout";
import { Btn }      from "@/components/ui/Btn";
import { OtpInput } from "@/components/ui/OtpInput";
import { setTitle, faDigit } from "@/lib/utils";

type Step = "phone" | "otp";

export class Auth implements Mithril.ClassComponent {
  step: Step  = "phone";
  phone       = "";
  otp         = ["", "", "", "", "", ""];
  sending     = false;
  resendSecs  = 0;
  done        = false;
  private resendInterval: ReturnType<typeof setInterval> | null = null;

  oninit() { setTitle("ورود / ثبت‌نام"); }

  onremove() { if (this.resendInterval) clearInterval(this.resendInterval); }

  startResendTimer() {
    this.resendSecs = 90;
    this.resendInterval = setInterval(() => {
      this.resendSecs--;
      if (this.resendSecs <= 0) { clearInterval(this.resendInterval!); this.resendInterval = null; }
      m.redraw();
    }, 1000);
  }

  sendOtp(e: Event) {
    e.preventDefault();
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.step = "otp";
      this.startResendTimer();
      m.redraw();
      setTimeout(() => (document.getElementById("otp-0") as HTMLInputElement)?.focus(), 50);
    }, 700);
  }

  verifyOtp(e: Event) {
    e.preventDefault();
    this.sending = true;
    setTimeout(() => { this.sending = false; this.done = true; m.redraw(); }, 800);
  }

  handleOtpInput(i: number, val: string) {
    this.otp[i] = val.slice(-1);
    if (val && i < 5) (document.getElementById(`otp-${i + 1}`) as HTMLInputElement)?.focus();
    m.redraw();
  }

  handleOtpKey(i: number, e: KeyboardEvent) {
    if (e.key === "Backspace" && !this.otp[i] && i > 0) {
      (document.getElementById(`otp-${i - 1}`) as HTMLInputElement)?.focus();
    }
  }

  view() {
    const resendTimer = this.resendSecs > 0
      ? `${faDigit(Math.floor(this.resendSecs / 60), 2)}:${faDigit(this.resendSecs % 60, 2)}`
      : null;

    return (
      <Layout>
        <main class="min-h-screen pt-20 flex items-center">
          <div class="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
            <div class="grid lg:grid-cols-2 gap-10 items-stretch">
              {/* Terminal decoration */}
              <div class="hidden lg:flex flex-col relative">
                <div class="absolute -inset-1 bg-gradient-to-br from-brand-600/15 to-term-600/8 rounded-3xl blur-xl"></div>
                <div class="relative flex-1 bg-ink-900 border border-white/10 rounded-3xl overflow-hidden" dir="ltr">
                  <div class="flex items-center gap-2 px-4 py-3 bg-ink-850 border-b border-white/5">
                    <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    <span class="ml-auto font-mono text-xs text-gray-500">auth_service.sh</span>
                  </div>
                  <div class="p-6 font-mono text-sm space-y-2 text-gray-400">
                    <p><span class="text-term-400">$</span> <span class="text-gray-200">./auth_service --start</span></p>
                    <p>Initializing secure connection...</p>
                    <p>Loading user database... <span class="text-term-400">OK</span></p>
                    <p>Starting OTP service... <span class="text-term-400">OK</span></p>
                    <p><span class="text-brand-400">✔</span> Auth service is ready.</p>
                    <p class="mt-4 text-gray-500">──────────────────────</p>
                    <p><span class="text-term-400">$</span> <span class="text-gray-200">systemctl status kashanlug</span></p>
                    <p><span class="text-term-400">●</span> kashanlug.service - Active</p>
                    <p class="pl-4">Loaded: <span class="text-term-400">enabled</span></p>
                    <p class="pl-4">Active: <span class="text-term-400">running</span></p>
                    <p class="pl-4">Community: <span class="text-brand-400">online</span></p>
                  </div>
                </div>
              </div>

              {/* Auth form */}
              <div class="flex flex-col justify-center">
                <div class="bg-card border border-ui rounded-3xl p-8 sm:p-10">
                  {this.done ? (
                    <div class="text-center py-8">
                      <div class="w-16 h-16 mx-auto rounded-full bg-term-500/10 text-term-600 dark:text-term-400 flex items-center justify-center mb-5">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <h2 class="text-2xl font-black text-fore mb-2">خوش آمدید!</h2>
                      <p class="text-muted">ورود شما با موفقیت انجام شد.</p>
                    </div>
                  ) : this.step === "phone" ? (
                    <form onsubmit={(e: Event) => this.sendOtp(e)}>
                      <h2 class="text-2xl font-black text-fore mb-2">ورود / ثبت‌نام</h2>
                      <p class="text-muted text-sm mb-8">با شماره موبایل وارد شوید. کد تأیید برایتان ارسال می‌شود.</p>
                      <label class="block text-sm text-muted mb-2">شماره موبایل</label>
                      <input
                        type="tel" required dir="ltr" value={this.phone}
                        oninput={(e: InputEvent) => { this.phone = (e.target as HTMLInputElement).value; }}
                        placeholder="09xxxxxxxxx"
                        class="w-full px-4 py-3.5 rounded-2xl bg-card3 border border-ui text-fore text-center tracking-widest placeholder:text-dim focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition mb-6"
                      />
                      <Btn type="submit" disabled={this.sending || this.phone.length < 10} class="w-full py-4 rounded-2xl">
                        {this.sending ? "در حال ارسال..." : "دریافت کد تأیید"}
                      </Btn>
                    </form>
                  ) : (
                    <form onsubmit={(e: Event) => this.verifyOtp(e)}>
                      <button type="button" onclick={() => { this.step = "phone"; }}
                        class="cursor-pointer flex items-center gap-2 text-muted hover:text-fore text-sm mb-7 transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
                        ویرایش شماره
                      </button>
                      <h2 class="text-2xl font-black text-fore mb-2">کد تأیید</h2>
                      <p class="text-muted text-sm mb-8" dir="ltr">
                        کد ۶ رقمی ارسال‌شده به <span class="text-fore">{this.phone}</span> را وارد کنید.
                      </p>

                      <OtpInput
                        values={this.otp}
                        oninput={(i: number, val: string) => this.handleOtpInput(i, val)}
                        onkeydown={(i: number, e: KeyboardEvent) => this.handleOtpKey(i, e)}
                      />

                      <Btn type="submit" disabled={this.sending || this.otp.join("").length < 6} class="w-full py-4 rounded-2xl mt-8 mb-5">
                        {this.sending ? "در حال تأیید..." : "تأیید و ورود"}
                      </Btn>

                      <div class="text-center text-sm text-dim">
                        {resendTimer ? (
                          <span>ارسال مجدد تا <span class="text-fore tabular-nums" dir="ltr">{resendTimer}</span></span>
                        ) : (
                          <button type="button" onclick={() => { this.startResendTimer(); m.redraw(); }}
                            class="cursor-pointer text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-bold transition-colors">
                            ارسال مجدد کد
                          </button>
                        )}
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

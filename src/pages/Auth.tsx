import m from "mithril";
import { Layout }        from "@/components/Layout";
import { Btn }           from "@/components/ui/Btn";
import { OtpInput }      from "@/components/ui/OtpInput";
import { TerminalBlock } from "@/components/TerminalBlock";
import { validate, required, iranPhone } from "@/lib/validate";
import { setTitle, faDigit, toFaDigits, toEnDigits } from "@/lib/utils";

type Step = "phone" | "otp";

function FieldError({ msg }: { msg: string }): m.Vnode {
  return (
    <p class="flex items-center gap-1 text-xs text-red-500">
      <svg class="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
      </svg>
      {msg}
    </p>
  );
}

export class Auth implements Mithril.ClassComponent {
  step: Step   = "phone";
  phone        = "";
  phoneError   = "";
  phoneTouched = false;
  otpError     = "";
  otp          = ["", "", "", "", "", ""];
  sending      = false;
  resendSecs   = 0;
  done         = false;
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

  validatePhone(): boolean {
    this.phoneTouched = true;
    const err = validate(this.phone, required("شماره موبایل"), iranPhone());
    this.phoneError = err ?? "";
    return !err;
  }

  sendOtp(e: Event) {
    e.preventDefault();
    if (!this.validatePhone()) { m.redraw(); return; }
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
    if (this.otp.join("").length < 6) {
      this.otpError = "لطفاً تمام ۶ رقم کد تأیید را وارد کنید";
      m.redraw();
      return;
    }
    this.otpError = "";
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
                <div class="relative flex-1">
                  <TerminalBlock filename="auth_service.sh">
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
                  </TerminalBlock>
                </div>
              </div>

              {/* Auth form */}
              <div class="flex flex-col justify-center">
                <div class="bg-card border border-ui rounded-3xl p-8 sm:p-10">
                  {this.done ? (
                    <div class="text-center py-8">
                      <div class="w-16 h-16 mx-auto rounded-full bg-term-500/10 text-term-600 dark:text-term-400 flex items-center justify-center mb-5">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <h2 class="text-2xl font-black text-fore mb-2">خوش آمدید!</h2>
                      <p class="text-muted">ورود شما با موفقیت انجام شد.</p>
                    </div>
                  ) : this.step === "phone" ? (
                    <form onsubmit={(e: Event) => this.sendOtp(e)} novalidate>
                      <h2 class="text-2xl font-black text-fore mb-2">ورود / ثبت‌نام</h2>
                      <p class="text-muted text-sm mb-8">با شماره موبایل وارد شوید. کد تأیید برایتان ارسال می‌شود.</p>
                      <label class="block text-sm text-muted mb-1.5">
                        شماره موبایل <span class="text-red-500">*</span>
                      </label>
                      <input
                        type="tel" dir="ltr" value={toFaDigits(this.phone)}
                        oninput={(e: InputEvent) => {
                          this.phone = toEnDigits((e.target as HTMLInputElement).value);
                          if (this.phoneTouched) {
                            const err = validate(this.phone, required("شماره موبایل"), iranPhone());
                            this.phoneError = err ?? "";
                          }
                        }}
                        onblur={() => this.validatePhone()}
                        placeholder="09xxxxxxxxx"
                        class={`w-full px-4 py-3.5 rounded-2xl bg-card3 border text-fore text-center tracking-widest placeholder:text-dim focus:ring-2 outline-none transition mb-1.5 ${
                          this.phoneTouched && this.phoneError
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-ui focus:border-brand-500 focus:ring-brand-500/30"
                        }`}
                      />
                      {this.phoneTouched && this.phoneError
                        ? <div class="mb-5"><FieldError msg={this.phoneError} /></div>
                        : <div class="mb-5"></div>
                      }
                      <Btn type="submit" disabled={this.sending} class="w-full py-4 rounded-2xl">
                        {this.sending ? "در حال ارسال..." : "دریافت کد تأیید"}
                      </Btn>
                    </form>
                  ) : (
                    <form onsubmit={(e: Event) => this.verifyOtp(e)}>
                      <button type="button" onclick={() => { this.step = "phone"; }}
                        class="cursor-pointer flex items-center gap-2 text-muted hover:text-fore text-sm mb-7 transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                        </svg>
                        ویرایش شماره
                      </button>
                      <h2 class="text-2xl font-black text-fore mb-2">کد تأیید</h2>
                      <p class="text-muted text-sm mb-8" dir="ltr">
                        کد ۶ رقمی ارسال‌شده به <span class="text-fore">{toFaDigits(this.phone)}</span> را وارد کنید.
                      </p>
                      <OtpInput
                        values={this.otp}
                        oninput={(i: number, val: string) => { this.handleOtpInput(i, val); this.otpError = ""; }}
                        onkeydown={(i: number, e: KeyboardEvent) => this.handleOtpKey(i, e)}
                      />
                      {this.otpError && (
                        <div class="mt-3 flex justify-center">
                          <FieldError msg={this.otpError} />
                        </div>
                      )}
                      <Btn type="submit" disabled={this.sending} class="w-full py-4 rounded-2xl mt-6 mb-5">
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

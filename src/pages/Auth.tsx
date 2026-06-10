import m from "mithril";
import { Layout } from "../components/Layout";
import { setTitle, faDigit } from "../lib/utils";

type Step = "phone" | "otp";

interface State {
  step: Step;
  phone: string;
  otp: string[];
  sending: boolean;
  resendSecs: number;
  resendInterval: ReturnType<typeof setInterval> | null;
  done: boolean;
}

export const Auth: m.Component<Record<string, never>, State> = {
  oninit(vnode) {
    setTitle("ورود / ثبت‌نام");
    const s = vnode.state;
    s.step = "phone";
    s.phone = "";
    s.otp = ["", "", "", "", "", ""];
    s.sending = false;
    s.resendSecs = 0;
    s.resendInterval = null;
    s.done = false;
  },
  onremove(vnode) {
    if (vnode.state.resendInterval) clearInterval(vnode.state.resendInterval);
  },
  view(vnode) {
    const s = vnode.state;

    const startResendTimer = () => {
      s.resendSecs = 90;
      s.resendInterval = setInterval(() => {
        s.resendSecs--;
        if (s.resendSecs <= 0) { clearInterval(s.resendInterval!); s.resendInterval = null; }
        m.redraw();
      }, 1000);
    };

    const sendOtp = (e: Event) => {
      e.preventDefault();
      s.sending = true;
      setTimeout(() => {
        s.sending = false;
        s.step = "otp";
        startResendTimer();
        m.redraw();
        // focus first OTP input
        setTimeout(() => (document.getElementById("otp-0") as HTMLInputElement)?.focus(), 50);
      }, 700);
    };

    const verifyOtp = (e: Event) => {
      e.preventDefault();
      s.sending = true;
      setTimeout(() => { s.sending = false; s.done = true; m.redraw(); }, 800);
    };

    const handleOtpInput = (i: number, val: string) => {
      s.otp[i] = val.slice(-1);
      if (val && i < 5) (document.getElementById(`otp-${i + 1}`) as HTMLInputElement)?.focus();
      m.redraw();
    };

    const handleOtpKey = (i: number, e: KeyboardEvent) => {
      if (e.key === "Backspace" && !s.otp[i] && i > 0) {
        (document.getElementById(`otp-${i - 1}`) as HTMLInputElement)?.focus();
      }
    };

    const resendTimer = s.resendSecs > 0
      ? `${faDigit(Math.floor(s.resendSecs / 60), 2)}:${faDigit(s.resendSecs % 60, 2)}`
      : null;

    return (
      <Layout>
        <main class="min-h-screen pt-20 flex items-center">
          <div class="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
            <div class="grid lg:grid-cols-2 gap-10 items-stretch">
              {/* Terminal panel */}
              <div class="hidden lg:flex flex-col relative">
                <div class="absolute -inset-1 bg-gradient-to-br from-brand-600/20 to-term-600/10 rounded-3xl blur-xl"></div>
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
                    <p className="pl-4">Loaded: <span class="text-term-400">enabled</span></p>
                    <p className="pl-4">Active: <span class="text-term-400">running</span></p>
                    <p className="pl-4">Community: <span class="text-brand-400">online</span></p>
                  </div>
                </div>
              </div>

              {/* Auth form */}
              <div class="flex flex-col justify-center">
                <div class="bg-ink-900 border border-white/10 rounded-3xl p-8 sm:p-10">
                  {s.done ? (
                    <div class="text-center py-8">
                      <div class="w-16 h-16 mx-auto rounded-full bg-term-500/15 text-term-400 flex items-center justify-center mb-5">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <h2 class="text-2xl font-black text-white mb-2">خوش آمدید!</h2>
                      <p class="text-gray-400">ورود شما با موفقیت انجام شد.</p>
                    </div>
                  ) : s.step === "phone" ? (
                    <form onsubmit={sendOtp}>
                      <h2 class="text-2xl font-black text-white mb-2">ورود / ثبت‌نام</h2>
                      <p class="text-gray-400 text-sm mb-8">با شماره موبایل وارد شوید. کد تأیید برایتان ارسال می‌شود.</p>
                      <label class="block text-sm text-gray-400 mb-2">شماره موبایل</label>
                      <input
                        type="tel" required dir="ltr" value={s.phone}
                        oninput={(e: InputEvent) => { s.phone = (e.target as HTMLInputElement).value; }}
                        placeholder="09xxxxxxxxx"
                        class="w-full px-4 py-3.5 rounded-2xl bg-ink-800 border border-white/10 text-white text-center tracking-widest placeholder-gray-600 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition mb-6"
                      />
                      <button type="submit" disabled={s.sending || s.phone.length < 10}
                        class="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-900/30 disabled:opacity-50">
                        {s.sending ? "در حال ارسال..." : "دریافت کد تأیید"}
                      </button>
                    </form>
                  ) : (
                    <form onsubmit={verifyOtp}>
                      <button type="button" onclick={() => { s.step = "phone"; }}
                        class="flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-7 transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
                        ویرایش شماره
                      </button>
                      <h2 class="text-2xl font-black text-white mb-2">کد تأیید</h2>
                      <p class="text-gray-400 text-sm mb-8" dir="ltr">
                        کد ۶ رقمی ارسال‌شده به <span class="text-white">{s.phone}</span> را وارد کنید.
                      </p>

                      <div class="flex gap-2 justify-center mb-8 ltr" dir="ltr">
                        {s.otp.map((v, i) => (
                          <input
                            id={`otp-${i}`}
                            type="text" inputmode="numeric" maxlength={1}
                            value={v}
                            oninput={(e: InputEvent) => handleOtpInput(i, (e.target as HTMLInputElement).value)}
                            onkeydown={(e: KeyboardEvent) => handleOtpKey(i, e)}
                            class="w-11 h-14 rounded-xl bg-ink-800 border border-white/10 text-white text-center text-xl font-black focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition"
                          />
                        ))}
                      </div>

                      <button type="submit" disabled={s.sending || s.otp.join("").length < 6}
                        class="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-l from-brand-600 to-brand-500 hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-900/30 disabled:opacity-50 mb-5">
                        {s.sending ? "در حال تأیید..." : "تأیید و ورود"}
                      </button>

                      <div class="text-center text-sm text-gray-500">
                        {resendTimer ? (
                          <span>ارسال مجدد تا <span class="text-white tabular-nums" dir="ltr">{resendTimer}</span></span>
                        ) : (
                          <button type="button" onclick={() => { startResendTimer(); m.redraw(); }}
                            class="text-brand-400 hover:text-brand-300 font-bold transition-colors">
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
  },
};

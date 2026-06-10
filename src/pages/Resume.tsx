import m from "mithril";
import { Layout }   from "@/components/Layout";
import { setTitle } from "@/lib/utils";

const PROFILE = {
  name:      "علیرضا حسن‌زاده",
  nameEn:    "Alireza Hassanzadeh",
  role:      "Data Scientist & Event Lead",
  bio:       "مدیر اجرایی کاشان‌لاگ و راهبر رویداد «زندگی در سایه». علاقه‌مند به علم داده، یادگیری ماشین و جامعهٔ متن‌باز.",
  avatar:    "/assets/images/alireza.jpg",
  github:    "https://github.com/AlirezaXZC",
  linkedin:  "https://www.linkedin.com/in/alirezahassanzade",
  telegram:  "https://t.me/KashanLUG",
  email:     "kashanlugsupport@gmail.com",
  skills:    ["Python", "Machine Learning", "Data Analysis", "Linux", "Git", "Open Source"],
  interests: ["نرم‌افزار آزاد", "جامعه‌سازی فنی", "یادگیری ماشین", "DevOps"],
};

export class Resume implements Mithril.ClassComponent {
  oninit() { setTitle("پروفایل شبکه‌سازی"); }

  view() {
    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[36rem] h-96 bg-brand-600/10 -top-10 right-0"></div>

          <div class="relative max-w-2xl mx-auto px-4 sm:px-6">
            <div class="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-ink-900 to-ink-850 mb-8 shadow-2xl">
              <div class="h-36 bg-gradient-to-br from-brand-700 via-brand-800 to-ink-900 relative overflow-hidden">
                <div class="absolute inset-0 bg-grid opacity-20"></div>
                <div class="glow w-40 h-40 bg-brand-500/30 -top-10 left-0"></div>
                <div class="absolute top-4 left-4 text-xs font-mono text-white/40" dir="ltr">NFC · KashanLUG</div>
                <div class="absolute top-4 right-4">
                  <svg class="w-8 h-8 text-white/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                </div>
              </div>

              <div class="flex justify-center -mt-12 mb-5 px-8">
                <img src={PROFILE.avatar} alt={PROFILE.name}
                  class="w-24 h-24 rounded-2xl object-cover border-4 border-ink-900 shadow-xl" />
              </div>

              <div class="px-8 pb-8 text-center">
                <h1 class="text-2xl font-black text-white">{PROFILE.name}</h1>
                <p class="text-brand-400 text-sm mt-1 font-medium" dir="ltr">{PROFILE.role}</p>
                <p class="text-gray-400 text-sm mt-3 leading-relaxed">{PROFILE.bio}</p>

                <div class="flex justify-center flex-wrap gap-3 mt-6">
                  {PROFILE.github && (
                    <a href={PROFILE.github} target="_blank" rel="noopener"
                      class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium" dir="ltr">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                      GitHub
                    </a>
                  )}
                  {PROFILE.linkedin && (
                    <a href={PROFILE.linkedin} target="_blank" rel="noopener"
                      class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium" dir="ltr">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn
                    </a>
                  )}
                  <a href={`mailto:${PROFILE.email}`}
                    class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    ایمیل
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-ink-900 border border-white/10 rounded-3xl p-7 mb-6">
              <h2 class="text-lg font-black text-white mb-5">مهارت‌ها</h2>
              <div class="flex flex-wrap gap-2">
                {PROFILE.skills.map((skill) => (
                  <span key={skill} class="px-3 py-1.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium" dir="ltr">{skill}</span>
                ))}
              </div>
            </div>

            <div class="bg-ink-900 border border-white/10 rounded-3xl p-7 mb-8">
              <h2 class="text-lg font-black text-white mb-5">حوزه‌های علاقه</h2>
              <div class="flex flex-wrap gap-2">
                {PROFILE.interests.map((interest) => (
                  <span key={interest} class="px-3 py-1.5 rounded-xl bg-term-500/10 border border-term-500/20 text-term-300 text-sm font-medium">{interest}</span>
                ))}
              </div>
            </div>

            <div class="text-center">
              <button onclick={() => window.print()}
                class="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                ذخیره به عنوان PDF
              </button>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

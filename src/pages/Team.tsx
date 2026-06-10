import m from "mithril";
import { Layout } from "../components/Layout";
import { members, type Member } from "../data/team";
import { setTitle } from "../lib/utils";

interface State {
  active: Member | null;
}

export const Team: m.Component<Record<string, never>, State> = {
  oninit(vnode) {
    setTitle("تیم اجرایی");
    vnode.state.active = null;
  },
  view(vnode) {
    const { active } = vnode.state;

    const openModal = (m: Member) => {
      vnode.state.active = m;
      document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
      vnode.state.active = null;
      document.body.style.overflow = "";
    };

    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[34rem] h-96 bg-brand-600/10 -top-10 right-0"></div>

          <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-14">
              <h1 class="text-4xl sm:text-5xl font-black text-white title-underline pb-2 mb-6 inline-block">تیم اجرایی</h1>
              <p class="text-gray-400 max-w-xl mx-auto">افرادی که پشت صحنهٔ برگزاری رویداد «زندگی در سایه» تلاش می‌کنند.</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {members.map((member) => (
                <button
                  onclick={() => openModal(member)}
                  class="card-glow group bg-ink-900 border border-white/10 rounded-3xl p-6 text-center hover:-translate-y-2 text-right w-full"
                >
                  <div class="relative w-20 h-20 mx-auto mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      class="w-20 h-20 rounded-2xl object-cover"
                      loading="lazy"
                    />
                    {member.lead && (
                      <div class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-500 rounded-full border-2 border-ink-900 flex items-center justify-center">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div class="font-bold text-white text-sm leading-snug">{member.name}</div>
                  <div class="text-gray-500 text-xs mt-1.5">{member.role}</div>
                  {member.badge && (
                    <span class="mt-3 inline-block px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-400 text-[10px] font-bold">
                      {member.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Modal */}
          {active && (
            <div
              class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-sm"
              onclick={(e: MouseEvent) => { if (e.target === e.currentTarget) closeModal(); }}
            >
              <div class="relative w-full max-w-md bg-ink-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                {/* Header gradient */}
                <div class="h-24 bg-gradient-to-br from-brand-700 to-brand-900 relative">
                  <button
                    onclick={closeModal}
                    class="absolute top-4 left-4 w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all"
                    aria-label="بستن"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                {/* Avatar */}
                <div class="flex justify-center -mt-12 mb-4 px-8">
                  <img src={active.avatar} alt={active.name}
                    class="w-24 h-24 rounded-2xl object-cover border-4 border-ink-900 shadow-xl" />
                </div>

                <div class="px-8 pb-8 text-center">
                  <h3 class="text-xl font-black text-white">{active.name}</h3>
                  <div class="text-brand-400 text-sm mt-1 mb-4">{active.role}</div>
                  {active.bio && <p class="text-gray-400 text-sm leading-relaxed mb-6">{active.bio}</p>}
                  <div class="flex justify-center gap-3">
                    {active.github && (
                      <a href={active.github} target="_blank" rel="noopener"
                        class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
                        dir="ltr">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {active.linkedin && (
                      <a href={active.linkedin} target="_blank" rel="noopener"
                        class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
                        dir="ltr">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </Layout>
    );
  },
};

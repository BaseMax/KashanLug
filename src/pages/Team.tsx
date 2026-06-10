import m from "mithril";
import { Layout }      from "@/components/Layout";
import { MemberCard }  from "@/components/MemberCard";
import { MemberModal } from "@/components/MemberModal";
import { members, type Member } from "@/data/team";
import { setTitle }    from "@/lib/utils";

export class Team implements Mithril.ClassComponent {
  active: Member | null = null;

  oninit() { setTitle("تیم اجرایی"); }

  openModal(member: Member) {
    this.active = member;
    document.body.style.overflow = "hidden";
  }

  closeModal() {
    this.active = null;
    document.body.style.overflow = "";
  }

  view() {
    const { active } = this;
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
                <MemberCard key={member.id} member={member} onclick={() => this.openModal(member)} />
              ))}
            </div>
          </div>

          {active && (
            <MemberModal member={active} onclose={() => this.closeModal()} />
          )}
        </main>
      </Layout>
    );
  }
}

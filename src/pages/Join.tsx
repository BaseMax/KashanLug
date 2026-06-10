import m from "mithril";
import { Layout }       from "@/components/Layout";
import { JoinHero }     from "@/sections/join/JoinHero";
import { JoinPrereqs }  from "@/sections/join/JoinPrereqs";
import { JoinRoles }    from "@/sections/join/JoinRoles";
import { JoinForm }     from "@/sections/join/JoinForm";
import { setTitle }     from "@/lib/utils";

export class Join implements Mithril.ClassComponent {
  oninit() { setTitle("همکاری با ما"); }

  view() {
    return (
      <Layout>
        <main class="pt-32 pb-24 relative overflow-hidden">
          <div class="glow w-[36rem] h-96 bg-term-500/6 -top-10 right-0"></div>

          <div class="relative max-w-4xl mx-auto px-4 sm:px-6">
            <JoinHero />
            <JoinPrereqs />
            <JoinRoles />
            <JoinForm />
          </div>
        </main>
      </Layout>
    );
  }
}

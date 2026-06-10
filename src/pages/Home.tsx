import m from "mithril";
import { Layout }       from "@/components/Layout";
import { setTitle }     from "@/lib/utils";
import { HomeHero }     from "@/sections/home/HomeHero";
import { HomeEvent }    from "@/sections/home/HomeEvent";
import { HomeValues }   from "@/sections/home/HomeValues";
import { HomeSpeakers } from "@/sections/home/HomeSpeakers";
import { HomeBlog }     from "@/sections/home/HomeBlog";
import { HomeCta }      from "@/sections/home/HomeCta";

const SPONSORS = ["تسنا", "ساربوک", "گلدینو", "Pixotech", "الوقسطی", "الگوریتم برتر"];

export class Home implements Mithril.ClassComponent {
  oninit() { setTitle(""); }

  view() {
    return (
      <Layout>
        <HomeHero />
        <HomeEvent />
        <HomeValues />
        <HomeSpeakers />
        <HomeBlog />

        <section class="relative py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <p class="text-center text-muted text-sm mb-8">حامیان و برگزارکنندگان</p>
            <div class="flex flex-wrap items-center justify-center gap-3">
              {SPONSORS.map((s) => (
                <span key={s} class="px-4 py-2 rounded-xl bg-card border border-ui text-fore2 text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
        </section>

        <HomeCta />
      </Layout>
    );
  }
}

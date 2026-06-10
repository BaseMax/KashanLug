import { speakers, sponsors, organizers } from "../data/event";
import { posts } from "../data/blog";
import { speakerCard, postCard, sponsorChip } from "../lib/ui";

function fill(id: string, html: string): void {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

fill("home-speakers", speakers.slice(0, 4).map(speakerCard).join(""));
fill("home-posts", posts.slice(0, 3).map(postCard).join(""));
fill(
  "home-sponsors",
  [...organizers.map((o) => o.name), ...sponsors].map(sponsorChip).join(""),
);

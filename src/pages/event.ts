import {
  speakers,
  lead,
  sponsors,
  organizers,
  topics,
  schedule,
} from "../data/event";
import { speakerCard, sponsorChip, avatarBlock } from "../lib/ui";

function fill(id: string, html: string): void {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

fill("event-speakers", [lead, ...speakers].map(speakerCard).join(""));

fill(
  "event-topics",
  topics
    .map(
      (t) => `
    <li class="flex items-start gap-3 p-4 rounded-2xl bg-ink-900 border border-white/10">
      <span class="mt-0.5 w-6 h-6 shrink-0 rounded-lg bg-brand-500/15 text-brand-400 flex items-center justify-center">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
      </span>
      <span class="text-gray-300 text-sm leading-relaxed">${t}</span>
    </li>`,
    )
    .join(""),
);

const kindColor: Record<string, string> = {
  talk: "bg-brand-500",
  break: "bg-gray-500",
  ceremony: "bg-sky-500",
  network: "bg-term-500",
};
fill(
  "event-schedule",
  schedule
    .map(
      (s) => `
    <div class="flex items-center gap-4 p-4 rounded-2xl bg-ink-900 border border-white/10 hover:border-brand-500/40 transition-colors">
      <div class="font-mono text-sm text-gray-400 tabular-nums whitespace-nowrap text-center">
        <div class="text-white">${s.start}</div>
        <div class="text-[11px] text-gray-600">${s.end}</div>
      </div>
      <div class="w-1.5 self-stretch rounded-full ${kindColor[s.kind ?? "talk"]}"></div>
      <div class="flex-1">
        <div class="text-white font-bold text-sm">${s.title}</div>
        ${s.speaker ? `<div class="text-gray-500 text-xs mt-0.5">${s.speaker}</div>` : ""}
      </div>
    </div>`,
    )
    .join(""),
);

fill(
  "event-organizers",
  organizers
    .map(
      (o) => `
    <div class="flex items-center gap-4 p-5 rounded-3xl bg-ink-900 border border-white/10">
      <div class="w-14 h-14 shrink-0">${avatarBlock(o.name)}</div>
      <div>
        <div class="text-white font-bold">${o.name}</div>
        <div class="text-gray-500 text-sm mt-0.5">${o.desc}</div>
      </div>
    </div>`,
    )
    .join(""),
);

fill("event-sponsors", sponsors.map(sponsorChip).join(""));

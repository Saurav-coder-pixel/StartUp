import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Play, Lock, Search, FileText, Download, Youtube } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";
import { YT_CHANNEL, lectures, lectureSubjects, notes } from "@/lib/data";

export const Route = createFileRoute("/study")({
  head: () => ({
    meta: [
      { title: "Study — Lectures & Notes — Skills021" },
      { name: "description", content: "Watch free lectures and download study notes for DSA, Java, Web Dev, Django, DevOps and class 10/12." },
      { property: "og:title", content: "Study — Skills021" },
      { property: "og:description", content: "Free video lectures and downloadable notes in Hindi." },
    ],
    links: [{ rel: "canonical", href: "/study" }],
  }),
  component: Study,
});

function Study() {
  const [tab, setTab] = useState<"lectures" | "notes">("lectures");
  const [subject, setSubject] = useState("All");
  const [q, setQ] = useState("");

  const filteredLectures = lectures.filter(
    (l) => (subject === "All" || l.subject === subject) && l.title.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <Reveal>
        <h1 className="text-4xl sm:text-5xl font-black">Study <span className="text-gradient">Hub</span></h1>
        <p className="mt-3 text-muted-foreground">Lectures and notes organized by subject — free & premium.</p>
      </Reveal>

      <div className="mt-8 inline-flex rounded-full glass p-1">
        {(["lectures", "notes"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-6 py-2 text-sm font-semibold capitalize transition ${
              tab === t ? "btn-glow" : "text-muted-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "lectures" ? (
        <>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px] max-w-sm">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search lectures…"
                className="w-full rounded-full glass pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {lectureSubjects.map((s) => (
              <button
                key={s}
                onClick={() => setSubject(s)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  subject === s ? "btn-glow" : "glass hover:text-primary"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLectures.map((l, i) => (
              <Reveal key={l.id} delay={(i % 3) * 0.05}>
                <div className="rounded-2xl glass overflow-hidden">
                  <div className="relative h-36 bg-gradient-to-br from-blue-600/70 to-indigo-700/70 grid place-items-center">
                    {l.premium ? (
                      <span className="grid place-items-center h-12 w-12 rounded-full bg-black/40 text-white"><Lock size={20} /></span>
                    ) : (
                      <span className="grid place-items-center h-12 w-12 rounded-full bg-white/90 text-blue-600"><Play size={18} className="fill-blue-600 ml-0.5" /></span>
                    )}
                    <span className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-xs font-semibold ${l.premium ? "bg-accent text-accent-foreground" : "bg-success text-white"}`}>
                      {l.premium ? "Premium" : "Free"}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs">{l.subject}</span>
                    <h3 className="mt-2 font-semibold leading-snug">{l.title}</h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{l.duration}</span>
                      {l.premium ? (
                        <Link to="/courses" className="text-sm font-semibold text-accent">Unlock →</Link>
                      ) : (
                        <a href={YT_CHANNEL} target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary">Watch →</a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((n, i) => (
            <Reveal key={n.id} delay={(i % 3) * 0.05}>
              <div className="rounded-2xl glass p-5 flex flex-col">
                <span className="grid place-items-center h-12 w-12 rounded-xl btn-glow"><FileText size={20} /></span>
                <h3 className="mt-4 font-bold">{n.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{n.subject} · {n.pages} pages</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${n.premium ? "bg-accent text-accent-foreground" : "bg-success text-white"}`}>
                    {n.premium ? "Premium" : "Free"}
                  </span>
                  {n.premium ? (
                    <Link to="/courses" className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold glass">
                      <Lock size={14} /> Unlock
                    </Link>
                  ) : (
                    <button onClick={() => toast.success("Notes downloaded!")} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold btn-glow">
                      <Download size={14} /> Download
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      <section className="mt-20">
        <Reveal>
          <div className="rounded-3xl glass p-10 text-center hero-grid-bg">
            <Youtube size={36} className="mx-auto text-red-500" />
            <h2 className="mt-3 text-2xl font-black">Watch full playlists on YouTube</h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">Subscribe to Skills021 for 200+ free lectures.</p>
            <a href={YT_CHANNEL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition">
              <Youtube size={18} /> Open Channel
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

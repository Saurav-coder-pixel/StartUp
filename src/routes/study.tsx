import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Play, Lock, Search, FileText, Download, Youtube } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CourseCard } from "@/components/CourseCard";
import { PaymentModal } from "@/components/PaymentModal";
import { toast } from "sonner";
import { YT_CHANNEL, lectures, lectureSubjects, notes, courses, filterTabs, type Course } from "@/lib/data";

export const Route = createFileRoute("/study")({
  head: () => ({
    meta: [
      { title: "Study — Courses, Lectures & Notes — Skills021" },
      { name: "description", content: "Browse courses, watch free lectures and download study notes for DSA, Java, Web Dev, Django, DevOps and class 10/12." },
      { property: "og:title", content: "Study — Skills021" },
      { property: "og:description", content: "Free video lectures, downloadable notes and paid courses." },
    ],
    links: [{ rel: "canonical", href: "/study" }],
  }),
  component: Study,
});

function Study() {
  const [tab, setTab] = useState<"courses" | "lectures" | "notes">("courses");
  const [subject, setSubject] = useState("All");
  const [courseTab, setCourseTab] = useState("All");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Course | null>(null);

  const filteredLectures = lectures.filter(
    (l) => (subject === "All" || l.subject === subject) && l.title.toLowerCase().includes(q.toLowerCase()),
  );

  const filteredCourses = courses.filter((c) => {
    const matchesQ =
      c.title.toLowerCase().includes(q.toLowerCase()) ||
      c.description.toLowerCase().includes(q.toLowerCase());
    const matchesTab =
      courseTab === "All" ||
      (courseTab === "Free" && c.free) ||
      (courseTab === "Paid" && !c.free) ||
      c.tags.includes(courseTab) ||
      c.category === courseTab;
    return matchesQ && matchesTab;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14" style={{ paddingTop: "70px" }}>
      {/* Compact header — max 180px */}
      <div
        className="relative rounded-2xl overflow-hidden hero-grid-bg mb-8"
        style={{ maxHeight: "180px", padding: "32px 24px" }}
      >
        <nav className="text-xs text-muted-foreground mb-2">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <span className="mx-1.5">›</span>
          <span>Study</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-black">
          Study <span className="text-gradient">Hub</span>
        </h1>
        <p className="mt-1 text-muted-foreground text-sm">Courses, lectures and notes organized by subject — free &amp; premium.</p>
      </div>

      {/* Tab switcher */}
      <div className="inline-flex rounded-full glass p-1 mb-6">
        {(["courses", "lectures", "notes"] as const).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); setQ(""); }}
            className={`rounded-full px-6 py-2 text-sm font-semibold capitalize transition ${
              tab === t ? "btn-glow" : "text-muted-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Courses Tab */}
      {tab === "courses" && (
        <>
          {/* Search + filters — preserved from old Courses page */}
          <div className="mt-2 relative max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search courses…"
              className="w-full rounded-full glass pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {filterTabs.map((t) => (
              <button
                key={t}
                onClick={() => setCourseTab(t)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  courseTab === t ? "btn-glow" : "glass hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {filteredCourses.length === 0 ? (
            <p className="mt-16 text-center text-muted-foreground">No courses match your search.</p>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((c, i) => (
                <Reveal key={c.id} delay={(i % 3) * 0.06}>
                  <CourseCard course={c} onEnroll={setSelected} showInstructor={true} />
                </Reveal>
              ))}
            </div>
          )}
        </>
      )}

      {/* Lectures Tab */}
      {tab === "lectures" && (
        <>
          <div className="mt-2 flex flex-wrap items-center gap-3">
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
                    <span
                      className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        l.premium
                          ? "bg-[rgba(245,166,35,0.2)] text-[#F5A623] border border-[rgba(245,166,35,0.3)]"
                          : "bg-[rgba(16,185,129,0.2)] text-[#10B981] border border-[rgba(16,185,129,0.3)]"
                      }`}
                    >
                      {l.premium ? "Premium" : "Free"}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs">{l.subject}</span>
                    <h3 className="mt-2 font-semibold leading-snug">{l.title}</h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{l.duration}</span>
                      {l.premium ? (
                        <button onClick={() => setTab("courses")} className="text-sm font-semibold text-[#F5A623]">Unlock →</button>
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
      )}

      {/* Notes Tab */}
      {tab === "notes" && (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((n, i) => (
            <Reveal key={n.id} delay={(i % 3) * 0.05}>
              <div className="rounded-2xl glass p-5 flex flex-col">
                <span className="grid place-items-center h-12 w-12 rounded-xl btn-glow"><FileText size={20} /></span>
                <h3 className="mt-4 font-bold">{n.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{n.subject} · {n.pages} pages</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      n.premium
                        ? "bg-[rgba(245,166,35,0.15)] text-[#F5A623] border border-[rgba(245,166,35,0.3)]"
                        : "bg-[rgba(16,185,129,0.15)] text-[#10B981] border border-[rgba(16,185,129,0.3)]"
                    }`}
                  >
                    {n.premium ? "Premium" : "Free"}
                  </span>
                  {n.premium ? (
                    <button onClick={() => setTab("courses")} className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold glass">
                      <Lock size={14} /> Unlock
                    </button>
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

      <PaymentModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
        amount={selected?.price ?? 0}
      />
    </div>
  );
}

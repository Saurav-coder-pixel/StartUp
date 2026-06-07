import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CourseCard } from "@/components/CourseCard";
import { PaymentModal } from "@/components/PaymentModal";
import { courses, filterTabs, type Course } from "@/lib/data";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Skills021" },
      { name: "description", content: "Browse DSA, Java, Web Dev, DevOps, Django and class 10/12 courses on Skills021." },
      { property: "og:title", content: "Courses — Skills021" },
      { property: "og:description", content: "Free and paid programming & exam-prep courses in Hindi." },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: Courses,
});

function Courses() {
  const [tab, setTab] = useState("All");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Course | null>(null);

  const filtered = courses.filter((c) => {
    const matchesQ =
      c.title.toLowerCase().includes(q.toLowerCase()) ||
      c.description.toLowerCase().includes(q.toLowerCase());
    const matchesTab =
      tab === "All" ||
      (tab === "Free" && c.free) ||
      (tab === "Paid" && !c.free) ||
      c.tags.includes(tab) ||
      c.category === tab;
    return matchesQ && matchesTab;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <Reveal>
        <h1 className="text-4xl sm:text-5xl font-black">Explore <span className="text-gradient">Courses</span></h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Project-based courses in Hindi & English. Filter by topic, level or price.
        </p>
      </Reveal>

      <div className="mt-8 relative max-w-md">
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
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              tab === t ? "btn-glow" : "glass hover:text-primary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">No courses match your search.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 0.06}>
              <CourseCard course={c} onEnroll={setSelected} />
            </Reveal>
          ))}
        </div>
      )}

      <PaymentModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
        amount={selected?.price ?? 0}
      />
    </div>
  );
}

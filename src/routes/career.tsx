import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Monitor, Server, Layers, Binary, Cog, ChevronDown, MapPin, Wallet,
  FileDown, Network, Users, Coffee, Building2, type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";
import { roadmaps, jobs, interviews, placements } from "@/lib/data";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — Skills021" },
      { name: "description", content: "Tech career roadmaps, internships, interview prep and placement stories on Skills021." },
      { property: "og:title", content: "Career — Skills021" },
      { property: "og:description", content: "Launch your tech career with roadmaps, jobs & interview prep." },
    ],
    links: [{ rel: "canonical", href: "/career" }],
  }),
  component: Career,
});

const roadmapIcons: Record<string, LucideIcon> = { Monitor, Server, Layers, Binary, Cog };
const interviewIcons: Record<string, LucideIcon> = { Binary, Network, Users, Coffee };

function Career() {
  const [openId, setOpenId] = useState<string | null>("frontend");

  return (
    <div>
      <section className="relative overflow-hidden hero-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-6xl font-black">
            Launch Your <span className="text-gradient">Tech Career</span>
          </motion.h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Roadmaps, internships, interview prep and real placement stories — all in one place.
          </p>
        </div>
      </section>

      {/* Roadmaps */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-10">
        <Reveal><h2 className="text-3xl font-black">Career Roadmaps</h2></Reveal>
        <div className="mt-8 grid gap-4">
          {roadmaps.map((r, i) => {
            const Icon = roadmapIcons[r.icon];
            const open = openId === r.id;
            return (
              <Reveal key={r.id} delay={i * 0.04}>
                <div className="rounded-2xl glass overflow-hidden">
                  <button
                    onClick={() => setOpenId(open ? null : r.id)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <span className="grid place-items-center h-11 w-11 rounded-xl btn-glow"><Icon size={20} /></span>
                    <span className="font-bold text-lg flex-1">{r.title}</span>
                    <ChevronDown size={20} className={`transition ${open ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <ol className="px-5 pb-5 space-y-2">
                          {r.steps.map((s, idx) => (
                            <li key={s} className="flex items-center gap-3 text-sm">
                              <span className="grid place-items-center h-6 w-6 rounded-full bg-primary/15 text-primary text-xs font-bold shrink-0">
                                {idx + 1}
                              </span>
                              {s}
                            </li>
                          ))}
                        </ol>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Jobs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20">
        <Reveal><h2 className="text-3xl font-black">Job & Internship Board</h2></Reveal>
        <div className="mt-8 grid gap-4">
          {jobs.map((j, i) => (
            <Reveal key={j.id} delay={i * 0.04}>
              <div className="rounded-2xl glass p-5 flex flex-wrap items-center gap-4">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-muted/50"><Building2 size={20} /></span>
                <div className="flex-1 min-w-[180px]">
                  <h3 className="font-bold">{j.role}</h3>
                  <p className="text-sm text-muted-foreground">{j.company}</p>
                </div>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin size={14} /> {j.location}</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold"><Wallet size={14} className="text-success" /> {j.stipend}</span>
                <div className="flex gap-1.5">
                  {j.skills.map((s) => (
                    <span key={s} className="rounded-full bg-primary/10 text-primary px-2.5 py-1 text-xs">{s}</span>
                  ))}
                </div>
                <button onClick={() => toast.success("Application submitted!")} className="rounded-full px-4 py-2 text-sm font-semibold btn-glow">
                  Apply Now
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Resume + interview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-1">
          <div className="h-full rounded-2xl glass p-6">
            <h3 className="font-bold text-lg">Resume Tips</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Download our ATS-friendly resume guide built for freshers & interns.
            </p>
            <button
              onClick={() => toast.success("Resume guide downloaded!")}
              className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold btn-glow"
            >
              <FileDown size={16} /> Download PDF
            </button>
          </div>
        </Reveal>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {interviews.map((it, i) => {
            const Icon = interviewIcons[it.icon];
            return (
              <Reveal key={it.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl glass p-5">
                  <span className="grid place-items-center h-10 w-10 rounded-xl btn-glow"><Icon size={18} /></span>
                  <h3 className="mt-3 font-bold">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                  <button onClick={() => toast("Practice mode coming soon!")} className="mt-3 text-sm font-semibold text-primary">
                    Practice Now →
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Placement stories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20">
        <Reveal><h2 className="text-3xl font-black">Placement Stories</h2></Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {placements.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="rounded-2xl glass p-6 text-center">
                <span className="mx-auto grid place-items-center h-14 w-14 rounded-full btn-glow text-lg font-bold">
                  {p.name.charAt(0)}
                </span>
                <h3 className="mt-4 font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">Placed at {p.company}</p>
                <p className="mt-2 text-xl font-extrabold text-gradient">{p.package}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

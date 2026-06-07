import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Youtube, ArrowRight, Star, Play, GraduationCap, Hammer, Languages,
  Binary, Briefcase, Radio, type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { CourseCard } from "@/components/CourseCard";
import { PaymentModal } from "@/components/PaymentModal";
import {
  YT_CHANNEL, courses, stats, features, testimonials, videos, type Course,
} from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skills021 — Learn. Build. Dominate." },
      { name: "description", content: "Programming, DSA, Java, Django, DevOps & exam prep courses in Hindi by Abhay Gupta." },
    ],
  }),
  component: Home,
});

const iconMap: Record<string, LucideIcon> = {
  GraduationCap, Hammer, Languages, Binary, Briefcase, Radio,
};

function Home() {
  const [selected, setSelected] = useState<Course | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden hero-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium"
          >
            🚀 India's fast-growing coding community
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-5xl sm:text-7xl font-black tracking-tight"
          >
            Learn. Build. <span className="text-gradient">Dominate.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Skills021 by Abhay Gupta helps Hindi-speaking learners master programming, DSA,
            web development & exam prep — with project-based courses and live doubt sessions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={YT_CHANNEL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition"
            >
              <Youtube size={18} /> Subscribe on YouTube
            </a>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold btn-glow"
            >
              Browse Courses <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl glass p-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-gradient">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured courses */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black">Featured Courses</h2>
              <p className="mt-2 text-muted-foreground">Hand-picked courses to kickstart your journey.</p>
            </div>
            <Link to="/courses" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary">
              View all <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 flex gap-5 overflow-x-auto pb-4 snap-x [scrollbar-width:none]">
          {courses.slice(0, 5).map((c) => (
            <div key={c.id} className="min-w-[300px] max-w-[320px] snap-start">
              <CourseCard course={c} onEnroll={setSelected} />
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-black text-center">Why Skills021?</h2>
          <p className="mt-2 text-center text-muted-foreground">Everything you need to go from beginner to job-ready.</p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6 hover:-translate-y-1.5 transition">
                  <div className="grid place-items-center h-12 w-12 rounded-xl btn-glow">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-bold text-lg">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-black text-center">Student Love ❤️</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl glass p-6">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className={j < t.rating ? "fill-accent" : "opacity-30"} />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">“{t.text}”</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid place-items-center h-9 w-9 rounded-full btn-glow text-xs font-bold">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.college}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* YouTube videos */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-black">Latest from YouTube</h2>
            <a href={YT_CHANNEL} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Visit channel <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.06}>
              <a href={YT_CHANNEL} target="_blank" rel="noreferrer" className="group block rounded-2xl glass overflow-hidden">
                <div className="relative h-44 bg-gradient-to-br from-red-600/80 to-rose-700/80 grid place-items-center">
                  <span className="grid place-items-center h-14 w-14 rounded-full bg-white/90 text-red-600 group-hover:scale-110 transition">
                    <Play size={22} className="fill-red-600 ml-0.5" />
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold leading-snug">{v.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{v.views}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
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

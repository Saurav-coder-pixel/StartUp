import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Youtube, ArrowRight, Play, Zap, FlaskConical, Users2,
  BadgeCheck, BrainCircuit, Trophy, CheckCircle2, ListVideo, type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { PaymentModal } from "@/components/PaymentModal";
import { YT_CHANNEL, courses, stats, type Course } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skills021 — Learn. Build. Dominate." },
      { name: "description", content: "Programming, DSA, Java, Django, DevOps & exam prep courses on Skills021. Accessible learning for everyone." },
    ],
  }),
  component: Home,
});

/* ─── Static data (no backend changes) ─────────────────────────── */

const playlists = [
  {
    id: "pl1",
    title: "Web Dev 2025",
    desc: "Complete frontend to backend journey using React and Node.js.",
    link: "https://youtube.com/playlist?list=PLcTf1z-M6qX4MOKLlNPwYP4zR5-2Mbl3p",
    gradient: "from-slate-800 via-blue-900 to-slate-900",
    count: "60+ videos",
    emoji: "🌐",
  },
  {
    id: "pl2",
    title: "Mastering DSA",
    desc: "Learn data structures and high-level problem solving in Java.",
    link: "https://youtube.com/playlist?list=PLcTf1z-M6qX4LIJrJxSKpkqpFe_Kj8KcC",
    gradient: "from-slate-900 via-indigo-900 to-slate-800",
    count: "80+ videos",
    emoji: "⚡",
  },
  {
    id: "pl3",
    title: "DevOps Basics",
    desc: "Learn Docker, Kubernetes, and CI/CD from zero to hero.",
    link: "https://youtube.com/playlist?list=PLcTf1z-M6qX5eCwlrLQlplZxzl_3NjpGI",
    gradient: "from-slate-800 via-violet-900 to-slate-900",
    count: "45+ videos",
    emoji: "☁️",
  },
  {
    id: "pl4",
    title: "System Design",
    desc: "Design scalable applications for millions of concurrent users.",
    link: "https://youtube.com/playlist?list=PLcTf1z-M6qX6LP71yhTbNXJXubbkIxQ7J",
    gradient: "from-slate-900 via-teal-900 to-slate-800",
    count: "50+ videos",
    emoji: "🏗️",
  },
];

// Premium featured courses from existing data — pick 3 with features list
const premiumCourses = [
  {
    id: "web-bootcamp",
    badge: "BEST SELLER",
    badgeColor: "#10B981",
    title: "Full Stack Ignite",
    features: ["6 Months Mentorship", "10+ Production Projects", "Placement Support"],
    price: 4999,
    gradient: "from-blue-600/20 to-indigo-600/10",
    borderColor: "rgba(99,102,241,0.3)",
  },
  {
    id: "devops-fundamentals",
    badge: "NEW LAUNCH",
    badgeColor: "#F5A623",
    title: "DevOps Mastery",
    features: ["CI/CD & Cloud Infrastructure", "14/7 Lab Platform", "3 ACE Sponsors"],
    price: 3499,
    gradient: "from-violet-600/20 to-purple-600/10",
    borderColor: "rgba(139,92,246,0.3)",
  },
  {
    id: "dsa-java",
    badge: "MOST POPULAR",
    badgeColor: "#4F8EF7",
    title: "Algorithm Elite",
    features: ["Advanced DSA & Algorithms", "Competitive Programming", "Interview Mock-ups"],
    price: 2999,
    gradient: "from-sky-600/20 to-blue-600/10",
    borderColor: "rgba(79,142,247,0.3)",
  },
];

const whyFeatures: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Zap,
    title: "Accelerated Learning",
    desc: "Get the skills the industry craves with all you need to build real products and pass interviews.",
  },
  {
    icon: FlaskConical,
    title: "Hands-on Labs",
    desc: "Practice code directly in our browser-based lab environment without any setup.",
  },
  {
    icon: Users2,
    title: "Active Community",
    desc: "Join thousands of students in our Discord to collaborate, debug and network.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Certificates",
    desc: "Receive industry-verified certificates that display your latest skill sets worldwide.",
  },
  {
    icon: BrainCircuit,
    title: "Interview Prep",
    desc: "Mock interviews, resume reviews and direct referrals to top tech companies.",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    desc: "Regular coding competitions with cash prizes and direct hiring opportunities.",
  },
];

/* ─── Component ─────────────────────────────────────────────────── */

function Home() {
  const [selected, setSelected] = useState<Course | null>(null);

  const enroll = (courseId: string) => {
    const c = courses.find((x) => x.id === courseId);
    if (c) setSelected(c);
  };

  return (
    <div>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden hero-grid-bg"
        style={{ minHeight: "85vh", display: "flex", alignItems: "center" }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20 text-center w-full">
          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
            style={{
              background: "rgba(79,142,247,0.1)",
              border: "1px solid rgba(79,142,247,0.25)",
              color: "#4F8EF7",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F8EF7] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4F8EF7]" />
            </span>
            LIVE CLASSES ACTIVE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-black tracking-tight leading-tight"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            Learn. Build.{" "}
            <span className="text-gradient">Dominate.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-muted-foreground"
            style={{ fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.7 }}
          >
            Master Data Structures, Web Development, DevOps, and modern
            engineering practices with an immersive, high-performance
            curriculum designed for the ambitious.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            {/* Primary CTA */}
            <Link
              to="/study"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white rounded-full"
              style={{
                background: "linear-gradient(135deg,#4F8EF7,#7C3AED)",
                boxShadow: "0 4px 20px rgba(79,142,247,0.4)",
                borderRadius: "50px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(79,142,247,0.6)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(79,142,247,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Browse Courses
            </Link>

            {/* Secondary CTA */}
            <a
              href={YT_CHANNEL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              <span
                className="grid place-items-center h-6 w-6 rounded-full"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Play size={11} className="fill-current ml-0.5" />
              </span>
              Watch on YouTube
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ STATS ═══════════════════════════════════════════════ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center py-8 px-4"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div className="text-3xl sm:text-4xl font-black text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ PLAYLISTS ═══════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <Reveal>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-black">
              Start Learning —{" "}
              <span className="text-gradient">Our Playlists</span>
            </h2>
            <a
              href={YT_CHANNEL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              View All <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {playlists.map((pl, i) => (
            <Reveal key={pl.id} delay={i * 0.07}>
              <a
                href={pl.link}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.35)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(79,142,247,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Dark thumbnail area */}
                <div
                  className={`relative h-36 bg-gradient-to-br ${pl.gradient} flex flex-col items-start justify-end p-4`}
                >
                  {/* Big emoji / icon */}
                  <span className="text-4xl mb-2 group-hover:scale-110 transition">{pl.emoji}</span>
                  <div className="flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur px-2.5 py-1 text-xs font-medium text-white/80">
                    <ListVideo size={11} />
                    {pl.count}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <h3 className="font-bold text-sm leading-snug">{pl.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">{pl.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ PREMIUM CERTIFICATION COURSES ══════════════════════ */}
      <section
        className="py-20 px-4 sm:px-6"
        style={{ background: "rgba(79,142,247,0.03)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-black">Premium Certification Courses</h2>
              <p className="mt-2 text-muted-foreground text-sm">Intensive syllabi with direct mentorship and industry placement.</p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {premiumCourses.map((pc, i) => (
              <Reveal key={pc.id} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-6 flex flex-col h-full"
                  style={{
                    background: `linear-gradient(135deg, ${pc.gradient.split(" ")[0].replace("from-", "")} , transparent)`,
                    backgroundImage: `linear-gradient(135deg, rgba(79,142,247,0.08) 0%, rgba(124,58,237,0.04) 100%)`,
                    border: `1px solid ${pc.borderColor}`,
                    backdropFilter: "blur(12px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(79,142,247,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Badge */}
                  <span
                    className="self-start text-xs font-bold px-3 py-1 rounded-full mb-4"
                    style={{ background: `${pc.badgeColor}20`, color: pc.badgeColor, border: `1px solid ${pc.badgeColor}40` }}
                  >
                    {pc.badge}
                  </span>

                  <h3 className="text-lg font-black mb-4">{pc.title}</h3>

                  {/* Features */}
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {pc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 size={15} className="text-[#4F8EF7] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <span className="text-xl font-extrabold">₹{pc.price.toLocaleString("en-IN")}</span>
                    </div>
                    <button
                      onClick={() => enroll(pc.id)}
                      className="px-5 py-2.5 text-sm font-semibold text-white rounded-full"
                      style={{
                        background: "linear-gradient(135deg,#4F8EF7,#7C3AED)",
                        borderRadius: "50px",
                        boxShadow: "0 4px 14px rgba(79,142,247,0.35)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 22px rgba(79,142,247,0.5)";
                        (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(79,142,247,0.35)";
                        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                      }}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* View all link */}
          <Reveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/study"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                View all courses <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ WHY SKILLS021 ════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black">Why Skills021?</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Engineering excellence built into every lesson.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.06}>
                <div
                  className="flex gap-4 p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.3)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(79,142,247,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="grid place-items-center h-11 w-11 rounded-xl shrink-0"
                    style={{
                      background: "rgba(79,142,247,0.12)",
                      border: "1px solid rgba(79,142,247,0.2)",
                    }}
                  >
                    <Icon size={20} className="text-[#4F8EF7]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm">{f.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
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

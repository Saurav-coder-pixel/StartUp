import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Award, BookOpen, FileText, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Skills021" },
      { name: "description", content: "Your Skills021 learning dashboard with courses, notes and achievements." },
    ],
  }),
  component: Dashboard,
});

const myCourses = [
  { name: "DSA with Java", progress: 68 },
  { name: "Web Development Bootcamp", progress: 34 },
  { name: "Class 12 CS Board Prep", progress: 90 },
];
const myNotes = ["DSA Cheat Sheet", "HTML/CSS Reference", "Class 12 Important Questions"];
const myEvents = [
  { name: "Skills021 CodeSprint", date: "15 Jul 2025" },
  { name: "DSA Battle Royale", date: "28 Jul 2025" },
];
const badges = ["Python Pro", "DSA Starter", "7-Day Streak", "First Project"];

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-black">Welcome back, <span className="text-gradient">Learner</span> 👋</h1>
        <p className="mt-2 text-muted-foreground">Here's your learning snapshot.</p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl glass p-6">
            <h2 className="flex items-center gap-2 font-bold text-lg"><BookOpen size={18} className="text-primary" /> My Courses</h2>
            <div className="mt-5 space-y-5">
              {myCourses.map((c) => (
                <div key={c.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{c.name}</span>
                    <span className="text-muted-foreground">{c.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full btn-glow"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-2xl glass p-6">
            <h2 className="flex items-center gap-2 font-bold text-lg"><CalendarCheck size={18} className="text-accent" /> Upcoming Events</h2>
            <div className="mt-5 space-y-3">
              {myEvents.map((e) => (
                <div key={e.name} className="flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3 text-sm">
                  <span className="font-medium">{e.name}</span>
                  <span className="text-muted-foreground">{e.date}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl glass p-6">
            <h2 className="flex items-center gap-2 font-bold text-lg"><FileText size={18} className="text-success" /> My Notes</h2>
            <ul className="mt-5 space-y-2 text-sm">
              {myNotes.map((n) => (
                <li key={n} className="flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3">
                  <span>{n}</span>
                  <button className="text-primary font-semibold text-xs">Download</button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl glass p-6">
            <h2 className="flex items-center gap-2 font-bold text-lg"><Award size={18} className="text-accent" /> Achievements</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {badges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-sm font-medium">
                  🏅 {b}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-8 text-center">
        <Link to="/courses" className="inline-flex rounded-full px-6 py-3 text-sm font-semibold btn-glow">Browse more courses</Link>
      </div>
    </div>
  );
}

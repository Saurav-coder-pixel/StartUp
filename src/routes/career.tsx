import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Monitor, Server, Layers, Binary, Cog, ChevronDown,
  BookOpen, FileText, Calendar, Bell, type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";
import { roadmaps } from "@/lib/data";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career & University Counseling — Skills021" },
      { name: "description", content: "Personalized guidance for AKTU, IPU placements. Book a free counseling session for exam pattern, subject selection, internship and career path advice." },
      { property: "og:title", content: "Career & University Counseling — Skills021" },
      { property: "og:description", content: "Personalized guidance for AKTU · IPU · Placements" },
    ],
    links: [{ rel: "canonical", href: "/career" }],
  }),
  component: Career,
});

const roadmapIcons: Record<string, LucideIcon> = { Monitor, Server, Layers, Binary, Cog };

const quickResources = [
  { title: "AKTU Syllabus Guide", icon: BookOpen, link: "#", desc: "Complete AKTU semester-wise syllabus breakdown" },
  { title: "IPU Exam Pattern", icon: FileText, link: "#", desc: "IPU internal & external exam structure" },
  { title: "Previous Year Papers", icon: FileText, link: "#", desc: "PYQs for AKTU & IPU sorted by subject" },
  { title: "Important Dates", icon: Calendar, link: "#", desc: "Exam schedules, admit cards & result dates" },
];

const placementCards = [
  { title: "DSA Interview Prep", desc: "Top patterns, 50 must-solve problems, and mock sessions.", color: "from-blue-600 to-indigo-700" },
  { title: "System Design Basics", desc: "Scalability, databases, caching & trade-offs explained.", color: "from-violet-600 to-purple-700" },
  { title: "HR Round Guide", desc: "Behavioral questions, STAR method & soft skills.", color: "from-emerald-600 to-teal-700" },
  { title: "Resume Tips", desc: "ATS-friendly resume guide built for freshers & interns.", color: "from-amber-500 to-orange-600" },
];

function Career() {
  const [openId, setOpenId] = useState<string | null>("frontend");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", college: "",
    university: "", year: "", branch: "", topic: "", question: "", contactMode: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://forms.gle/BpcgGfoKjG1SVgFPA", "_blank");
    toast.success("We'll get back to you soon! 🎉");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const field = (
    label: string,
    name: keyof typeof formData,
    element: React.ReactNode,
  ) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {element}
    </div>
  );

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#4F8EF7] bg-white/5 border border-white/10 placeholder:text-muted-foreground transition";

  return (
    <div style={{ paddingTop: "56px" }}>
      {/* Compact header — max 180px */}
      <section
        className="relative overflow-hidden hero-grid-bg"
        style={{ maxHeight: "180px", padding: "32px 0" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="text-xs text-muted-foreground mb-2">
            <Link to="/" className="hover:text-foreground transition">Home</Link>
            <span className="mx-1.5">›</span>
            <span>Career</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-black"
          >
            Career &amp; University <span className="text-gradient">Counseling</span>
          </motion.h1>
          <p className="mt-1 text-muted-foreground text-sm">Personalized guidance for AKTU · IPU · Placements</p>
        </div>
      </section>

      {/* Section A — Counseling Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-12">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Book a Free Counseling Session</h2>
          <p className="text-muted-foreground text-sm mb-8">Fill in your details and we'll reach out to guide you personally.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              {field(
                "Full Name *",
                "name",
                <input
                  required
                  type="text"
                  placeholder="Rahul Sharma"
                  className={inputClass}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />,
              )}
              {field(
                "Email Address *",
                "email",
                <input
                  required
                  type="email"
                  placeholder="rahul@example.com"
                  className={inputClass}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />,
              )}
              {field(
                "Phone Number *",
                "phone",
                <input
                  required
                  type="tel"
                  placeholder="+91 9876543210"
                  className={inputClass}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />,
              )}
              {field(
                "College Name *",
                "college",
                <input
                  required
                  type="text"
                  placeholder="ABC Engineering College"
                  className={inputClass}
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                />,
              )}
              {field(
                "University *",
                "university",
                <select
                  required
                  className={inputClass}
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                >
                  <option value="">Select University</option>
                  <option value="AKTU">AKTU</option>
                  <option value="IPU">IPU</option>
                  <option value="Other">Other</option>
                </select>,
              )}
              {field(
                "Current Year *",
                "year",
                <select
                  required
                  className={inputClass}
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>,
              )}
              {field(
                "Branch / Department *",
                "branch",
                <input
                  required
                  type="text"
                  placeholder="Computer Science & Engineering"
                  className={inputClass}
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                />,
              )}
              {field(
                "Topic of Counseling *",
                "topic",
                <select
                  required
                  className={inputClass}
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                >
                  <option value="">Select Topic</option>
                  <option value="AKTU Exam Pattern">AKTU Exam Pattern</option>
                  <option value="IPU Exam Pattern">IPU Exam Pattern</option>
                  <option value="Subject Selection">Subject Selection</option>
                  <option value="Internship Guidance">Internship Guidance</option>
                  <option value="Placement Preparation">Placement Preparation</option>
                  <option value="Career Path Advice">Career Path Advice</option>
                  <option value="Other">Other</option>
                </select>,
              )}
              <div className="sm:col-span-2">
                {field(
                  "Your Question or Concern *",
                  "question",
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe what you need guidance with…"
                    className={inputClass}
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  />,
                )}
              </div>
              {field(
                "Preferred Contact Mode *",
                "contactMode",
                <select
                  required
                  className={inputClass}
                  value={formData.contactMode}
                  onChange={(e) => setFormData({ ...formData, contactMode: e.target.value })}
                >
                  <option value="">Select Mode</option>
                  <option value="Email">Email</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Video Call">Video Call</option>
                </select>,
              )}
              <div className="sm:col-span-2 flex justify-start">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #4F8EF7, #7C3AED)",
                    borderRadius: "50px",
                    fontWeight: 600,
                    boxShadow: submitted ? "0 4px 15px rgba(79,142,247,0.5)" : "0 4px 15px rgba(79,142,247,0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {submitted ? "✓ Submitted!" : "Book a Free Session →"}
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </section>

      {/* Section B — AKTU / IPU Quick Resources */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-black mb-8">AKTU / IPU Quick Resources</h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickResources.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 0.07}>
                <div
                  className="rounded-2xl p-5 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.35)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(79,142,247,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <span className="grid place-items-center h-11 w-11 rounded-xl btn-glow mb-3">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-bold text-sm">{r.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground flex-1">{r.desc}</p>
                  <a
                    href={r.link}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#4F8EF7] hover:underline"
                  >
                    View →
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Section C — Career Roadmaps */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-black mb-8">Career Roadmaps</h2>
        </Reveal>
        <div className="grid gap-4">
          {roadmaps.map((r, i) => {
            const Icon = roadmapIcons[r.icon];
            const open = openId === r.id;
            return (
              <Reveal key={r.id} delay={i * 0.04}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
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

      {/* Section D — Placement Prep */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 mb-20">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-black mb-8">Placement Prep</h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {placementCards.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.35)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(79,142,247,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className={`h-24 bg-gradient-to-br ${p.color} grid place-items-center`}>
                  <span className="text-2xl font-black text-white/90">{p.title.split(" ")[0]}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-sm">{p.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground flex-1">{p.desc}</p>
                  <button
                    onClick={() => toast("Practice mode coming soon!")}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold btn-glow self-start"
                  >
                    Practice Now
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Trophy, Users, Timer, Handshake, MessageCircle, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PaymentModal } from "@/components/PaymentModal";
import { toast } from "sonner";
import { upcomingEvents, pastEvents, type EventItem } from "@/lib/data";

export const Route = createFileRoute("/hackathons")({
  head: () => ({
    meta: [
      { title: "Hackathons & Events — Skills021" },
      { name: "description", content: "Compete in Skills021 coding hackathons, win prizes and collaborate with peers." },
      { property: "og:title", content: "Hackathons & Events — Skills021" },
      { property: "og:description", content: "Online & offline coding competitions with cash prizes." },
    ],
    links: [{ rel: "canonical", href: "/hackathons" }],
  }),
  component: Hackathons,
});

function Hackathons() {
  const [selected, setSelected] = useState<EventItem | null>(null);
  const collaborateRef = useRef<HTMLDivElement>(null);

  const register = (e: EventItem) => {
    if (e.fee === 0) {
      toast.success(`Registered for ${e.name}! See you there. 🎉`);
    } else {
      setSelected(e);
    }
  };

  const scrollToCollaborate = () => {
    collaborateRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ paddingTop: "56px" }}>
      {/* Compact header — max 180px, with Collaborate button pinned top-right */}
      <section
        className="relative overflow-hidden hero-grid-bg"
        style={{ maxHeight: "180px", padding: "32px 0" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
          {/* Breadcrumb */}
          <nav className="text-xs text-muted-foreground mb-2">
            <Link to="/" className="hover:text-foreground transition">Home</Link>
            <span className="mx-1.5">›</span>
            <span>Hackathons</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-black"
          >
            Compete. Collaborate. <span className="text-gradient">Win.</span>
          </motion.h1>
          <p className="mt-1 text-muted-foreground text-sm">Join Skills021 hackathons to build, network and win exciting prizes.</p>

          {/* "Collaborate With Us" button — pinned top-right of header */}
          <button
            onClick={scrollToCollaborate}
            style={{
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "1px solid #4F8EF7",
              color: "#4F8EF7",
              borderRadius: "50px",
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(79,142,247,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            🤝 Collaborate With Us
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-10">
        <Reveal><h2 className="text-3xl font-black">Upcoming Events</h2></Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.06}>
              <div className="h-full rounded-2xl glass overflow-hidden flex flex-col">
                <div className={`relative h-32 bg-gradient-to-br ${e.gradient} grid place-items-center`}>
                  <span className="text-2xl font-black text-white/90">{e.name}</span>
                  <span className="absolute top-3 right-3 rounded-full bg-black/30 backdrop-blur px-2.5 py-1 text-xs font-medium text-white flex items-center gap-1">
                    <Timer size={12} /> by {e.deadline}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1 gap-2 text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground"><Calendar size={14} /> {e.date}</span>
                  <span className="flex items-center gap-2 text-muted-foreground"><MapPin size={14} /> {e.mode}</span>
                  <span className="flex items-center gap-2 text-muted-foreground"><Trophy size={14} className="text-accent" /> {e.prizes}</span>
                  <span className="flex items-center gap-2 text-muted-foreground"><Users size={14} /> Team: {e.team}</span>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-extrabold">{e.fee === 0 ? <span className="text-success">Free</span> : `₹${e.fee}`}</span>
                    <button onClick={() => register(e)} className="rounded-full px-4 py-2 text-sm font-semibold btn-glow">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20">
        <Reveal><h2 className="text-3xl font-black">Past Events</h2></Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pastEvents.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.06}>
              <div className="rounded-2xl glass p-6">
                <div className="h-24 rounded-xl bg-muted/40 grid place-items-center text-xs text-muted-foreground">
                  📸 Photo Gallery
                </div>
                <h3 className="mt-4 font-bold text-lg">{e.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.participants} participants</p>
                <p className="mt-2 text-sm flex items-center gap-1.5">
                  <Trophy size={14} className="text-accent" /> Winner: <span className="font-semibold">{e.winner}</span>
                </p>
                <p className="text-sm text-muted-foreground">Prize: {e.prize}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Collaborate Section — scroll target */}
      <section
        ref={collaborateRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 mb-20"
        id="collaborate"
      >
        <Reveal>
          <div
            className="rounded-3xl p-10 text-center hero-grid-bg"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(79,142,247,0.2)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="inline-flex items-center justify-center h-16 w-16 rounded-2xl btn-glow mx-auto mb-4">
              <Handshake size={28} />
            </span>
            <h2 className="text-3xl font-black">Host a Hackathon with Skills021</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Partner with Skills021 to run a world-class coding event at your college or organization.
              We handle the platform, marketing, judging and prizes — you bring the participants.
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Whether it's a 24-hour hackathon, a DSA contest or a full-stack build challenge — we've got the experience to make it legendary.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20collaborate%20with%20Skills021%20for%20a%20hackathon"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  borderRadius: "50px",
                  fontWeight: 600,
                }}
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a
                href="mailto:collaborate@skills021.com"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                style={{
                  border: "1px solid rgba(79,142,247,0.5)",
                  color: "#4F8EF7",
                  borderRadius: "50px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(79,142,247,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <Mail size={16} /> Email Us
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <PaymentModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.name ?? ""}
        amount={selected?.fee ?? 0}
      />
    </div>
  );
}

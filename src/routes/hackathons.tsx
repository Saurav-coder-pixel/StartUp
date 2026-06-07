import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Trophy, Users, Timer, ArrowRight } from "lucide-react";
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

  const register = (e: EventItem) => {
    if (e.fee === 0) {
      toast.success(`Registered for ${e.name}! See you there. 🎉`);
    } else {
      setSelected(e);
    }
  };

  return (
    <div>
      <section className="relative overflow-hidden hero-grid-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-6xl font-black">
            Compete. Collaborate. <span className="text-gradient">Win.</span>
          </motion.h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Join Skills021 hackathons to build, network and win exciting prizes.
          </p>
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-20">
        <Reveal>
          <div className="rounded-3xl glass p-10 text-center hero-grid-bg">
            <h2 className="text-3xl font-black">Host a Hackathon with Us</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Partner with Skills021 to run a coding event at your college. We handle the platform, judging and prizes.
            </p>
            <a href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold btn-glow">
              Collaborate with us <ArrowRight size={16} />
            </a>
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

import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Youtube, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";
import { YT_CHANNEL } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Skills021" },
      { name: "description", content: "Get in touch with Skills021 for courses, collaborations and college events." },
      { property: "og:title", content: "Contact — Skills021" },
      { property: "og:description", content: "Reach out to the Skills021 team." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
      <Reveal>
        <h1 className="text-4xl sm:text-5xl font-black">Get in <span className="text-gradient">Touch</span></h1>
        <p className="mt-3 text-muted-foreground">Questions, collaborations or college events — we'd love to hear from you.</p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "hello@skills021.com" },
            { icon: MapPin, label: "Location", value: "India · Online first" },
            { icon: Youtube, label: "YouTube", value: "@skills021", href: YT_CHANNEL },
          ].map((c) => (
            <Reveal key={c.label}>
              <a href={c.href ?? "#"} className="flex items-center gap-4 rounded-2xl glass p-5">
                <span className="grid place-items-center h-11 w-11 rounded-xl btn-glow"><c.icon size={18} /></span>
                <div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="font-semibold">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message sent! We'll reply soon.");
              (e.target as HTMLFormElement).reset();
            }}
            className="rounded-2xl glass p-6 space-y-3"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input required placeholder="Name" className="rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
              <input required type="email" placeholder="Email" className="rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <input placeholder="Subject" className="w-full rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            <textarea required rows={5} placeholder="Your message…" className="w-full rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary resize-none" />
            <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold btn-glow">
              <Send size={15} /> Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

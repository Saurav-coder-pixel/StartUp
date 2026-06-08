import { Link } from "@tanstack/react-router";
import { Youtube, Github, Linkedin, Instagram, Twitter, Send } from "lucide-react";
import { toast } from "sonner";
import { YT_CHANNEL } from "@/lib/data";

const socials = [
  { icon: Youtube, href: YT_CHANNEL, label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-extrabold text-xl">
            <span className="grid place-items-center h-9 w-9 rounded-xl btn-glow text-sm">S</span>
            <span className="text-gradient">Skills021</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Learn programming, DSA & exam prep. Build real projects and dominate your tech career.
          </p>
          <div className="flex gap-2 mt-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid place-items-center h-9 w-9 rounded-full glass hover:scale-110 hover:text-primary transition"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/study" className="hover:text-foreground">Courses</Link></li>
            <li><Link to="/hackathons" className="hover:text-foreground">Hackathons</Link></li>
            <li><Link to="/career" className="hover:text-foreground">Career</Link></li>
            <li><Link to="/study" className="hover:text-foreground">Study</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Account</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/login" className="hover:text-foreground">Login</Link></li>
            <li><Link to="/signup" className="hover:text-foreground">Sign Up</Link></li>
            <li><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Get new course drops & free notes.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Subscribed! Check your inbox.");
              (e.target as HTMLFormElement).reset();
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 rounded-full glass px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="grid place-items-center h-9 w-9 rounded-full btn-glow shrink-0" aria-label="Subscribe">
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © 2025 Skills021. All rights reserved.
      </div>
    </footer>
  );
}

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, Lock, User } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up — Skills021" },
      { name: "description", content: "Create a free Skills021 account to start learning programming and DSA." },
    ],
  }),
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl glass p-8">
        <h1 className="text-2xl font-black text-center">Create your account 🚀</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">Join 10,000+ learners on Skills021.</p>

        <button
          onClick={() => toast("Google OAuth placeholder")}
          className="mt-6 w-full rounded-full glass py-2.5 text-sm font-semibold hover:text-primary transition"
        >
          Continue with Google
        </button>

        <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Account created!");
            navigate({ to: "/dashboard" });
          }}
          className="space-y-3"
        >
          <div className="relative">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input required placeholder="Full name" className="w-full rounded-xl glass pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input required type="email" placeholder="Email" className="w-full rounded-xl glass pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="relative">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input required type="password" placeholder="Password" className="w-full rounded-xl glass pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <button className="w-full rounded-full py-3 text-sm font-semibold btn-glow">Create Account</button>
        </form>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Already have an account? <Link to="/login" className="text-primary font-semibold">Log in</Link>
        </p>
      </motion.div>
    </div>
  );
}

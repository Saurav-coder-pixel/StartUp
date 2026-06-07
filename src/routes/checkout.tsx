import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Smartphone, CreditCard, Building2, Loader2, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Skills021" },
      { name: "description", content: "Secure checkout for Skills021 courses with UPI, card and net banking." },
    ],
  }),
  component: Checkout,
});

const methods = [
  { id: "upi", label: "UPI", icon: Smartphone },
  { id: "card", label: "Credit / Debit Card", icon: CreditCard },
  { id: "netbanking", label: "Net Banking", icon: Building2 },
];

function Checkout() {
  const [method, setMethod] = useState("upi");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const COURSE = "DSA with Java";
  const PRICE = 1499;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1800);
  };

  if (done) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
          <CheckCircle2 size={72} className="mx-auto text-success" />
        </motion.div>
        <h1 className="mt-6 text-3xl font-black">You're enrolled! 🎉</h1>
        <p className="mt-3 text-muted-foreground">
          Your payment for <span className="font-semibold text-foreground">{COURSE}</span> was successful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/dashboard" className="rounded-full px-6 py-3 text-sm font-semibold btn-glow">Go to Dashboard</Link>
          <Link to="/study" className="rounded-full px-6 py-3 text-sm font-semibold glass">Access Course</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
      <Reveal><h1 className="text-4xl font-black">Checkout</h1></Reveal>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={submit} className="rounded-2xl glass p-6 space-y-5">
          <h2 className="font-bold text-lg">Student Details</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Full name" className="rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary sm:col-span-2" />
            <input required type="email" placeholder="Email" className="rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            <input required type="tel" placeholder="Phone" className="rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <h2 className="font-bold text-lg pt-2">Payment Method</h2>
          <div className="space-y-2">
            {methods.map((m) => (
              <button
                type="button"
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium border transition ${
                  method === m.id ? "border-primary bg-primary/10" : "border-border hover:bg-muted/40"
                }`}
              >
                <m.icon size={18} className={method === m.id ? "text-primary" : "text-muted-foreground"} /> {m.label}
              </button>
            ))}
          </div>

          <button disabled={loading} className="w-full rounded-full py-3 text-sm font-semibold btn-glow flex items-center justify-center gap-2 disabled:opacity-70">
            {loading ? <><Loader2 size={16} className="animate-spin" /> Processing…</> : `Pay ₹${PRICE.toLocaleString("en-IN")} with Razorpay`}
          </button>
          <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck size={13} /> Secured by Razorpay · Test mode
          </p>
        </form>

        <div className="rounded-2xl glass p-6 h-fit">
          <h2 className="font-bold text-lg">Order Summary</h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="grid place-items-center h-12 w-12 rounded-xl btn-glow text-xs font-bold">DSA</span>
            <div>
              <p className="font-semibold">{COURSE}</p>
              <p className="text-xs text-muted-foreground">by Abhay Gupta</p>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-sm border-t border-border pt-4">
            <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>₹{PRICE.toLocaleString("en-IN")}</span></div>
            <div className="flex justify-between text-muted-foreground"><span>GST (incl.)</span><span>₹0</span></div>
            <div className="flex justify-between font-extrabold text-lg pt-2"><span>Total</span><span className="text-gradient">₹{PRICE.toLocaleString("en-IN")}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { X, ShieldCheck, Smartphone, CreditCard, Building2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  amount: number;
  onSuccess?: () => void;
};

const methods = [
  { id: "upi", label: "UPI", icon: Smartphone },
  { id: "card", label: "Credit / Debit Card", icon: CreditCard },
  { id: "netbanking", label: "Net Banking", icon: Building2 },
];

export function PaymentModal({ open, onClose, title, amount, onSuccess }: Props) {
  const [method, setMethod] = useState("upi");
  const [loading, setLoading] = useState(false);

  const pay = () => {
    setLoading(true);
    // Razorpay test-mode placeholder — integrate live keys server-side later.
    setTimeout(() => {
      setLoading(false);
      toast.success("Payment successful! You're enrolled. 🎉");
      onSuccess?.();
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-md rounded-2xl glass p-6 shadow-2xl"
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Checkout</p>
                <h3 className="text-lg font-bold">{title}</h3>
              </div>
              <button onClick={onClose} aria-label="Close" className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3">
              <span className="text-sm text-muted-foreground">Amount payable</span>
              <span className="text-2xl font-extrabold text-gradient">₹{amount.toLocaleString("en-IN")}</span>
            </div>

            <div className="mt-5 space-y-2">
              {methods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium border transition ${
                    method === m.id ? "border-primary bg-primary/10" : "border-border hover:bg-muted/40"
                  }`}
                >
                  <m.icon size={18} className={method === m.id ? "text-primary" : "text-muted-foreground"} />
                  {m.label}
                </button>
              ))}
            </div>

            <button
              onClick={pay}
              disabled={loading}
              className="mt-6 w-full rounded-full py-3 text-sm font-semibold btn-glow flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? <><Loader2 size={16} className="animate-spin" /> Processing…</> : `Proceed to Pay ₹${amount.toLocaleString("en-IN")}`}
            </button>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <ShieldCheck size={13} /> Secured by Razorpay · Test mode
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

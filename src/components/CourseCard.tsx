import { Link } from "@tanstack/react-router";
import { Star, Clock, Users } from "lucide-react";
import { motion } from "motion/react";
import type { Course } from "@/lib/data";

export function CourseCard({ course, onEnroll }: { course: Course; onEnroll: (c: Course) => void }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group rounded-2xl glass overflow-hidden flex flex-col"
    >
      <div className={`relative h-40 bg-gradient-to-br ${course.gradient} grid place-items-center`}>
        <span className="text-4xl font-black text-white/90">{course.title.split(" ")[0]}</span>
        <span
          className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-xs font-semibold ${
            course.free ? "bg-success text-white" : "bg-accent text-accent-foreground"
          }`}
        >
          {course.free ? "Free" : "Paid"}
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-black/30 backdrop-blur px-2.5 py-1 text-xs font-medium text-white">
          {course.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg leading-snug">{course.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{course.description}</p>

        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="grid place-items-center h-7 w-7 rounded-full btn-glow text-xs font-bold">AG</span>
          <span className="text-muted-foreground">Abhay Gupta</span>
        </div>

        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star size={13} className="fill-accent text-accent" /> {course.rating}
          </span>
          <span className="flex items-center gap-1"><Clock size={13} /> {course.duration}</span>
          <span className="flex items-center gap-1"><Users size={13} /> {course.students.toLocaleString("en-IN")}</span>
        </div>

        <div className="mt-4 flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xl font-extrabold">
            {course.free ? <span className="text-success">Free</span> : `₹${course.price.toLocaleString("en-IN")}`}
          </span>
          {course.free ? (
            <Link
              to="/study"
              className="rounded-full px-4 py-2 text-sm font-semibold glass hover:text-primary transition"
            >
              Start Free
            </Link>
          ) : (
            <button
              onClick={() => onEnroll(course)}
              className="rounded-full px-4 py-2 text-sm font-semibold btn-glow"
            >
              Enroll Now
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

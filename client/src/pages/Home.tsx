/*
 * DESIGN PHILOSOPHY: Bauhaus Functional Minimalism
 * Single centered column (max 680px), Cormorant Garamond name + Outfit body,
 * slate-blue (#3D5A80) accent, thin left-border section headings, fade-up animations.
 */

import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const profile = {
  name: "Alex Morgan",
  title: "Product Designer & UX Strategist",
  summary:
    "I design digital products that balance clarity with depth — translating complex systems into intuitive experiences. With a background spanning startups and enterprise, I bring both strategic thinking and hands-on craft to every project.",
  email: "alex.morgan@email.com",
  phone: "+1 (555) 012-3456",
  location: "San Francisco, CA",
  linkedin: "linkedin.com/in/alexmorgan",
  github: "github.com/alexmorgan",
};

const experience = [
  {
    role: "Senior Product Designer",
    company: "Meridian Labs",
    period: "2022 — Present",
    location: "San Francisco, CA",
    bullets: [
      "Led end-to-end design of a B2B SaaS analytics platform serving 40,000+ users, reducing onboarding time by 38%.",
      "Established and maintained a cross-platform design system adopted by 12 engineering teams.",
      "Facilitated weekly design critiques and mentored 3 junior designers.",
    ],
  },
  {
    role: "Product Designer",
    company: "Volta Digital",
    period: "2019 — 2022",
    location: "Remote",
    bullets: [
      "Redesigned the core checkout flow for an e-commerce client, increasing conversion by 22%.",
      "Conducted 60+ user interviews and synthesized findings into actionable product roadmaps.",
      "Collaborated with engineering to ship 4 major product releases on schedule.",
    ],
  },
  {
    role: "UX Designer",
    company: "Inkwell Agency",
    period: "2017 — 2019",
    location: "New York, NY",
    bullets: [
      "Designed responsive web experiences for clients in finance, healthcare, and retail.",
      "Produced wireframes, prototypes, and high-fidelity mockups using Figma and Sketch.",
    ],
  },
];

const education = [
  {
    degree: "M.F.A. Interaction Design",
    school: "California College of the Arts",
    period: "2015 — 2017",
    note: "Thesis: Designing for Cognitive Load in Data-Dense Interfaces",
  },
  {
    degree: "B.A. Visual Communication",
    school: "University of Michigan",
    period: "2011 — 2015",
    note: "Graduated with Distinction · Dean's List",
  },
];

const skills = {
  Design: ["Figma", "Prototyping", "Design Systems", "Interaction Design", "Visual Design", "Accessibility"],
  Research: ["User Interviews", "Usability Testing", "Journey Mapping", "Competitive Analysis"],
  Technical: ["HTML / CSS", "React (basics)", "Framer", "Zeplin", "Lottie"],
  Soft: ["Cross-functional Collaboration", "Stakeholder Communication", "Mentorship", "Workshop Facilitation"],
};

const projects = [
  {
    title: "Clarity Design System",
    description:
      "An open-source component library and documentation site built to unify product teams across multiple platforms.",
    link: "#",
  },
  {
    title: "Wayfinder — Navigation Redesign",
    description:
      "A complete rethink of in-app navigation for a logistics SaaS, reducing support tickets by 31% post-launch.",
    link: "#",
  },
];

// ─── Scroll animation hook ────────────────────────────────────────────────────

function useScrollFade() {
  useEffect(() => {
    const els = document.querySelectorAll(".scroll-fade");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="section-heading">{children}</h2>;
}

function Divider() {
  return <hr className="border-none border-t border-[oklch(0.92_0_0)] my-14" style={{ borderTopWidth: "1px", borderColor: "oklch(0.92 0 0)" }} />;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  useScrollFade();

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero / Header ── */}
      <header
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663404452702/e7XfKGLn4gdTAXvvmttbkR/hero-bg-Andupxb4uzkicnzugWaf5P.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-24 md:py-32">
          {/* Name */}
          <h1
            className="fade-up fade-up-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 8vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "#111111",
              marginBottom: "0.5rem",
            }}
          >
            {profile.name}
          </h1>

          {/* Title */}
          <p
            className="fade-up fade-up-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "oklch(0.38 0.07 240)",
              marginBottom: "2rem",
            }}
          >
            {profile.title}
          </p>

          {/* Summary */}
          <p
            className="fade-up fade-up-3"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "#444",
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            {profile.summary}
          </p>

          {/* Contact row */}
          <div
            className="fade-up fade-up-4 flex flex-wrap gap-x-6 gap-y-2"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#666" }}
          >
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-[oklch(0.38_0.07_240)] transition-colors">
              <Mail size={12} strokeWidth={1.5} />
              {profile.email}
            </a>
            <span className="flex items-center gap-1.5">
              <Phone size={12} strokeWidth={1.5} />
              {profile.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} strokeWidth={1.5} />
              {profile.location}
            </span>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[oklch(0.38_0.07_240)] transition-colors">
              <Linkedin size={12} strokeWidth={1.5} />
              {profile.linkedin}
            </a>
            <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[oklch(0.38_0.07_240)] transition-colors">
              <Github size={12} strokeWidth={1.5} />
              {profile.github}
            </a>
          </div>
        </div>

        {/* Thin bottom accent line */}
        <div style={{ height: "2px", background: "oklch(0.38 0.07 240)", opacity: 0.15 }} />
      </header>

      {/* ── Main Content ── */}
      <main className="container py-16 md:py-20">

        {/* ── Experience ── */}
        <section className="scroll-fade mb-14">
          <SectionHeading>Experience</SectionHeading>
          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "1rem", color: "#111" }}>
                      {job.role}
                    </h3>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.9rem", color: "#555" }}>
                      {job.company} · {job.location}
                    </span>
                  </div>
                  <span className="meta-text shrink-0">{job.period}</span>
                </div>
                <ul className="space-y-1.5 pl-0">
                  {job.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3"
                      style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 300, color: "#444", lineHeight: 1.65 }}
                    >
                      <span style={{ color: "oklch(0.38 0.07 240)", marginTop: "0.5em", flexShrink: 0, fontSize: "0.5rem" }}>●</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Education ── */}
        <section className="scroll-fade mb-14">
          <SectionHeading>Education</SectionHeading>
          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "1rem", color: "#111" }}>
                    {edu.degree}
                  </h3>
                  <span className="meta-text shrink-0">{edu.period}</span>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.9rem", color: "#555" }}>
                  {edu.school}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#888", marginTop: "0.25rem" }}>
                  {edu.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Skills ── */}
        <section className="scroll-fade mb-14">
          <SectionHeading>Skills</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p
                  className="mb-3"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999" }}
                >
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                        fontWeight: 300,
                        color: "#333",
                        border: "1px solid oklch(0.88 0 0)",
                        borderRadius: "2px",
                        padding: "0.2rem 0.65rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Projects ── */}
        <section className="scroll-fade mb-14">
          <SectionHeading>Selected Projects</SectionHeading>
          <div className="space-y-8">
            {projects.map((project, i) => (
              <div key={i} className="group">
                <div className="flex items-start justify-between gap-4">
                  <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "1rem", color: "#111" }}>
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="shrink-0 mt-0.5 text-[oklch(0.38_0.07_240)] opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="View project"
                  >
                    <ExternalLink size={14} strokeWidth={1.5} />
                  </a>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 300, color: "#555", lineHeight: 1.65, marginTop: "0.35rem" }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: "1px solid oklch(0.92 0 0)",
          padding: "2rem 0",
        }}
      >
        <div
          className="container flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#aaa" }}
        >
          <span>{profile.name} · {new Date().getFullYear()}</span>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[oklch(0.38_0.07_240)] transition-colors"
          >
            {profile.email}
          </a>
        </div>
      </footer>
    </div>
  );
}

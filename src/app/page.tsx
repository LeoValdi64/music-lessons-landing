"use client";

import { useState } from "react";
import {
  Music,
  Guitar,
  Mic,
  Drum,
  Piano,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Monitor,
  UserCheck,
  Award,
  Calendar,
  ChevronRight,
  Menu,
  X,
  Check,
  Quote,
  Send,
  Heart,
  Sparkles,
  GraduationCap,
  Trophy,
  Camera,
  Play,
} from "lucide-react";

/* ─── Navbar ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Instruments", href: "#instruments" },
    { label: "Teachers", href: "#teachers" },
    { label: "Formats", href: "#formats" },
    { label: "Recitals", href: "#recitals" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Register", href: "#register" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-950/95 backdrop-blur-md border-b border-purple-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <Music className="w-8 h-8 text-gold-400" />
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Harmony<span className="text-gold-400"> Music</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-purple-200 hover:text-gold-400 transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              className="ml-2 bg-gold-500 hover:bg-gold-400 text-purple-950 px-5 py-2 rounded-full text-sm font-bold transition-colors"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-purple-950/98 border-t border-purple-800/50">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-purple-200 hover:text-gold-400 transition-colors text-base font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="block bg-gold-500 hover:bg-gold-400 text-purple-950 px-5 py-2.5 rounded-full text-sm font-bold text-center transition-colors mt-3"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-gold-400" />
            <span className="text-gold-400 text-sm font-semibold tracking-wider uppercase">
              Nashville&apos;s Premier Music Academy
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Discover the
            <span className="text-gold-400 block">Music Within You</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-200 leading-relaxed max-w-2xl mb-10">
            Expert private lessons in Piano, Guitar, Violin, Drums, Voice, and
            Saxophone. Whether you are a beginner or advancing your craft, our
            world-class instructors will guide your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-purple-950 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
            >
              Start Your Journey
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#instruments"
              className="inline-flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-200 hover:bg-purple-800/50 px-8 py-4 rounded-full text-lg font-medium transition-all"
            >
              Explore Instruments
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg">
            {[
              { number: "500+", label: "Students" },
              { number: "15+", label: "Years" },
              { number: "98%", label: "Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold-400">
                  {s.number}
                </div>
                <div className="text-sm text-purple-300 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="#fffdf5"
          />
        </svg>
      </div>
    </section>
  );
}

/* ─── Instruments ─── */
function Instruments() {
  const instruments = [
    {
      icon: Piano,
      name: "Piano",
      desc: "From classical technique to contemporary styles, build a strong musical foundation on the world's most versatile instrument.",
    },
    {
      icon: Guitar,
      name: "Guitar",
      desc: "Acoustic, electric, or classical — master chords, fingerpicking, and soloing techniques with personalized guidance.",
    },
    {
      icon: Music,
      name: "Violin",
      desc: "Develop beautiful tone, proper bowing technique, and expressive musicianship from beginner to advanced repertoire.",
    },
    {
      icon: Drum,
      name: "Drums",
      desc: "Learn rhythm, timing, and groove across rock, jazz, Latin, and more. Build confidence behind the kit.",
    },
    {
      icon: Mic,
      name: "Voice",
      desc: "Strengthen your vocal range, breath control, and performance presence across all genres and skill levels.",
    },
    {
      icon: Music,
      name: "Saxophone",
      desc: "Explore jazz, blues, classical, and contemporary styles with expert embouchure and improvisation training.",
    },
  ];

  return (
    <section id="instruments" className="py-20 md:py-28 bg-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold tracking-wider uppercase">
            What We Teach
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-purple-950 mt-3 mb-4">
            Choose Your Instrument
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Six incredible instruments, each with a dedicated curriculum designed
            to bring out your best.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {instruments.map((inst) => (
            <div
              key={inst.name}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-gold-400 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-100 group-hover:bg-gold-100 flex items-center justify-center mb-5 transition-colors">
                <inst.icon className="w-7 h-7 text-purple-700 group-hover:text-gold-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-purple-950 mb-3">
                {inst.name}
              </h3>
              <p className="text-purple-700 leading-relaxed">{inst.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Teachers ─── */
function Teachers() {
  const teachers = [
    {
      name: "Dr. Sarah Mitchell",
      instrument: "Piano & Music Theory",
      bio: "Juilliard-trained pianist with 20 years of teaching experience. Former accompanist for the Nashville Symphony. Specializes in classical and jazz piano.",
      color: "from-purple-600 to-purple-800",
    },
    {
      name: "Marcus Rivera",
      instrument: "Guitar & Songwriting",
      bio: "Nashville session guitarist with credits on 50+ albums. Berklee College of Music graduate. Teaches acoustic, electric, and bass guitar.",
      color: "from-gold-500 to-gold-600",
    },
    {
      name: "Emily Chen",
      instrument: "Violin & Viola",
      bio: "Concertmaster of the Nashville Chamber Orchestra. Master's from Peabody Conservatory. Patient and methodical approach for all ages.",
      color: "from-purple-500 to-purple-700",
    },
    {
      name: "James Okafor",
      instrument: "Drums, Voice & Saxophone",
      bio: "Multi-instrumentalist and Grammy-nominated producer. 15 years of private instruction experience. Expert in jazz, R&B, and contemporary styles.",
      color: "from-gold-600 to-amber-500",
    },
  ];

  return (
    <section id="teachers" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold tracking-wider uppercase">
            Our Instructors
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-purple-950 mt-3 mb-4">
            Learn From the Best
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Our instructors are accomplished performers, recording artists, and
            dedicated educators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teachers.map((t) => (
            <div
              key={t.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
            >
              <div
                className={`h-48 bg-gradient-to-br ${t.color} flex items-center justify-center`}
              >
                <GraduationCap className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-purple-950">{t.name}</h3>
                <p className="text-gold-600 text-sm font-semibold mt-1 mb-3">
                  {t.instrument}
                </p>
                <p className="text-purple-700 text-sm leading-relaxed">
                  {t.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Lesson Formats ─── */
function Formats() {
  const formats = [
    {
      icon: UserCheck,
      title: "In-Person Lessons",
      desc: "One-on-one instruction at our Nashville studio. Fully equipped practice rooms with premium instruments and recording capability.",
      features: [
        "Private practice rooms",
        "Premium instruments provided",
        "Recording available",
        "Comfortable waiting area",
      ],
    },
    {
      icon: Monitor,
      title: "Online Lessons",
      desc: "High-quality virtual lessons from anywhere. Same expert instruction with the convenience of learning from home.",
      features: [
        "HD video platform",
        "Screen sharing for theory",
        "Flexible scheduling",
        "Session recordings",
      ],
    },
    {
      icon: Users,
      title: "Group Classes",
      desc: "Learn alongside peers in small group settings. Build ensemble skills, make friends, and enjoy collaborative music-making.",
      features: [
        "3-6 students per group",
        "Ensemble practice",
        "Lower per-student cost",
        "Social music experience",
      ],
    },
  ];

  return (
    <section
      id="formats"
      className="py-20 md:py-28 bg-gradient-to-b from-purple-50 to-gold-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold tracking-wider uppercase">
            How We Teach
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-purple-950 mt-3 mb-4">
            Flexible Lesson Formats
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Choose the learning style that fits your life. All formats include
            customized curriculum and progress tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {formats.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-gold-400"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-900 flex items-center justify-center mb-6">
                <f.icon className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-purple-950 mb-3">
                {f.title}
              </h3>
              <p className="text-purple-700 leading-relaxed mb-6">{f.desc}</p>
              <ul className="space-y-3">
                {f.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold-500 shrink-0" />
                    <span className="text-purple-800 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Recitals ─── */
function Recitals() {
  const highlights = [
    {
      icon: Calendar,
      title: "Seasonal Recitals",
      desc: "Four major recitals per year — Winter Showcase, Spring Concert, Summer Festival, and Fall Celebration — at Nashville's finest venues.",
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      desc: "Dedicated coaching for regional and national music competitions. Our students consistently earn top honors and scholarships.",
    },
    {
      icon: Camera,
      title: "Professional Recording",
      desc: "Annual recording sessions at our partner studio so every student builds a portfolio of their musical growth.",
    },
    {
      icon: Play,
      title: "Community Performances",
      desc: "Regular opportunities to perform at local festivals, nursing homes, and community events throughout Nashville.",
    },
  ];

  return (
    <section id="recitals" className="py-20 md:py-28 bg-purple-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-wider uppercase">
            Performance Opportunities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Shine on Stage
          </h2>
          <p className="text-lg text-purple-300 max-w-2xl mx-auto">
            Music is meant to be shared. We provide regular performance
            opportunities to build confidence and celebrate progress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="bg-purple-900/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50 hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-5">
                <h.icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{h.title}</h3>
              <p className="text-purple-300 text-sm leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Event banner */}
        <div className="mt-12 bg-gradient-to-r from-gold-500 to-gold-400 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-purple-950">
              Next Recital: Spring Concert 2026
            </h3>
            <p className="text-purple-900 mt-1">
              March 22, 2026 at Schermerhorn Symphony Center, Nashville
            </p>
          </div>
          <a
            href="#register"
            className="shrink-0 bg-purple-950 hover:bg-purple-900 text-gold-400 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Reserve Your Spot
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  const plans = [
    {
      name: "Single Lesson",
      price: "$55",
      period: "per lesson",
      desc: "Perfect for trying us out or occasional supplemental learning.",
      features: [
        "30 or 60-minute sessions",
        "Any instrument",
        "In-person or online",
        "No commitment required",
        "Lesson materials included",
      ],
      featured: false,
    },
    {
      name: "Monthly Package",
      price: "$189",
      period: "per month",
      desc: "Our most popular option for consistent progress and growth.",
      features: [
        "4 lessons per month (60 min)",
        "Priority scheduling",
        "Progress reports",
        "Recital participation",
        "Practice resources & app access",
        "10% sibling discount",
      ],
      featured: true,
    },
    {
      name: "Semester Plan",
      price: "$499",
      period: "per semester",
      desc: "Best value for dedicated students committed to long-term growth.",
      features: [
        "16 lessons per semester (60 min)",
        "2 free bonus lessons",
        "All recital fees included",
        "Recording session included",
        "Competition prep available",
        "20% sibling discount",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold tracking-wider uppercase">
            Investment in Your Future
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-purple-950 mt-3 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Quality music education that fits your budget. All plans include
            access to our practice facilities during open hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                p.featured
                  ? "bg-purple-950 text-white shadow-2xl scale-105 border-2 border-gold-400 relative"
                  : "bg-white shadow-lg border border-purple-100 hover:shadow-xl"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-purple-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3
                className={`text-xl font-bold mb-2 ${
                  p.featured ? "text-white" : "text-purple-950"
                }`}
              >
                {p.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className={`text-4xl font-extrabold ${
                    p.featured ? "text-gold-400" : "text-purple-950"
                  }`}
                >
                  {p.price}
                </span>
                <span
                  className={`text-sm ${
                    p.featured ? "text-purple-300" : "text-purple-600"
                  }`}
                >
                  {p.period}
                </span>
              </div>
              <p
                className={`text-sm mb-6 ${
                  p.featured ? "text-purple-300" : "text-purple-600"
                }`}
              >
                {p.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        p.featured ? "text-gold-400" : "text-gold-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        p.featured ? "text-purple-200" : "text-purple-700"
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#register"
                className={`block text-center py-3 rounded-full font-bold transition-all ${
                  p.featured
                    ? "bg-gold-500 hover:bg-gold-400 text-purple-950"
                    : "bg-purple-950 hover:bg-purple-900 text-white"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-purple-600 text-sm mt-8">
          Group class pricing available upon request. Contact us for family and
          multi-instrument discounts.
        </p>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  const testimonials = [
    {
      text: "My daughter has been taking piano lessons for two years and the transformation is remarkable. Dr. Mitchell is patient, encouraging, and truly brilliant at adapting to each student's learning style.",
      name: "Rebecca Torres",
      role: "Parent of Lily, age 10",
      rating: 5,
    },
    {
      text: "As an adult beginner learning guitar, I was nervous. Marcus made me feel at ease from day one. Six months in and I'm already playing full songs at open mic nights!",
      name: "David Nakamura",
      role: "Adult Guitar Student",
      rating: 5,
    },
    {
      text: "The online violin lessons exceeded all expectations. Emily is incredibly detailed over video, and the session recordings help me practice between lessons. Worth every penny.",
      name: "Sarah Williams",
      role: "Online Violin Student",
      rating: 5,
    },
    {
      text: "Both my kids attend group drum classes and they absolutely love it. The recitals give them something to work toward, and the confidence boost is priceless.",
      name: "Michael Patterson",
      role: "Parent of Ethan, 12 & Ava, 9",
      rating: 5,
    },
    {
      text: "I switched to Harmony from another studio and the difference is night and day. The curriculum is structured but flexible, and James pushed my saxophone playing to a whole new level.",
      name: "Kendra Osei",
      role: "Advanced Saxophone Student",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-sm font-semibold tracking-wider uppercase">
            What Our Community Says
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-purple-950 mt-3 mb-4">
            Stories From Our Students
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Real experiences from students and parents who have found their
            musical home at Harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br from-purple-50 to-gold-50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300 ${
                i >= 3 ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-gold-500 fill-gold-500"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-purple-300 mb-3" />
              <p className="text-purple-800 leading-relaxed mb-6">{t.text}</p>
              <div>
                <p className="font-bold text-purple-950">{t.name}</p>
                <p className="text-sm text-purple-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Registration Form ─── */
function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="register"
      className="py-20 md:py-28 bg-gradient-to-b from-purple-50 to-gold-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info side */}
          <div>
            <span className="text-gold-600 text-sm font-semibold tracking-wider uppercase">
              Start Today
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-purple-950 mt-3 mb-6">
              Register for Lessons
            </h2>
            <p className="text-lg text-purple-700 leading-relaxed mb-8">
              Fill out the form and we will match you with the perfect
              instructor. Your first lesson includes a free assessment and
              personalized learning plan.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Studio Location",
                  value: "1234 Music Row, Nashville, TN 37203",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(615) 555-0147",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@harmonymusicacademy.com",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon-Fri: 9am-8pm | Sat: 9am-5pm | Sun: 12pm-5pm",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-900 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-purple-950">
                      {item.label}
                    </p>
                    <p className="text-purple-700 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-purple-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-950 mb-3">
                  Registration Received
                </h3>
                <p className="text-purple-700 max-w-sm">
                  Thank you for your interest in Harmony Music Academy. We will
                  contact you within 24 hours to schedule your first lesson.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-purple-950 mb-2">
                  Free Trial Lesson
                </h3>
                <p className="text-sm text-purple-600 mb-4">
                  No obligation. See if Harmony is the right fit for you or your
                  child.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-purple-900 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-purple-950"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-purple-900 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-purple-950"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-purple-950"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-purple-950"
                    placeholder="(615) 555-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1.5">
                    Instrument of Interest
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-purple-950 bg-white"
                  >
                    <option value="">Select an instrument</option>
                    <option value="piano">Piano</option>
                    <option value="guitar">Guitar</option>
                    <option value="violin">Violin</option>
                    <option value="drums">Drums</option>
                    <option value="voice">Voice</option>
                    <option value="saxophone">Saxophone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1.5">
                    Experience Level
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-purple-950 bg-white"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Complete Beginner</option>
                    <option value="some">Some Experience</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1.5">
                    Preferred Format
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["In-Person", "Online", "Group Class"].map((f) => (
                      <label
                        key={f}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-purple-300 text-purple-600 focus:ring-gold-400"
                        />
                        <span className="text-sm text-purple-800">{f}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-purple-900 mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-purple-950 resize-none"
                    placeholder="Tell us about your musical goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-purple-950 py-4 rounded-full text-lg font-bold transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Request Free Trial
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-purple-950 text-purple-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-7 h-7 text-gold-400" />
              <span className="text-xl font-bold text-white">
                Harmony<span className="text-gold-400"> Music</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Nashville&apos;s premier private music academy. Nurturing talent
              and inspiring creativity since 2010.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>1234 Music Row, Nashville, TN</span>
            </div>
          </div>

          {/* Instruments */}
          <div>
            <h4 className="text-white font-bold mb-4">Instruments</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Piano Lessons",
                "Guitar Lessons",
                "Violin Lessons",
                "Drum Lessons",
                "Voice Lessons",
                "Saxophone Lessons",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#instruments"
                    className="hover:text-gold-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Our Teachers", href: "#teachers" },
                { label: "Lesson Formats", href: "#formats" },
                { label: "Recitals & Events", href: "#recitals" },
                { label: "Pricing", href: "#pricing" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Register", href: "#register" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400" />
                <span>(615) 555-0147</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400" />
                <span>hello@harmonymusicacademy.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>Mon-Fri: 9am-8pm</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold-400 mt-0.5" />
                <span>Sat: 9am-5pm | Sun: 12-5pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            2026 Harmony Music Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-gold-400 fill-gold-400" />
            <span>in Nashville, TN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Instruments />
        <Teachers />
        <Formats />
        <Recitals />
        <Pricing />
        <Testimonials />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}

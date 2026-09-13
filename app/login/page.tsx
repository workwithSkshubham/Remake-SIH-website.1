"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Building2,
  Landmark,
  Award,
  ArrowLeft,
  Lock,
  Mail,
  KeyRound,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Eye,
  EyeOff,
  Fingerprint,
} from "lucide-react";
import { cn } from "@/lib/utils";

type PersonaKey = "student" | "spoc" | "ministry" | "evaluator";

interface PersonaConfig {
  id: PersonaKey;
  label: string;
  badge: string;
  sublabel: string;
  icon: any;
  color: string;
  borderHover: string;
  defaultEmail: string;
  idPlaceholder: string;
  idLabel: string;
  description: string;
}

const PERSONAS: PersonaConfig[] = [
  {
    id: "student",
    label: "Team Leader / Student",
    badge: "INNOVATOR PORTAL",
    sublabel: "Access Team Dossier & PS Submissions",
    icon: Users,
    color: "#E7962B",
    borderHover: "hover:border-[#E7962B]/80",
    defaultEmail: "teamleader.aerovision@sih2026.in",
    idPlaceholder: "e.g. AICTE-STU-2026-89412",
    idLabel: "STUDENT ID / AICTE REGISTRATION NO.",
    description: "Submit idea presentations, track internal hackathon shortlisting, and connect with assigned nodal centers.",
  },
  {
    id: "spoc",
    label: "College SPOC",
    badge: "INSTITUTION PORTAL",
    sublabel: "Authenticate Teams & Upload Hackathon Results",
    icon: Building2,
    color: "#2FAE82",
    borderHover: "hover:border-[#2FAE82]/80",
    defaultEmail: "spoc.director@iitdelhi.ac.in",
    idPlaceholder: "e.g. AISHE-C-22419",
    idLabel: "INSTITUTION AISHE / AICTE CODE",
    description: "Nominate campus teams, certify 6-member gender criteria, and submit verified internal jury marksheets.",
  },
  {
    id: "ministry",
    label: "Ministry / PSU",
    badge: "ORGANIZATION PORTAL",
    sublabel: "Review Submissions & Mentor Problem Statements",
    icon: Landmark,
    color: "#3E5C76",
    borderHover: "hover:border-[#3E5C76]/80",
    defaultEmail: "nodal.officer@moefcc.gov.in",
    idPlaceholder: "e.g. GOV-MOEFCC-NODAL-09",
    idLabel: "MINISTRY NODAL OFFICER CODE",
    description: "Clarify problem statements, evaluate live stage prototypes, and allocate grant awards.",
  },
  {
    id: "evaluator",
    label: "Jury & Mentor",
    badge: "EVALUATION PORTAL",
    sublabel: "Grand Finale Scorecards & Live Judging",
    icon: Award,
    color: "#E7962B",
    borderHover: "hover:border-[#E7962B]/80",
    defaultEmail: "jury.cybertrack@sih.nic.in",
    idPlaceholder: "e.g. JURY-FINALE-2026-A14",
    idLabel: "CONFIDENTIAL JURY ACCESS PIN",
    description: "Assess code repositories, live hardware demonstrations, and submit real-time rubric scores.",
  },
];

export default function LoginPage() {
  const [activePersona, setActivePersona] = useState<PersonaKey>("student");
  const [authMode, setAuthMode] = useState<"password" | "otp">("password");
  const [email, setEmail] = useState("teamleader.aerovision@sih2026.in");
  const [identifier, setIdentifier] = useState("AICTE-STU-2026-89412");
  const [password, setPassword] = useState("••••••••••••");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const currentPersona = PERSONAS.find((p) => p.id === activePersona)!;

  const handlePersonaChange = (personaId: PersonaKey) => {
    setActivePersona(personaId);
    const p = PERSONAS.find((item) => item.id === personaId)!;
    setEmail(p.defaultEmail);
    setIdentifier(p.idPlaceholder.replace("e.g. ", ""));
    setLoginSuccess(false);
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val[0];
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // Auto-focus next input
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--chalk)] relative overflow-hidden flex flex-col justify-between selection:bg-[#E7962B] selection:text-[#0B1622]">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#E7962B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#2FAE82]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Bar Navigation */}
      <header className="relative z-20 w-full border-b border-[#3E5C76]/30 bg-[var(--ink-2)]/80 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[var(--subtle-text)] hover:text-[#E7962B] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>RETURN TO MAIN PORTAL</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2FAE82]/10 border border-[#2FAE82]/30 text-[10px] font-mono text-[#2FAE82] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            NIC-CERT SECURED
          </span>
          <span className="text-[11px] font-mono text-[#3E5C76]">SIH-2026 // AUTH-V4</span>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 my-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7962B]/10 border border-[#E7962B]/30 text-[11px] font-mono text-[#E7962B] font-semibold uppercase tracking-wider mb-3">
            <Fingerprint className="w-3.5 h-3.5" />
            Unified Authentication Portal
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-['Fraunces'] text-[var(--chalk)] tracking-tight">
            Single Sign-On <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7962B] to-[#2FAE82]">Access Hub</span>
          </h1>
          <p className="text-xs sm:text-sm text-[var(--subtle-text)] mt-2 font-['Instrument_Sans']">
            Select your assigned role to access registration dossiers, evaluation scorecards, and nodal center submissions.
          </p>
        </div>

        {/* Persona Selector Tabs with Framer Motion layoutId pill */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 rounded-2xl bg-[var(--ink-2)] border border-[#3E5C76]/40 mb-8 max-w-4xl mx-auto shadow-xl">
          {PERSONAS.map((persona) => {
            const Icon = persona.icon;
            const isSelected = activePersona === persona.id;
            return (
              <button
                key={persona.id}
                onClick={() => handlePersonaChange(persona.id)}
                className={cn(
                  "relative p-3 sm:p-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-between group",
                  isSelected ? "text-[var(--chalk)]" : "text-[var(--subtle-text)] hover:text-[var(--chalk)]"
                )}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activePersonaPill"
                    className="absolute inset-0 rounded-xl bg-[var(--ink)] border border-[#E7962B]/60 shadow-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: isSelected ? `${persona.color}20` : "transparent",
                        color: isSelected ? persona.color : "#3E5C76",
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono opacity-60 uppercase">{persona.badge.split(" ")[0]}</span>
                  </div>
                  <div className="text-xs font-bold leading-tight font-['Fraunces']">{persona.label}</div>
                  <div className="text-[10px] text-[var(--subtle-text)] mt-1 font-['Instrument_Sans'] line-clamp-1">
                    {persona.sublabel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Authentication Card */}
        <div className="max-w-xl mx-auto rounded-2xl bg-[var(--ink-2)] border border-[#3E5C76]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Active Persona Banner */}
          <div className="flex items-center justify-between border-b border-[#3E5C76]/30 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{
                  backgroundColor: `${currentPersona.color}15`,
                  borderColor: `${currentPersona.color}40`,
                  color: currentPersona.color,
                }}
              >
                <currentPersona.icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#E7962B] font-semibold uppercase tracking-wider block">
                  {currentPersona.badge}
                </span>
                <h2 className="text-base font-bold text-[var(--chalk)] font-['Fraunces']">
                  {currentPersona.label} Login
                </h2>
              </div>
            </div>

            {/* Password vs OTP Toggle */}
            <div className="flex items-center gap-1 bg-[var(--ink)] p-1 rounded-lg border border-[#3E5C76]/40 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setAuthMode("password")}
                className={cn(
                  "px-2.5 py-1 rounded-md transition-colors",
                  authMode === "password" ? "bg-[#E7962B] text-[#0B1622] font-bold" : "text-[var(--subtle-text)] hover:text-[var(--chalk)]"
                )}
              >
                Password
              </button>
              <button
                type="button"
                onClick={() => setAuthMode("otp")}
                className={cn(
                  "px-2.5 py-1 rounded-md transition-colors",
                  authMode === "otp" ? "bg-[#E7962B] text-[#0B1622] font-bold" : "text-[var(--subtle-text)] hover:text-[var(--chalk)]"
                )}
              >
                OTP
              </button>
            </div>
          </div>

          {/* Quick Fill Demo Credentials */}
          <div className="p-3 rounded-xl bg-[var(--ink)]/80 border border-[#3E5C76]/30 mb-6 text-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-[#3E5C76] uppercase font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#E7962B]" />
                QUICK DEMO PRESET
              </span>
              <button
                type="button"
                onClick={() => {
                  setEmail(currentPersona.defaultEmail);
                  setIdentifier(currentPersona.idPlaceholder.replace("e.g. ", ""));
                }}
                className="text-[10px] font-mono text-[#E7962B] hover:underline"
              >
                Auto-Fill Active Persona
              </button>
            </div>
            <p className="text-[11px] text-[var(--subtle-text)] line-clamp-1">{currentPersona.description}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Address */}
            <div>
              <label className="text-[10px] font-mono text-[#3E5C76] uppercase block mb-1 font-semibold">
                OFFICIAL REGISTERED EMAIL
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#3E5C76] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@institution.ac.in"
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[var(--ink)] border border-[#3E5C76]/40 text-xs text-[var(--chalk)] font-mono placeholder-[#3E5C76] focus:outline-none focus:border-[#E7962B] transition-colors"
                />
              </div>
            </div>

            {/* Persona Specific Identifier */}
            <div>
              <label className="text-[10px] font-mono text-[#3E5C76] uppercase block mb-1 font-semibold">
                {currentPersona.idLabel}
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-[#3E5C76] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={currentPersona.idPlaceholder}
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[var(--ink)] border border-[#3E5C76]/40 text-xs text-[var(--chalk)] font-mono placeholder-[#3E5C76] focus:outline-none focus:border-[#E7962B] transition-colors"
                />
              </div>
            </div>

            {/* Auth Mode: Password or OTP */}
            {authMode === "password" ? (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[10px] font-mono text-[#3E5C76] uppercase font-semibold">
                    ACCOUNT PASSWORD
                  </label>
                  <a href="#" className="text-[10px] font-mono text-[#E7962B] hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#3E5C76] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter secure passphrase"
                    className="w-full pl-9 pr-10 py-2.5 rounded-lg bg-[var(--ink)] border border-[#3E5C76]/40 text-xs text-[var(--chalk)] font-mono placeholder-[#3E5C76] focus:outline-none focus:border-[#E7962B] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3E5C76] hover:text-[var(--chalk)]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[10px] font-mono text-[#3E5C76] uppercase font-semibold">
                    6-DIGIT PORTAL OTP
                  </label>
                  <span className="text-[10px] font-mono text-[#2FAE82]">Sent to registered mobile</span>
                </div>
                <div className="flex items-center gap-2">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-input-${i}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      className="w-full h-11 text-center rounded-lg bg-[var(--ink)] border border-[#3E5C76]/40 text-base text-[var(--chalk)] font-mono font-bold focus:outline-none focus:border-[#E7962B] transition-colors"
                    />
                  ))}
                </div>
                <div className="text-right mt-1.5">
                  <button
                    type="button"
                    onClick={() => setOtp(["4", "8", "1", "9", "2", "0"])}
                    className="text-[10px] font-mono text-[#E7962B] hover:underline"
                  >
                    Auto-Fill Demo OTP (481920)
                  </button>
                </div>
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading || loginSuccess}
                className={cn(
                  "w-full py-3 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer",
                  loginSuccess
                    ? "bg-[#2FAE82] text-[#0B1622]"
                    : "bg-[#E7962B] hover:bg-[#E7962B]/90 text-[#0B1622]"
                )}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#0B1622] border-t-transparent rounded-full animate-spin" />
                    <span>AUTHENTICATING WITH NIC GATEWAY...</span>
                  </>
                ) : loginSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>AUTHENTICATED! REDIRECTING TO DASHBOARD...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>AUTHORIZE ACCESS TO {currentPersona.badge}</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Success Notification Alert */}
          <AnimatePresence>
            {loginSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-3 rounded-xl bg-[#2FAE82]/15 border border-[#2FAE82]/40 text-xs font-mono text-[#2FAE82] flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Session verified. Loading {currentPersona.label} console environment.</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Help & Support Footer */}
          <div className="mt-6 pt-4 border-t border-[#3E5C76]/30 flex items-center justify-between text-[11px] font-mono text-[#3E5C76]">
            <span className="flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" />
              Need Help?
            </span>
            <a href="mailto:support@sih.gov.in" className="hover:text-[var(--chalk)] hover:underline">
              support@sih.gov.in
            </a>
          </div>
        </div>
      </div>

      {/* Portal Footer Credentials */}
      <footer className="relative z-20 border-t border-[#3E5C76]/30 bg-[var(--ink-2)]/60 px-4 py-4 text-center text-[10px] font-mono text-[#3E5C76]">
        Smart India Hackathon 2026 // Ministry of Education’s Innovation Cell (MIC) & AICTE // Government of India
      </footer>
    </main>
  );
}

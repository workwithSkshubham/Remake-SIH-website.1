"use client";

import { useState, useEffect, useRef } from "react";
import { X, Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalEasterEgg({ isOpen, onClose }: TerminalProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>([
    "SMART INDIA HACKATHON // DRAFTING RUNTIME v2026.4.1",
    "HOST: gov.mic.aicte.sih // NODE: NDLS-01",
    "STATUS: ALL SYSTEMS NOMINAL // 36-HOUR SPRINT READY",
    "Type 'help' to inspect available diagnostics or 'clear' to reset.",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, `$ ${inputVal}`];

    switch (cmd) {
      case "help":
        newHistory.push(
          "AVAILABLE COMMANDS:",
          "  stats      - Display live verified participation scale",
          "  themes     - List high-priority national problem tracks",
          "  nodal      - Check active nodal center network count",
          "  clear      - Clear console buffer",
          "  exit       - Terminate terminal session"
        );
        break;
      case "stats":
        newHistory.push(
          ">> PARTICIPANTS: 1,50,000+ REGISTERED STUDENTS",
          ">> TEAMS:        20,000+ INTERDISCIPLINARY SQUADS",
          ">> STATEMENTS:   300+ UNION MINISTRY CHALLENGES",
          ">> INSTITUTIONS: 500+ AICTE/UGC ACCREDITED HUBS"
        );
        break;
      case "themes":
        newHistory.push(
          ">> AI & Data Science (48 Challenges)",
          ">> Health & Biotechnology (36 Challenges)",
          ">> Agriculture & Rural Dev (42 Challenges)",
          ">> Clean Energy & Environment (30 Challenges)",
          ">> Cyber Security & Forensics (34 Challenges)"
        );
        break;
      case "nodal":
        newHistory.push(
          ">> ACTIVE HUBS: 40+ DESTINATIONS ACROSS 28 STATES",
          ">> COORDINATES: SYNCHRONIZED VIA NIC FIBER GRID"
        );
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      case "exit":
      case "quit":
        onClose();
        return;
      default:
        newHistory.push(`sih_sh: command not found: ${cmd}. Type 'help' for valid commands.`);
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1622]/85 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl rounded-2xl bg-[#0B1622] border border-[#3E5C76] shadow-2xl overflow-hidden font-mono text-xs text-[#ECEEE7]"
          >
            {/* Window title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#121C2B] border-b border-[#3E5C76]/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#C1442E]" />
                <span className="w-3 h-3 rounded-full bg-[#E7962B]" />
                <span className="w-3 h-3 rounded-full bg-[#2FAE82]" />
                <span className="ml-3 text-[11px] text-[#3E5C76]">sih_diagnostics_terminal // sh</span>
              </div>
              <button
                onClick={onClose}
                className="text-[#3E5C76] hover:text-[#ECEEE7] transition-colors p-1"
                aria-label="Close terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable log output */}
            <div
              ref={scrollRef}
              className="p-6 h-72 overflow-y-auto space-y-1.5 bg-[#0B1622] text-[#2FAE82] leading-relaxed scrollbar-thin"
            >
              {history.map((line, idx) => (
                <div
                  key={idx}
                  className={line.startsWith("$") ? "text-[#ECEEE7] font-semibold" : "text-[#2FAE82]"}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Prompt input bar */}
            <form
              onSubmit={handleCommand}
              className="flex items-center gap-2 px-4 py-3 bg-[#121C2B] border-t border-[#3E5C76]/40"
            >
              <span className="text-[#E7962B] font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command..."
                className="flex-1 bg-transparent text-[#ECEEE7] placeholder-[#3E5C76] focus:outline-none font-mono text-xs"
              />
              <button type="submit" className="text-[#3E5C76] hover:text-[#E7962B]">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

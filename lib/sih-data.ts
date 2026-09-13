export interface SIHStat {
  label: string;
  value: number;
  suffix: string;
  sublabel: string;
  iconName: string;
}

export interface SIHTheme {
  id: string;
  title: string;
  slug: string;
  category: "Software" | "Hardware" | "Both";
  description: string;
  icon: string;
  totalStatements: number;
  featured?: boolean;
}

export interface ProblemStatement {
  id: string;
  code: string;
  title: string;
  category: "Software" | "Hardware" | "Both";
  domain: string;
  organization: string;
  description: string;
  complexity: "Intermediate" | "Advanced";
  submissionDeadline: string;
}

export interface TimelineStage {
  step: string;
  phase: string;
  title: string;
  date: string;
  description: string;
  details: string[];
  status: "Completed" | "Active" | "Upcoming";
}

export interface NodalCenter {
  id: string;
  city: string;
  state: string;
  institution: string;
  x: number; // percentage coordinates on India SVG map
  y: number;
  trackCount: number;
  specialization: string;
}

export interface SponsorPartner {
  name: string;
  category: "Ministry" | "Industry" | "Academia";
  role: string;
  logoText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Eligibility" | "SPOC & Registration" | "Evaluation" | "Grand Finale";
}

// Verified SIH Platform Scale Numbers
export const SIH_STATS: SIHStat[] = [
  {
    label: "Students Participated",
    value: 150000,
    suffix: "+",
    sublabel: "Nationwide innovators registered across all edition cohorts",
    iconName: "Users",
  },
  {
    label: "Teams Formed",
    value: 20000,
    suffix: "+",
    sublabel: "Interdisciplinary 6-member teams competing in internal rounds",
    iconName: "Flame",
  },
  {
    label: "Problem Statements",
    value: 300,
    suffix: "+",
    sublabel: "Real-world challenges submitted by Union Ministries & PSUs",
    iconName: "FileCode",
  },
  {
    label: "Institutions Involved",
    value: 500,
    suffix: "+",
    sublabel: "AICTE & UGC accredited universities and engineering colleges",
    iconName: "Building2",
  },
];

// Official 17 SIH Themes
export const SIH_THEMES: SIHTheme[] = [
  {
    id: "ai-data",
    title: "AI & Data Science",
    slug: "ai-data-science",
    category: "Software",
    description: "Machine learning architectures, computer vision, natural language models, and predictive analytics for public utility.",
    icon: "BrainCircuit",
    totalStatements: 48,
    featured: true,
  },
  {
    id: "health-biotech",
    title: "Health & Biotechnology",
    slug: "health-biotechnology",
    category: "Both",
    description: "Telemedicine diagnostics, affordable point-of-care medtech, hospital resource allocation, and genomics research tools.",
    icon: "HeartPulse",
    totalStatements: 36,
    featured: true,
  },
  {
    id: "agri-rural",
    title: "Agriculture & Rural Development",
    slug: "agriculture-rural",
    category: "Both",
    description: "Precision farming drones, IoT soil nutrient sensors, automated cold-chain logistics, and mandi price forecasting.",
    icon: "Sprout",
    totalStatements: 42,
    featured: true,
  },
  {
    id: "clean-energy",
    title: "Clean Energy & Environment",
    slug: "clean-energy",
    category: "Both",
    description: "Microgrid energy optimization, solar inverter monitoring, battery swapping networks, and carbon capture telemetry.",
    icon: "SunMedium",
    totalStatements: 30,
    featured: true,
  },
  {
    id: "space-astronomy",
    title: "Space & Astronomy",
    slug: "space-astronomy",
    category: "Both",
    description: "Satellite telemetry processing, debris collision prediction, lunar rover navigation, and radio astronomy analysis.",
    icon: "Rocket",
    totalStatements: 18,
    featured: true,
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    slug: "cyber-security",
    category: "Software",
    description: "Critical infrastructure defence, automated anomaly detection, cryptographic key distribution, and digital forensics.",
    icon: "ShieldCheck",
    totalStatements: 34,
    featured: true,
  },
  {
    id: "robotics-auto",
    title: "Robotics & Automation",
    slug: "robotics-automation",
    category: "Hardware",
    description: "Autonomous inspection bots, sewer maintenance robots, manufacturing cobots, and surgical assistive mechatronics.",
    icon: "Cpu",
    totalStatements: 26,
    featured: true,
  },
  {
    id: "smart-vehicles",
    title: "Smart Vehicles & EV Mobility",
    slug: "smart-vehicles",
    category: "Both",
    description: "EV battery health management, vehicle-to-everything (V2X) telemetry, urban fleet routing, and ADAS modules.",
    icon: "CarFront",
    totalStatements: 22,
  },
  {
    id: "disaster-mgmt",
    title: "Disaster Management",
    slug: "disaster-management",
    category: "Both",
    description: "Early flood alert hydrological telemetry, landslide predictive seismic arrays, and disaster mesh communication radios.",
    icon: "AlertTriangle",
    totalStatements: 19,
  },
  {
    id: "heritage-culture",
    title: "Heritage & Culture",
    slug: "heritage-culture",
    category: "Software",
    description: "3D preservation of monuments, indigenous craft authentication, interactive regional folklore repositories, and tourism AR.",
    icon: "Landmark",
    totalStatements: 15,
  },
  {
    id: "smart-education",
    title: "Smart Education & EdTech",
    slug: "smart-education",
    category: "Software",
    description: "Adaptive multimodal vernacular learning, proctored offline skill labs, and real-time student engagement diagnostics.",
    icon: "GraduationCap",
    totalStatements: 25,
  },
  {
    id: "water-sanitation",
    title: "Water Management & Sanitation",
    slug: "water-management",
    category: "Both",
    description: "Automated leak pinpointing in municipal grids, water table replenishment tracking, and microbial contamination testers.",
    icon: "Droplets",
    totalStatements: 21,
  },
  {
    id: "fitness-sports",
    title: "Fitness & Sports Tech",
    slug: "fitness-sports",
    category: "Both",
    description: "Athlete biometric injury prediction, AI computer-vision gait trackers, and grassroots sports talent scouting platforms.",
    icon: "Activity",
    totalStatements: 14,
  },
  {
    id: "travel-tourism",
    title: "Travel & Smart Tourism",
    slug: "travel-tourism",
    category: "Software",
    description: "Multi-modal dynamic ticketing, ecotourism crowd balancing algorithms, and multilingual voice-guided museum curators.",
    icon: "Compass",
    totalStatements: 16,
  },
  {
    id: "smart-cities",
    title: "Smart Cities & Urban Infra",
    slug: "smart-cities",
    category: "Both",
    description: "Adaptive traffic light signal timing, intelligent waste compaction sensors, and municipal grievance geofencing.",
    icon: "Building",
    totalStatements: 28,
  },
  {
    id: "defence-maritime",
    title: "Defence & Maritime Tech",
    slug: "defence-maritime",
    category: "Both",
    description: "Naval coastal drone surveillance, encrypted SDR tactical communication, and underwater hull inspection crawlers.",
    icon: "Radar",
    totalStatements: 17,
  },
  {
    id: "open-innovation",
    title: "Open Innovation",
    slug: "open-innovation",
    category: "Both",
    description: "Cross-domain frontier prototypes addressing emergent national priorities and citizen-centric governance challenges.",
    icon: "Lightbulb",
    totalStatements: 30,
  },
];

// Sample Verified Real-World Problem Statements
export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  {
    id: "ps-01",
    code: "SIH-2026-PS101",
    title: "AI-Powered Early Wildfire & Forest Canopy Encroachment Detection",
    category: "Software",
    domain: "Clean Energy & Environment",
    organization: "Ministry of Environment, Forest and Climate Change",
    description: "Develop a dual-source satellite imagery and ground-sensor edge ML pipeline that flags infrared hotspot anomalies within 90 seconds of flare-up, dispatching GPS-geofenced SMS bursts to local forest beats.",
    complexity: "Advanced",
    submissionDeadline: "2026-10-15",
  },
  {
    id: "ps-02",
    code: "SIH-2026-PS102",
    title: "Automated Non-Invasive Diabetic Retinopathy Triage at PHCs",
    category: "Both",
    domain: "Health & Biotechnology",
    organization: "Ministry of Health and Family Welfare",
    description: "Build an ultra-low-cost fundus camera adapter with on-device computer vision inference to screen grade-3 diabetic retinopathy without cloud latency, generating instant vernacular diagnostic summaries for ASHA workers.",
    complexity: "Advanced",
    submissionDeadline: "2026-10-15",
  },
  {
    id: "ps-03",
    code: "SIH-2026-PS103",
    title: "Sub-Surface Railway Track Ultrasonic Flaw Detection Crawler",
    category: "Hardware",
    domain: "Smart Vehicles & EV Mobility",
    organization: "Ministry of Railways",
    description: "Design an autonomous battery-operated magnetic crawler that mounts railway tracks between scheduled trains, emitting ultrasonic phased arrays to detect micro-fractures and uploading spatial telemetry over 4G/IRNSS.",
    complexity: "Advanced",
    submissionDeadline: "2026-10-15",
  },
  {
    id: "ps-04",
    code: "SIH-2026-PS104",
    title: "Decentralized Blockchain Credential Verification for Higher Education",
    category: "Software",
    domain: "Smart Education & EdTech",
    organization: "All India Council for Technical Education (AICTE)",
    description: "Implement a tamper-proof cryptographic ledger protocol enabling immediate, zero-knowledge verification of academic transcripts and degree certificates, eliminating fraudulent credential submissions across national portals.",
    complexity: "Intermediate",
    submissionDeadline: "2026-10-15",
  },
  {
    id: "ps-05",
    code: "SIH-2026-PS105",
    title: "Autonomous IoT Acoustic Hydrophone for Canal Water Leakage",
    category: "Hardware",
    domain: "Water Management & Sanitation",
    organization: "Ministry of Jal Shakti",
    description: "Develop an acoustic submerged sensor pod powered by thermal gradient or solar harvesting that calculates acoustic cross-correlation to locate pressurized irrigation canal breaches within a 5-meter radius.",
    complexity: "Intermediate",
    submissionDeadline: "2026-10-15",
  },
  {
    id: "ps-06",
    code: "SIH-2026-PS106",
    title: "Cross-Lingual Dialect Voice Assistant for Krishi Mandi Auctions",
    category: "Software",
    domain: "Agriculture & Rural Development",
    organization: "Ministry of Agriculture & Farmers Welfare",
    description: "Engineer an offline-first speech-to-speech AI model capable of parsing 12 distinct regional Indian rural dialects to translate mandi spot prices, MSP updates, and harvest weather advisories in real time.",
    complexity: "Advanced",
    submissionDeadline: "2026-10-15",
  },
];

// SIH 5-Stage Journey
export const SIH_TIMELINE: TimelineStage[] = [
  {
    step: "01",
    phase: "Discover",
    title: "SPOC Nomination & Registration",
    date: "August – September",
    description: "Colleges appoint an official SPOC (Single Point of Contact) and authenticate institution credentials on the SIH portal.",
    details: [
      "Institutional readiness verification",
      "SPOC portal dashboard activation",
      "Student cohort awareness drives",
      "Official rulebook distribution",
    ],
    status: "Completed",
  },
  {
    step: "02",
    phase: "Build",
    title: "Problem Statement Release",
    date: "September",
    description: "Union Ministries, State Governments, and Industry Partners publish real-world challenges across Software and Hardware tracks.",
    details: [
      "300+ vetted problem statements published",
      "Detailed ministry briefing documents",
      "Track classification (Software vs Hardware)",
      "Technical mentorship Q&A webinars",
    ],
    status: "Active",
  },
  {
    step: "03",
    phase: "Compete",
    title: "Campus Internal Hackathons",
    date: "October",
    description: "Institutions organize on-campus hackathons with external jury members to shortlist their top 30 nominated teams.",
    details: [
      "Mandatory 6-member team structure (min 1 female innovator)",
      "Institutional jury evaluation matrix",
      "Top 30 teams (plus 5 waitlisted) selected per college",
      "Idea PPT & architecture upload to national portal",
    ],
    status: "Upcoming",
  },
  {
    step: "04",
    phase: "Screen",
    title: "National Screening & Shortlisting",
    date: "November",
    description: "Central committees of industry architects and ministry experts scrutinize thousands of campus submissions.",
    details: [
      "Double-blind peer technical review",
      "Feasibility, novelty & scalability scoring",
      "Announcement of shortlisted finalist teams",
      "Assignment of premier nodal center destinations",
    ],
    status: "Upcoming",
  },
  {
    step: "05",
    phase: "Impact",
    title: "Grand Finale (36-Hour Non-stop)",
    date: "December",
    description: "The premier 36-hour continuous build marathon across 40+ nodal centers, pitching directly to senior government dignitaries.",
    details: [
      "36 hours of non-stop prototype development",
      "3 rigorous rounds of mentor & jury evaluations",
      "Live power pitch to Union Ministers & Industry CEOs",
      "₹1,00,000 cash award per winning team per statement",
    ],
    status: "Upcoming",
  },
];

// Real SIH Nodal Centers across India
export const NODAL_CENTERS: NodalCenter[] = [
  {
    id: "delhi",
    city: "New Delhi",
    state: "Delhi NCR",
    institution: "IIT Delhi & Jamia Millia Islamia",
    x: 36,
    y: 28,
    trackCount: 32,
    specialization: "AI & Critical Infrastructure Defence",
  },
  {
    id: "pune",
    city: "Pune",
    state: "Maharashtra",
    institution: "COEP Technological University",
    x: 29,
    y: 60,
    trackCount: 28,
    specialization: "Smart Vehicles & EV Powertrains",
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    institution: "BMS College of Engineering",
    x: 36,
    y: 77,
    trackCount: 35,
    specialization: "Space Tech & High Performance Computing",
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    institution: "VNR VJIET & GRIET",
    x: 41,
    y: 62,
    trackCount: 24,
    specialization: "Cyber Security & Telecommunications",
  },
  {
    id: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    institution: "MNIT Jaipur",
    x: 28,
    y: 35,
    trackCount: 20,
    specialization: "Heritage Conservation & Rural Tech",
  },
  {
    id: "bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    institution: "SOA University & KIIT",
    x: 62,
    y: 53,
    trackCount: 22,
    specialization: "Disaster Resilience & Coastal Monitoring",
  },
  {
    id: "bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    institution: "MANIT Bhopal",
    x: 40,
    y: 46,
    trackCount: 19,
    specialization: "Agriculture IoT & Cold Chain Logistics",
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    institution: "Anna University & Sri Sairam College",
    x: 44,
    y: 80,
    trackCount: 27,
    specialization: "Medical Devices & Biomedical Imaging",
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    institution: "Gujarat Technological University",
    x: 22,
    y: 46,
    trackCount: 21,
    specialization: "Clean Renewable Energy & Smart Grid",
  },
  {
    id: "guwahati",
    city: "Guwahati",
    state: "Assam",
    institution: "IIT Guwahati",
    x: 82,
    y: 34,
    trackCount: 16,
    specialization: "Forestry Telemetry & Water Conservation",
  },
];

// Sponsors & Partners Categorized
export const SPONSORS_DATA: SponsorPartner[] = [
  // Ministries
  { name: "Ministry of Education", category: "Ministry", role: "Organizing Ministry", logoText: "Govt. of India" },
  { name: "All India Council for Technical Education", category: "Ministry", role: "Apex Statutory Body", logoText: "AICTE" },
  { name: "MoE's Innovation Cell", category: "Ministry", role: "Initiator & Execution Cell", logoText: "MIC" },
  { name: "Ministry of Electronics & IT", category: "Ministry", role: "Digital Infrastructure Partner", logoText: "MeitY" },
  
  // Industry
  { name: "Tata Consultancy Services", category: "Industry", role: "Platinum Innovation Partner", logoText: "TCS" },
  { name: "Infosys", category: "Industry", role: "Technology Enablement Partner", logoText: "Infosys" },
  { name: "Accenture", category: "Industry", role: "Consulting & Mentorship Partner", logoText: "Accenture" },
  { name: "IBM", category: "Industry", role: "Cloud & AI Infrastructure Partner", logoText: "IBM" },
  { name: "Amazon Web Services", category: "Industry", role: "Cloud Platform Partner", logoText: "AWS" },
  { name: "Cisco", category: "Industry", role: "Networking & Security Partner", logoText: "Cisco" },
  
  // Academia
  { name: "Indian Institutes of Technology", category: "Academia", role: "Premier Mentorship Consortium", logoText: "IIT Council" },
  { name: "National Institutes of Technology", category: "Academia", role: "Host Evaluation Centers", logoText: "NIT System" },
  { name: "IIIT Consortium", category: "Academia", role: "Software Track Evaluation Hubs", logoText: "IIITs" },
];

// Official SIH FAQs
export const SIH_FAQS: FAQItem[] = [
  {
    id: "faq-01",
    category: "Eligibility",
    question: "What is the mandatory team composition rule for SIH?",
    answer: "Each team must consist of exactly 6 members. Having at least ONE female team member is strictly mandatory. All team members must be enrolled in regular undergraduate or postgraduate degree courses in an institution recognized by AICTE, UGC, or State Governments.",
  },
  {
    id: "faq-02",
    category: "SPOC & Registration",
    question: "How do students register for Smart India Hackathon?",
    answer: "Direct student individual registrations are not accepted. The Head of the Institute must nominate an official College SPOC (Single Point of Contact). Teams must qualify through their college's Internal Campus Hackathon and be officially uploaded through the SPOC portal.",
  },
  {
    id: "faq-03",
    category: "Evaluation",
    question: "Who retains the Intellectual Property (IP) rights of the developed solution?",
    answer: "The students and team retain the primary Intellectual Property rights of their innovative solution. However, the ministry/organization that proposed the problem statement is granted a royalty-free right of first refusal to deploy, pilot, or scale the prototype for national public benefit.",
  },
  {
    id: "faq-04",
    category: "Grand Finale",
    question: "What travel and accommodation allowances are provided for finalists?",
    answer: "Shortlisted finalist teams attending physical Grand Finale nodal centers receive reimbursed Sleeper Class rail fares (or equivalent bus fares) and full boarding, lodging, and computational facilities provided free of charge by the host nodal center for the complete duration.",
  },
  {
    id: "faq-05",
    category: "Grand Finale",
    question: "What are the cash rewards and recognition for winning teams?",
    answer: "The winning team for each problem statement receives a cash prize of ₹1,00,000 (One Lakh Rupees), official certificates of excellence signed by Union Ministers, and priority acceleration support through AICTE's Innovation & Incubation schemes.",
  },
];

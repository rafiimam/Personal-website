import { assetUrl } from '../utils/assetUrl';

export interface Publication {
  id: string;
  title: string;
  authors: string;
  role: 'First Author' | 'Co-author' | 'Fourth Author' | 'Lead Author';
  venue: string;
  year: number;
  category: 'PEFT / Robust ML' | 'NLP' | 'Computer Vision' | 'Federated Learning' | 'Medical AI';
  abstract: string;
  contributions: string[];
  pdfUrl: string;
  bibtex: string;
  highlight?: boolean;
}

export interface DocumentAsset {
  id: string;
  title: string;
  category: 'CV' | 'Research' | 'Test Scores' | 'Transcript';
  description: string;
  fileUrl: string;
  fileSize: string;
  date: string;
}

export const PERSONAL_INFO = {
  name: "MD. Rafi Imam",
  title: "Software Development Officer — AI & Automation Division, Jamuna Bank PLC",
  affiliation: "B.Sc. in Electrical & Computer Engineering, RUET (2018–2023)",
  targetRole: "Prospective Ph.D. Candidate — Fall 2027 (AI / Machine Learning)",
  email: "rafiimam96@gmail.com",
  phone: "+880 1727-789497",
  location: "Dhaka, Bangladesh",
  scholarUrl: "https://scholar.google.com/citations?user=dyKjLgcAAAAJ&hl=en",
  researchGateUrl: "https://www.researchgate.net/profile/Rafi-Imam",
  githubUrl: "https://github.com/rafiimam",
  linkedInUrl: "https://linkedin.com/in/rafiimam",
  bio: `I study how machine learning models can be adapted efficiently and reliably when the data they face is degraded, shifted, or adversarial. My independent research examines parameter-efficient fine-tuning (PEFT) under structured input corruption, with an emphasis on controlled evaluation — matched protocols, capacity controls, and honest reporting of negative results. In industry, I build production AI for commercial banking at Jamuna Bank PLC, including a face liveness and presentation-attack-detection system now serving live traffic. I am applying to Ph.D. programs for Fall 2027 to pursue robust, efficient, and trustworthy machine learning.`,
  researchInterests: [
    "Parameter-Efficient Fine-Tuning (PEFT, LoRA)",
    "Robust Learning under Structured Input Corruption",
    "Trustworthy & Responsible AI",
    "Representation Uncertainty Quantification",
    "Efficient Adaptation of Foundation Models",
    "Computer Vision & Document Understanding"
  ]
};

export const METRICS = [
  { label: "IEEE Publications", value: "4", description: "ICCIT 2023 Papers" },
  { label: "Last 60 Credits GPA", value: "3.55", description: "Out of 4.00 (RUET ECE)" },
  { label: "GRE Quantitative", value: "164", description: "GRE Total: 304" },
  { label: "IELTS Academic", value: "7.0", description: "Overall Band (CEFR C1)" },
  { label: "Production PAD System", value: "0.00% FAR", description: "Locked-set evaluation, Jamuna Bank" }
];

// ─── FLAGSHIP RESEARCH: When does PEFT help under synthetic document noise? ──
// A controlled diagnostic study. All numbers below are from the locked,
// matched 5-seed protocol in the gateconcat-peft repository and the paper
// "When Does PEFT Help under Synthetic Document Noise?" (2026).
export const FLAGSHIP_RESEARCH = {
  title: "When Does PEFT Help under Synthetic Document Noise?",
  subtitle: "A Controlled Study of Gating, Capacity, and Robustness — LayoutLMv3 · FUNSD · LoRA",
  status: "Independent Research Manuscript — 2026",
  backbone: "LayoutLMv3-base (microsoft/layoutlmv3-base)",
  benchmark: "FUNSD (Form Understanding in Noisy Scanned Documents)",
  repoUrl: "https://github.com/rafiimam/gateconcat-peft",
  question: "PEFT mechanisms designed to respond to input corruption are usually credited with detecting and suppressing corrupted evidence. This study asks a prior question: when such a method improves performance, is it because it identifies corrupted tokens — or simply because it adds classifier capacity? All methods are compared under one locked protocol: five seeds, identical optimizer settings, and capacity-matched controls.",
  protocol: [
    { label: "Seeds", value: "5 (42, 123, 2024, 456, 789)" },
    { label: "LoRA config", value: "r = 16, α = 32, dropout 0.1" },
    { label: "Optimizer", value: "AdamW, lr 2×10⁻⁴ for every method" },
    { label: "Training", value: "15 epochs, batch 4, linear schedule" },
    { label: "Metric", value: "Entity-level macro-F1 on the noisy test set" },
    { label: "Controls", value: "Constant-gate (g ≡ 0.5), oracle & auxiliary-supervised gates" }
  ],
  // Noisy-test macro-F1 (mean of 5 seeds). frozen = constant-gate capacity control.
  results: [
    {
      id: "sub70",
      label: "Character substitution · 70%",
      lora: 0.731, frozen: 0.734, gateconcat: 0.747,
      delta: "+1.51 pp", pValue: "p = 0.003",
      note: "Statistically significant gain over LoRA."
    },
    {
      id: "ocr70",
      label: "OCR confusion · 70%",
      lora: 0.731, frozen: 0.739, gateconcat: 0.754,
      delta: "+2.30 pp", pValue: "p = 0.002",
      note: "Largest gain. The constant-gate control captures +0.74 pp of it; GateConcat vs. control is not significant (p = 0.21)."
    },
    {
      id: "delete70",
      label: "Character deletion · 70%",
      lora: 0.730, frozen: null, gateconcat: 0.750,
      delta: "+2.0 pp", pValue: "p = 0.07",
      note: "Positive trend; not significant at 5 seeds."
    },
    {
      id: "insert70",
      label: "Character insertion · 70%",
      lora: 0.737, frozen: null, gateconcat: 0.745,
      delta: "+0.7 pp", pValue: "p = 0.13",
      note: "Small, non-significant gain."
    },
    {
      id: "box50",
      label: "Layout box-swap · 50%",
      lora: 0.747, frozen: null, gateconcat: 0.745,
      delta: "−0.2 pp", pValue: "n.s.",
      note: "No transfer to spatial corruption — the gains are text-specific."
    }
  ],
  findings: [
    {
      title: "Hand-crafted robustness failed",
      body: "SALLoRA — token quality weighting, layer-wise scalars, and gradient sensitivity masking — never beat standard LoRA under the matched protocol, degrading macro-F1 by up to −3.09 points under 70% OCR confusion. A documented negative result, reported as such."
    },
    {
      title: "A learned gate helps under severe text noise",
      body: "GateConcat, which concatenates one learned scalar per token with the LoRA representation before classification, improves noisy macro-F1 by +1.51 pp (substitution) and +2.30 pp (OCR confusion) at 70% corruption — both significant across five seeds."
    },
    {
      title: "But capacity explains part of the gain",
      body: "A constant gate (g ≡ 0.5) with identical classifier dimensionality captures a substantial share of the improvement (+0.74 pp on OCR noise). GateConcat does not significantly outperform this capacity control (p = 0.21), so the honest attribution is capacity and label-salience, not noise detection."
    },
    {
      title: "The gate is not a corruption detector",
      body: "The learned gate's corruption-detection AUC is ≈ 0.52 (chance level; correlation −0.025). Forcing explicit detection via auxiliary supervision (AUC ≈ 0.91) yields zero downstream F1 benefit — detection and task performance are decoupled."
    }
  ],
  pdfUrl: assetUrl("./docs/MD_Rafi_Imam_When_Does_PEFT_Help_Under_Synthetic_Document_Noise.pdf"),
  summaryPdfUrl: assetUrl("./docs/MD_Rafi_Imam_ResearchSummary.pdf")
};

// ─── PRODUCTION AI: Liveness verification & PAD at Jamuna Bank ───────────────
export const ENTERPRISE_AI_PROJECT = {
  title: "Real-Time Face Liveness Verification & Presentation Attack Detection",
  subtitle: "Production AI System — Jamuna Bank PLC, AI & Automation Division",
  context: "A fail-closed, three-layer verification cascade for high-value banking transactions: document-to-live face matching (ArcFace + pgvector), spatial and spatiotemporal liveness (Swin-B, 3D ResNet-18), and physics-informed presentation-attack detection (FFT spectral analysis, Lucas–Kanade optical flow). Heavy PyTorch CUDA inference (FastAPI) is decoupled from a stateless asyncio gateway, cutting end-to-end latency from over 5 seconds to roughly 800 ms.",
  keyMetric: "Locked-set result: FAR 0.00% (0/33 replay) · FRR 3.125% (1/32 live) · ~800 ms latency",
  githubUrl: "https://github.com/rafiimam/jbl-liveness-verification",
  campaign: [
    {
      stage: "Initial deployment",
      detail: "Frozen-backbone spatial model on live mobile traffic: zero replay accepts, but compression and sensor noise caused a 56.25% false-rejection rate (18/32) on confirmed live captures.",
      far: "0.00% (0/33)", frr: "56.25% (18/32)", outcome: "Not promoted"
    },
    {
      stage: "Head-only fine-tune",
      detail: "Fine-tuning only the attack-detection head did not resolve the live/replay feature collision.",
      far: "0.00% (0/33)", frr: "53.13% (17/32)", outcome: "Rolled back"
    },
    {
      stage: "Swin-B Stage-3 upgrade",
      detail: "Unfroze Stage-3 backbone features (mid-level texture depth) and fine-tuned on human-reviewed phone captures against the locked replay set, under a strict ship rule (FAR ≤ 0%, FRR ≤ 15%).",
      far: "0.00% (0/33)", frr: "3.125% (1/32)", outcome: "Promoted to production"
    }
  ],
  architectureHighlights: [
    {
      name: "Decoupled CUDA Inference + Async Orchestration",
      detail: "Neural inference (MTCNN, Swin-B + UAD head, ArcFace, 3D ResNet-18) is isolated on a FastAPI CUDA server; a stateless gateway fires the conditionally independent checks concurrently with asyncio.gather — critical-path latency ≈ 800 ms."
    },
    {
      name: "Mid-Backbone Feature Hook",
      detail: "The attack-detection head reads Swin-B Stage-3 features, which retain the texture cues (print matrices, display sub-pixel artifacts) that final-layer semantic features discard."
    },
    {
      name: "Physics-Informed Replay Detection",
      detail: "Column/row-FFT spectral periodicity and Lucas–Kanade affine residuals detect physical screens deterministically, complementing the learned models — including a composite rule requiring two distinct display indicators, after live audits showed phone compression mimicking single-stripe LCD cues."
    },
    {
      name: "Anti-Injection & Identity Infrastructure",
      detail: "Session nonces (TTL 120 s), timestamp monotonicity checks, and 512-D ArcFace embeddings indexed in PostgreSQL/pgvector for sub-millisecond identity search across enrolled ID media."
    },
    {
      name: "Event-Driven Risk Pipelines",
      detail: "Apache Kafka pipelines process transaction-triggered risk flags, AML checks, deduplication, and transaction profiling around the verification flow."
    }
  ],
  techStack: ["PyTorch", "Swin Transformer", "FastAPI", "asyncio", "Apache Kafka", "Docker", "PostgreSQL + pgvector", "WebSocket"],
  researchRelevance: "The deployment doubles as an adaptation case study: a production model failing under real distribution shift, a failed fix that was measured and rolled back, and a successful upgrade promoted only after meeting pre-registered error budgets on a locked evaluation set. That diagnostic discipline — hypothesize, measure, ship or roll back — is the same methodology as my PEFT research.",
  pdfUrl: assetUrl("./docs/Enterprise_AI_System_Real_Time_Liveness_Verification_and_PAD.pdf")
};

// ─── PUBLICATIONS ─────────────────────────────────────────────────────────────
export const PUBLICATIONS: Publication[] = [
  {
    id: "peft-noise-2026",
    title: "When Does PEFT Help under Synthetic Document Noise? A Controlled Study of Gating, Capacity, and Robustness",
    authors: "MD. Rafi Imam",
    role: "Lead Author",
    venue: "Independent Research Manuscript — 2026",
    year: 2026,
    category: "PEFT / Robust ML",
    abstract: "A controlled diagnostic study of gated PEFT for token-level entity recognition on FUNSD with LayoutLMv3 and LoRA, under a matched five-seed protocol. A hand-crafted quality-weighting method (SALLoRA) consistently fails to improve over standard LoRA, degrading macro-F1 by up to 3.09 points. A simpler learned-gate method (GateConcat) improves noisy macro-F1 by +1.51 and +2.30 points under severe text corruption — but a constant-gate capacity control captures part of the gain, the learned gate does not detect corruption (AUC ≈ 0.52), and the gains do not transfer to layout noise. Robustness claims require capacity-matched controls.",
    contributions: [
      "Locked, matched evaluation protocol: five seeds, identical optimizer and LoRA configuration for every method, paired significance tests.",
      "Documented negative result: hand-crafted quality weighting and gradient masking (SALLoRA) degrade macro-F1 by up to −3.09 points under 70% OCR confusion.",
      "GateConcat: +1.51 pp (p = 0.003) and +2.30 pp (p = 0.002) noisy macro-F1 over LoRA under 70% substitution and OCR confusion.",
      "Capacity attribution: a constant-gate control (g ≡ 0.5) captures +0.74 pp of the OCR gain; GateConcat vs. control is not significant (p = 0.21).",
      "Mechanism analysis: learned gate AUC ≈ 0.52 for corruption detection; auxiliary supervision reaching AUC ≈ 0.91 gives zero downstream F1 benefit; no transfer to layout box-swap (−0.20 pp)."
    ],
    pdfUrl: assetUrl("./docs/MD_Rafi_Imam_When_Does_PEFT_Help_Under_Synthetic_Document_Noise.pdf"),
    bibtex: `@misc{imam2026peftnoise,
  title={When Does PEFT Help under Synthetic Document Noise? A Controlled Study of Gating, Capacity, and Robustness},
  author={Imam, MD. Rafi},
  year={2026},
  note={Independent research manuscript}
}`,
    highlight: true
  },
  {
    id: "iccit-suicidal-nlp",
    title: "Suicidal Thought Detection Using NLP (Natural Language Processing) on Reddit Data",
    authors: "MD. Rafi Imam, Oishi Jyoti, Zakia Afrin, Md. Munawar Hossain, Tamanna Hossain Mou",
    role: "First Author",
    venue: "26th IEEE International Conference on Computer and Information Technology (ICCIT 2023), Cox's Bazar, Bangladesh",
    year: 2023,
    category: "NLP",
    abstract: "Curated a Reddit-sourced dataset from 'SuicideWatch' and 'depression' subreddits via the Pushshift API and applied LSTM and Random Forest classifiers to detect suicidal ideation in text. Achieved up to 93% accuracy in suicidal thought analysis, advancing NLP-based mental health screening and contributing a reusable dataset for crisis detection research.",
    contributions: [
      "Curated original Reddit dataset from SuicideWatch and depression subreddits via Pushshift API — built the training data from scratch.",
      "Designed dual-model architecture: LSTM for sequence-aware pattern detection + Random Forest for TF-IDF feature classification.",
      "Achieved 93% accuracy in suicidal thought detection.",
      "Contributed reusable labeled dataset for future mental health NLP research."
    ],
    pdfUrl: assetUrl("./docs/Suicidal Thought Detection Using NLP(Natural Language Processing) on Reddit Data.pdf"),
    bibtex: `@inproceedings{imam2023suicidal,
  title={Suicidal Thought Detection Using NLP on Reddit Data},
  author={Imam, MD. Rafi and Jyoti, Oishi and Afrin, Zakia and Hossain, Md. Munawar and Mou, Tamanna Hossain},
  booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
  year={2023},
  organization={IEEE}
}`,
    highlight: true
  },
  {
    id: "iccit-federated-cancer",
    title: "Privacy-Preserving Federated Learning for Lung Cancer Classification",
    authors: "Md. M. Hossain, MD. Rafi Imam, et al.",
    role: "Co-author",
    venue: "26th IEEE International Conference on Computer and Information Technology (ICCIT 2023), Cox's Bazar, Bangladesh",
    year: 2023,
    category: "Federated Learning",
    abstract: "Developed a privacy-preserving decentralized federated learning framework for medical lung CT scan classification without centralizing patient data. Implemented client-side InceptionV3 feature extractors with secure parameter aggregation, validating global model convergence under non-IID data distributions.",
    contributions: [
      "Implemented client-side InceptionV3 feature extractors for distributed local training on lung CT scans.",
      "Engineered decentralized training protocol — model weight updates aggregated without centralizing patient data.",
      "Validated convergence under non-IID data distributions across simulated hospital nodes.",
      "Analyzed communication efficiency vs. accuracy trade-offs for federated healthcare AI deployment."
    ],
    pdfUrl: assetUrl("./docs/Privacy Preserving Federated Learning for Lung Cancer Classification.pdf"),
    bibtex: `@inproceedings{hossain2023federated,
  title={Privacy-Preserving Federated Learning for Lung Cancer Classification},
  author={Hossain, Md. M. and Imam, Md. Rafi and others},
  booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
  year={2023},
  organization={IEEE}
}`
  },
  {
    id: "iccit-pcos-ml",
    title: "A Comparative Study for Detecting Polycystic Ovary Syndrome Using A Machine Learning Framework",
    authors: "Tamanna Hossain Mou, MD. Rafi Imam, et al.",
    role: "Co-author",
    venue: "26th IEEE International Conference on Computer and Information Technology (ICCIT 2023), Cox's Bazar, Bangladesh",
    year: 2023,
    category: "Medical AI",
    abstract: "Applied feature selection techniques and ensemble machine learning algorithms (XGBoost, Random Forest, SVM) to classify Polycystic Ovary Syndrome from clinical metabolic and hormonal indicators. Conducted model interpretability analysis via feature importance, providing a prioritized diagnostic checklist for clinicians.",
    contributions: [
      "Clinical data preprocessing, missing value imputation, and statistical correlation analysis for PCOS biomarkers.",
      "Comparative benchmark: XGBoost, Random Forest, and SVM across multiple feature subsets.",
      "Feature importance analysis — identified which biomarkers matter most, giving clinicians a prioritized diagnostic checklist.",
      "Demonstrated viability of low-resource ML diagnostics for PCOS in emerging healthcare systems."
    ],
    pdfUrl: assetUrl("./docs/A Comparative Study for Detecting Polycystic Ovary Syndrome Using A Machine Learning Framework.pdf"),
    bibtex: `@inproceedings{mou2023pcos,
  title={A Comparative Study for Detecting Polycystic Ovary Syndrome Using A Machine Learning Framework},
  author={Mou, Tamanna Hossain and Imam, Md. Rafi and others},
  booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
  year={2023},
  organization={IEEE}
}`
  },
  {
    id: "iccit-yolov8-driving",
    title: "YOLOv8-based Object Detection for Self-driving Cars",
    authors: "Zakia Afrin, Fatima Tabassum, Hasibul Bahar Kibria, MD. Rafi Imam, Md. Rafiqul Hasan",
    role: "Fourth Author",
    venue: "26th IEEE International Conference on Computer and Information Technology (ICCIT 2023), Cox's Bazar, Bangladesh",
    year: 2023,
    category: "Computer Vision",
    abstract: "Deployed real-time YOLOv8-based object detection models for autonomous vehicle navigation under adverse weather conditions including low-light and rain. Benchmarked inference latency on edge computing hardware, evaluating bounding box prediction accuracy across diverse environmental scenarios.",
    contributions: [
      "YOLOv8 architecture fine-tuning and custom dataset augmentation for adverse weather conditions.",
      "Real-time latency benchmarking on edge computing hardware (embedded inference pipeline).",
      "Evaluated bounding box accuracy across low-light, rain, and standard lighting scenarios.",
      "Analyzed model deployment constraints for embedded self-driving hardware targets."
    ],
    pdfUrl: assetUrl("./docs/YOLOv8 Based Object Detection for Self-driving Cars.pdf"),
    bibtex: `@inproceedings{afrin2023yolov8,
  title={YOLOv8-based Object Detection for Self-Driving Cars},
  author={Afrin, Zakia and Tabassum, Fatima and Kibria, Hasibul Bahar and Imam, MD. Rafi and Hasan, Md. Rafiqul},
  booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
  year={2023},
  organization={IEEE}
}`
  }
];

// ─── WORK EXPERIENCE ──────────────────────────────────────────────────────────
export const WORK_EXPERIENCE = [
  {
    role: "Software Development Officer (AI & Automation)",
    division: "AI & Automation Division",
    company: "Jamuna Bank PLC",
    period: "Dec 2023 — Present",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Designed and deployed a real-time Face Liveness & Presentation Attack Detection System — decoupling heavy PyTorch CUDA inferences (FastAPI) from stateless asynchronous gateway orchestrators (asyncio.gather), reducing evaluation latency from >5.0s to ~800ms.",
      "Integrated client-side SALLoRA background workers to execute 2-epoch online micro-batch updates via a security API, enabling hot-reloading of calibrated model weights with zero system downtime.",
      "Architected event-driven, high-concurrency data streaming pipelines using Apache Kafka and Docker to ingest and process transaction-triggered risk flags.",
      "Applied Swin-B forward hooks for intermediate feature extraction within AI-integrated financial systems, supporting OCR pipelines, face matching, and structured data extraction for real-world decision workflows.",
      "Developed data processing and validation pipelines involving AML checks, deduplication, and transaction profiling for risk-aware systems.",
      "Applied real-time system design using WebSocket and push notification services."
    ],
    techStack: ["PyTorch", "Swin-B Transformer", "FastAPI", "asyncio", "Apache Kafka", "Docker", "Node.js", "React", ".NET Core", "PostgreSQL", "MongoDB", "WebSocket"]
  }
];

export const SELECTED_SYSTEMS = [
  {
    name: "eKYC Platform — Digital Account Opening",
    stack: ".NET Core · React · Tailwind · Python · FastAPI",
    points: [
      "Full-stack digital onboarding with multi-stage approval workflows.",
      "AI verification pipeline: NID OCR and face matching, document OCR, address extraction, profession prediction.",
      "AML checks, deduplication, and transaction-behavior capture; real-time communication via WebSocket and Firebase."
    ]
  },
  {
    name: "Bancassurance Platform",
    stack: "Node.js · Kafka · MongoDB · Netflix Conductor",
    points: [
      "Distributed workflow system integrating multiple insurance providers.",
      "Event-driven architecture for asynchronous processing, with fault-tolerant callback and retry mechanisms."
    ]
  }
];

// ─── RESEARCH VISION ──────────────────────────────────────────────────────────
export const RESEARCH_VISION = {
  statement: "Foundation models are increasingly deployed on inputs that are noisy, shifted, and adversarially manipulated — yet our adaptation methods are mostly validated on clean benchmarks, and our robustness claims often outrun our controls. My doctoral research will focus on making adaptation claims measurable: parameter-efficient methods evaluated under matched protocols and capacity controls, uncertainty estimates that are calibrated rather than decorative, and systems that keep working when the input cannot be trusted.",
  directions: [
    {
      title: "Robust & Efficient Adaptation",
      body: "PEFT methods whose benefits survive capacity-matched controls and transfer across corruption types — text, layout, and sensor noise — not just the one they were tuned on."
    },
    {
      title: "Trustworthy AI Systems",
      body: "Fail-closed decision design, pre-registered error budgets, and locked evaluation sets, carried from production banking systems into research methodology."
    },
    {
      title: "Uncertainty Quantification",
      body: "Representation-level uncertainty that is actually predictive of failure — tested against the null result that a learned 'quality' signal can sit at chance (AUC ≈ 0.52) while still helping the task."
    }
  ],
  seeking: "I am seeking a Fall 2027 Ph.D. position in AI/ML, in a group working on robust or efficient machine learning, trustworthy AI, or foundation-model adaptation. My NJIT Data Science and GMU Computer Science applications are submitted for Fall 2027."
};

// ─── ACADEMIC CREDENTIALS ─────────────────────────────────────────────────────
export const ACADEMIC_CREDENTIALS = {
  degree: "Bachelor of Science in Electrical & Computer Engineering (ECE)",
  institution: "Rajshahi University of Engineering & Technology (RUET)",
  period: "2018 — 2023",
  cgpa: "3.30 / 4.00",
  last60Gpa: "3.55 / 4.00",
  division: "First Class",
  awards: [
    "RUET Merit Scholarship (Top 30 Students) — 2020, 2021, 2022",
    "Leadership Award: Class Representative — 2020–2023"
  ],
  coursework: [
    "Machine Learning", "Neural Networks", "Natural Language Processing",
    "Digital Image Processing", "Data Structures & Algorithms", "Digital Signal Processing",
    "Computer Networks", "VLSI Design", "Operating Systems", "Software Engineering"
  ],
  gre: {
    testDate: "September 20, 2025",
    totalScore: 304,
    quantScore: 164,
    quantPercentile: "63rd Percentile",
    verbalScore: 140,
    verbalPercentile: "11th Percentile",
    awaScore: "3.0",
    awaPercentile: "17th Percentile",
    pdfUrl: assetUrl("./docs/MD_Rafi_Imam_GRE.pdf")
  },
  ielts: {
    testDate: "November 28, 2025",
    overallBand: "7.0",
    cefrLevel: "C1",
    listening: 7.0,
    reading: 7.0,
    writing: 6.5,
    speaking: 6.5,
    pdfUrl: assetUrl("./docs/MD_Rafi_Imam_IELTS.pdf")
  },
  transcriptPdfUrl: assetUrl("./docs/MD_Rafi_Imam_Transcript.pdf")
};

// ─── DOCUMENT ASSETS ──────────────────────────────────────────────────────────
export const DOCUMENT_ASSETS: DocumentAsset[] = [
  {
    id: "doc-cv",
    title: "Curriculum Vitae (CV)",
    category: "CV",
    description: "Complete academic CV: education, four IEEE publications, the GateConcat / SALLoRA diagnostic study, production AI systems at Jamuna Bank, and technical skills.",
    fileUrl: assetUrl("./docs/MD_RAFI_IMAM_CV.pdf"),
    fileSize: "134 KB",
    date: "October 2026"
  },
  {
    id: "doc-peft-paper",
    title: "When Does PEFT Help under Synthetic Document Noise?",
    category: "Research",
    description: "Full manuscript of the controlled GateConcat study: matched 5-seed protocol, capacity controls, and mechanism analysis of gating under OCR corruption.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_When_Does_PEFT_Help_Under_Synthetic_Document_Noise.pdf"),
    fileSize: "179 KB",
    date: "2026"
  },
  {
    id: "doc-research-summary",
    title: "Research Summary",
    category: "Research",
    description: "One-page summary of research direction: robust and efficient adaptation under input corruption, the completed diagnostic study, and doctoral research plans.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_ResearchSummary.pdf"),
    fileSize: "5 KB",
    date: "2026"
  },
  {
    id: "doc-enterprise-ai",
    title: "Liveness Verification & PAD — Research Profile",
    category: "Research",
    description: "Production face liveness and presentation-attack-detection system at Jamuna Bank PLC, including the locked-set adaptation campaign: FAR 0.00% (0/33), FRR 3.125% (1/32).",
    fileUrl: assetUrl("./docs/Enterprise_AI_System_Real_Time_Liveness_Verification_and_PAD.pdf"),
    fileSize: "139 KB",
    date: "2026"
  },
  {
    id: "doc-selected-pubs",
    title: "Selected Publications",
    category: "Research",
    description: "Summary of the four IEEE ICCIT 2023 publications with venues and contributions.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_Selected_Publications.pdf"),
    fileSize: "105 KB",
    date: "2023"
  },
  {
    id: "doc-suicidal-nlp",
    title: "Suicidal Thought Detection Using NLP (IEEE ICCIT 2023)",
    category: "Research",
    description: "First-author IEEE paper on suicidal ideation detection from Reddit data using LSTM and Random Forest classifiers — 93% accuracy with an original curated dataset.",
    fileUrl: assetUrl("./docs/Suicidal Thought Detection Using NLP(Natural Language Processing) on Reddit Data.pdf"),
    fileSize: "194 KB",
    date: "December 2023"
  },
  {
    id: "doc-federated-cancer",
    title: "Privacy-Preserving Federated Learning — Lung Cancer (IEEE ICCIT 2023)",
    category: "Research",
    description: "IEEE paper on federated learning for lung cancer CT classification using distributed InceptionV3 feature extractors — without centralizing sensitive medical data.",
    fileUrl: assetUrl("./docs/Privacy Preserving Federated Learning for Lung Cancer Classification.pdf"),
    fileSize: "2.5 MB",
    date: "December 2023"
  },
  {
    id: "doc-yolov8",
    title: "YOLOv8 Object Detection for Self-Driving Cars (IEEE ICCIT 2023)",
    category: "Research",
    description: "IEEE paper on YOLOv8-based real-time object detection for autonomous vehicles under adverse weather conditions, with edge hardware benchmarking.",
    fileUrl: assetUrl("./docs/YOLOv8 Based Object Detection for Self-driving Cars.pdf"),
    fileSize: "1.1 MB",
    date: "December 2023"
  },
  {
    id: "doc-pcos",
    title: "PCOS Detection via Machine Learning Framework (IEEE ICCIT 2023)",
    category: "Research",
    description: "IEEE paper comparing XGBoost, Random Forest, and SVM for Polycystic Ovary Syndrome classification from clinical biomarkers with feature importance analysis.",
    fileUrl: assetUrl("./docs/A Comparative Study for Detecting Polycystic Ovary Syndrome Using A Machine Learning Framework.pdf"),
    fileSize: "299 KB",
    date: "December 2023"
  },
  {
    id: "doc-gre",
    title: "Official GRE General Test Report",
    category: "Test Scores",
    description: "Official ETS score report: GRE Total 304 — Quantitative 164, Verbal 140, AWA 3.0. Test date: Sept 20, 2025.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_GRE.pdf"),
    fileSize: "436 KB",
    date: "Sept 20, 2025"
  },
  {
    id: "doc-ielts",
    title: "Official IELTS Academic Score Report",
    category: "Test Scores",
    description: "Official IELTS Academic report: Overall Band 7.0 (CEFR C1). Listening 7.0, Reading 7.0, Writing 6.5, Speaking 6.5. Test date: Nov 28, 2025.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_IELTS.pdf"),
    fileSize: "994 KB",
    date: "Nov 28, 2025"
  },
  {
    id: "doc-transcript",
    title: "RUET Academic Transcript",
    category: "Transcript",
    description: "Official RUET B.Sc. ECE transcript — CGPA 3.30/4.00, Last 60 Credit Hours GPA 3.55/4.00.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_Transcript.pdf"),
    fileSize: "9.6 MB",
    date: "October 2023"
  }
];

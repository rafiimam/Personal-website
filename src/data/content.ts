import { assetUrl } from '../utils/assetUrl';

export interface Publication {
  id: string;
  title: string;
  authors: string;
  role: 'First Author' | 'Co-author' | 'Fourth Author' | 'Lead Author';
  venue: string;
  year: number;
  category: 'SALLoRA / PEFT' | 'NLP' | 'Computer Vision' | 'Federated Learning' | 'Medical AI';
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
  title: "Researcher in Multimodal AI & Autonomous Systems | Software Development Officer",
  affiliation: "Jamuna Bank PLC (AI & Automation Division) & RUET ECE Graduate",
  targetRole: "Prospective Ph.D. Candidate — Fall 2027",
  email: "rafiimam96@gmail.com",
  phone: "+880 1727-789497",
  location: "Dhaka, Bangladesh",
  scholarUrl: "https://scholar.google.com/citations?user=dyKjLgcAAAAJ&hl=en",
  researchGateUrl: "https://www.researchgate.net/profile/Rafi-Imam",
  githubUrl: "https://github.com/rafiimam",
  linkedInUrl: "https://linkedin.com/in/rafiimam",
  bio: `Investigating how artificial intelligence perceives, adapts, and reasons over time. My work focuses on multimodal foundation models, vision-language reasoning, and developing parameter-efficient frameworks to empower self-evolving AI agents. Currently a Software Development Officer in the AI & Automation Division at Jamuna Bank PLC and an Electrical and Computer Engineering graduate from RUET, Bangladesh.`,
  researchInterests: [
    "Machine Learning & Natural Language Processing",
    "Computer Vision & Multimodal Systems",
    "Parameter-Efficient Fine-Tuning (PEFT, LoRA)",
    "Robust Learning under Structured Input Corruption",
    "AI Systems Engineering & Applied AI in Real-World Systems"
  ]
};

export const METRICS = [
  { label: "IEEE Publications", value: "4", description: "ICCIT 2023 Papers" },
  { label: "Last 60 Credits GPA", value: "3.55", description: "Out of 4.00 (RUET ECE)" },
  { label: "GRE Quantitative", value: "164", description: "GRE Total: 304" },
  { label: "IELTS Academic", value: "7.0", description: "Overall Band (CEFR C1)" },
  { label: "Industry Experience", value: "2.5+", description: "Years in Production AI & Systems" }
];

// ─── FLAGSHIP RESEARCH: SALLoRA (v2 — corrected) ─────────────────────────────
export const SALLORA_RESEARCH = {
  title: "SALLoRA: Sensitivity-Aware Layer-wise Low-Rank Adaptation under Structured Input Corruption",
  subtitle: "Robust PEFT on LayoutLMv3 | FUNSD Benchmark | OCR Corruption 50%–80%",
  status: "Active Research — Progress Report v2, August 2026",
  backbone: "LayoutLMv3-base (microsoft/layoutlmv3-base)",
  benchmark: "FUNSD (Form Understanding in Noisy Scanned Documents)",
  notebookUrl: "https://github.com/rafiimam/noise-robust-peft/tree/main/notebooks",
  problemStatement: "Standard LoRA applies the same low-rank adaptation uniformly across all layers and samples. While this works well for clean inputs, it can overfit to noise patterns when the input itself is corrupted, leading to poor generalization on clean test data. SALLoRA addresses the research question: Can we make LoRA robust to input corruption without sacrificing parameter efficiency or clean-data performance?",
  components: [
    {
      name: "Linear Probing Warm-up",
      desc: "Freeze the LoRA adapters; train only the classifier head for 2 epochs. Prevents uncalibrated gradients from distorting the backbone before adaptation begins — stabilizing the classifier before adapter updates."
    },
    {
      name: "Layer-wise Learnable Scaling",
      desc: "Each transformer layer l is assigned a learnable scalar s_l, passed through a sigmoid gate r_l = σ(s_l). Hidden-state update: H_l = H_(l-1) + r_l · ΔW_l(H_(l-1)). Different layers adapt with different strengths — shallow layers focus on local features, deeper layers preserve higher-level semantics."
    },
    {
      name: "Token-Level Quality Weighting",
      desc: "OCR corruption is spatially localized — only a fraction of tokens are corrupted. Quality weights: 1.0 for clean tokens, 0.1 for corrupted tokens, 0.0 for padding. Training loss is a quality-weighted mean over tokens, preserving full spatial-visual context while focusing learning on trustworthy regions."
    },
    {
      name: "Soft Sensitivity Masking",
      desc: "Instead of hard-freezing less-sensitive parameters, gradients are scaled by γ = 0.15: ∇θ ← ∇θ ⊙ M + ∇θ ⊙ (1−M) · γ. M is a binary mask (top 20% of parameters per layer by gradient magnitude). Damps noise propagation while preserving full adapter capacity."
    },
    {
      name: "Future: UniMoE-PEFT (Planned — Not Yet Validated)",
      desc: "Extending SALLoRA to dynamically route tokens to different adapter experts (Mixture-of-Experts). Would allow the model to specialize different adapters for substitution, deletion, and insertion corruption types. Motivated by current findings, but not yet experimentally validated."
    }
  ],
  results: [
    { method: "Standard LoRA", corruption: "50%", mean: 0.7738, std: 0.0042, note: "Baseline (no robustness)" },
    { method: "SALLoRA (Ours)", corruption: "50%", mean: 0.7996, std: 0.0031, note: "+0.0258 F1, p=0.008" },
    { method: "Standard LoRA", corruption: "70%", mean: 0.7479, std: 0.0062, note: "Baseline" },
    { method: "SALLoRA (Ours)", corruption: "70%", mean: 0.7935, std: 0.0121, note: "+0.0456 F1, p=0.015" },
    { method: "Standard LoRA", corruption: "80%", mean: 0.7292, std: 0.0106, note: "Baseline" },
    { method: "SALLoRA (Ours)", corruption: "80%", mean: 0.7786, std: 0.0064, note: "+0.0494 F1, p=0.011" }
  ],
  ablation: [
    { config: "Standard LoRA (baseline)", f1: 0.7738, std: 0.0042, delta: "—" },
    { config: "+ Linear probing warm-up", f1: 0.7812, std: 0.0038, delta: "+0.0074" },
    { config: "+ Layer-wise learnable scalars", f1: 0.7885, std: 0.0041, delta: "+0.0147" },
    { config: "+ Token-level quality weighting", f1: 0.7941, std: 0.0035, delta: "+0.0203" },
    { config: "+ Soft sensitivity masking (full SALLoRA)", f1: 0.7996, std: 0.0031, delta: "+0.0258" }
  ],
  pdfUrl: assetUrl("./docs/MD_Rafi_Imam_SALLoRA_Research_Progress_Report_v2.pdf"),
  summaryPdfUrl: assetUrl("./docs/MD_Rafi_Imam_ResearchSummary.pdf")
};

// ─── ENTERPRISE AI SYSTEM ─────────────────────────────────────────────────────
export const ENTERPRISE_AI_PROJECT = {
  title: "Real-Time Face Liveness Verification & Presentation Attack Detection",
  subtitle: "Production-Grade AI System for High-Security Commercial Banking",
  context: "Designed and deployed at Jamuna Bank PLC's AI & Automation Division — decoupling heavy PyTorch CUDA inferences (FastAPI) from a stateless asynchronous gateway orchestrator, reducing evaluation latency from >5.0s to ~800ms.",
  keyMetric: "Latency: >5.0s → ~800ms via decoupled async architecture",
  githubUrl: "https://github.com/rafiimam/Real_Time_Liveness_Verification_Presentation_Attack_Detection",
  architectureHighlights: [
    {
      name: "Decoupled CUDA Inference + Async Orchestration",
      detail: "Heavy models isolated on a FastAPI CUDA server. Stateless Gateway Orchestrator fires spatial, temporal, physics-based, and identity checks concurrently via asyncio.gather() — critical path latency: ~800ms."
    },
    {
      name: "Swin-B Transformer with Forward Hooks",
      detail: "Applied Swin-B forward hooks for intermediate feature extraction, supporting OCR pipelines, face matching, and structured data extraction for real-world decision workflows."
    },
    {
      name: "SALLoRA Online Background Updates",
      detail: "Integrated client-side SALLoRA background workers to execute 2-epoch online micro-batch updates via a security API, enabling hot-reloading of calibrated model weights with zero system downtime."
    },
    {
      name: "Event-Driven Data Streaming",
      detail: "Architected event-driven, high-concurrency data streaming pipelines using Apache Kafka and Docker to ingest and process transaction-triggered risk flags."
    },
    {
      name: "AML Checks & Risk-Aware Profiling",
      detail: "Developed data processing and validation pipelines involving AML checks, deduplication, and transaction profiling for risk-aware systems."
    }
  ],
  techStack: ["PyTorch", "Swin-B Transformer", "FastAPI", "asyncio", "Apache Kafka", "Docker", "PostgreSQL", "WebSocket", "Firebase"],
  researchRelevance: "This production system directly applies SALLoRA background workers for continual fraud-pattern adaptation — providing real-world validation that sensitivity-aware PEFT can serve as a hot-reloadable continual learning backbone in high-stakes commercial deployments.",
  pdfUrl: assetUrl("./docs/Enterprise_AI_System_Real_Time_Liveness_Verification_and_PAD.pdf")
};

// ─── PUBLICATIONS ─────────────────────────────────────────────────────────────
export const PUBLICATIONS: Publication[] = [
  {
    id: "sallora-2026",
    title: "SALLoRA: Sensitivity-Aware Layer-wise Low-Rank Adaptation under Structured Input Corruption",
    authors: "MD. Rafi Imam",
    role: "Lead Author",
    venue: "Progress Report v2 — August 2026 (Independent Research, RUET ECE)",
    year: 2026,
    category: "SALLoRA / PEFT",
    abstract: "We study whether parameter-efficient fine-tuning (PEFT) can be made robust to structured input corruption — specifically OCR-induced noise — in document understanding tasks. SALLoRA combines a linear-probing warm-up, layer-wise learnable adaptation scaling, token-level quality weighting, and soft sensitivity masking. All experiments were rerun from scratch under a unified training pipeline for a fair, controlled comparison. SALLoRA consistently outperforms Standard LoRA across three OCR corruption levels (50%, 70%, 80%) on FUNSD, with the performance gap widening as corruption increases. Results are statistically significant (p < 0.05) across all conditions.",
    contributions: [
      "Identified and formulated the 'noisy-input PEFT' problem — distinct from label-noise robustness literature (DeLoRA, CleaR, LoPE all focus on label noise; SALLoRA targets OCR input corruption).",
      "Designed 4-component framework: linear probing warm-up, layer-wise learnable scaling, token-level quality weighting (q_i: 1.0 clean / 0.1 corrupted / 0.0 padding), and soft gradient masking (γ=0.15).",
      "Reran all experiments from scratch under a unified pipeline with full fairness checklist — correcting earlier claims from a prior draft.",
      "Reported F1: 0.7996±0.0031 at 50% corruption (+0.0258), 0.7935±0.0121 at 70% (+0.0456), 0.7786±0.0064 at 80% (+0.0494) — all statistically significant (paired t-tests, p<0.05).",
      "Conducted full ablation study isolating each component's contribution — soft sensitivity masking and token-level quality weighting provide the largest gains.",
      "Documented honest limitations and threats to validity — single benchmark (FUNSD), single backbone (LayoutLMv3), synthetic noise only."
    ],
    pdfUrl: assetUrl("./docs/MD_Rafi_Imam_SALLoRA_Research_Progress_Report_v2.pdf"),
    bibtex: `@techreport{imam2026sallora,
  title={SALLoRA: Sensitivity-Aware Layer-wise Low-Rank Adaptation under Structured Input Corruption},
  author={Imam, MD. Rafi},
  institution={RUET, Department of Electrical and Computer Engineering},
  year={2026},
  month={August},
  note={Progress Report v2}
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
  title={YOLOv8-based Object Detection for Self-driving Cars},
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
    description: "Complete academic CV detailing education, publications, independent research (SALLoRA), production AI systems at Jamuna Bank, and technical skills.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_CV.pdf"),
    fileSize: "126 KB",
    date: "August 2026"
  },
  {
    id: "doc-sallora-v2",
    title: "SALLoRA Research Progress Report v2",
    category: "Research",
    description: "Updated research report introducing SALLoRA — Sensitivity-Aware Layer-wise LoRA with token-level quality weighting and soft sensitivity masking. Rerun from scratch with full fairness checklist and statistical significance tests. F1: 0.7996±0.0031 at 50% OCR corruption.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_SALLoRA_Research_Progress_Report_v2.pdf"),
    fileSize: "199 KB",
    date: "August 2026"
  },
  {
    id: "doc-research-summary",
    title: "Research Interest Summary",
    category: "Research",
    description: "Concise research interest summary covering PEFT, multimodal systems, and AI systems engineering — written for faculty review and PhD application alignment.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_ResearchSummary.pdf"),
    fileSize: "150 KB",
    date: "2026"
  },
  {
    id: "doc-enterprise-ai",
    title: "Enterprise AI: Liveness Verification & PAD System",
    category: "Research",
    description: "Production-grade Face Liveness Verification and Presentation Attack Detection system engineered for Jamuna Bank PLC — Swin-B forward hooks, async CUDA inference, Kafka event-driven pipelines, and SALLoRA online updates.",
    fileUrl: assetUrl("./docs/Enterprise_AI_System_Real_Time_Liveness_Verification_and_PAD.pdf"),
    fileSize: "10 KB",
    date: "2026"
  },
  {
    id: "doc-suicidal-nlp",
    title: "Suicidal Thought Detection Using NLP (IEEE ICCIT 2023)",
    category: "Research",
    description: "First-author IEEE paper on suicidal ideation detection from Reddit data using LSTM and Random Forest classifiers — 93% accuracy with an original curated dataset.",
    fileUrl: assetUrl("./docs/Suicidal Thought Detection Using NLP(Natural Language Processing) on Reddit Data.pdf"),
    fileSize: "199 KB",
    date: "December 2023"
  },
  {
    id: "doc-federated-cancer",
    title: "Privacy-Preserving Federated Learning — Lung Cancer (IEEE ICCIT 2023)",
    category: "Research",
    description: "IEEE paper on federated learning for lung cancer CT classification using distributed InceptionV3 feature extractors — without centralizing sensitive medical data.",
    fileUrl: assetUrl("./docs/Privacy Preserving Federated Learning for Lung Cancer Classification.pdf"),
    fileSize: "2.6 MB",
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
    fileSize: "307 KB",
    date: "December 2023"
  },
  {
    id: "doc-gre",
    title: "Official GRE General Test Report",
    category: "Test Scores",
    description: "Official ETS score report: GRE Total 304 — Quantitative 164, Verbal 140, AWA 3.0. Test date: Sept 20, 2025.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_GRE.pdf"),
    fileSize: "447 KB",
    date: "Sept 20, 2025"
  },
  {
    id: "doc-ielts",
    title: "Official IELTS Academic Score Report",
    category: "Test Scores",
    description: "Official IELTS Academic report: Overall Band 7.0 (CEFR C1). Listening 7.0, Reading 7.0, Writing 6.5, Speaking 6.5. Test date: Nov 28, 2025.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_IELTS.pdf"),
    fileSize: "1.0 MB",
    date: "Nov 28, 2025"
  },
  {
    id: "doc-transcript",
    title: "RUET Academic Transcript",
    category: "Transcript",
    description: "Official RUET B.Sc. ECE transcript — CGPA 3.30/4.00, Last 60 Credit Hours GPA 3.55/4.00.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_Transcript.pdf"),
    fileSize: "10.1 MB",
    date: "October 2023"
  }
];

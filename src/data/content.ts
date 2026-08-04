import { assetUrl } from '../utils/assetUrl';

export interface Publication {
  id: string;
  title: string;
  authors: string;
  role: 'First Author' | 'Co-author' | 'Fourth Author' | 'Lead Author';
  venue: string;
  year: number;
  category: 'Multimodal PEFT' | 'NLP' | 'Computer Vision' | 'Federated Learning' | 'Medical AI';
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
    "Multimodal Foundation Models & Vision-Language Architectures",
    "Parameter-Efficient Fine-Tuning (PEFT, LoRA & Layer-wise Scaling)",
    "Robust Learning under Structured Input & Sensor Noise",
    "Mechanistic Interpretability & Gradient Sensitivity Analysis",
    "AI Systems Engineering & Autonomous Self-Evolving Agents"
  ]
};

export const METRICS = [
  { label: "IEEE Publications", value: "4", description: "ICCIT 2023 Papers" },
  { label: "Last 60 Credits GPA", value: "3.55", description: "Out of 4.00 (RUET ECE)" },
  { label: "GRE Quantitative", value: "164", description: "63rd Percentile (Score: 304)" },
  { label: "IELTS Academic", value: "7.0", description: "Overall (CEFR C1 Level)" },
  { label: "Industry Experience", value: "2.5+", description: "Years in Production AI & Systems" }
];

// ─── FLAGSHIP RESEARCH: DocXAR-CUFIT (Updated from SALLoRA) ───────────────────
export const SALLORA_RESEARCH = {
  title: "DocXAR-CUFIT: Robust Parameter-Efficient Adaptation for Multimodal Document Understanding",
  subtitle: "Layer-Wise Sensitivity Masking + Cross-Attention Adapters + Decoupled Quality Estimator on LayoutLMv3",
  status: "Active Research Project — Updated August 2026",
  backbone: "LayoutLMv3-base (Frozen)",
  benchmark: "FUNSD (Form Understanding in Noisy Scanned Documents)",
  problemStatement: "Standard LoRA updates weights uniformly without regard for input modality reliability, causing 'garbage-in, garbage-out' propagation when OCR degrades linguistic coherence while preserving visual-spatial layout — a modality misalignment that standard PEFT fails to adjudicate. DocXAR-CUFIT addresses this by combining cross-attention adapters with layer-wise sensitivity masking, enforcing 25% active parameter density to isolate clean visual-spatial signals and prevent rank collapse under severe text degradation.",
  components: [
    {
      name: "Layer-Wise Sensitivity Masking",
      desc: "Enforces a uniform 25% active LoRA parameter density across all 12 transformer blocks via tensor-by-tensor gradient magnitude thresholding — preventing rank collapse observed in global thresholding approaches."
    },
    {
      name: "Cross-Attention Adapter (DocXAR)",
      desc: "After the final encoder block, question tokens Q attend directly to document key-value pairs (K, V), forcing question-aware representations that filter out corrupted, non-relevant OCR spans. LoRA weight norm expanded +66.9% (2.308 → 3.8517)."
    },
    {
      name: "Decoupled Quality Estimator Q(x)",
      desc: "Evaluated under torch.no_grad() with batch normalization (mean target = 1.0) to prevent quality weight collapse and loss-scale dampening. Enforces per-sample input corruption weighting without backprop drift."
    },
    {
      name: "Curriculum Fine-Tuning (CUFIT)",
      desc: "Two-phase warm-up curriculum: Phase 1 anchors the classifier head on frozen backbone representations; Phase 2 activates sensitivity-masked LoRA adapters, progressively increasing OCR corruption tolerance."
    },
    {
      name: "UniMoE-PEFT (Future Direction)",
      desc: "Token-Level Modality Discrepancy Index (TMDI) feeds a noise-gated MoE router — routing clean tokens to text experts and corrupted tokens to visual-spatial experts, with PAC-Bayesian generalization bounds O(√k/n)."
    }
  ],
  results: [
    { method: "Clean LoRA (Upper Reference)", corruption: "0%", f1: 0.6710, note: "No corruption baseline" },
    { method: "Noisy LoRA (No Robustness)", corruption: "50%", f1: 0.6334, note: "Unprotected adaptation" },
    { method: "SALLoRA v1 (Original)", corruption: "50%", f1: 0.7758, note: "+14.24 F1 over noisy LoRA" },
    { method: "DocXAR-CUFIT (Updated)", corruption: "50%", f1: 0.7992, note: "±0.0067 across 3 seeds — +26.2% vs noisy LoRA" }
  ],
  pdfUrl: assetUrl("./docs/Updated research progress report.pdf"),
  summaryPdfUrl: assetUrl("./docs/MD_Rafi_Imam_DocXAR_CUFIT_Research_Summary.pdf")
};

// ─── ENTERPRISE AI SYSTEM ─────────────────────────────────────────────────────
export const ENTERPRISE_AI_PROJECT = {
  title: "Enterprise Face Liveness Verification & Presentation Attack Detection",
  subtitle: "Production-Grade AI System for High-Security Commercial Banking",
  context: "Independently engineered for Jamuna Bank PLC's high-value transaction verification pipeline. Triggered during automated risk flags, executing a fail-closed three-layer verification cascade.",
  keyMetric: "Latency reduced from >5.0s to ~800ms via decoupled async architecture",
  architectureHighlights: [
    {
      name: "Swin-B Transformer + Mid-Backbone Hook (UAD)",
      detail: "Stage-3 Block 5 hook isolates mid-level texture anomalies (moiré, sub-pixel aliasing) from Stage-4 semantic identity. Dual-path HiLo Self-Attention: 62.5% local high-freq window attention + 37.5% global low-freq pooled attention."
    },
    {
      name: "Physics-Informed Screen Replay Detection",
      detail: "Column/row-FFT spectral periodicity analysis + Lucas-Kanade optical flow affine residuals — detects physical screen displays without relying solely on supervised classifiers."
    },
    {
      name: "Decoupled GPU Inference + Async Orchestration",
      detail: "Heavy models (MTCNN, Swin-B+UAD, ArcFace, 3D ResNet-18) isolated on FastAPI CUDA server. Gateway Orchestrator fires spatial, temporal, physics-based, and identity checks concurrently via asyncio.gather()."
    },
    {
      name: "Cryptographic Anti-Injection & ArcFace Vector Store",
      detail: "512-D ArcFace vectors stored in PostgreSQL/pgvector for sub-millisecond ANN search. Native SDK enforces HMAC-SHA256 frame attestation, session-bound nonces (TTL=120s), timestamp monotonicity across 8fps WebSocket streams."
    },
    {
      name: "Continual Adaptation via SALLoRA/DocXAR-CUFIT",
      detail: "Background active-learning updates use gradient sensitivity masking to adapt to emerging fraud patterns without full backbone retraining — direct industry application of the core research methodology."
    }
  ],
  techStack: ["PyTorch", "Swin-B Transformer", "ArcFace", "3D ResNet-18", "MTCNN", "FastAPI", "PostgreSQL/pgvector", "asyncio", "WebSocket"],
  researchRelevance: "This production system directly applies and validates the PEFT adaptation methodology developed in DocXAR-CUFIT — providing real-world evidence that continual sensitivity-aware adaptation can serve as a fraud-resilient continual learning backbone in high-stakes commercial deployments.",
  pdfUrl: assetUrl("./docs/Enterprise_AI_System_Real_Time_Liveness_Verification_and_PAD.pdf")
};

// ─── PUBLICATIONS ─────────────────────────────────────────────────────────────
export const PUBLICATIONS: Publication[] = [
  {
    id: "docxar-2026",
    title: "DocXAR-CUFIT: Robust Parameter-Efficient Fine-Tuning for Multimodal Document Understanding under Structured Input Corruption",
    authors: "Md. Rafi Imam",
    role: "Lead Author",
    venue: "Research Progress Report — August 2026 (Preprint / Working Prototype)",
    year: 2026,
    category: "Multimodal PEFT",
    abstract: "Introduces the DocXAR-CUFIT framework for robust PEFT under structured OCR noise in Multimodal Document Understanding (MDU). By integrating Layer-Wise Sensitivity Masking, Cross-Attention Adapters, and a Decoupled Quality Estimator, the framework achieves a highly stable Mean Test F1 Score of 0.7992 ± 0.0067 on FUNSD under 50% synthetic OCR corruption — a +26.2% relative improvement over standard noisy LoRA adaptation (~0.6334).",
    contributions: [
      "Formulated the 'noisy-input PEFT' paradigm for multimodal foundation models, inverting classical noisy-label assumptions.",
      "Designed Layer-Wise Sensitivity Masking enforcing uniform 25% active LoRA density across all 12 transformer blocks to prevent rank collapse.",
      "Engineered Cross-Attention Adapter connecting question-token queries to document key-value pairs, filtering corrupted OCR spans.",
      "Developed Decoupled Quality Estimator Q(x) with batch normalization to prevent loss-scale dampening under severe noise.",
      "Achieved Mean F1 0.7992 ± 0.0067 (Peak: 0.8067 at Seed 123) — statistically stable across 3 independent seeds.",
      "Proposed future UniMoE-PEFT with Token-Level Modality Discrepancy Index (TMDI) and PAC-Bayesian generalization bounds."
    ],
    pdfUrl: assetUrl("./docs/Updated research progress report.pdf"),
    bibtex: `@article{imam2026docxar,
  title={DocXAR-CUFIT: Robust Parameter-Efficient Fine-Tuning for Multimodal Document Understanding under Structured Input Corruption},
  author={Imam, Md. Rafi},
  journal={Research Progress Report},
  year={2026}
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
    abstract: "Curated a Reddit-sourced dataset from 'SuicideWatch' and 'depression' subreddits via the Pushshift API and applied LSTM and Random Forest classifiers to detect suicidal ideation in text. Achieved up to 93% accuracy in suicidal thought analysis, advancing NLP-based mental health screening and contributing a reusable public dataset for crisis detection research.",
    contributions: [
      "Curated original Reddit dataset from SuicideWatch and depression subreddits via Pushshift API — first-of-kind for RUET ECE.",
      "Designed dual-model architecture: LSTM for sequence-aware pattern detection + Random Forest for TF-IDF feature classification.",
      "Achieved 93% accuracy in suicidal thought detection — outperforming prior NLP baselines.",
      "Contributed reusable labeled dataset for future mental health NLP research."
    ],
    pdfUrl: assetUrl("./docs/Suicidal Thought Detection Using NLP(Natural Language Processing) on Reddit Data.pdf"),
    bibtex: `@inproceedings{imam2023suicidal,
  title={Suicidal Thought Detection Using NLP on Reddit Data},
  author={Imam, MD. Rafi and Jyoti, Oishi and Afrin, Zakia and Hossain, Md. Munawar and Mou, Tamanna Hossain},
  booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
  pages={1--6},
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
    abstract: "Developed a privacy-preserving decentralized federated learning framework for medical lung CT scan classification without centralizing patient data. Implemented client-side InceptionV3 feature extractors with secure parameter aggregation, validating global model convergence under non-IID data distributions — demonstrating federated AI viability in sensitive healthcare contexts.",
    contributions: [
      "Implemented client-side InceptionV3 feature extractors for distributed local training on lung CT scans.",
      "Engineered secure FedAvg parameter aggregation protocol maintaining privacy without centralized data exposure.",
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
    id: "iccit-yolov8-driving",
    title: "YOLOv8-based Object Detection for Self-driving Cars",
    authors: "Zakia Afrin, Fariya Tabassum, Hafsa Binte Kibria, MD. Rafi Imam",
    role: "Fourth Author",
    venue: "26th IEEE International Conference on Computer and Information Technology (ICCIT 2023), Cox's Bazar, Bangladesh",
    year: 2023,
    category: "Computer Vision",
    abstract: "Deployed real-time YOLOv8-based object detection models for autonomous vehicle navigation under adverse weather conditions including low-light and rain. Benchmarked inference latency on edge computing hardware, evaluating bounding box prediction accuracy across diverse environmental scenarios for safe self-driving deployment.",
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
  },
  {
    id: "iccit-pcos-ml",
    title: "A Comparative Study for Detecting Polycystic Ovary Syndrome Using A Machine Learning Framework",
    authors: "Tamanna Hossain Mou, MD. Rafi Imam, et al.",
    role: "Co-author",
    venue: "26th IEEE International Conference on Computer and Information Technology (ICCIT 2023), Cox's Bazar, Bangladesh",
    year: 2023,
    category: "Medical AI",
    abstract: "Applied feature selection techniques and ensemble machine learning algorithms (XGBoost, Random Forest, SVM) to classify Polycystic Ovary Syndrome from clinical metabolic and hormonal indicators. Conducted model interpretability analysis via feature importance, demonstrating practical clinical diagnostic utility and providing a reproducible benchmark for PCOS detection in resource-limited healthcare settings.",
    contributions: [
      "Clinical data preprocessing, missing value imputation, and statistical correlation analysis for PCOS biomarkers.",
      "Comparative benchmark: XGBoost, Random Forest, and SVM across multiple feature subsets.",
      "Feature importance analysis and SHAP-style model interpretability for clinical translucency.",
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
  }
];

// ─── WORK EXPERIENCE ──────────────────────────────────────────────────────────
export const WORK_EXPERIENCE = [
  {
    role: "Assistant Officer / Software Development Officer",
    division: "ICT Division — AI & Automation",
    company: "Jamuna Bank PLC",
    period: "Dec 2023 — Present",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Independently engineered a production-grade Face Liveness Verification & PAD system reducing transaction verification latency from >5.0s to ~800ms via decoupled async architecture (asyncio.gather across CUDA inference nodes).",
      "Deployed Swin-B Transformer with mid-backbone Stage-3 hook for spatial presentation attack detection, detecting screen replay attacks via FFT spectral periodicity + Lucas-Kanade optical flow without supervised classifiers.",
      "Built cryptographic anti-injection infrastructure: HMAC-SHA256 frame attestation, session-bound nonces (TTL=120s), timestamp monotonicity across 8fps WebSocket streams — defending against OBS virtual camera injection.",
      "Architected enterprise eKYC Digital Account Opening System (.NET Core, React, Python, FastAPI) with NID OCR & biometric face matching via Polygon APIs and document understanding via Google Vision APIs.",
      "Built distributed Bancassurance Platform using Node.js, Apache Kafka, MongoDB, and Netflix Conductor for async workflow orchestration and fault-tolerant retry handling.",
      "Applied SALLoRA/DocXAR-CUFIT background active-learning for continual fraud-pattern adaptation without full backbone retraining — directly bridging research and production."
    ],
    techStack: ["PyTorch", "Swin-B Transformer", "ArcFace", "FastAPI", "PostgreSQL/pgvector", "asyncio", "WebSocket", "Node.js", "Kafka", "React", ".NET Core", "Docker", "Linux"]
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
    "Leadership Award: Class Representative (2020 — 2023)"
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
    verbalPercentile: "10th Percentile",
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
    description: "Complete academic CV detailing education, publications, research experience, production AI systems, and technical skills.",
    fileUrl: assetUrl("./docs/MD_RAFI_IMAM_CV.pdf"),
    fileSize: "114 KB",
    date: "July 2026"
  },
  {
    id: "doc-docxar-report",
    title: "DocXAR-CUFIT Research Progress Report",
    category: "Research",
    description: "Updated research progress report introducing DocXAR-CUFIT: Cross-Attention Adapters + Curriculum Fine-Tuning achieving Mean F1 0.7992 ± 0.0067 on FUNSD under 50% OCR corruption.",
    fileUrl: assetUrl("./docs/Updated research progress report.pdf"),
    fileSize: "161 KB",
    date: "August 2026"
  },
  {
    id: "doc-docxar-summary",
    title: "DocXAR-CUFIT Research Summary",
    category: "Research",
    description: "2-page executive summary of DocXAR-CUFIT & UniMoE-PEFT frameworks, featuring benchmark results, architectural pipeline, and future research roadmap.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_DocXAR_CUFIT_Research_Summary.pdf"),
    fileSize: "185 KB",
    date: "August 2026"
  },
  {
    id: "doc-enterprise-ai",
    title: "Enterprise AI: Liveness Verification & PAD System",
    category: "Research",
    description: "Production-grade Face Liveness Verification and Presentation Attack Detection system engineered for Jamuna Bank PLC — Swin-B Transformer, ArcFace, physics-informed screen replay detection.",
    fileUrl: assetUrl("./docs/Enterprise_AI_System_Real_Time_Liveness_Verification_and_PAD.pdf"),
    fileSize: "10 KB",
    date: "2026"
  },
  {
    id: "doc-suicidal-nlp",
    title: "Suicidal Thought Detection Using NLP (IEEE ICCIT 2023)",
    category: "Research",
    description: "First-author IEEE paper on suicidal ideation detection from Reddit data using LSTM and Random Forest classifiers — achieving 93% accuracy with a contributed original dataset.",
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
    description: "IEEE paper on YOLOv8-based real-time object detection for autonomous vehicles under adverse weather conditions (low-light, rain), with edge hardware benchmarking.",
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
    description: "Official ETS score report: Quantitative 164 (63rd %ile), Verbal 140, AWA 3.0. Test date: Sept 20, 2025.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_GRE.pdf"),
    fileSize: "446 KB",
    date: "Sept 20, 2025"
  },
  {
    id: "doc-ielts",
    title: "Official IELTS Academic Score Report",
    category: "Test Scores",
    description: "Official British Council / IDP IELTS report: Overall Band 7.0 (CEFR C1 Level). Test date: Nov 28, 2025.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_IELTS.pdf"),
    fileSize: "1.0 MB",
    date: "Nov 28, 2025"
  },
  {
    id: "doc-transcript",
    title: "RUET Academic Transcript & Certificate",
    category: "Transcript",
    description: "Official RUET B.Sc. in Electrical & Computer Engineering provisional certificate and 4-year grade sheets (CGPA 3.30, Last 60 GPA 3.55).",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_Transcript.pdf"),
    fileSize: "10.1 MB",
    date: "October 2023"
  }
];

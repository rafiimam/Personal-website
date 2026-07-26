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

export const SALLORA_RESEARCH = {
  title: "SALLoRA: Robust Parameter-Efficient Adaptation under Structured Multimodal Corruption",
  subtitle: "Sensitivity-Aware Layer-wise LoRA with Warm-up and Decoupled Quality Estimation",
  status: "Active Research Project / Working Prototype (Preprint Report)",
  backbone: "LayoutLMv3-base (Frozen)",
  benchmark: "FUNSD (Form Understanding in Noisy Scanned Documents)",
  problemStatement: "While document understanding models reason over multimodal streams (text, layout, vision), real-world scanned documents introduce structured OCR noise (character substitutions, deletions, insertions). Classical noisy-label methods assume clean inputs and corrupted labels. SALLoRA addresses the inverse challenge: learning robustly when multimodal inputs themselves are degraded.",
  components: [
    {
      name: "Frozen Foundation Backbone",
      desc: "LayoutLMv3-base weights remain strictly frozen, concentrating adaptation into lightweight low-rank adapters."
    },
    {
      name: "Warm-up Curriculum Phase",
      desc: "Trains only the classifier head initially on frozen representations to anchor the decision boundary before low-rank updates."
    },
    {
      name: "Layer-wise Learnable Scaling",
      desc: "Scalar gates r_l = σ(s_l) control adapter contribution per transformer layer: H_l = H_{l-1} + r_l · ΔW_l(H_{l-1})."
    },
    {
      name: "Gradient Sensitivity Masking",
      desc: "Computes binary mask M_l selecting top 20% parameters most responsive to clean signals, masking adapter gradients during adaptation."
    },
    {
      name: "Decoupled Quality Estimator Q(x)",
      desc: "Feed-forward network evaluated under torch.no_grad() outputting per-sample weight q_i ∈ [0.3, 0.7] to scale task loss without backprop drift."
    }
  ],
  results: [
    { method: "Clean LoRA (Upper Reference)", corruption: "0%", f1: 0.6710, note: "Clean baseline reference" },
    { method: "Noisy LoRA (No Robustness)", corruption: "50%", f1: 0.6334, note: "-3.76 F1 degradation" },
    { method: "SALLoRA (Proposed Framework)", corruption: "50%", f1: 0.7758, note: "+14.24 F1 over noisy LoRA" }
  ],
  pdfUrl: assetUrl("./docs/MD_Rafi_Imam_SALLoRA_Research_Progress_Report.pdf"),
  summaryPdfUrl: assetUrl("./docs/MD_Rafi_Imam_ResearchSummary.pdf")
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "sallora-2026",
    title: "SALLoRA: Robust Parameter-Efficient Fine-Tuning for Multimodal Foundation Models under Structured Input Corruption",
    authors: "Md. Rafi Imam",
    role: "Lead Author",
    venue: "Research Progress Report & Working Prototype",
    year: 2026,
    category: "Multimodal PEFT",
    abstract: "Summarizes ongoing exploratory work on robust parameter-efficient fine-tuning (PEFT) for multimodal document understanding models under structured input corruption (e.g., OCR noise). Introduces SALLoRA featuring a two-phase warm-up curriculum, layer-wise scaling, gradient sensitivity masking, and decoupled quality estimation.",
    contributions: [
      "Pioneered noisy-input PEFT paradigm for multimodal foundation backbones.",
      "Engineered gradient sensitivity masking to isolate parameters responsive to uncorrupted representations.",
      "Achieved 0.7758 F1 score on clean FUNSD benchmark under 50% training-time OCR noise."
    ],
    pdfUrl: assetUrl("./docs/MD_Rafi_Imam_SALLoRA_Research_Progress_Report.pdf"),
    bibtex: `@article{imam2026sallora,
  title={SALLoRA: Robust Parameter-Efficient Fine-Tuning for Multimodal Foundation Models under Structured Input Corruption},
  author={Imam, Md. Rafi},
  journal={Research Progress Report},
  year={2026}
}`,
    highlight: true
  },
  {
    id: "iccit-suicidal-nlp",
    title: "Suicidal Thought Detection Using NLP on Reddit Data",
    authors: "R. Imam, et al.",
    role: "First Author",
    venue: "26th IEEE International Conference on Computer and Information Technology (ICCIT 2023)",
    year: 2023,
    category: "NLP",
    abstract: "Constructed transformer-based NLP architectures to detect early markers of suicidal ideation and mental distress from high-noise social media posts on Reddit.",
    contributions: [
      "Dataset construction, annotation, and specialized text preprocessing pipeline.",
      "Transformer model architecture design and comparative benchmarking against traditional NLP models.",
      "Evaluated model generalization across diverse subreddits."
    ],
    pdfUrl: assetUrl("./docs/MD_Rafi_Imam_Selected_Publications.pdf"),
    bibtex: `@inproceedings{imam2023suicidal,
  title={Suicidal Thought Detection Using NLP on Reddit Data},
  author={Imam, R. and others},
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
    authors: "Md. M. Hossain, et al., R. Imam",
    role: "Co-author",
    venue: "26th IEEE International Conference on Computer and Information Technology (ICCIT 2023)",
    year: 2023,
    category: "Federated Learning",
    abstract: "Developed a privacy-preserving decentralized federated learning framework for medical lung CT scan classification without centralized patient data aggregation.",
    contributions: [
      "Implemented client-side InceptionV3 feature extractors for local node training.",
      "Engineered secure parameter aggregation protocol and validated global model convergence.",
      "Analyzed communication efficiency and accuracy trade-offs across non-IID data distributions."
    ],
    pdfUrl: assetUrl("./docs/MD_Rafi_Imam_Selected_Publications.pdf"),
    bibtex: `@inproceedings{hossain2023federated,
  title={Privacy-Preserving Federated Learning for Lung Cancer Classification},
  author={Hossain, Md. M. and Imam, R. and others},
  booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
  year={2023},
  organization={IEEE}
}`
  },
  {
    id: "iccit-yolov8-driving",
    title: "YOLOv8-based Object Detection for Self-driving Cars",
    authors: "Z. Afrin, F. Tabassum, H. B. Kibria, M. R. Imam, and M. R. Hasan",
    role: "Fourth Author",
    venue: "26th IEEE International Conference on Computer and Information Technology (ICCIT 2023)",
    year: 2023,
    category: "Computer Vision",
    abstract: "Deployed real-time object detection models for autonomous vehicle navigation under adverse weather conditions using fine-tuned YOLOv8 vision backbones.",
    contributions: [
      "YOLOv8 architecture optimization and custom dataset augmentation.",
      "Real-time latency benchmarking on edge computing hardware.",
      "Evaluated bounding box prediction accuracy across low-light and rain scenarios."
    ],
    pdfUrl: assetUrl("./docs/MD_Rafi_Imam_Selected_Publications.pdf"),
    bibtex: `@inproceedings{afrin2023yolov8,
  title={YOLOv8-based Object Detection for Self-driving Cars},
  author={Afrin, Z. and Tabassum, F. and Kibria, H. B. and Imam, M. R. and Hasan, M. R.},
  booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
  year={2023},
  organization={IEEE}
}`
  },
  {
    id: "iccit-pcos-ml",
    title: "Detecting Polycystic Ovary Syndrome Using Machine Learning",
    authors: "T. H. Mou, et al., R. Imam",
    role: "Co-author",
    venue: "26th IEEE International Conference on Computer and Information Technology (ICCIT 2023)",
    year: 2023,
    category: "Medical AI",
    abstract: "Applied feature selection techniques and ensemble machine learning algorithms to diagnose PCOS from clinical metabolic and hormonal indicators.",
    contributions: [
      "Clinical data preprocessing, imputation, and statistical correlation analysis.",
      "Baseline machine learning model development (XGBoost, Random Forest, SVM).",
      "Model interpretability and feature importance analysis."
    ],
    pdfUrl: assetUrl("./docs/MD_Rafi_Imam_Selected_Publications.pdf"),
    bibtex: `@inproceedings{mou2023pcos,
  title={Detecting Polycystic Ovary Syndrome Using Machine Learning},
  author={Mou, T. H. and Imam, R. and others},
  booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
  year={2023},
  organization={IEEE}
}`
  }
];

export const WORK_EXPERIENCE = [
  {
    role: "Assistant Officer / Software Development Officer",
    division: "ICT Division — AI & Automation",
    company: "Jamuna Bank PLC",
    period: "Dec 2023 — Present",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Designing and deploying production AI systems in Linux environments, focusing on scalability, security, and real-time processing.",
      "Engineered enterprise eKYC Digital Account Opening System (.NET Core, React, Tailwind, Python, FastAPI) with NID OCR & Face Matching via Polygon APIs and document understanding via Google Vision APIs.",
      "Architected distributed event-driven Bancassurance Platform using Node.js, Apache Kafka, MongoDB, and Netflix Conductor for asynchronous workflow orchestration and fault-tolerant retry handling.",
      "Built real-time anti-money laundering (AML) checks, deduplication pipelines, transaction profiling, and WebSocket push notification services."
    ],
    techStack: ["Python", "FastAPI", "PyTorch", "LayoutLM / OCR", "Node.js", "Kafka", "React", ".NET Core", "Docker", "Linux"]
  }
];

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
    id: "doc-sallora-report",
    title: "SALLoRA Progress Report",
    category: "Research",
    description: "Comprehensive 7-page technical report on Robust Parameter-Efficient Fine-Tuning for Multimodal Foundation Models under OCR corruption.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_SALLoRA_Research_Progress_Report.pdf"),
    fileSize: "200 KB",
    date: "July 21, 2026"
  },
  {
    id: "doc-research-summary",
    title: "SALLoRA Research Summary",
    category: "Research",
    description: "Executive 2-page research goal summary featuring the SALLoRA architecture diagram, mathematical formulation, and future PhD roadmap.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_ResearchSummary.pdf"),
    fileSize: "150 KB",
    date: "July 2026"
  },
  {
    id: "doc-selected-pubs",
    title: "Selected Publications Overview",
    category: "Research",
    description: "Summary document highlighting individual technical contributions to 4 IEEE ICCIT 2023 papers and current ML systems research interests.",
    fileUrl: assetUrl("./docs/MD_Rafi_Imam_Selected_Publications.pdf"),
    fileSize: "107 KB",
    date: "2023"
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

export interface ExperienceItemType {
  id: string;
  company: string;
  companyLogo?: string;
  location: string;
  isRemote?: boolean;
  statusDotColor?: string; // e.g. '#38bdf8' (cyan) or '#10b981' (green)
  role: string;
  employmentType: string; // e.g. 'Full-time', 'Part-time', 'Contract'
  period: string; // e.g. '01.2025 — Present'
  duration: string; // e.g. '1y 2m'
  description: string[];
  technologies: string[];
  defaultExpanded?: boolean;
}

export interface ProjectItemType {
  id: string;
  title: string;
  tagline: string;
  description: string;
  isPrimary?: boolean;
  highlights?: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  thumbnail?: string;
  badge?: string;
}

export interface SkillCategoryType {
  category: string;
  description: string;
  skills: string[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    role: string;
    location: string;
    country: string;
    tagline: string;
    availability: string;
    isOpenToWork: boolean;
    timezone: string;
    avatarUrl: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    twitterUrl?: string;
    resumeUrl?: string;
  };
  videoBanner: {
    src: string;
    objectPosition: string; // CSS object-position e.g. 'center center' or '50% 30%'
    heightDesktop: number; // in pixels, approx 180-240px
    heightMobile: number; // in pixels
    overlayOpacity: number; // 0 to 1
    fallbackPoster?: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  about: {
    headline: string;
    bioParagraphs: string[];
    corePillars: {
      title: string;
      description: string;
    }[];
  };
  experience: ExperienceItemType[];
  projects: ProjectItemType[];
  skills: SkillCategoryType[];
  contact: {
    heading: string;
    invitation: string;
    note: string;
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Shriram Phatale",
    role: "Full-Stack Developer",
    location: "Pune, Maharashtra",
    country: "India",
    tagline: "Full Stack Engineer. I love building, breaking, learning, and making things better.",
    availability: "Open to opportunities",
    isOpenToWork: true,
    timezone: "Asia/Kolkata",
    avatarUrl: "/images/avatar.jpg",
    email: "shriramphatale@gmail.com",
    githubUrl: "https://github.com/shriramphatale",
    linkedinUrl: "https://linkedin.com/in/shriram-phatale",
    resumeUrl: "#contact",
  },
  videoBanner: {
    src: "/videos/portfolio-banner.mp4",
    objectPosition: "center center",
    heightDesktop: 250,
    heightMobile: 150,
    overlayOpacity: 0.2,
  },
  navigation: [
    { label: "About", href: "#about" },
    // { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    headline: "Engineering clean full-stack systems and high-precision AI products.",
    bioParagraphs: [
      "I am a full-stack engineer focused on creating robust backend architectures and highly intuitive, responsive frontends. My engineering philosophy centers on code maintainability, high throughput, and seamless user experiences.",
      "Lately, my focus has been on building practical Generative AI tools and production Retrieval-Augmented Generation (RAG) pipelines—transforming raw unstructured data and documents into conversational, fact-grounded intelligence with verified citations.",
    ],
    corePillars: [
      {
        title: "Full-Stack Architecture",
        description: "End-to-end web apps with TypeScript, React, Node.js, and Express, emphasizing type-safety and modularity.",
      },
      {
        title: "LLM Systems & RAG",
        description: "Context retrieval, vector embeddings, chunking strategies, semantic reranking, and LangChain orchestrations.",
      },
      {
        title: "Distributed Data & Queues",
        description: "Scalable backend caching and resilient background worker systems utilizing Redis and BullMQ.",
      },
      {
        title: "Reliable Engineering",
        description: "Database modeling with MongoDB, secure JWT/OAuth workflows, Docker containerization, and zero-compromise UX.",
      },
    ],
  },
  experience: [
    {
      id: "exp-1",
      company: "Full-Stack & AI Engineering",
      location: "Pune, India (Remote / Hybrid)",
      isRemote: true,
      statusDotColor: "#38bdf8", // Cyan status dot matching reference screenshot
      role: "Full-Stack Developer",
      employmentType: "Full-time",
      period: "01.2025 — Present",
      duration: "Ongoing",
      defaultExpanded: true,
      description: [
        "Architecting production-ready full-stack applications with React, TypeScript, Node.js, and Express.",
        "Developing end-to-end Retrieval-Augmented Generation (RAG) architectures with LangChain, embeddings, and vector databases.",
        "Designing resilient background job pipelines with Redis and BullMQ for asynchronous document parsing and ingestion.",
        "Crafting minimal, high-performance interfaces with Tailwind CSS and modular design tokens.",
        "Maintaining database schemas, indexing strategies, and aggregation pipelines in MongoDB.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "BullMQ",
        "LangChain",
        "RAG",
        "Tailwind CSS",
      ],
    },
    {
      id: "exp-2",
      company: "AI & Web Solutions",
      location: "Pune, Maharashtra, India",
      isRemote: false,
      statusDotColor: "#10b981", // Emerald dot
      role: "Software Engineer",
      employmentType: "Full-time / Project",
      period: "2024 — 2025",
      duration: "1 yr",
      defaultExpanded: false,
      description: [
        "Built responsive web applications and RESTful microservices with clean API contracts.",
        "Integrated third-party APIs, vector search tools, and automated document analysis workflows.",
        "Containerized development and deployment workflows using Docker for reproducible environments.",
        "Improved server response latencies and database query throughput through Redis caching layers.",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Docker",
        "REST APIs",
        "Git",
      ],
    },
  ],
  projects: [
    {
      id: "askdoc-ai",
      title: "AskDoc.ai",
      tagline: "AI-powered PDF chat application with vector search and grounded citations",
      description:
        "AskDoc.ai allows users to upload complex PDF documents and ask questions in natural language. Powered by modern RAG techniques, it converts unstructured documents into vector embeddings and streams fact-grounded responses with exact source citations.",
      isPrimary: true,
      badge: "",
      highlights: [
        "Automated PDF document parsing, text normalization, and semantic chunking",
        "Asynchronous ingestion queue powered by BullMQ and Redis for zero-latency uploads",
        "Hybrid vector search with LangChain embeddings and cosine similarity retrieval",
        "Real-time streaming responses with page number attribution to eliminate AI hallucinations",
        "Robust JWT authentication, rate-limiting, and subscription tier management",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "BullMQ",
        "LangChain",
        "Vector Search",
        "RAG",
        "Generative AI",
      ],
      githubUrl: "https://github.com/shriramphatale/askdoc-ai",
      demoUrl: "https://askdoc.ai",
    },
    {
      id: "letsTalk",
      title: "Let’s Talk – Real-Time Chat Application",
      tagline: "High-throughput task queue engine with Redis and BullMQ",
      description:
        "Let's Talk is a real-time communication platform that allows users to connect, chat, and share messages seamlessly. Built with modern web technologies, it provides a responsive and interactive messaging experience with secure user authentication, instant message delivery, and an intuitive interface for smooth communication.",
      isPrimary: false,
      badge: "",
      highlights: [
        "Fault-tolerant job scheduling with BullMQ concurrency locks",
        "Dead-letter queues and automated alerting mechanisms",
        "Memory-efficient stream processing with Redis cache",
      ],
      technologies: ["React", "Node.js", "Express", "Socket.IO", "Zustand" ],
      githubUrl: "https://github.com/shriramphatale/letstalk",
      demoUrl: 'https://letstalk-3uch.onrender.com/'
    },
    // {
    //   id: "rag-doc-indexer",
    //   title: "Agentic Knowledge Retrieval Engine",
    //   tagline: "Semantic search and context reranking tool for LLM agents",
    //   description:
    //     "A modular retrieval engine designed to index multi-format documents, perform semantic reranking on query embeddings, and supply dense context payloads to LLM reasoning loops.",
    //   isPrimary: false,
    //   badge: "AI Infrastructure",
    //   highlights: [
    //     "Custom chunking strategies with overlap and metadata retention",
    //     "Vector database integration with high-speed indexing",
    //     "Evaluated retrieval precision against standard benchmarks",
    //   ],
    //   technologies: ["LangChain", "Vector DB", "Node.js", "Express", "REST APIs"],
    //   githubUrl: "https://github.com/shriramphatale/agentic-retrieval",
    // },
  ],
  skills: [
    {
      category: "Frontend",
      description: "Modern web interfaces, design systems, and responsive applications",
      skills: ["JavaScript", "TypeScript", "React", "HTML", "CSS", "Tailwind CSS", "Redux", "Zustand"],
    },
    {
      category: "Backend",
      description: "Scalable server architectures, APIs, and service integrations",
      skills: ["Node.js", "Express.js", "Websockets", "Socket.io","REST APIs"],
    },
    {
      category: "Databases & Infrastructure",
      description: "Data persistence, in-memory caching, message queues, and containers",
      skills: ["MongoDB", "Redis", "Docker", "BullMQ", "Background Jobs"],
    },
    {
      category: "AI & LLM Applications",
      description: "Language models, semantic vector search, and intelligent agents",
      skills: ["LangChain", "LLM APIs", "Embeddings", "Vector Databases", "RAG", "Prompt Engineering"],
    },
  ],
  contact: {
    heading: "Let's connect",
    invitation:
      "I am currently open to opportunities in full-stack engineering, AI/RAG system development, and technical collaboration. Feel free to reach out via email or connect on LinkedIn and GitHub.",
    note: "Response time typically within 24 hours.",
  },
};

import ReactMarkdown from 'react-markdown';

// About Me Page Data
const name = { first: "Renjie", last: "Wu", full: "Renjie Wu" };
const profilePic = `${process.env.PUBLIC_URL}/images/me.jpg`;

const subheadline = "AI for Biology · Representation Learning · Single-cell Multi-omics";

const introduction =
  "I'm a Master's student in Computational Biology at Harvard T.H. Chan School of Public Health. I'm currently a Graduate Researcher at Mass General Hospital, advised by Dr. Luca Pinello.\n\n" +
  "I'm interested in representation learning across biological modalities, with a focus on developing computational methods for single-cell and multi-omic data. I'm excited about turning high-dimensional, noisy biological signals into actionable insights for biomedical research—and ultimately, healthcare impact.\n\n" +
  "Let's code for a healthier world! ✨";

const cvLink = `${process.env.PUBLIC_URL}/files/cv_ml4bio_drugdiscovery_202602.pdf`;


// Contact Page Data
const githublink = "https://github.com/ren-jie-wu";
const linkedinlink = "https://www.linkedin.com/in/renjie-wu-334199325/";
const email = "renjiewu02@gmail.com";

// Projects and Experience Data
const defaultHero = "https://placehold.co/800x500?text=Project+Demo+Screenshot";

const projects = [
  {
    id: 1,
    title: "KGMem",
    icon: `${process.env.PUBLIC_URL}/images/kgmem.jpeg`,
    featured: false,
    tags: ['Software Development', ],
    description: "A full-stack web application for organizing, retrieving, and visualizing knowledge as graphs with LLM.",
    skills: ["Python/Flask", "JavaScript/React", "GraphRAG", "LLM Integration", "Full-Stack Development"],
    github: "https://github.com/ren-jie-wu/KGMem",
    youtube: "https://youtu.be/bEEVs-A-M48",
    summary: "- Built a full-stack web app for organizing personal knowledge as connected graphs. \n" +
             "- Integrated LLM and GraphRAG-based extraction and retrieval for natural-language querying. \n" +
             "- Focused on end-to-end system design, usability, and iterative product scoping.", 
    details: "##### Motivation\n" +
             "I built KGMem to explore a question I often encounter in research and learning: how can fragmented information be turned into something more structured, connected, and easier to retrieve? Instead of treating notes and documents as isolated text, KGMem organizes them into graph-based knowledge that can be queried and visualized more naturally.\n\n" +
    
             "##### What I Built\n" +
             "KGMem is a full-stack web application that supports **knowledge ingestion, organization, retrieval, and visualization**. Users can create separate notebooks for different topics, process materials into graph-structured knowledge, and interact with the results through a visual interface and natural-language queries.\n\n" +
    
             "##### Technical Design\n" +
             "On the backend, I integrated **LLM-based processing** with **GraphRAG-style retrieval** to transform source materials into structured relationships and make them queryable beyond simple keyword search. On the frontend, I built an interface for notebook management and plugged in an interactive graph exploration tool, aiming to make connected knowledge easier to navigate and interpret. The project also required architectural trade-offs across usability, retrieval quality, and implementation complexity.\n\n" +
    
             "##### Limitations and Future Work\n" +
             "Current limitations include graph construction quality and efficiency, especially around redundancy, synonym handling, and scaling to larger collections of documents. Future work would focus on improving graph quality, supporting larger workloads, and adapting the system for more domain-specific use cases.\n\n" +
    
             "##### Lessons Learned\n" +
             "This project strengthened my skills in **full-stack development, LLM integration, troubleshooting, and product scoping**. It also taught me how to translate an open-ended idea into an end-to-end system by iterating on architecture, evaluating tools, and balancing ambition with feasibility.",
     hero: `${process.env.PUBLIC_URL}/images/kgmem_hero.png`,
  },
  {
    id: 2,
    title: "GRN Inference",
    icon: `${process.env.PUBLIC_URL}/images/velogrn.jpeg`,
    featured: true,
    tags: ['Single-cell', ],
    description: "Deep learning model for cell fate prediction and **G**ene **R**egulatory **N**etwork **Inference**.",
    skills: ["PyTorch", "Graph Neural Network", "Attention Mechanism", "scRNA-seq", "RNA Velocity"],
    github: "https://github.com/ren-jie-wu/veloGRN",
    youtube: null,
    summary: "Summary about GRN...",
    details: "Details about GRN...",
    hero: defaultHero,
  },
  {
    id: 3,
    title: "Plasticity in CRC",
    icon: `${process.env.PUBLIC_URL}/images/crc.jpeg`,
    featured: true,
    tags: ['Single-cell', 'Cancer Biology', ],
    description: "Single-cell genomic data analysis of **Plasticity** within **C**olo**R**ectal **C**ancer.",
    skills: ["scRNA-seq", "Seurat", "Trajectory Analysis", "Cancer Biology"],
    github: null,
    youtube: null,
    summary: "Summary about CRC...",
    details: "Details about CRC...",
    hero: defaultHero,
  }
];

const experience = [
  {
    id: 1,
    org: "Harvard University",
    role: "M.S. in Computational Biology",
    dept: "School of Public Health",
    location: "Boston, MA",
    time: "2024 - 2026",
    icon: "https://www.harvard.edu/media-relations/wp-content/uploads/sites/3/2024/03/102423_Features_SM_34-scaled.jpg",
    focus: "Focus about Harvard...",
    skills: "Skills about Harvard...",
  },
  {
    id: 2,
    org: "Peking University",
    role: "B.Eng. in Bioinformatics",
    dept: "School of Life Sciences",
    location: "Beijing, China",
    time: "2020 - 2024",
    icon: "https://english.pku.edu.cn/Uploads/Bden/Picture/2021/10/18/s616d1156ea429_2412_1273_0_0.jpg",
    focus: "Focus about Peking University...",
    skills: "Skills about Peking University...",
  },
];

// Other Data and Functions
const sections = [
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' }
];

const MarkdownRenderer = ({ markdownText }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
};

export { name, subheadline, introduction, githublink, linkedinlink, email, profilePic, cvLink, sections, projects, experience, MarkdownRenderer };
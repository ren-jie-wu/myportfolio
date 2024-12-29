import ReactMarkdown from 'react-markdown';

// About Me Page Data
const name = {"first": "Renjie", "last": "Wu", "full": "Renjie Wu"};
const profilePic = `${process.env.PUBLIC_URL}/images/me.jpg`;
const positions = "Machine Learning Engineer 🧑‍💻 | Biomedical AI Researcher 🧑‍🔬";
const introduction = "---\n" +
                     "I'm particularly enthusiastic at bridging machine learning and biomedical research, and experienced with:\n\n" +
                     "&nbsp;&nbsp;📊 **Clinical Data Analyses** using state-of-the-art machine learning models  \n" +
                     "&nbsp;&nbsp;🤖 **Deep Learning Model Development** for biological pattern recognition  \n" +
                     "&nbsp;&nbsp;🕸️ **LLM Integrated Web App Development** to enhance biological research\n\n" +
                     "Let's code for a healthier world! ✨";
const cvLink = `${process.env.PUBLIC_URL}/files/cv.pdf`;

// Contact Page Data
const githublink = "https://github.com/vo-olb";
const linkedinlink = "https://www.linkedin.com/in/renjie-wu-334199325/";
const email = "renjiewu@mit.edu";

// Projects and Experience Data
const projects = [
  {
    id: 1,
    title: "KGMem",
    icon: `${process.env.PUBLIC_URL}/images/kgmem.jpeg`,
    description: "Web application of AI assistant **Mem**orizing and retrieving **K**nowledge in form of **G**raphs.",
    skills: ["Python/Flask", "JavaScript/React", "Graph RAG", "LLM API", "Full-Stack Development", "Project Management"],
    github: "https://github.com/vo-olb/KGMem",
    youtube: "https://youtu.be/bEEVs-A-M48",
    summary: "This project tackles the challenge of managing numerous, fragmented knowledge by building a system that **organizes, queries, and visualizes knowledge as a connected graph**. Using LLM's API, Graph RAG techniques and interactive visualization tools, it transforms materials into **structured, searchable networks**, helping researchers and learners explore insights effectively.",
    details: "#### Motivation\n" +
             "As a bioscience researcher, how to **remember** overwhelming knowledge? How to **structurize and connect** these knowledge to discover new insights? How to **organize** what we've learned from different sources to **retrieve** them effectively? These are why the memory assistant KGMem comes in.\n" +
             "#### Challenges and Solutions\n" +
             "1. To categorize numerous knowledge from different sources, the app allows users to **manage different notebooks** containing their own sources or topics rather than all in one place, thus making the retrieval more efficient. This shares the same idea with [Google's NotebookLM](https://notebooklm.google), but the project steps forward in using Graph RAG rather than normal RAG for knowledge storage and query.\n" +
             "2. As mentioned in the motivation, sometimes **connected knowledge** can be more powerful to discover implicit relationships between concepts; and its **visualization** would make the process of understanding knowledge more fun and easy. Typical knowledge graphs such as [Neo4j](https://neo4j.com/labs/genai-ecosystem/llm-graph-builder/) conceptually do the same thing, but it uses a rather strict query language _Cypher_ undermining flexibility. Thus, this project seeks using LLM to **handle natural language query processing**, and using graph techniques to find memorized concepts that are **semantically or structurally ralated** to the queries. After research, Microsoft's [GraphRAG](https://github.com/microsoft/graphrag) turns out to be the solution and thus is integrated into the backend processing.\n" +
             "#### Discussion: Success, Limitations, and Lessons Learned\n" +
             "1. To categorize numerous knowledge from different sources, the app allows users to **manage different notebooks** containing their own sources or topics rather than all in one place, thus making the retrieval more efficient. This shares the same idea with [Google's NotebookLM](https://notebooklm.google), but the project steps forward in using Graph RAG rather than normal RAG for knowledge storage and query.\n" +
             "2. As mentioned in the motivation, sometimes **connected knowledge** can be more powerful to discover implicit relationships between concepts; and its **visualization** would make the process of understanding knowledge more fun and easy. Typical knowledge graphs such as [Neo4j](https://neo4j.com/labs/genai-ecosystem/llm-graph-builder/) conceptually do the same thing, but it uses a rather strict query language _Cypher_ undermining flexibility. Thus, this project seeks using LLM to **handle natural language query processing**, and using graph techniques to find memorized concepts that are **semantically or structurally ralated** to the queries. After research, Microsoft's [GraphRAG](https://github.com/microsoft/graphrag) turns out to be the solution and thus is integrated into the backend processing.\n" +
             "#### Discussion: Success, Limitations, and Lessons Learned\n"
  },
  {
    id: 2,
    title: "GRN Inference",
    icon: `${process.env.PUBLIC_URL}/images/velogrn.jpeg`,
    description: "Deep learning model for cell fate prediction and **G**ene **R**egulatory **N**etwork **Inference**.",
    skills: ["PyTorch", "Graph Neural Network", "Attention Mechanism", "scRNA-seq", "RNA Velocity"],
    github: "https://github.com/vo-olb/veloGRN",
    youtube: null,
    summary: "Summary about GRN...",
    details: "Details about GRN...",
  },
  {
    id: 3,
    title: "Plasticity in CRC",
    icon: `${process.env.PUBLIC_URL}/images/crc.jpeg`,
    description: "Single-cell genomic data analysis of **Plasticity** within **C**olo**R**ectal **C**ancer.",
    skills: ["scRNA-seq", "Seurat", "Trajectory Analysis", "Cancer Biology"],
    github: null,
    youtube: null,
    summary: "Summary about CRC...",
    details: "Details about CRC...",
  }
];

const education = [
  {
    id: 1,
    school: "Harvard University",
    degree: "M.S. in Computational Biology",
    dept: "School of Public Health",
    location: "Boston, MA",
    time: "2024 - 2026",
    icon: "https://www.harvard.edu/media-relations/wp-content/uploads/sites/3/2024/03/102423_Features_SM_34-scaled.jpg",
    // gpa: "**GPA**: 4.0/4.0\n",
  },
  {
    id: 2,
    school: "Peking University",
    degree: "B.Eng. in Bioinformatics",
    dept: "School of Life Sciences",
    location: "Beijing, China",
    time: "2020 - 2024",
    icon: "https://english.pku.edu.cn/Uploads/Bden/Picture/2021/10/18/s616d1156ea429_2412_1273_0_0.jpg",
    // gpa: "**Major GPA**: 3.8/4.0 （1st in the major）\n",
    courses: [
      {"name": "Data Structures and Algorithms", "grade": "98.5", skills: ["Python", "Data Structures", "Algorithms"]},
    ],
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

export { name, positions, introduction, githublink, linkedinlink, email, profilePic, cvLink, sections, projects, education, MarkdownRenderer };
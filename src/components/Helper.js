import ReactMarkdown from 'react-markdown';

// About Me Page Data
const name = {"first": "Renjie", "last": "Wu", "full": "Renjie Wu"};
const profilePic = `${process.env.PUBLIC_URL}/images/me.jpg`;
const positions = "ML Engineer | Data Scientist | AI Researcher";
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
    description: "A web application for AI-assisted **Mem**orization and retrieval of **K**nowledge in the form of **G**raphs.",
    skills: ["Python/Flask", "JavaScript/React", "Graph RAG", "LLM API", "Full-Stack Development", "Project Management"],
    github: "https://github.com/vo-olb/KGMem",
    youtube: "https://youtu.be/bEEVs-A-M48",
    summary: "This project addresses the challenge of managing fragmented knowledge by building a system that **organizes, queries, and visualizes knowledge as connected graphs**. By integrating LLM APIs, GraphRAG techniques, and interactive visualization tools, KGMem transforms materials into **searchable, structured networks** — empowering researchers and learners to explore insights effectively.",
    details: "#### Motivation\n" +
             "As a bioscience researcher, I’ve often wondered: how can I **remember** overwhelming amounts of knowledge? How can I **structure and connect** these ideas to better understand them and uncover new insights? And how can I **organize** this information from diverse sources to easily **retrieve** it when needed? These questions inspired KGMem — a memory assistant built to address these challenges.\n\n" +
             "#### Challenges and Solutions\n" +
             "1. **Efficient organization**: To handle knowledge from varied sources, KGMem allows users to create and manage **separate notebooks** for different topics or resources, rather than all in one place. This enhances retrieval efficiency, akin to [Google's NotebookLM](https://notebooklm.google), but with an added edge — leveraging **Graph RAG** for advanced knowledge storage and query.\n" +
             "2. **Connected knowledge**: Understanding relationships between concepts can lead to new discoveries. Visualizing these connections makes learning intuitive and engaging. Unlike tools like [Neo4j](https://neo4j.com/labs/genai-ecosystem/llm-graph-builder/), which rely on rigid query languages like _Cypher_, KGMem uses LLMs for **natural language query processing** and graph techniques to uncover **semantic and structural relationships**. After researching and evaluating options, Microsoft's [GraphRAG](https://github.com/microsoft/graphrag) emerged as the ideal solution and thus is integrated into the backend.\n\n" +
             "#### Discussion: Outcomes, Limitations, and Lessons Learned\n" +
             "**Outcomes**: KGMem successfully delivers solutions to the outlined challenges, featuring a **user-friendly interface** and an **interactive graph visualizer** that enriches the knowledge exploration experience. Currently the project is on the stage of cloud deployment for public access to facilitate **continuous evolution** through user feedback in dev-ops loops. \n\n" +
             "**Limitations & Future Directions**: While the project achieves its goals, areas for improvement include optimizing*graph construction **efficiency** and **efficacy** (e.g., synonym handling to avoid redundant nodes). Furthur improvements could also involve **scaling the system** for more data and **tailoring features for specific fields**.\n\n" +
             "**Lessons Learned**: This project not only honed my skills in **full-stack development with LLM integration** and trouble-shooting, but also strengthened my ability to **lead and manage projects**. From competitive analysis to product design, I learned the value of **iterative planning**, **researching tools**, and **adapting scope**—essential skills for delivering a successful product.",
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
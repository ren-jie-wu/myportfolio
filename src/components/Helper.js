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
const cvLink = "/files/cv.pdf";

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
    description: "Web application of memory assistant based on knowledge graph powered by LLM integration.",
    skills: ["React", "Flask", "Graph RAG", "Software Engineering"],
    details: "Details about KGMem...",
  },
  {
    id: 2,
    title: "GRN Inference",
    icon: `${process.env.PUBLIC_URL}/images/velogrn.jpeg`,
    description: "Deep learning model for cell state transition prediction and gene regulatory network inference.",
    skills: ["PyTorch", "Graph Neural Network", "Attention Mechanism", "scRNA-seq", "RNA Velocity"],
    details: "Details about GRN...",
  },
  {
    id: 3,
    title: "Plasticity in CRC",
    icon: `${process.env.PUBLIC_URL}/images/crc.jpeg`,
    description: "Single-cell RNA-seq analysis of plasticity in colorectal cancer within both patient and organoid data.",
    skills: ["scRNA-seq", "Seurat", "Trajectory Analysis", "Cancer Biology"],
    details: "Details about CRC...",
  }
];

const education = [
  {
    id: 1,
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
  {
    id: 2,
    school: "Harvard University",
    degree: "M.S. in Computational Biology",
    dept: "School of Public Health",
    location: "Boston, MA",
    time: "2024 - 2026",
    icon: "https://www.harvard.edu/media-relations/wp-content/uploads/sites/3/2024/03/102423_Features_SM_34-scaled.jpg",
    // gpa: "**GPA**: 4.0/4.0\n",
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
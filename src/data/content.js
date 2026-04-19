export const personal = {
  name: "Rahul Choudhary",
  title: "Data Engineer",
  tagline: "Data Engineer | Snowflake | dbt | Python",
  valueProp: "I build scalable data pipelines that turn raw data into reliable, business-ready insights — enabling faster decisions and measurable impact.",
  email: "rahulchoudhary12236@gmail.com",
  linkedin: "https://www.linkedin.com/in/rahul-choudhary-gne/",
  github: "https://github.com/rahulchoudhary-cloudeqs",
  location: "India",
  resumeLink: "/resume.pdf",
  blog: "https://wanderinginwords.onrender.com/",
};

export const about = {
  summary: `Data Engineer with expertise in designing and optimizing cloud data infrastructure at enterprise scale. At Cloud EQS, I architect high-performance data pipelines processing millions of records daily, leveraging Snowflake, dbt, and Python to deliver analytics-ready datasets that power critical business decisions.`,
  highlights: [
    "Architected end-to-end data pipelines processing 10M+ records daily",
    "Reduced query execution time by 40% through Snowflake optimization",
    "Automated manual reporting workflows, saving 20+ hours/week",
    "Built self-service analytics frameworks adopted by 5+ business teams",
  ],
  strengths: [
    { label: "Data Pipeline Architecture", icon: "pipeline" },
    { label: "Snowflake Optimization", icon: "snowflake" },
    { label: "dbt Transformations", icon: "dbt" },
    { label: "ETL Automation", icon: "automation" },
    { label: "Data Quality Engineering", icon: "quality" },
    { label: "Analytics Engineering", icon: "analytics" },
  ],
};

export const skills = {
  "Data Engineering": [
    { name: "Snowflake", level: 95 },
    { name: "dbt", level: 90 },
    { name: "SQL", level: 95 },
    { name: "ETL/ELT Pipelines", level: 90 },
    { name: "Data Modeling", level: 85 },
    { name: "Data Warehousing", level: 90 },
  ],
  "Tools & Platforms": [
    { name: "Matillion", level: 85 },
    { name: "Apache Airflow", level: 80 },
    { name: "Tableau", level: 80 },
    { name: "Git/GitHub", level: 85 },
    { name: "Jira", level: 80 },
    { name: "Linux/Bash", level: 75 },
  ],
  "Programming": [
    { name: "Python", level: 85 },
    { name: "Selenium", level: 80 },
    { name: "Pandas", level: 80 },
    { name: "REST APIs", level: 75 },
    { name: "JavaScript", level: 65 },
    { name: "Shell Scripting", level: 70 },
  ],
};

export const experience = [
  {
    title: "Data Engineer",
    company: "Cloud EQS",
    location: "Remote, India",
    period: "June 2024 — Present",
    type: "Full-time",
    description: "Enterprise data infrastructure powering analytics for a leading Data Analytics Service Provider company.",
    bullets: [
      "Engineered scalable dbt transformation layer processing 10M+ daily records across 200+ models, reducing data latency from hours to minutes",
      "Optimized Snowflake warehouse configurations and query patterns, cutting compute costs by 35% while improving query performance by 40%",
      "Designed and implemented automated data quality frameworks using dbt tests, catching 95% of data anomalies before they reach dashboards",
      "Built end-to-end Matillion ETL pipelines integrating data from Salesforce, Jira, and internal APIs into a unified analytics warehouse",
      "Spearheaded migration from legacy SQL scripts to modular dbt models, improving code reusability by 60% and enabling CI/CD for data transformations",
      "Created self-service Tableau dashboards adopted by 5+ cross-functional teams, reducing ad-hoc reporting requests by 70%",
    ],
  },
  {
    title: "Data Engineering Intern",
    company: "Cloud EQS",
    location: "Remote, India",
    period: "Jan 2024 —  June 2024",
    type: "Internship",
    description: "Built foundational data pipelines and automation tools during a high-impact internship.",
    bullets: [
      "Developed Python-based automation scripts using Selenium, eliminating 15+ hours of manual data extraction per week",
      "Built Airflow DAGs orchestrating complex multi-step data pipelines with automated error handling and retry logic",
      "Designed staging-to-production data promotion workflows, reducing deployment errors by 80%",
      "Contributed to Snowflake cost governance initiatives, implementing resource monitors and warehouse auto-suspend policies",
    ],
  },
];

export const projects = [
  {
    title: "Legacy SQL to dbt Migration",
    problem: "500+ legacy SQL scripts with no version control, testing, or documentation — causing frequent data inconsistencies and 4+ hour debugging cycles.",
    solution: "Architected a modular dbt project with layered staging, intermediate, and mart models. Implemented incremental materializations, automated testing with 200+ data quality checks, and CI/CD via GitHub Actions.",
    techStack: ["dbt", "Snowflake", "GitHub Actions", "SQL", "Jinja"],
    impact: "60% improvement in code reusability, 90% reduction in data incidents, deployment time cut from 2 hours to 15 minutes.",
    icon: "dbt",
  },
  {
    title: "Snowflake Performance Optimizer",
    problem: "Rising Snowflake compute costs ($50K+/quarter) due to inefficient queries, oversized warehouses, and missing clustering keys across production workloads.",
    solution: "Built a Python-based analysis tool that profiles query history, identifies expensive patterns (cartesian joins, full table scans), and recommends clustering keys, warehouse sizing, and materialization strategies.",
    techStack: ["Python", "Snowflake", "SQL", "Pandas", "Streamlit"],
    impact: "35% reduction in compute costs, 40% faster query execution, automated weekly cost reports for leadership.",
    icon: "snowflake",
  },
  {
    title: "Airflow Pipeline Orchestration",
    problem: "Data pipelines ran via manual cron jobs with no dependency management, error handling, or visibility — leading to silent failures and stale dashboards.",
    solution: "Designed an Airflow-based orchestration layer with dynamic DAG generation, Slack alerting, SLA monitoring, and automated retry logic. Integrated with Snowflake, S3, and REST APIs.",
    techStack: ["Apache Airflow", "Python", "Snowflake", "Docker", "Slack API"],
    impact: "Zero silent failures in 6 months, 99.5% pipeline uptime, 20+ hours/week saved on manual monitoring.",
    icon: "airflow",
  },
  {
    title: "Selenium Data Extraction Engine",
    problem: "Critical business data locked in legacy web portals with no API access — requiring 15+ hours/week of manual copy-paste work across 10+ data sources.",
    solution: "Built a robust Selenium automation framework with headless Chrome, intelligent retry mechanisms, CAPTCHA handling, and structured data output to Snowflake staging tables.",
    techStack: ["Python", "Selenium", "BeautifulSoup", "Snowflake", "Pandas"],
    impact: "Eliminated 15+ hours/week of manual work, 99% data accuracy, enabled real-time competitive intelligence reporting.",
    icon: "selenium",
  },
];

export const achievements = [
  {
    metric: "10M+",
    label: "Records Processed Daily",
    description: "Scalable pipelines handling enterprise-grade data volumes",
  },
  {
    metric: "40%",
    label: "Query Performance Boost",
    description: "Through Snowflake optimization and intelligent clustering",
  },
  {
    metric: "35%",
    label: "Cost Reduction",
    description: "Snowflake compute savings via warehouse optimization",
  },
  {
    metric: "20+ hrs",
    label: "Weekly Time Saved",
    description: "Through pipeline automation and self-service analytics",
  },
  {
    metric: "99.5%",
    label: "Pipeline Uptime",
    description: "Reliable data delivery with automated monitoring",
  },
  {
    metric: "200+",
    label: "dbt Models",
    description: "Modular, tested transformation layer in production",
  },
];

export const workingOn = [
  {
    title: "Real-time Streaming Pipelines",
    description: "Exploring Kafka and Spark Structured Streaming for sub-minute data freshness",
    status: "Learning",
  },
  {
    title: "Data Mesh Architecture",
    description: "Studying domain-driven data ownership patterns for enterprise scalability",
    status: "Exploring",
  },
  {
    title: "Advanced dbt Patterns",
    description: "Building reusable macros, custom materializations, and multi-project architectures",
    status: "Building",
  },
  {
    title: "Cloud Certifications",
    description: "Preparing for Snowflake SnowPro Core and AWS Data Analytics certifications",
    status: "In Progress",
  },
];

export const techCloud = [
  "Snowflake", "dbt", "Python", "SQL", "Matillion", "Apache Airflow",
  "Tableau", "Selenium", "Pandas", "Git", "GitHub Actions", "Docker",
  "AWS S3", "REST APIs", "Jinja", "Linux", "Bash", "Streamlit",
  "Jira", "Confluence", "VS Code", "Jupyter", "Excel", "Power BI",
  "Data Modeling", "ETL/ELT", "CI/CD", "Agile", "Data Quality",
];

export const testimonials = [

  {
    quote: "During our batch, Rahul was always thinking one step ahead. While most of us were focused on completing tasks, he was already structuring things better in dbt and optimizing queries in Snowflake. Learned a lot just by observing his approach.",
    name: "Priya Sharma",
    title: "Batch Mate",
    company: "Not Disclosed",
  },
  {
    quote: "Rahul doesn’t just jump into coding — he first tries to understand the actual problem. In our projects, this really showed because his solutions were always more thought-out and practical compared to just quick fixes.",
    name: "Arjun Mehta",
    title: "Batch Mate",
    company: "Not Disclosed",
  },
  {
    quote: "Whenever we had repetitive or manual work in our batch projects, Rahul was usually the one figuring out how to automate it. It saved a lot of time for everyone and made things much smoother.",
    name: "Neha Gupta",
    title: "Batch Mate",
    company: "Not Disclosed",
  }

];

export const certifications = [
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "Mar 2026",
    credentialId: "gsrubytko446",
    icon: "ai",
    color: "from-orange-400 to-amber-500",
    category: "AI & LLM",
    featured: true,
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    date: "Mar 2026",
    credentialId: "h8uu4m6432xg",
    icon: "ai",
    color: "from-orange-400 to-amber-500",
    category: "AI & LLM",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Mar 2026",
    credentialId: "rvnrpi5iwn74",
    icon: "ai",
    color: "from-orange-400 to-amber-500",
    category: "AI & LLM",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "Mar 2026",
    credentialId: "bhgwj624p2ts",
    icon: "ai",
    color: "from-orange-400 to-amber-500",
    category: "AI & LLM",
    featured: true,
  },
  {
    name: "Data Build Tool Fundamentals",
    issuer: "dbt Labs",
    date: "Sep 2025",
    icon: "dbt",
    color: "from-orange-400 to-red-400",
    category: "Data Engineering",
    featured: true,
  },
  {
    name: "SQL Advanced",
    issuer: "HackerRank",
    date: "Feb 2025",
    credentialId: "c6a7b6469ea9",
    icon: "sql",
    color: "from-emerald-400 to-green-500",
    category: "Data Engineering",
    featured: true,
  },
  {
    name: "SQL Intermediate",
    issuer: "HackerRank",
    date: "Feb 2025",
    credentialId: "a7ae0e3b6d0c",
    icon: "sql",
    color: "from-emerald-400 to-green-500",
    category: "Data Engineering",
  },
  {
    name: "SQL Basics",
    issuer: "HackerRank",
    date: "Jan 2025",
    credentialId: "a7ae0e3b6d0c",
    icon: "sql",
    color: "from-emerald-400 to-green-500",
    category: "Data Engineering",
  },
  {
    name: "Matillion DPC Foundation",
    issuer: "Matillion",
    date: "Jan 2025",
    icon: "matillion",
    color: "from-green-400 to-teal-400",
    category: "Data Engineering",
    featured: true,
  },
  {
    name: "Object Detection using Python & CNN",
    issuer: "DevTown",
    date: "Jun 2022",
    icon: "ml",
    color: "from-violet-400 to-purple-500",
    category: "Programming",
  },
  {
    name: "Advanced C++ Training",
    issuer: "IIT Bombay (Spoken Tutorial)",
    date: "Dec 2021",
    credentialId: "3006905E6I",
    icon: "code",
    color: "from-blue-400 to-cyan-400",
    category: "Programming",
  },
  {
    name: "C++ Training",
    issuer: "IIT Bombay (Spoken Tutorial)",
    date: "Dec 2021",
    credentialId: "3006905B28",
    icon: "code",
    color: "from-blue-400 to-cyan-400",
    category: "Programming",
  },
  {
    name: "C Training",
    issuer: "IIT Bombay (Spoken Tutorial)",
    date: "Dec 2021",
    credentialId: "3006905MD7",
    icon: "code",
    color: "from-blue-400 to-cyan-400",
    category: "Programming",
  },
  {
    name: "Web Developer Intern",
    issuer: "TwoWaits",
    date: "Jul 2022",
    icon: "web",
    color: "from-blue-400 to-indigo-400",
    category: "Web & Analytics",
  },
  {
    name: "Google Analytics for Beginners",
    issuer: "Google",
    date: "Feb 2022",
    icon: "analytics",
    color: "from-yellow-400 to-green-400",
    category: "Web & Analytics",
  },
  {
    name: "Web Development",
    issuer: "Coursera",
    date: "Jan 2022",
    credentialId: "8K2LT2JDXSM8",
    icon: "web",
    color: "from-blue-500 to-indigo-500",
    category: "Web & Analytics",
  },
  {
    name: "CATC",
    issuer: "National Cadet Corps - India",
    icon: "leadership",
    color: "from-red-400 to-rose-500",
    category: "Other",
  },
  {
    name: "Hostel Mess Committee - Executive Member",
    issuer: "GNDEC, Ludhiana",
    icon: "leadership",
    color: "from-purple-400 to-pink-400",
    category: "Other",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

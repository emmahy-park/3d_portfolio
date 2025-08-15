import { ubc, botany, canada } from "../assets/images";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    nodejs,
    react,
    tailwindcss,
    linkedin,
    contact,
    Java,
    Python,
    C,
    ER,
    outfit,
    lab,
    code,
    game
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: Java,
        name: "Java",
        type: "Frontend",
    },
    {
        imageUrl: Python,
        name: "Python",
        type: "Frontend",
    },
    {
        imageUrl: C,
        name: "C",
        type: "Frontend",
    }
];

export const experiences = [
        {
        title: "Web Support Specialist",
        company_name: "UBC Web Services",
        icon: ubc,
        iconBg: "#f6f7a8",
        date: "May 2025 - Present",
        points: [
            "Delivering secure, high-availability web services for 300+ UBC sites to ensure uninterrupted access for students, faculty, and staff.",
            "Developing and testing new features, templates, and internal tools to enhance user experience and workflow.",
            "Collaborating with project leads and clients to gather requirements and delivering responsive Drupal solutions that meet departmental goals.",
        ],
    },
    {
        title: "IT Support Analyst",
        company_name: "UBC Botany",
        icon: botany,
        iconBg: "#b7e4c7",
        date: "May 2024 - Apr 2025",
        points: [
            "Provided desktop support to faculty, staff and students in the Botany Department, ensuring seamless operation across operating systems including Windows and macOS.",
            "Contributed to various IT projects by developing and maintaining WordPress and Drupal websites, and configuring a network switch to enhance system performance and reliability.",
            "Implemented Zabbix monitoring agents to ensure continuous system performance tracking and stability.",
        ],
    },
    {
        title: "IT Deskside Support",
        company_name: "Environment and Climate Change Canada",
        icon: canada,
        iconBg: "#fbc3bc",
        date: "Sep 2023 - Apr 2024",
        points: [
            "Provided desktop support to 600 clients across multiple offices within the Pacific & Yukon Region, primarily handling troubleshooting of hardware, software, and peripheral devices in a corporate environment.",
            "Engaged in diverse IT projects including migrations, deployments, and upgrades, contributing to seamless operations and user satisfaction.",
            "Demonstrated proficiency in MS Windows 10/11, MS Office 2016/365, Active Directory, and SCCM (System Center Configuration Manager), enhancing system efficiency and user support.",
            "Maintained strong communication and interpersonal skills, ensuring prompt issue resolution and fostering positive working relationships with clients.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
     {
        iconUrl: game,
        theme: 'btn-back-black',
        name: '2D Action Game',
        description: 'Developed a 2D rogue-lite action game where players battle through enemy-filled rooms, collect rewards, and upgrade abilities to escape the dark city of Abyss by defeating its boss.',
        link: 'https://github.com/emmahy-park/SkySeeker',
    },
    {
        iconUrl: code,
        theme: 'btn-back-blue',
        name: 'Coding Exercise Application',
        description: 'Developed a full-stack web application for testing code interpretation skills.',
        link: 'https://github.com/emmahy-park/codeLlama',
    },
    {
        iconUrl: lab,
        theme: 'btn-back-green',
        name: 'Lab Inventory Database',
        description: 'Built a lab inventory database for efficient tracking and maintenance of laboratory stocks.',
        link: 'https://github.com/emmahy-park/labInventoryManagementSystem',
    },
    {
        iconUrl: outfit,
        theme: 'btn-back-yellow',
        name: 'Outfit Suggestion Application',
        description: 'Developed a web and mobile application that provides outfit suggestions based on real-time weather conditions.',
        link: 'https://github.com/shumin11/WeatherApp',
    },
    {
        iconUrl: ER,
        theme: 'btn-back-red',
        name: 'Emergency Patient Queue Management System',
        description: 'Java desktop app that triages the patients in the Emergency Room.',
        link: 'https://github.com/emmahy-park/ERQueue2',
    }
];
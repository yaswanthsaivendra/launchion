export interface PortfolioTag {
    id: number;
    name: string;
    icon: string;
}

export interface PortfolioProject {
    id: number;
    title: string;
    description: string;
    subdescription: string;
    liveUrl: string;
    image: string;
    tags: PortfolioTag[];
}

export const portfolioProjects: PortfolioProject[] = [
    {
        id: 1,
        title: "Patronus - Consent Manager Platform",
        description:
            "Patronus Consent Manager is a powerful Software-as-a-Service platform that simplifies data privacy and compliance management. With features like a policy engine, purpose-driven consent management, a secure data privacy vault, DSAR workflows, consent logs with expiry tracking, it provides businesses with an all-in-one solution for managing privacy and regulatory requirements.",
        subdescription:
            "Built using Next.js, Tailwind CSS, TypeScript, Django, Flask, and integrated with Keycloak for secure authentication, Patronus Consent Manager delivers a scalable, secure, and seamless experience for privacy compliance and consent management.",
        liveUrl: "https://getpatronus.com/",
        image: "/portfolio/patronus.png",
        tags: [
            { id: 1, name: "Next.js", icon: "SiNextdotjs" },
            { id: 2, name: "Django", icon: "SiDjango" },
            { id: 3, name: "TailwindCSS", icon: "SiTailwindcss" },
            { id: 4, name: "Flask", icon: "SiFlask" },
            { id: 5, name: "TypeScript", icon: "SiTypescript" },
        ],
    },
    {
        id: 2,
        title: "Velaar - Blockchain Real Estate Platform",
        description:
            "Velaar is a revolutionary Web3 platform that transforms real estate investment through blockchain technology. The platform enables fractional ownership of properties, transparent transactions, and secure smart contract-based operations. Built on Polygon blockchain for scalability and low transaction fees, Velaar democratizes real estate investment by allowing users to invest in premium properties with minimal capital.",
        subdescription:
            "Developed using Next.js for a responsive frontend, integrated with Polygon blockchain for smart contracts, Web3.js for blockchain interactions, and styled with modern CSS frameworks. The platform features secure wallet integration, real-time property valuations, and automated dividend distributions through smart contracts.",
        liveUrl: "https://velaar.io/",
        image: "/portfolio/velaar.png",
        tags: [
            { id: 1, name: "Next.js", icon: "SiNextdotjs" },
            { id: 2, name: "Polygon", icon: "SiPolygon" },
            { id: 3, name: "Ethereum", icon: "SiEthereum" },
            { id: 4, name: "Solidity", icon: "SiSolidity" },
            { id: 5, name: "TypeScript", icon: "SiTypescript" },
        ],
    },
    {
        id: 3,
        title: "Techsnap - EdTech Platform",
        description:
            "Techsnap is a comprehensive Learning Management System (LMS) offered as a Software-as-a-Service solution for educational institutions. The platform streamlines the entire learning process with features like course management, student progress tracking, automated assessment systems, and real-time analytics. Working on the backend, I implemented robust APIs, automated task scheduling, and scalable cloud infrastructure to support thousands of concurrent users.",
        subdescription:
            "Developed using Django REST Framework for API development, Celery for asynchronous task processing, containerized with Docker for consistent deployment, and hosted on AWS for scalability and reliability.",
        liveUrl: "https://techsnap.in",
        image: "/portfolio/techsnap.png",
        tags: [
            { id: 1, name: "Django", icon: "SiDjango" },
            { id: 2, name: "AWS", icon: "FaAws" },
            { id: 3, name: "Docker", icon: "FaDocker" },
            { id: 4, name: "Celery", icon: "SiCelery" },
        ],
    },
    {
        id: 4,
        title: "DomSell - Domain Reselling Marketplace",
        description:
            "DomSell is an innovative mobile marketplace designed for buying and selling premium domain names. The platform features a sleek user interface, real-time domain availability checking, secure payment processing, and an intelligent domain valuation system. Users can easily list their domains, negotiate prices through an in-app chat system, and complete transactions securely.",
        subdescription:
            "Built as a mobile-first application using React Native and Node.js, with Clerk for authentication and TailwindCSS for styling. The app delivers a smooth, native-like experience while maintaining robust security for domain transactions.",
        liveUrl: "https://domsell.store/",
        image: "/portfolio/domsell.png",
        tags: [
            { id: 1, name: "React Native", icon: "FaReact" },
            { id: 2, name: "Node.js", icon: "FaNode" },
            { id: 3, name: "TailwindCSS", icon: "SiTailwindcss" },
        ],
    },
    {
        id: 5,
        title: "UnStartED - EdTech Platform",
        description:
            "UnStartED is a comprehensive online learning platform offering job-assured certification programs in executive management. The platform features hands-on learning with India-specific case studies, direct networking opportunities with industry experts, and dedicated placement assistance. Students gain practical insights through real-world case studies of companies like Tata Nano, Flipkart, and Ola.",
        subdescription:
            "Built with Django REST Framework for robust API development, containerized with Docker for seamless deployment, and hosted on AWS for scalability. The frontend utilizes JavaScript for interactive learning experiences.",
        liveUrl: "https://unstarted.in/",
        image: "/portfolio/unstarted.png",
        tags: [
            { id: 1, name: "Django", icon: "SiDjango" },
            { id: 2, name: "Docker", icon: "FaDocker" },
            { id: 3, name: "AWS", icon: "FaAws" },
        ],
    },
    {
        id: 6,
        title: "Helpful Genie - AI Powered Chat",
        description:
            "Oro is a generative AI chatbot designed for e-commerce and retail, enhancing customer interactions with seamless sales and service support. With 70% of people preferring chat or messaging for quicker solutions, Oro ensures they find what they need efficiently.",
        subdescription:
            "Built using Python and Flask for the backend API, with a modern frontend styled using TailwindCSS. The platform delivers an intelligent, responsive chatbot experience that accelerates sales and improves customer service.",
        liveUrl: "https://www.helpfulgenie.app/",
        image: "/portfolio/helpful-genie.png",
        tags: [
            { id: 1, name: "Python", icon: "FaPython" },
            { id: 2, name: "Flask", icon: "SiFlask" },
            { id: 3, name: "TailwindCSS", icon: "SiTailwindcss" },
        ],
    },
];

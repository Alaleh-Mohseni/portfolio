export const resumeData = {
    en: {
        profile: {
            name: 'Alaleh Mohseni',
            job_title: 'Frontend Developer',
            about: 'Frontend Developer with 3+ years of experience building responsive, user-centered web applications using React. I follow an AI-first development approach, effectively leveraging AI-powered tools to improve development productivity while maintaining high code quality and performance optimization. Familiar with backend fundamentals using Node.js. A responsible, fast learner who enjoys growing within professional teams and working on real-world products.',
            mobile: '09361044371',
            city: 'Semnan',
            province: 'Semnan',
            social_links: [
                { name: "GitHub", url: "https://github.com/Alaleh-Mohseni", icon: "github" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/alaleh-mohseni", icon: "linkedin" },
                // { name: "Telegram", url: "https://t.me/alaleh_mohseni", icon: "telegram" },
                { name: "Gmail", url: "alalamohseni@gmail.com", icon: "gmail" }
            ],
        },
        skills: {
            technical: ["HTML", "CSS", "Javascript", "SASS", "React.js", "Ant Design", "Tailwind CSS", "Bootstrap", "Figma", "Git"],
            familiar: ["Next.js", "Typescript", "Node.js", "Vitest", "Docker", "MongoDB"],
        },
        experience: {
            items: [
                {
                    company_name: "Karyar Studio",
                    company_link: "https://www.linkedin.com/company/karyar-studio/",
                    position: "Frontend Developer",
                    period: "Oct 2023 - Present",
                    about_company: "Karyar Studio is a digital agency specializing in website development and digital product creation.",
                    achievements: [
                        "Improved admin panel performance by implementing Code Splitting, Lazy Loading, and memoization techniques, significantly reducing initial load time and boosting Lighthouse performance scores.",
                        "Designed and built complex multi-step (wizard-based) forms with advanced validation, dynamic field rendering, and optimized state management for better user experience and scalability.",
                        "Architected and implemented a lightweight custom internationalization (i18n) solution with seamless RTL/LTR layout switching support.",
                        "Developed reusable and scalable UI components using React and Ant Design, improving code consistency and reducing duplication across multiple projects.",
                        "Built analytical dashboards using Recharts with dynamic filtering and real-time data visualization for logistics and performance management systems.",
                        "Implemented custom API management hooks with caching, request deduplication, and error handling, improving frontend data consistency and reducing unnecessary network calls.",
                        "Optimized rendering performance by applying debounce/throttle techniques and refining state structure, reducing unnecessary re-renders across complex pages.",
                        "Collaborated closely with backend and design teams to translate Figma designs into pixel-perfect, responsive, production-ready interfaces."
                    ]
                }
            ]
        },
        projects: {
            items: [
                {
                    title: "Persian Meeting Assistant",
                    description: "Smart AI-powered meeting assistant with real-time transcription and Persian summarization (browser extension).",
                    technologies: ["Preact", "Node.js", "Browser Extension"],
                    topics: [
                        "Implemented real-time speech-to-text using Google Speech-to-Text with in-browser audio processing.",
                        "Designed speaker diarization for Google Meet sessions.",
                        "Integrated OpenAI API for automated meeting summaries.",
                        "Developed cross-browser extensions (Chrome, Firefox, Edge) using Manifest V3.",
                    ],
                    link: "#"
                },
                {
                    title: "Resume Builder",
                    description: "Bilingual resume builder application with full RTL support and professional templates.",
                    technologies: ["React", "Node.js", "MongoDB", "Docker", "Antd"],
                    topics: [
                        "Implemented JWT-based authentication and role-based access control with an admin panel.",
                        "Full Persian and English support with automatic RTL/LTR switching and font management.",
                        "Designed 4 resume templates with live preview and 15+ color themes.",
                        "Developed backend APIs and secure file uploads using Express and MongoDB.",
                    ],
                    link: "#"
                },
                {
                    title: "Dynamic Presentation Generator",
                    description: "Platform for creating and sharing presentation pages based on Digikala’s annual report data.",
                    technologies: ["React", "Node.js", "React Query", "Supabase", "Chart.js", "Framer Motion", "Vitest", "CSS"],
                    topics: [
                        "Utilized State and data management using React Query and routing with React Router.",
                        "Built interactive charts using Chart.js and animations with Framer Motion.",
                        "Developed Node.js backend and optimized API communication.",
                        "Wrote unit tests using Vitest.",
                    ],
                    link: "#",
                },
                {
                    title: "Shopping Cart",
                    description: "Developed responsive e-commerce shopping cart with smooth user experience.",
                    technologies: ["Next.js", "Redux", "Tailwindcss", "Swiper", "Git"],
                    topics: [
                        "Managed cart state (add, remove, update quantity) using Redux.",
                        "Built with Next.js and Tailwind CSS."
                    ],
                    link: "https://accessory-market.netlify.app/"
                },
                {
                    title: "Cryptocurrency Dashboard",
                    description: "Modern cryptocurrency dashboard with authentication and data visualization.",
                    technologies: ["React", "Firebase", "React Query", "Tailwindcss", "Zod", "React Hook Form", "Framer Motion", "Chart.js", "Git"],
                    topics: [
                        "Developed using React, Tailwind, React Query, and Framer Motion.",
                        "Implemented authentication with Firebase.",
                        "Visualized market data using Chart.js.",
                    ],
                    link: "https://cryptocurrency-dashboardd.netlify.app/"
                },
                {
                    title: "The Movie Box",
                    description: "Movie platform with filtering and content management features.",
                    technologies: ["React", "React Query", "Bootstrap", "Git"],
                    topics: [
                        "Data management using React Query.",
                        "Responsive UI built with Bootstrap.",
                        "Implemented authentication and movie submission functionality."
                    ],
                    link: "https://movie-app-reactjs-three.vercel.app/"
                },
            ]
        },
        education: {
            degree: "Bachelor",
            study_field: "Industrial Engineering",
            period: "",
            university: "Islamic Azad University",
            city: "Semnan"
        },
        languages: ["Persian", "English"],
        activities: {
            company: "Kaaryar",
            company_link: "https://kaaryar.ir/",
            role: "Teacher Assistant and Mentor",
            period: "Oct 2023 - Present",
            description: "I volunteered for Kaaryar courses as a mentor and teaching assistant. Kaaryar aims to empower individuals with limited access to teaching materials and technology by providing them with the necessary resources to enhance their education and career prospects."
        }
    },
    fa: {},
}
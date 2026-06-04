const portfolioData = {
    en: {
        // Header/Hero Section
        hero: {
            greeting: "👋 Hi there, I'm Alaleh Mohseni",
            title: "Frontend Developer",
            description: "I'm a Frontend Developer with 3+ years of experience building modern, responsive web apps with React. I love using AI tools to move faster, solve problems smarter, and deliver clean, maintainable code. I'm comfortable with Node.js basics and enjoy working with teams to turn ideas into real products.",
            cvButton: "Download CV",
            cvLink: "/resume/AlalehMohseni.pdf",
            photo: "/photo.png",
            currentWork: {
                label: "Currently at",
                company: "Karyar Studio",
                companyLogo: "/Karyar-Studio-Logo.svg",
                companyLink: "https://www.linkedin.com/company/karyar-studio/",
            },
            socialLinks: [
                { name: "GitHub", url: "https://github.com/Alaleh-Mohseni", icon: "github" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/alaleh-mohseni", icon: "linkedin" },
                { name: "Telegram", url: "https://t.me/alaleh_mohseni", icon: "telegram" },
                { name: "Gmail", url: "mailto:alalamohseni@gmail.com", icon: "gmail" }
            ]
        },

        // Skills Section
        skills: {
            title: "My Skills",
            subtitle: "Skills, tools and technologies that I have mastered and used in my projects.",
            items: [
                { name: "HTML5", icon: "/dev/html.svg" },
                { name: "CSS3", icon: "/dev/css.svg" },
                { name: "JavaScript", icon: "/dev/javascript.svg" },
                { name: "React", icon: "/dev/react.svg" },
                { name: "Ant Design", icon: "/dev/antdesign.svg" },
                { name: "Vite", icon: "/dev/vite.svg" },
                { name: "Tailwindcss", icon: "/dev/tailwindcss.svg" },
                { name: "Sass/Scss", icon: "/dev/sass.svg" },
                { name: "Bootstrap", icon: "/dev/bootstrap.svg" },
                { name: "BaseUI", icon: "/dev/baseui.svg" },
                { name: "Figma", icon: "/dev/figma.svg" },
                { name: "Git", icon: "/dev/git.svg" },
                { name: "Next.js", icon: "/dev/nextjs.svg" },
                { name: "TypeScript", icon: "/dev/typescript.svg" },
                { name: "Node.js", icon: "/dev/nodejs.svg" },
                { name: "Express.js", icon: "/dev/express.svg" },
                { name: "Docker", icon: "/dev/docker.svg" },
                { name: "MongoDB", icon: "/dev/mongodb.svg" },
                { name: "PostgreSQL", icon: "/dev/postgresql.svg" },
                { name: "Firebase", icon: "/dev/firebase.svg" },
                { name: "Vitest", icon: "/dev/vitest.svg" },
                { name: "ClickHouse", icon: "/dev/clickhouse.svg" },
                // { name: "Socket.io", icon: "/dev/socket.svg" },
            ]
        },

        // Projects Section
        projects: {
            title: "My Latest Works",
            subtitle: "Real-world applications built for clients and the community.",
            categories: [
                { key: "all", label: "All Projects" },
                { key: "dashboard", label: "Dashboard" },
                { key: "web", label: "Web Design" },
                { key: "mobile", label: "Mobile App" },
                { key: "uiux", label: "UI/UX" },
                { key: "extension", label: "Extension" },
            ],
            items: [
                {
                    id: 1,
                    title: "Akeep",
                    description: "Performance Management Dashboard",
                    // description: "Performance Management Dashboard",
                    description: "A bilingual (RTL/LTR) organizational performance management panel featuring interactive tools like 360-degree feedback, meeting calendars, and real-time team insights.",
                    category: ["dashboard"],
                    technologies: ["React", "Node.js", "Ant", "MongoDB", "Docker", "Recharts", "Nodemailer", "Papaparse", "Node-cron"],
                    image: "/projects/aKeep.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 2,
                    title: "Sampars",
                    // description: "Logistics Dashboard",
                    description: "An analytical dashboard for a logistics platform that visualizes order and shipment statuses, helping teams monitor and manage delivery operations efficiently.",
                    category: ["dashboard"],
                    technologies: ["React", "Node.js", "MongoDB", "Lodash", "Docker", "Ant", "Nodemailer", "Xlsx", "Recharts", "ClickHouse"],
                    image: "/projects/sampars.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 3,
                    title: "Karyar Digital",
                    // description: "Profile Management Dashboard & Course Registration System",
                    description: "A comprehensive dashboard for managing user profiles and handling course registration, designed to streamline the educational enrollment process.",
                    category: ["dashboard"],
                    technologies: ["React", "Node.js", "Ant", "MongoDB", "Docker", "Lodash", "Xlsx", "Nodemailer"],
                    image: "/projects/karyar-digital.png",
                    links: [
                        { name: "Web", url: "https://digital.kaaryar.ir/" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 4,
                    title: "Divar",
                    // description: "Province Guessing Game",
                    description: "An interactive web-based game where users guess Iranian provinces through visual and contextual clues, built with smooth animations and engaging gameplay.",
                    category: ["web"],
                    technologies: ["React", "Node.js", "Typescript", "MongoDB", "Docker", "Tailwindcss", "Framer Motion"],
                    image: "/projects/divar-desktop.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 5,
                    title: "Nexis",
                    // description: "Hub Management Dashboard & Mobile Web App",
                    description: "A hub management system with both a desktop dashboard and a mobile web app, enabling real-time monitoring and control of operational hubs.",
                    category: ["dashboard", "mobile"],
                    technologies: ["React", "Node.js", "MongoDB", "Docker", "Ant", "Typescript"],
                    image: "/projects/nexis.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 6,
                    title: "Karyar Studio",
                    // description: "Business Landing Page",
                    description: "A modern, visually polished business landing page for Karyar Studio, crafted based on Figma designs to reflect the brand's identity and services.",
                    category: ["web", "uiux"],
                    technologies: ["React", "CSS", "Figma"],
                    image: "/projects/karyar-studio.png",
                    links: [
                        { name: "Web", url: "https://studio.kaaryar.ir/" },
                        { name: "Figma", url: "https://www.figma.com/design/G3EZLkXHKebWL5v5HLrfBg/Kaaryar-Studio-Landing-Page?node-id=1-17&t=RB3aRYFR58bOoh86-0" },
                        { name: "GitHub", url: "#" }
                    ],
                },
                {
                    id: 7,
                    title: "Ta Code",
                    // description: "Digikala",
                    description: "A responsive front-end clone of Digikala, Iran's largest e-commerce platform, built to practice and demonstrate advanced UI development skills.",
                    category: ["web"],
                    technologies: ["React", "Sass"],
                    image: "/projects/ta_code.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 8,
                    title: "Dynamic Presentation Generator",
                    // description: "Digikala's annual report data into interactive presentations",
                    description: "A platform that transforms Digikala's annual report data into shareable, interactive presentation pages with dynamic charts and smooth animations.",
                    category: ["dashboard"],
                    technologies: ["React", "Node.js", "React Query", "Supabase", "Chart.js", "Framer Motion", "Vitest", "CSS"],
                    image: "/projects/presentation.jpg",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ],
                },
                {
                    id: 9,
                    title: "Resume Builder",
                    // description: "Bilingual Resume Builder Dashboard (English & Persian)",
                    description: "A bilingual resume builder supporting full RTL/LTR switching, offering 4 professional templates, 15+ color themes, and live preview with secure user authentication.",
                    category: ["dashboard"],
                    technologies: ["React", "Node.js", "MongoDB", "Docker", "Ant", "Git"],
                    image: "/projects/resume-builder.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/resume-builder" }
                    ]
                },
                {
                    id: 10,
                    title: "Persian Meeting Assistant",
                    // description: "AI-powered meeting assistant for Persian meetings",
                    description: "A browser extension that provides real-time speech-to-text transcription and AI-generated Persian summaries for online meetings like Google Meet.",
                    category: ["extension"],
                    technologies: ["Preact", "Node.js", "Tailwindcss", "Google Cloud", "OpenAI", "Git"],
                    image: "/projects/meeting_assistant.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/Meeting-assistant" }
                    ]
                },
                {
                    id: 11,
                    title: "Cryptocurrency",
                    // description: "Cryptocurrency Dashboard",
                    description: "A modern cryptocurrency dashboard with user authentication, live market data visualization, and interactive charts for tracking digital assets.",
                    category: ["dashboard"],
                    technologies: ["React", "Firebase", "React Query", "Tailwindcss", "Zod", "React Hook Form", "Framer Motion", "Chart.js", "Git"],
                    image: "/projects/cryptocurrency.png",
                    links: [
                        { name: "Web", url: "https://cryptocurrency-dashboardd.netlify.app/" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/react-hook-form-yup" }
                    ]
                },
                {
                    id: 12,
                    title: "The Movie Box",
                    // description: "Movie Website",
                    description: "A responsive movie browsing platform where users can explore, filter, and manage film content, with authentication and data fetching via React Query.",
                    category: ["web"],
                    technologies: ["React", "React Query", "Bootstrap", "Git"],
                    image: "/projects/film.png",
                    links: [
                        { name: "Web", url: "https://movie-app-reactjs-three.vercel.app/" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/movie-app-reactjs" }
                    ]
                },
                {
                    id: 13,
                    title: "Shopping Cart",
                    // description: "Responsive shopping cart application",
                    description: "A smooth and responsive e-commerce shopping cart application with full cart state management including add, remove, and quantity update functionality.",
                    category: ["web"],
                    technologies: ["Next.js", "Redux", "Tailwindcss", "Swiper", "Git"],
                    image: "/projects/jewelry.png",
                    links: [
                        { name: "Web", url: "https://accessory-market.netlify.app/" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/nextjs-shopping-cart" }
                    ]
                },
                {
                    id: 14,
                    title: "Portfolio Website",
                    description: "A modern, responsive portfolio website built with React, TailwindCSS, and Vite. Features bilingual support (EN/FA), dark/light theme, smooth scrolling, and dynamic project filtering.",
                    category: ["web", "uiux"],
                    technologies: ["React", "TailwindCSS", "Figma"],
                    image: "/projects/portfolio-dark-theme.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "https://www.figma.com/design/4qXl93w2EIYsk55dHe5uB2/Developer-Portfolio-Design?node-id=0-1&p=f&t=2i9QtnNG6fMNgQrn-0" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/portfolio" }
                    ]
                }
            ]
        },
        // Experience Section
        experience: {
            title: "My Experience",
            items: [
                {
                    company: "Karyar Studio",
                    logo: "/Karyar-Studio-Logo.svg",
                    companyLink: "https://www.linkedin.com/company/karyar-studio/",
                    position: "Frontend Developer",
                    period: "Oct 2023 - Present",
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
    },

    fa: {
        // بخش هدر/هیرو
        hero: {
            greeting: "سلام، من آلاله محسنی هستم 👋",
            title: "توسعه‌دهنده فرانت‌اند",
            description: "من یک توسعه‌دهنده فرانت‌اند با بیش از ۳ سال تجربه در ساخت اپلیکیشن‌های وب مدرن و ریسپانسیو با React هستم. از ابزارهای هوش مصنوعی برای کار سریع‌تر، حل مسائل هوشمندانه‌تر و تحویل کد تمیز و قابل نگهداری استفاده می‌کنم. با اصول Node.js آشنا هستم و از کار تیمی برای تبدیل ایده‌ها به محصولات واقعی لذت می‌برم.",
            cvButton: "دانلود رزومه",
            cvLink: "/resume/آلاله_محسنی.pdf",
            photo: "/photo.png",
            currentWork: {
                label: "در حال حاضر در",
                company: "کاریار استودیو",
                companyLogo: "/Karyar-Studio-Logo.svg",
                companyLink: "https://www.linkedin.com/company/karyar-studio/"
            },
            socialLinks: [
                { name: "GitHub", url: "https://github.com/Alaleh-Mohseni", icon: "github" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/alaleh-mohseni", icon: "linkedin" },
                { name: "Telegram", url: "https://t.me/alaleh_mohseni", icon: "telegram" },
                { name: "Gmail", url: "mailto:alalamohseni@gmail.com", icon: "gmail" }
            ]
        },

        // بخش مهارت‌ها
        skills: {
            title: "مهارت‌های من",
            subtitle: "مهارت‌ها، ابزارها و تکنولوژی‌هایی که در پروژه‌هایم تسلط دارم و استفاده کرده‌ام.",
            items: [
                { name: "HTML5", icon: "/dev/html.svg" },
                { name: "CSS3", icon: "/dev/css.svg" },
                { name: "JavaScript", icon: "/dev/javascript.svg" },
                { name: "React", icon: "/dev/react.svg" },
                { name: "Ant Design", icon: "/dev/antdesign.svg" },
                { name: "Vite", icon: "/dev/vite.svg" },
                { name: "Tailwindcss", icon: "/dev/tailwindcss.svg" },
                { name: "Sass/Scss", icon: "/dev/sass.svg" },
                { name: "Bootstrap", icon: "/dev/bootstrap.svg" },
                { name: "BaseUI", icon: "/dev/baseui.svg" },
                { name: "Figma", icon: "/dev/figma.svg" },
                { name: "Git", icon: "/dev/git.svg" },
                { name: "Next.js", icon: "/dev/nextjs.svg" },
                { name: "TypeScript", icon: "/dev/typescript.svg" },
                { name: "Node.js", icon: "/dev/nodejs.svg" },
                { name: "Express.js", icon: "/dev/express.svg" },
                { name: "Docker", icon: "/dev/docker.svg" },
                { name: "MongoDB", icon: "/dev/mongodb.svg" },
                { name: "PostgreSQL", icon: "/dev/postgresql.svg" },
                { name: "Firebase", icon: "/dev/firebase.svg" },
                { name: "Vitest", icon: "/dev/vitest.svg" },
                { name: "ClickHouse", icon: "/dev/clickhouse.svg" },
                // { name: "Socket.io", icon: "/dev/socket.svg" },
            ]
        },

        // بخش پروژه‌ها
        projects: {
            title: "آخرین پروژه‌های من",
            subtitle: "اپلیکیشن‌های واقعی ساخته شده برای مشتریان و جامعه.",
            categories: [
                { key: "all", label: "همه پروژه‌ها" },
                { key: "dashboard", label: "داشبورد" },
                { key: "web", label: "طراحی وب" },
                { key: "mobile", label: "اپلیکیشن موبایل" },
                { key: "uiux", label: "رابط کاربری" },
                { key: "extension", label: "افزونه مرورگر" },
            ],
            items: [
                {
                    id: 1,
                    title: "اکیپ",
                    // description: "داشبورد مدیریت عملکرد",
                    description: "پنل مدیریت عملکرد سازمانی دوزبانه با ابزارهای تعاملی مثل بازخورد ۳۶۰ درجه و تقویم جلسات، طراحی‌شده برای پایش و ارزیابی عملکرد تیم‌ها.",
                    category: ["dashboard"],
                    technologies: ["React", "Node.js", "Ant", "MongoDB", "Docker", "Recharts", "Nodemailer", "Papaparse", "Node-cron"],
                    image: "/projects/aKeep.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 2,
                    title: "سام پارس",
                    // description: "داشبورد لجستیک",
                    description: "داشبورد تحلیلی برای یک پلتفرم لجستیک که وضعیت سفارش‌ها و شیپمنت‌ها را به‌صورت بصری نمایش می‌دهد تا تیم‌ها عملیات ارسال را بهتر مدیریت کنند.",
                    category: ["dashboard"],
                    technologies: ["React", "Node.js", "MongoDB", "Lodash", "Docker", "Ant", "Nodemailer", "Xlsx", "Recharts", "ClickHouse"],
                    image: "/projects/sampars.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 3,
                    title: "کاریار دیجیتال",
                    // description: "داشبورد مدیریت پروفایل و سیستم ثبت‌نام دوره",
                    description: "پنل مدیریت جامع برای ویرایش پروفایل کاربران و ثبت‌نام در دوره‌های آموزشی، با هدف ساده‌سازی فرآیند ثبت‌نام در بستر دیجیتال.",
                    category: ["dashboard"],
                    technologies: ["React", "Node.js", "Ant", "MongoDB", "Docker", "Lodash", "Xlsx", "Nodemailer"],
                    image: "/projects/karyar-digital.png",
                    links: [
                        { name: "Web", url: "https://digital.kaaryar.ir/" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 4,
                    title: "دیوار",
                    // description: "بازی حدس استان",
                    description: "یک بازی تعاملی وب‌محور که کاربران باید استان‌های ایران را از روی سرنخ‌های بصری و محتوایی حدس بزنند، همراه با انیمیشن‌های روان.",
                    category: ["web"],
                    technologies: ["React", "Node.js", "Typescript", "MongoDB", "Docker", "Tailwindcss", "Framer Motion"],
                    image: "/projects/divar-desktop.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 5,
                    title: "نکسیس",
                    // description: "داشبورد مدیریت هاب و اپلیکیشن وب موبایل",
                    description: "سیستم مدیریت هاب با داشبورد دسکتاپ و اپلیکیشن وب موبایل، برای پایش و کنترل لحظه‌ای هاب‌های عملیاتی طراحی شده است.",
                    category: ["dashboard", "mobile"],
                    technologies: ["React", "Node.js", "MongoDB", "Docker", "Ant", "Typescript"],
                    image: "/projects/nexis.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 6,
                    title: "کاریار استودیو",
                    // description: "صفحه کسب‌وکار",
                    description: "صفحه فرود کسب‌وکار برای کاریار استودیو که با ظاهری مدرن و مبتنی بر طرح‌های فیگما، هویت برند و خدمات مجموعه را به‌خوبی نمایش می‌دهد.",
                    category: ["web", "uiux"],
                    technologies: ["React", "CSS", "Figma"],
                    image: "/projects/karyar-studio.png",
                    links: [
                        { name: "Web", url: "https://studio.kaaryar.ir/" },
                        { name: "Figma", url: "https://www.figma.com/design/G3EZLkXHKebWL5v5HLrfBg/Kaaryar-Studio-Landing-Page?node-id=1-17&t=RB3aRYFR58bOoh86-0" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 7,
                    title: "تا کد",
                    // description: "دیجی‌کالا",
                    description: "یک کلون فرانت‌اند ریسپانسیو از دیجی‌کالا، بزرگ‌ترین فروشگاه آنلاین ایران، که برای تمرین و نمایش مهارت‌های پیشرفته UI توسعه داده شده.",
                    category: ["web"],
                    technologies: ["React", "Sass"],
                    image: "/projects/ta_code.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 8,
                    title: "دیجی‌کالا",
                    // description: "داشبورد ساخت پرزنتیشن داینامیک",
                    description: "پلتفرمی برای تبدیل داده‌های گزارش سالانه دیجی‌کالا به صفحات ارائه تعاملی و قابل اشتراک‌گذاری، با نمودارهای پویا و انیمیشن‌های جذاب.",
                    category: ["dashboard"],
                    technologies: ["React", "Node.js", "React Query", "Supabase", "Chart.js", "Framer Motion", "Vitest", "CSS"],
                    image: "/projects/presentation.jpg",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "#" }
                    ]
                },
                {
                    id: 9,
                    title: "رزومه ساز",
                    // description: "داشبورد دوزبانه رزومه ساز (انگلیسی و فارسی)",
                    description: "اپلیکیشن رزومه‌ساز دوزبانه با پشتیبانی کامل RTL/LTR، چهار قالب حرفه‌ای، بیش از ۱۵ تم رنگی و پیش‌نمایش لحظه‌ای همراه با احراز هویت امن.",
                    category: ["dashboard"],
                    technologies: ["React", "Node.js", "MongoDB", "Docker", "Ant", "Git"],
                    image: "/projects/resume-builder.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/resume-builder" }
                    ]
                },
                {
                    id: 10,
                    title: "دستیار جلسات فارسی",
                    // description: "دستیار هوشمند جلسات فارسی با استفاده از هوش مصنوعی",
                    description: "افزونه مرورگر با قابلیت رونویسی صوتی لحظه‌ای و خلاصه‌سازی هوشمند فارسی برای جلسات آنلاین مثل Google Meet با استفاده از هوش مصنوعی.",
                    category: ["extension"],
                    technologies: ["Preact", "Node.js", "Tailwindcss", "Google Cloud", "OpenAI", "Git"],
                    image: "/projects/meeting_assistant.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/Meeting-assistant" }
                    ]
                },
                {
                    id: 11,
                    title: "ارز دیجیتال",
                    // description: "داشبورد ارزهای دیجیتال",
                    description: "داشبورد ارز دیجیتال با رابط کاربری مدرن، احراز هویت کاربران و نمایش بصری داده‌های بازار برای پیگیری لحظه‌ای قیمت دارایی‌های دیجیتال.",
                    category: ["dashboard"],
                    technologies: ["React", "Firebase", "React Query", "Tailwindcss", "Zod", "React Hook Form", "Framer Motion", "Chart.js", "Git"],
                    image: "/projects/cryptocurrency.png",
                    links: [
                        { name: "Web", url: "https://cryptocurrency-dashboardd.netlify.app/" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/react-hook-form-yup" }
                    ]
                },
                {
                    id: 12,
                    title: "وبسایت فیلم",
                    // description: "وب‌سایت فیلم",
                    description: "پلتفرم مرور فیلم با امکان جستجو، فیلتر و مدیریت محتوا، همراه با سیستم احراز هویت و واکشی بهینه داده با React Query.",
                    category: ["web"],
                    technologies: ["React", "React Query", "Bootstrap", "Git"],
                    image: "/projects/film.png",
                    links: [
                        { name: "Web", url: "https://movie-app-reactjs-three.vercel.app/" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/movie-app-reactjs" }
                    ]
                },
                {
                    id: 13,
                    title: "سبد خرید",
                    // description: "اپلیکیشن سبد خرید ریسپانسیو",
                    description: "اپلیکیشن سبد خرید ریسپانسیو با مدیریت کامل وضعیت سبد شامل افزودن، حذف و تغییر تعداد محصولات، با تجربه کاربری روان و سریع.",
                    category: ["web"],
                    technologies: ["Next.js", "Redux", "Tailwindcss", "Swiper", "Git"],
                    image: "/projects/jewelry.png",
                    links: [
                        { name: "Web", url: "https://accessory-market.netlify.app/" },
                        { name: "Figma", url: "#" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/nextjs-shopping-cart" }
                    ]
                },
                {
                    id: 14,
                    title: "وب‌سایت نمونه کارها",
                    description: "وب‌سایت مدرن و ریسپانسیو نمونه کارها با استفاده از React، TailwindCSS و Vite. دارای پشتیبانی دو زبانه (فارسی/انگلیسی)، تم روشن/تاریک، اسکرول نرم و فیلتر داینامیک پروژه‌ها.",
                    category: ["web", "uiux"],
                    technologies: ["React", "TailwindCSS", "Figma"],
                    image: "/projects/portfolio-dark-theme.png",
                    links: [
                        { name: "Web", url: "#" },
                        { name: "Figma", url: "https://www.figma.com/design/4qXl93w2EIYsk55dHe5uB2/Developer-Portfolio-Design?node-id=0-1p=f&t=2i9QtnNG6fMNgQrn-0" },
                        { name: "GitHub", url: "https://github.com/Alaleh-Mohseni/portfolio" }
                    ]
                }
            ]
        },

        // بخش تجربیات
        experience: {
            title: "تجربیات من",
            items: [
                {
                    company: "کاریار استودیو",
                    logo: "/Karyar-Studio-Logo.svg",
                    companyLink: "https://www.linkedin.com/company/karyar-studio/",
                    position: "توسعه‌دهنده فرانت‌اند",
                    period: "مهر ۱۴۰۲ - اکنون",
                    achievements: [
                        "بهینه‌سازی عملکرد پنل ادمین با استفاده از Code Splitting، Lazy Loading و تکنیک‌های memoization که منجر به کاهش محسوس زمان بارگذاری اولیه و بهبود امتیاز Lighthouse شد.",
                        "طراحی و توسعه فرم‌های چندمرحله‌ای (Wizard) با اعتبارسنجی پیشرفته، مدیریت state بهینه و رندر داینامیک فیلدها برای بهبود تجربه کاربری.",
                        "طراحی و پیاده‌سازی سیستم ترجمه اختصاصی برای پشتیبانی کامل از RTL/LTR.",
                        "ساخت کامپوننت‌های reusable و مقیاس‌پذیر با React و Ant Design برای افزایش یکپارچگی کد و کاهش تکرار در پروژه‌ها.",
                        "پیاده‌سازی داشبوردهای تحلیلی با نمودارهای پویا و فیلترهای داینامیک جهت نمایش داده‌های لجستیکی و عملکرد سازمانی.",
                        "توسعه هوک‌های سفارشی مدیریت API با قابلیت کشینگ و حذف درخواست‌های تکراری برای افزایش پایداری فرانت‌اند.",
                        "کاهش رندرهای غیرضروری با بهینه‌سازی ساختار state و استفاده از تکنیک‌های debounce و throttle."
                    ]
                }
            ]
        },
    }
};

export default portfolioData;
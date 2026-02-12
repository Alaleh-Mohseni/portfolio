const portfolioData = {
    en: {
        // Header/Hero Section
        hero: {
            greeting: "👋 Hi there, I'm Alaleh Mohseni",
            title: "Frontend Developer",
            description: "I'm a Frontend Developer with 3+ years of experience building modern, responsive web apps with React. I love using AI tools to move faster, solve problems smarter, and deliver clean, maintainable code. I'm comfortable with Node.js basics and enjoy working with teams to turn ideas into real products.",
            cvButton: "Download CV",
            cvLink: "/resume/AlalehMohseni.pdf",
            currentWork: {
                label: "Currently at",
                company: "Karyar Studio"
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
                { name: "HTML5", icon: "html5" },
                { name: "CSS3", icon: "css3" },
                { name: "JavaScript", icon: "javascript" },
                { name: "React", icon: "react" },
                { name: "Node.js", icon: "nodejs" },
                { name: "Express.js", icon: "express" },
                { name: "Ant Design", icon: "antd" },
                { name: "MongoDB", icon: "mongodb" },
                { name: "Tailwindcss", icon: "tailwind" },
                { name: "Sass/Scss", icon: "sass" },
                { name: "Figma", icon: "figma" },
                { name: "Git", icon: "git" },
                { name: "Next.js", icon: "nextjs" },
                { name: "TypeScript", icon: "typescript" },
                { name: "Docker", icon: "docker" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Firebase", icon: "firebase" },
                { name: "Vitest", icon: "vitest" },
                { name: "ClickHouse", icon: "clickhouse" },
                { name: "Socket.io", icon: "socketio" },
                { name: "BaseUI", icon: "baseui" },
                { name: "Bootstrap", icon: "bootstrap" },
                { name: "Trello", icon: "trello" }
            ]
        },

        // Projects Section
        projects: {
            title: "My Latest Works",
            subtitle: "Real-world applications built for clients and the community.",
            categories: ["All Projects", "Dashboard", "Web Design", "Mobile App", "UI/UX"],
            items: [
                {
                    id: 1,
                    title: "Akeep",
                    description: "Performance Management Dashboard",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Ant Design", "Recharts", "Express.js", "MongoDB"],
                    image: "/path/to/akeep.png",
                    link: "#"
                },
                {
                    id: 2,
                    title: "Sampars",
                    description: "Logistics Dashboard",
                    category: "Dashboard",
                    technologies: ["React", "Node.js", "MongoDB", "Ant Design", "Recharts", "ClickHouse"],
                    image: "/path/to/sampars.png",
                    link: "#"
                }
            ]
        },

        // Experience Section
        experience: {
            title: "My Experience",
            items: [
                {
                    company: "Karyar Studio",
                    logo: "/path/to/karyar-logo.png",
                    position: "Frontend Developer",
                    period: "Oct 2023 - Present",
                    achievements: [
                        "Optimized admin panel performance using Code Splitting and Lazy Loading, significantly reducing initial load time and improving Lighthouse scores.",
                        "Designed and implemented custom API management hooks with caching and request deduplication, increasing system stability and efficiency.",
                        "Built analytical dashboards using Recharts to visualize order and shipment status for the SamPars logistics platform.",
                        "Developed a bilingual (RTL/LTR) organizational performance management panel (A-keep) featuring interactive tools such as 360-degree feedback and meeting calendars.",
                        "Contributed to the development of Digikala's landing page builder and implemented an interactive province-based game for Divar using TypeScript.",
                        "Improved user experience by applying debounce techniques to scroll events and optimizing Navbar state management, reducing unnecessary re-renders."
                    ]
                }
            ]
        },
    },

    fa: {
        // بخش هدر/هیرو
        hero: {
            greeting: "👋 سلام، من آلاله محسنی هستم",
            title: "توسعه‌دهنده فرانت‌اند",
            description: "من یک توسعه‌دهنده فرانت‌اند با بیش از ۳ سال تجربه در ساخت اپلیکیشن‌های وب مدرن و ریسپانسیو با React هستم. از ابزارهای هوش مصنوعی برای کار سریع‌تر، حل مسائل هوشمندانه‌تر و تحویل کد تمیز و قابل نگهداری استفاده می‌کنم. با اصول Node.js آشنا هستم و از کار تیمی برای تبدیل ایده‌ها به محصولات واقعی لذت می‌برم.",
            cvButton: "دانلود رزومه",
            cvLink: "/resume/آلاله_محسنی.pdf",
            currentWork: {
                label: "در حال حاضر در",
                company: "کاریار استودیو"
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
                { name: "HTML5", icon: "html5" },
                { name: "CSS3", icon: "css3" },
                { name: "JavaScript", icon: "javascript" },
                { name: "React", icon: "react" },
                { name: "Node.js", icon: "nodejs" },
                { name: "Express.js", icon: "express" },
                { name: "Ant Design", icon: "antd" },
                { name: "MongoDB", icon: "mongodb" },
                { name: "Tailwindcss", icon: "tailwind" },
                { name: "Sass/Scss", icon: "sass" },
                { name: "Figma", icon: "figma" },
                { name: "Git", icon: "git" },
                { name: "Next.js", icon: "nextjs" },
                { name: "TypeScript", icon: "typescript" },
                { name: "Docker", icon: "docker" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Firebase", icon: "firebase" },
                { name: "Vitest", icon: "vitest" },
                { name: "ClickHouse", icon: "clickhouse" },
                { name: "Socket.io", icon: "socketio" },
                { name: "BaseUI", icon: "baseui" },
                { name: "Bootstrap", icon: "bootstrap" },
                { name: "Trello", icon: "trello" }
            ]
        },

        // بخش پروژه‌ها
        projects: {
            title: "آخرین پروژه‌های من",
            subtitle: "اپلیکیشن‌های واقعی ساخته شده برای مشتریان و جامعه.",
            categories: ["همه پروژه‌ها", "داشبورد", "طراحی وب", "اپلیکیشن موبایل", "رابط کاربری"],
            items: [
                {
                    id: 1,
                    title: "آکیپ",
                    description: "داشبورد مدیریت عملکرد",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Ant Design", "Recharts", "Express.js", "MongoDB"],
                    image: "/path/to/akeep.png",
                    link: "#"
                },
                {
                    id: 2,
                    title: "سمپارس",
                    description: "داشبورد لجستیک",
                    category: "Dashboard",
                    technologies: ["React", "Node.js", "MongoDB", "Ant Design", "Recharts", "ClickHouse"],
                    image: "/path/to/sampars.png",
                    link: "#"
                }
            ]
        },

        // بخش تجربیات
        experience: {
            title: "تجربیات من",
            items: [
                {
                    company: "کاریار استودیو",
                    logo: "/path/to/karyar-logo.png",
                    position: "توسعه‌دهنده فرانت‌اند",
                    period: "مهر ۱۴۰۲ - اکنون",
                    achievements: [
                        "بهینه‌سازی عملکرد پنل ادمین با استفاده از Code Splitting و Lazy Loading که منجر به کاهش قابل توجه زمان بارگذاری اولیه و بهبود امتیازات Lighthouse شد.",
                        "طراحی و پیاده‌سازی هوک‌های مدیریت API سفارشی با قابلیت کشینگ و حذف درخواست‌های تکراری که باعث افزایش پایداری و کارایی سیستم شد.",
                        "ساخت داشبوردهای تحلیلی با استفاده از Recharts برای نمایش وضعیت سفارشات و حمل‌ونقل در پلتفرم لجستیک سمپارس.",
                        "توسعه پنل دوزبانه (RTL/LTR) مدیریت عملکرد سازمانی (آکیپ) با ابزارهای تعاملی مانند بازخورد ۳۶۰ درجه و تقویم جلسات.",
                        "مشارکت در توسعه صفحه‌ساز لندینگ دیجی‌کالا و پیاده‌سازی بازی تعاملی مبتنی بر استان‌ها برای دیوار با استفاده از TypeScript.",
                        "بهبود تجربه کاربری با اعمال تکنیک‌های debounce روی رویدادهای اسکرول و بهینه‌سازی مدیریت state نوار ناوبری که باعث کاهش رندرهای غیرضروری شد."
                    ]
                }
            ]
        },
    }
};

export default portfolioData;
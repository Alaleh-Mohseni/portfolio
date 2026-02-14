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
                { name: "Node.js", icon: "/dev/nodejs.svg" },
                { name: "Express.js", icon: "/dev/express.svg" },
                { name: "Ant Design", icon: "/dev/antdesign.svg" },
                { name: "MongoDB", icon: "/dev/mongodb.svg" },
                { name: "Tailwindcss", icon: "/dev/tailwindcss.svg" },
                { name: "Sass/Scss", icon: "/dev/sass.svg" },
                { name: "Figma", icon: "/dev/figma.svg" },
                { name: "Git", icon: "/dev/git.svg" },
                { name: "Next.js", icon: "/dev/nextjs.svg" },
                { name: "TypeScript", icon: "/dev/typescript.svg" },
                { name: "Docker", icon: "/dev/docker.svg" },
                { name: "PostgreSQL", icon: "/dev/postgresql.svg" },
                { name: "Firebase", icon: "/dev/firebase.svg" },
                { name: "Vitest", icon: "/dev/vitest.svg" },
                { name: "ClickHouse", icon: "/dev/clickhouse.svg" },
                { name: "Socket.io", icon: "/dev/socket.svg" },
                { name: "BaseUI", icon: "/dev/baseui.svg" },
                { name: "Bootstrap", icon: "/dev/bootstrap.svg" },
                { name: "Vite", icon: "/dev/vite.svg" }
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
                    image: "/projects/aKeep.png",
                    link: "#"
                },
                {
                    id: 2,
                    title: "Sampars",
                    description: "Logistics Dashboard",
                    category: "Dashboard",
                    technologies: ["React", "Node.js", "MongoDB", "Ant Design", "Recharts", "ClickHouse"],
                    image: "/projects/sampars.png",
                    link: "#"
                },
                {
                    id: 3,
                    title: "Karyar Digital",
                    description: "Profile Management Dashboard & Course Registration System",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Ant Design", "Node.js", "MongoDB"],
                    image: "/projects/karyar-digital.png",
                    link: "#"
                },
                {
                    id: 4,
                    title: "Divar",
                    description: "Province Guessing Game",
                    category: "Web Design",
                    technologies: ["React", "TypeScript", "CSS3"],
                    image: "/projects/divar-desktop.png",
                    link: "#"
                },
                {
                    id: 5,
                    title: "Nexis",
                    description: "Hub Management Dashboard & Mobile Web App",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Ant Design", "Node.js"],
                    image: "/projects/nexis.png",
                    link: "#"
                },
                {
                    id: 6,
                    title: "Karyar Studio",
                    description: "Business Landing Page",
                    category: "Web Design",
                    technologies: ["React", "Tailwindcss", "TypeScript"],
                    image: "/projects/karyar-studio.png",
                    link: "#"
                },
                {
                    id: 7,
                    title: "Ta Code",
                    description: "Digikala Landing Page",
                    category: "Web Design",
                    technologies: ["React", "TypeScript", "Tailwindcss"],
                    image: "/projects/ta-code.png",
                    link: "#"
                },
                {
                    id: 8,
                    title: "Resume Builder",
                    description: "Bilingual Resume Builder Dashboard (English & Persian)",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Ant Design", "Node.js"],
                    image: "/projects/resume-builder.png",
                    link: "#"
                },
                {
                    id: 9,
                    title: "Digikala",
                    description: "Dynamic Presentation Generator Dashboard",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Ant Design"],
                    image: "/projects/presentation.jpg",
                    link: "#"
                },
                {
                    id: 10,
                    title: "Cryptocurrency",
                    description: "Cryptocurrency Dashboard",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Recharts", "Tailwindcss"],
                    image: "/projects/cryptocurrency.png",
                    link: "#"
                },
                {
                    id: 11,
                    title: "The Movie Box",
                    description: "Movie Website",
                    category: "Web Design",
                    technologies: ["React", "TypeScript", "Tailwindcss"],
                    image: "/projects/film.png",
                    link: "#"
                },
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
                { name: "Node.js", icon: "/dev/nodejs.svg" },
                { name: "Express.js", icon: "/dev/express.svg" },
                { name: "Ant Design", icon: "/dev/antdesign.svg" },
                { name: "MongoDB", icon: "/dev/mongodb.svg" },
                { name: "Tailwindcss", icon: "/dev/tailwindcss.svg" },
                { name: "Sass/Scss", icon: "/dev/sass.svg" },
                { name: "Figma", icon: "/dev/figma.svg" },
                { name: "Git", icon: "/dev/git.svg" },
                { name: "Next.js", icon: "/dev/nextjs.svg" },
                { name: "TypeScript", icon: "/dev/typescript.svg" },
                { name: "Docker", icon: "/dev/docker.svg" },
                { name: "PostgreSQL", icon: "/dev/postgresql.svg" },
                { name: "Firebase", icon: "/dev/firebase.svg" },
                { name: "Vitest", icon: "/dev/vitest.svg" },
                { name: "ClickHouse", icon: "/dev/clickhouse.svg" },
                { name: "Socket.io", icon: "/dev/socket.svg" },
                { name: "BaseUI", icon: "/dev/baseui.svg" },
                { name: "Bootstrap", icon: "/dev/bootstrap.svg" },
                { name: "Vite", icon: "/dev/vite.svg" }
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
                    title: "اکیپ",
                    description: "داشبورد مدیریت عملکرد",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Ant Design", "Recharts", "Express.js", "MongoDB"],
                    image: "/projects/aKeep.png",
                    link: "#"
                },
                {
                    id: 2,
                    title: "سام پارس",
                    description: "داشبورد لجستیک",
                    category: "Dashboard",
                    technologies: ["React", "Node.js", "MongoDB", "Ant Design", "Recharts", "ClickHouse"],
                    image: "/projects/sampars.png",
                    link: "#"
                },
                {
                    id: 3,
                    title: "کاریار دیجیتال",
                    description: "داشبورد مدیریت پروفایل و سیستم ثبت‌نام دوره",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Ant Design", "Node.js", "MongoDB"],
                    image: "/projects/karyar-digital.png",
                    link: "#"
                },
                {
                    id: 4,
                    title: "دیوار",
                    description: "بازی حدس استان",
                    category: "Web Design",
                    technologies: ["React", "TypeScript", "CSS3"],
                    image: "/projects/divar.png",
                    link: "#"
                },
                {
                    id: 5,
                    title: "نکسیس",
                    description: "داشبورد مدیریت هاب و اپلیکیشن وب موبایل",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Ant Design", "Node.js"],
                    image: "/projects/nexis.png",
                    link: "#"
                },
                {
                    id: 6,
                    title: "کاریار استودیو",
                    description: "صفحه فرود کسب‌وکار",
                    category: "Web Design",
                    technologies: ["React", "Tailwindcss", "TypeScript"],
                    image: "/projects/karyar-studio.png",
                    link: "#"
                },
                {
                    id: 7,
                    title: "تا کد",
                    description: "دیجی‌کالا",
                    category: "Web Design",
                    technologies: ["React", "TypeScript", "Tailwindcss"],
                    image: "/projects/ta-code.png",
                    link: "#"
                },
                {
                    id: 8,
                    title: "سازنده رزومه",
                    description: "داشبورد دوزبانه سازنده رزومه (انگلیسی و فارسی)",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Ant Design", "Node.js"],
                    image: "/projects/resume-builder.png",
                    link: "#"
                },
                {
                    id: 9,
                    title: "دیجی‌کالا",
                    description: "داشبورد ساخت پرزنتیشن داینامیک",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Ant Design"],
                    image: "/projects/digikala.png",
                    link: "#"
                },
                {
                    id: 10,
                    title: "ارز دیجیتال",
                    description: "داشبورد ارزهای دیجیتال",
                    category: "Dashboard",
                    technologies: ["React", "TypeScript", "Recharts", "Tailwindcss"],
                    image: "/projects/cryptocurrency.png",
                    link: "#"
                },
                {
                    id: 11,
                    title: "جعبه فیلم",
                    description: "وب‌سایت فیلم",
                    category: "Web Design",
                    technologies: ["React", "TypeScript", "Tailwindcss"],
                    image: "/projects/movie-box.png",
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
                    logo: "/Karyar-Studio-Logo.svg",
                    companyLink: "https://www.linkedin.com/company/karyar-studio/",
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
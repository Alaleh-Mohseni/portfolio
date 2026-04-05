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
    fa: {
        profile: {
            name: 'آلاله محسنی',
            job_title: 'Frontend Developer',
            about: 'توسعه‌دهنده فرانت‌اند با بیش از ۳ سال تجربه در توسعه وب‌اپلیکیشن‌های ریسپانسیو و کاربرمحور با React. دارای رویکرد AI-first و استفاده مؤثر از ابزارهای مبتنی بر هوش مصنوعی برای افزایش بهره‌وری توسعه، همراه با تمرکز بر کیفیت کد و بهینه‌سازی عملکرد. آشنا با مفاهیم پایه بک‌اند با Node.js. فردی مسئولیت‌پذیر، یادگیرنده و علاقه‌مند به رشد در تیم‌های حرفه‌ای و پروژه‌های واقعی.',
            mobile: '۰۹۳۶۱۰۴۴۳۷۱',
            city: 'سمنان',
            province: 'سمنان',
            social_links: [
                { name: "GitHub", url: "https://github.com/Alaleh-Mohseni", icon: "github" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/alaleh-mohseni", icon: "linkedin" },
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
                    company_name: "کاریار استودیو",
                    company_link: "https://www.linkedin.com/company/karyar-studio/",
                    position: "توسعه‌دهنده فرانت‌اند",
                    about_company: "کاریار استودیو در زمینه طراحی و توسعه وب‌سایت و محصولات دیجیتال فعالیت می‌کند.",
                    period: "مهر ۱۴۰۲ - تاکنون",
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
        projects: {
            items: [
                {
                    title: "دستیار جلسات فارسی",
                    description: "دستیار صوتی هوشمند برای جلسات با قابلیت رونویسی لحظه‌ای و خلاصه‌سازی فارسی مبتنی بر هوش مصنوعی (وب‌اپلیکیشن و افزونه مرورگر).",
                    technologies: ["Preact", "Node.js", "Browser Extension"],
                    topics: [
                        "پیاده‌سازی رونویسی صوتی لحظه‌ای با Google Speech-to-Text و پردازش صوت در مرورگر",
                        "طراحی سیستم تشخیص گویندگان (Speaker Diarization) در Google Meet",
                        "یکپارچه‌سازی OpenAI API برای تولید خلاصه جلسات",
                        "توسعه افزونه چندمرورگری (Chrome, Firefox, Edge) با Manifest V3"
                    ],
                    link: "#"
                },
                {
                    title: "رزومه ساز",
                    description: "توسعه اپلیکیشن رزومه ساز دوزبانه با پشتیبانی کامل از RTL و قالب‌های حرفه‌ای.",
                    technologies: ["React", "Node.js", "MongoDB", "Docker", "Antd"],
                    topics: [
                        "پیاده‌سازی احراز هویت JWT و کنترل دسترسی مبتنی بر نقش + پنل مدیریت",
                        "پشتیبانی کامل از فارسی و انگلیسی با تغییر خودکار RTL و فونت‌ها",
                        "طراحی ۴ قالب رزومه با پیش‌نمایش لحظه‌ای و بیش از ۱۵ تم رنگی",
                        "توسعه APIهای بک‌اند و آپلود امن فایل با Express و MongoDB",
                    ],
                    link: "#"
                },
                {
                    title: "داشبورد ساخت پرزنتیشن داینامیک",
                    description: "توسعه پلتفرم ساخت و اشتراک‌گذاری صفحات ارائه مبتنی بر داده‌های گزارش سالانه دیجیکالا.",
                    technologies: ["React", "Node.js", "React Query", "Supabase", "Chart.js", "Framer Motion", "Vitest", "CSS"],
                    topics: [
                        "مدیریت داده و استیت با React Query و مسیریابی با React Router",
                        "پیاده‌سازی نمودارهای تعاملی با Chart.js و انیمیشن با Framer Motion",
                        "توسعه بک‌اند Node.js و ارتباط بهینه با APIها",
                        "نوشتن تست‌های واحد با Vitest",
                    ],
                    link: "#",
                },
                {
                    title: "سبد خرید",
                    description: "توسعه سبد خرید ریسپانسیو با تجربه کاربری روان.",
                    technologies: ["Next.js", "Redux", "Tailwindcss", "Swiper", "Git"],
                    topics: [
                        "مدیریت استیت سبد خرید با Redux (افزودن، حذف و ویرایش تعداد)",
                        "پیاده‌سازی با Next.js و Tailwind CSS"
                    ],
                    link: "https://accessory-market.netlify.app/"
                },
                {
                    title: "داشبورد ارز دیجیتال",
                    description: "داشبورد ارز داشبورد ارز دیجیتال با رابط کاربری مدرن و احراز هویت.",
                    technologies: ["React", "Firebase", "React Query", "Tailwindcss", "Zod", "React Hook Form", "Framer Motion", "Chart.js", "Git"],
                    topics: [
                        "توسعه با React، Tailwind، React Query و Framer Motion",
                        "پیاده‌سازی احراز هویت Firebase",
                        "نمایش داده‌های بازار به‌صورت بصری با Chart.js",
                    ],
                    link: "https://cryptocurrency-dashboardd.netlify.app/"
                },
                {
                    title: "وبسایت فیلم",
                    description: "وب‌سایت فیلم با قابلیت فیلتر و مدیریت محتوا.",
                    technologies: ["React", "React Query", "Bootstrap", "Git"],
                    topics: [
                        "مدیریت داده با React Query",
                        "طراحی ریسپانسیو با Bootstrap",
                        "پیاده‌سازی احراز هویت و افزودن فیلم جدید"
                    ],
                    link: "https://movie-app-reactjs-three.vercel.app/"
                },
            ]
        },
        education: {
            degree: "کارشناس",
            study_field: "مهندسی صنایع",
            period: "",
            university: "دانشگاه آزاد اسلامی",
            city: "سمنان"
        },
        languages: ["فارسی", "انگلیسی"],
        activities: {
            company: "موسسه کاریار",
            company_link: "https://kaaryar.ir/",
            role: "مربی حل تمرین و منتور",
            period: "مرداد ۱۴۰۲ - تاکنون",
            description: "من به عنوان منتور و مربی حل تمرین در دوره های کاریار داوطلب شدم. هدف کاریار توانمندسازی افراد با دسترسی محدود به محتوای آموزشی و فناوری با فراهم کردن منابع لازم برای ارتقای چشم انداز تحصیلی و شغلی آنهاست."
        }
    },
}
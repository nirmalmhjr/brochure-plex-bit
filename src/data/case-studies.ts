export interface CaseStudy {
  appStore?: string;

  brandLogo?: string;

  brandSub?: string;
  desc: string;

  footnote?: string;
  image?: string;
  name: string;
  playStore?: string;
  serviceArea: string;
  servicesSupplied: string[];
  solutions: string[];
  tagline?: string;
  teamSize: string;
  tech: string[];
  timeFrame: string;
  website?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    name: "Magnifi",
    brandSub: "by TIFIN",
    tagline: "AI for your financial future",
    website: "magnifi.com",
    footnote: "AI for the sensible investor.",
    teamSize: "8",
    timeFrame: "Aug 2024 — Ongoing",
    serviceArea: "Data & AI/ML",
    image: "/images/case-studies/magnifi.png",
    desc: "Magnifi by TIFIN is an AI-powered investing assistant designed to simplify and personalize investment decisions for individual investors. It enables users to link multiple brokerage accounts, providing a comprehensive view of their portfolios and offering real-time insights, risk assessments, and personalized recommendations. With natural language search capabilities, Magnifi allows users to explore investment options across thousands of ETFs, mutual funds, and stocks, making investing more accessible.",
    tech: [
      "/images/case-studies/tech-stack-icons/flask.png",
      "/images/case-studies/tech-stack-icons/nodejs.png",
      "/images/case-studies/tech-stack-icons/fast-api.webp",
      "/images/case-studies/tech-stack-icons/pinecone.svg",
      "/images/case-studies/tech-stack-icons/open-ai.png",
      "/images/case-studies/tech-stack-icons/mongo-db.png",
      "/images/case-studies/tech-stack-icons/aws.webp",
    ],
    servicesSupplied: ["Development", "Support", "Maintenance"],
    solutions: [
      "Built smart algorithms for tailored advice and real-time investment insights.",
      "Linked brokerage accounts for seamless tracking and better user experience.",
      "Enabled NLP for easy discovery across varied financial instruments.",
      "Designed responsive UIs to simplify and present investment data clearly.",
    ],
  },
  {
    name: "TIFIN",
    tagline: "AI for Wealth",
    website: "tifin.com",
    teamSize: "10",
    timeFrame: "Aug 2024 — Ongoing",
    serviceArea: "Data & AI/ML",
    image: "/images/case-studies/tifin.png",
    desc: "TIFIN is a technology-driven company focused on transforming wealth management using AI. By enhancing personalization, it aims to provide tailored financial solutions for individuals, asset managers, and advisors. TIFIN works to streamline wealth management processes and empower better decision-making with advanced AI-powered tools.",
    tech: [
      "/images/case-studies/tech-stack-icons/flask.png",
      "/images/case-studies/tech-stack-icons/nodejs.png",
      "/images/case-studies/tech-stack-icons/fast-api.webp",
      "/images/case-studies/tech-stack-icons/pinecone.svg",
      "/images/case-studies/tech-stack-icons/open-ai.png",
      "/images/case-studies/tech-stack-icons/mongo-db.png",
      "/images/case-studies/tech-stack-icons/aws.webp",
    ],
    servicesSupplied: ["Development", "Support", "Maintenance"],
    solutions: [
      "AI-Driven Personalization: Tailors wealth management strategies for individual clients.",
      "Financial Insights: Delivers actionable data to advisors and asset managers.",
      "Rapid Innovation: Continuously evolves its technology to improve wealth outcomes.",
      "Investor Decision-Making: Optimizes financial decisions with intelligent algorithms.",
    ],
  },
  {
    name: "Tawuniya",
    tagline: "Insurance, reimagined for the digital age",
    website: "tawuniya.com",
    appStore: "#",
    playStore: "#",
    teamSize: "28",
    timeFrame: "Oct 2022 — Ongoing",
    serviceArea: "Business Analysis, Design, Development & Data Analytics",
    image: "/images/case-studies/tawuniya.png",
    desc: "Tawuniya, established in 1986, was the first national insurance company in Saudi Arabia to operate under the cooperative insurance model. It provides a wide range of insurance services, including health, motor, and property, and is regulated by the Saudi Central Bank (SAMA).",
    tech: [
      "/images/technology-stack/frontend/reactjs.png",
      "/images/case-studies/tech-stack-icons/flutter.png",
      "/images/case-studies/tech-stack-icons/oracle-pl-sql.jpg",
      "/images/case-studies/tech-stack-icons/web-methods.webp",
      "/images/case-studies/tech-stack-icons/ui-path.png",
    ],
    servicesSupplied: ["Design", "Development", "Support", "Maintenance"],
    solutions: [
      "Developed claims automation system with RPA, streamlining workflows and enhancing accuracy.",
      "Simplified digital onboarding — accelerated client registration, policy management, and transactions.",
      "Launched MENA's first loyalty programs, driving safer habits and 96% wellness improvement.",
      "A centralized payment page streamlines transactions across all LOBs, enhancing efficiency.",
    ],
  },
  {
    name: "VueMotion",
    brandSub: "Inspired by Motion",
    website: "vuemotion.com",
    appStore: "#",
    teamSize: "15",
    timeFrame: "2022 — Ongoing",
    serviceArea: "AI & Data Analytics, Design, Development, Maintenance",
    image: "/images/case-studies/vuemotion.png",
    desc: "VueMotion is an AI-powered sports performance analysis platform that uses computer vision and machine learning to deliver biomechanical assessments through mobile and web apps. It helps coaches and athletes optimize movement, improve performance, and prevent injuries without the need for specialized hardware.",
    tech: [
      "/images/case-studies/tech-stack-icons/nodejs.png",
      "/images/technology-stack/frontend/reactjs.png",
      "/images/case-studies/tech-stack-icons/aws.webp",
      "/images/case-studies/tech-stack-icons/mongo-db.png",
      "/images/case-studies/tech-stack-icons/ios.png",
      "/images/case-studies/tech-stack-icons/python.png",
    ],
    servicesSupplied: ["Design", "Development", "Support", "Maintenance"],
    solutions: [
      "Implemented advanced computer vision and machine learning algorithms to analyze athlete movements and provide detailed biomechanical assessments.",
      "Developed intuitive mobile and web applications for users to access performance insights without specialized hardware.",
      "Crafted user-friendly interfaces to ensure seamless interaction for coaches, athletes, and medical professionals.",
    ],
  },
  {
    name: "Jaweb",
    website: "jaweb.me",
    teamSize: "12",
    timeFrame: "2023 — 2025",
    serviceArea: "Data & AI/ML",
    image: "/images/case-studies/jaweb.png",
    desc: "Jaweb.me is a platform specializing in AI-powered chatbots designed to enhance business operations across various sectors. Their chatbots aim to improve customer engagement, automate workflows, and boost sales by providing personalized, context-aware interactions.",
    tech: [
      "/images/technology-stack/frontend/reactjs.png",
      "/images/case-studies/tech-stack-icons/postgreSql.png",
      "/images/databases/redis.png",
      "/images/case-studies/tech-stack-icons/python.png",
      "/images/case-studies/tech-stack-icons/open-ai.png",
      "/images/case-studies/tech-stack-icons/zapier.png",
      "/images/case-studies/tech-stack-icons/aws.webp",
    ],
    servicesSupplied: ["Development", "Support", "Maintenance"],
    solutions: [
      "AI chatbots handle queries, integrate platforms, and escalate chats to human agents.",
      "Chatbots recommend products, recover carts, and drive conversions with optimized conversation flows.",
      "AI qualifies leads, schedules meetings, and sends personalized follow-ups through integrated chat.",
      "No-code bot setup with industry templates and simple dashboard for bot management.",
      "Centralized communication, Zapier integration, and unified dashboard to track chats and performance.",
    ],
  },
  {
    name: "NapDetect",
    website: "napdetect.com",
    appStore: "#",
    playStore: "#",
    teamSize: "8",
    timeFrame: "2 Yr",
    serviceArea: "AI/ML, Design, Development",
    image: "/images/case-studies/napdetect.png",
    desc: "NapDetect is an AI-powered safety application designed to detect signs of drowsiness and distraction by analyzing facial movements and head positions in real-time. Utilizing the device's front-facing camera, it alerts users when signs of fatigue are detected, enhancing safety during driving, studying, or working. The app is available for download on both Android and iOS platforms.",
    tech: [
      "/images/case-studies/tech-stack-icons/nodejs.png",
      "/images/technology-stack/frontend/reactjs.png",
      "/images/case-studies/tech-stack-icons/aws.webp",
      "/images/case-studies/tech-stack-icons/mongo-db.png",
      "/images/case-studies/tech-stack-icons/android.png",
      "/images/case-studies/tech-stack-icons/ios.png",
    ],
    servicesSupplied: ["Design", "Development", "Support", "Maintenance"],
    solutions: [
      "Developed cross-platform mobile applications (iOS and Android) with a focus on real-time facial recognition and alert systems.",
      "Optimized the app's performance to function effectively on both high-end and low-end devices, addressing challenges related to camera angles and lighting conditions.",
      "Integrated Google APIs to ensure compatibility across various Android devices, enhancing user accessibility.",
      "Implemented AI algorithms that continuously analyze facial movements, providing timely alerts to prevent drowsiness-related incidents.",
    ],
  },
  {
    name: "Birla Pivot",
    brandSub: "An Aditya Birla Group product",
    tagline: "Build. Grow. Transform.",
    website: "birlapivot.com",
    teamSize: "22",
    timeFrame: "2022 — Ongoing",
    serviceArea: "Business Analysis, Design, Development & Data Analytics",
    image: "/images/case-studies/birla-pivot.png",
    desc: "Birla Pivot, an Aditya Birla Group product, is an innovative online platform that is transforming the construction materials industry. It offers a wide range of high-quality materials, including tiles, plywood, aggregates, beams, and columns, suitable for both large-scale and residential projects.",
    tech: [
      "/images/technology-stack/frontend/reactjs.png",
      "/images/case-studies/tech-stack-icons/mysql.png",
      "/images/case-studies/tech-stack-icons/aws.webp",
      "/images/case-studies/tech-stack-icons/laravel.png",
      "/images/case-studies/tech-stack-icons/zoho-erp.png",
    ],
    servicesSupplied: ["Design", "Development", "Support", "Maintenance"],
    solutions: [
      "Transitioning from a traditional sales model to a portal-based ordering system.",
      "Streamlined backend processes to unify material sourcing and financing.",
      "Launched B2B marketplace for construction materials supply chain.",
    ],
  },
  {
    name: "TREAD Map",
    website: "treadmap.com",
    appStore: "#",
    playStore: "#",
    teamSize: "20+",
    timeFrame: "2016 — Ongoing",
    serviceArea: "AI/ML & Data Analytics, Development",
    image: "/images/case-studies/tread-map.png",
    desc: "TREAD Map is a hyper-local trail mapping app designed for outdoor enthusiasts, offering real-time trail conditions, user-generated reports, and curated insights from local experts. It also supports land managers and businesses with communication tools, data analytics, and targeted promotions to promote sustainable recreation.",
    tech: [
      "/images/case-studies/tech-stack-icons/mongo-db.png",
      "/images/case-studies/tech-stack-icons/python.png",
      "/images/case-studies/tech-stack-icons/aws.webp",
      "/images/case-studies/tech-stack-icons/ios.png",
      "/images/case-studies/tech-stack-icons/android.png",
      "/images/case-studies/tech-stack-icons/firebase.webp",
      "/images/case-studies/tech-stack-icons/google_maps.svg",
    ],
    servicesSupplied: ["Design", "Development", "Support", "Maintenance"],
    solutions: [
      "Provided end-to-end advisory, UI/UX design, and development services for Android, iOS, and Web platforms.",
      "Built a scalable backend using Python and PostgreSQL with AWS infrastructure for real-time map data handling.",
      "Integrated AI/ML features for predictive trail recommendations and user engagement insights.",
      "Delivered ongoing support and maintenance since 2016.",
    ],
  },
  {
    name: "Re4m",
    website: "re4m.io",
    teamSize: "10",
    timeFrame: "2018 — Ongoing",
    serviceArea: "AI/ML, Design, Development, Maintenance",
    image: "/images/case-studies/re4m.png",
    desc: "Re4m.io is a cloud-based creative platform designed to assist marketers and designers in planning, producing, and publishing engaging and high-performing content. It offers tools for organizing marketing projects, facilitating real-time collaboration with online annotation and approval features, and integrating approved assets into a centralized media library.",
    tech: [
      "/images/case-studies/tech-stack-icons/nodejs.png",
      "/images/technology-stack/frontend/reactjs.png",
      "/images/case-studies/tech-stack-icons/aws.webp",
      "/images/case-studies/tech-stack-icons/mongo-db.png",
      "/images/case-studies/tech-stack-icons/open-ai.png",
      "/images/databases/redis.png",
    ],
    servicesSupplied: ["Design", "Development", "Support", "Maintenance"],
    solutions: [
      "Designed and developed a cloud-based creative collaboration platform enabling marketers and designers to plan, review, and publish visual content efficiently.",
      "Integrated real-time collaboration tools, online annotations, and approval workflows to streamline creative production.",
      "Implemented predictive eye-tracking technology and AI-based content analysis for optimizing visual engagement.",
    ],
  },
  {
    name: "NLMK Group",
    website: "nlmk.com",
    teamSize: "12",
    timeFrame: "2023 — Ongoing",
    serviceArea: "Business Analysis, Design, Development & Data Analytics",
    image: "/images/case-studies/nlmk.png",
    desc: "NLMK Group, a major steel producer, is the largest in Russia and among the most efficient globally, with a production capacity exceeding 17 million tonnes per year. The company operates in Russia, Europe, and the U.S., providing steel products used in diverse industries such as construction and energy.",
    tech: [
      "/images/case-studies/tech-stack-icons/power-bi.png",
      "/images/case-studies/tech-stack-icons/SAPs 4HANA .png",
    ],
    servicesSupplied: ["Design", "Development", "Support", "Maintenance"],
    solutions: [
      "Launched SAP S/4HANA to accelerate digital and operational transformation.",
      "Established NLMK as steel innovation leader using advanced technologies.",
      "Boosted production efficiency through IoT and machine learning integration.",
    ],
  },
];

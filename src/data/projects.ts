// Availability badge shown under a project (matches the brochure design).
export type ProjectBadge = "case-study" | "app-store" | "google-play" | "web";

export interface Project {
  // Link / availability badges rendered under the project card.
  badges?: ProjectBadge[];
  desc: string;
  image?: string;
  name: string;
  // Live site URL, shown on the "Visit on Web" badge.
  url?: string;
}

export const projectPages: {
  title: string;
  highlight: string;
  // Category blurb shown on the left panel of the showcase page.
  subtitle?: string;
  // Capability chips shown on the left panel of the showcase page.
  tags?: string[];
  projects: Project[];
}[] = [
  {
    title: "Our",
    highlight: "Projects",
    subtitle:
      "We build innovative mobile and digital products that delight users and deliver real business value across platforms.",
    tags: [
      "iOS Apps",
      "Android Apps",
      "Cross-Platform",
      "Fintech",
      "Health & Fitness",
      "Messaging",
      "EdTech",
    ],
    projects: [
      {
        name: "BusyKid",
        image: "/images/projects/busy-kids.png",
        desc: "BusyKid is a chore and allowance app designed to teach kids money management through earning, saving, spending, and giving. It empowers children with financial literacy tools while providing parents with an easy way to assign chores and track progress.",
        url: "https://busykid.com",
      },
      {
        name: "Zsenia",
        image: "/images/projects/zsenia.png",
        desc: "Zsenia is a personalized learning app that adapts to your unique needs, offering interactive lessons, exercises, and progress tracking. It’s designed to make learning engaging and effective for all users.",
        url: "https://zsenia.com",
      },
      {
        name: "8 Fit",
        image: "/images/projects/8fit.png",
        desc: "8fit is a fitness and nutrition app that helps you achieve your health goals with personalized workout plans, meal planning, and expert guidance. It’s your all-in-one solution for a healthier lifestyle.",
        url: "https://8fit.com",
      },
      {
        name: "Zet Werk",
        image: "/images/projects/zet-werk.png",
        desc: "Zetwerk is a global manufacturing platform that connects businesses with reliable suppliers for custom manufacturing. It streamlines the production process, offering solutions for sourcing, quality control, and timely delivery.",
        url: "https://zetwerk.com",
      },
      {
        name: "Trendex",
        image: "/images/projects/trendex.png",
        desc: "Trendex is an advanced online trading platform offering tools and resources for trading various financial assets, including stocks, cryptocurrencies, and commodities. It’s designed for both beginners and experienced traders, providing a user-friendly interface and real-time market insights.",
        url: "https://trendex.com",
      },
      {
        name: "GoChat",
        image: "/images/projects/gochat.png",
        desc: "GoChat is a secure messaging app that focuses on privacy and ease of use. It offers features such as text messaging, voice and video calls, and file sharing, while prioritizing encryption and data protection to ensure users’ communications are safe and confidential.",
        url: "https://gochat.com",
      },
    ],
  },
  {
    title: "Web Development",
    highlight: "Highlights",
    subtitle:
      "We craft scalable, high-performance web applications and platforms that streamline operations, automate workflows, and grow with your business.",
    tags: [
      "Custom Web Apps",
      "SaaS Platforms",
      "Admin Dashboards",
      "API Integration",
      "Workflow Automation",
      "Cloud Deployment",
      "Progressive Web Apps",
    ],
    projects: [
      {
        name: "Fergus",
        image: "/images/projects/fergus.png",
        desc: "Fergus is a job management software designed for trades and service businesses. It simplifies scheduling, quoting, invoicing, and team communication, helping businesses save time, stay organized, and grow efficiently.",
        url: "https://fergus.com",
      },
      {
        name: "KitchenDev",
        image: "/images/projects/kitchen-dev.png",
        desc: "KitchenDev streamlines kitchen business workflows with advanced configure-price-quote products that enhance efficiency, minimize errors, and save labor — with no training required and quick onboarding.",
        url: "https://kitchendev.com",
      },
      {
        name: "Smart Clerk",
        image: "/images/projects/smart-clerk.png",
        desc: "Smart Clerk is a digital platform designed to streamline the management of clerical tasks for businesses. It simplifies processes like invoicing, time tracking, and document management, helping companies improve efficiency, reduce administrative burden, and enhance productivity.",
        url: "#",
      },
      {
        name: "JFDS",
        image: "/images/projects/jfds.png",
        desc: "Joinery Fire Door Software (JFDS) is a comprehensive platform for fire door manufacturing and sales teams in the UK and Ireland. It streamlines the process, ensuring compliance, custom door schedules, and efficient workflows, while saving time, money, and materials.",
        url: "#",
      },
      {
        name: "Open Maint",
        image: "/images/projects/open-maint.png",
        desc: "OpenMAINT is an open-source software for managing the maintenance of assets, buildings, and infrastructures. It provides tools for tracking maintenance requests, scheduling tasks, managing inventories, and monitoring performance, helping organizations optimize their asset lifecycle and reduce operational costs.",
        url: "#",
      },
      {
        name: "Realty Connection",
        image: "/images/projects/realty-connection.png",
        desc: "Realty Connection is a real estate platform that connects buyers, sellers, and agents. It offers a seamless property search experience, providing detailed listings, virtual tours, and expert services to help users make informed decisions in the real estate market.",
        url: "#",
      },
    ],
  },
  {
    title: "E-Commerce",
    highlight: "Highlights",
    subtitle:
      "We build seamless online shopping experiences that drive conversions, optimize operations, and scale effortlessly across markets and devices.",
    tags: [
      "Online Stores",
      "Marketplaces",
      "Payment Gateways",
      "Inventory",
      "Order Management",
      "Multi-vendor",
      "Cart & Checkout",
    ],
    projects: [
      {
        name: "BlueStone",
        image: "/images/projects/blue-stone.png",
        desc: "Bluestone is an online retailer specializing in handcrafted jewelry, home decor, and unique gifts. They offer a wide range of personalized and custom-made pieces, combining traditional craftsmanship with modern designs to provide high-quality products for various occasions.",
        url: "https://www.bluestone.com/",
      },
      {
        name: "Vivino",
        image: "/images/projects/vivino.png",
        desc: "Vivino is a wine discovery and rating platform that helps users find, review, and purchase wines. It offers personalized wine recommendations, detailed ratings, and reviews from a global community, making it easier for wine enthusiasts to explore and enjoy new wines.",
        url: "https://www.vivino.com/",
      },
      {
        name: "Stair Box",
        image: "/images/projects/stair-box.png",
        desc: "Stairbox is a UK-based company specializing in bespoke staircase design and manufacturing. They offer a wide range of custom staircases, including wooden, glass, and metal options, along with accessories, ensuring high-quality and tailored solutions for both residential and commercial projects.",
        url: "#",
      },
      {
        name: "Woolworths",
        image: "/images/projects/woolworths.png",
        desc: "Woolworths is a major Australian supermarket chain offering a wide variety of groceries, fresh produce, and household items. It provides convenient shopping both in-store and online, with a focus on quality, sustainability, and customer satisfaction.",
        url: "#",
      },
      {
        name: "BIG W",
        image: "/images/projects/bigw.png",
        desc: "BIG W is an Australian discount department store that offers a wide range of products, including groceries, clothing, electronics, toys, and home goods. Known for its affordable prices, BIG W provides a convenient shopping experience both in-store and online.",
        url: "#",
      },
      {
        name: "Proline Hardware",
        image: "/images/projects/proline.png",
        desc: "Proline Hardware is an Irish company specializing in high-quality hardware solutions for doors, windows, and cabinetry. They offer a wide range of products, including locks, handles, and accessories, with a focus on providing durable and reliable hardware for residential and commercial applications.",
        url: "#",
      },
    ],
  },
  {
    title: "AI Development",
    highlight: "Highlights",
    subtitle:
      "We engineer intelligent solutions powered by machine learning, data analytics, and automation to unlock smarter decisions and richer experiences.",
    tags: [
      "Machine Learning",
      "Predictive Analytics",
      "Recommendation Engines",
      "NLP",
      "Computer Vision",
      "Data Pipelines",
      "AI Automation",
    ],
    projects: [
      {
        name: "SAM Learning",
        image: "/images/projects/sam-learning.png",
        desc: "SAM Learning is an online learning platform that offers interactive courses and assessments for students, primarily in the UK. It provides personalized learning experiences to help students improve in subjects such as maths, science, and English, supporting teachers and schools with tracking progress and performance.",
        url: "https://www.samlearning.com/",
      },
      {
        name: "EliteFit.AI",
        image: "/images/projects/elite-fit.png",
        desc: "Elite Fit For You is a fitness platform offering personalized training programs, nutritional guidance, and wellness support. It aims to help individuals achieve their fitness goals through tailored workout plans and expert coaching, focusing on overall health and well-being.",
        url: "elitefitforyou.com",
      },
      {
        name: "NUNA AI",
        image: "/images/projects/nuna-ai.png",
        desc: "Nuna is an AI-powered platform that provides data analytics solutions for healthcare organizations. It helps optimize the healthcare system by using advanced algorithms to improve decision-making, enhance patient care, and reduce costs through efficient data management and analysis.",
      },
      {
        name: "Lawren",
        image: "/images/projects/lawren.png",
        desc: "Lawren is an AI-driven platform that helps businesses streamline and automate their legal workflows. It offers tools for document management, contract analysis, and legal research, enabling teams to save time, reduce errors, and ensure compliance with ease.",
      },
    ],
  },
  {
    title: "Website Design",
    highlight: "Highlights",
    subtitle:
      "We design pixel-perfect, conversion-focused websites that blend bold visuals with intuitive experiences to elevate your brand online.",
    tags: [
      "UI/UX Design",
      "Responsive Design",
      "Landing Pages",
      "Brand Identity",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    projects: [
      {
        name: "Birkdale",
        image: "/images/projects/birkdale.png",
        desc: "Birkdale is a UK-based company specializing in high-quality hardware products for the construction and DIY industries. They offer a wide range of products, including fencing, gates, and garden accessories, with a focus on durability, security, and innovative designs.",
        url: "https://birkdale.co.uk/",
      },
      {
        name: "Intuit",
        image: "/images/projects/intuit.png",
        desc: "Intuit is a global software company that provides financial management tools and solutions for individuals, small businesses, and accountants. Its popular products include QuickBooks, TurboTax, and Mint, which help users with accounting, tax preparation, and personal finance management.",
        url: "https://www.intuit.com/",
      },
      {
        name: "Fandom",
        image: "/images/projects/fandom.png",
        desc: "Fandom is an online community platform dedicated to fan-created content and discussions. It hosts thousands of wikis for movies, TV shows, games, and other entertainment, allowing fans to contribute, share knowledge, and engage with others who share their interests.",
        url: "#",
      },
      {
        name: "Chase",
        image: "/images/projects/chase.png",
        desc: "Chase is a major financial services company offering a wide range of banking products, including checking and savings accounts, credit cards, mortgages, auto loans, and investment services. It provides customers with secure and convenient digital banking options, both online and through mobile apps.",
        url: "#",
      },
      {
        name: "Wozber",
        image: "/images/projects/wozber.png",
        desc: "Wozber is an AI-powered resume builder that helps job seekers create optimized and professional resumes. It offers personalized templates, real-time feedback, and suggestions to enhance the quality of resumes, making it easier to apply for jobs with confidence.",
        url: "#",
      },
      {
        name: "HomeAdvisor",
        image: "/images/projects/home-advisor.png",
        desc: "HomeAdvisor is an online platform that connects homeowners with local service professionals for home improvement, repair, and maintenance projects. It allows users to find, review, and book trusted professionals, while also offering tools for cost estimates and project management.",
        url: "#",
      },
    ],
  },
];

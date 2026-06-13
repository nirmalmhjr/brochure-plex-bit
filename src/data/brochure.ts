/**
 * All brochure content lives here. Templates are dumb — change content
 * in this file (or add/remove pages in App.tsx) without touching design.
 *
 * Images: drop real files into /public/images/<folder>/ and set the
 * `image`/`src` fields below. Missing images render styled placeholders.
 */

export const company = {
  name: "Plex Bit Infosystems",
  logoTop: "PLEX BIT",
  logoBottom: "INFOSYSTEMS",
  tagline: "Your Challenge is our Progress",
  website: "www.pbinfosystems.com",
  email: "info@pbinfosystems.com",
  phone: "+977 9867062429",
  address: "Gairidhara, 44600, Kathmandu, Nepal",
  since: "2019",
};

/* ------------------------------- About ------------------------------- */

export const welcome = {
  kicker: "Since 2019",
  title: "Welcome to",
  highlight: "Our Company",
  image: "/images/brand/office.jpg",
  imageLabel: "Office Photo",
  paragraphs: [
    "Plex Bit Infosystems started in 2019 in Amsterdam, where our head office leads strategy and global partnerships. Our development center in Nepal showcases exceptional talent and creativity.",
    "We are a 360-degree software development company focused on solving client problems and driving business growth. With teams in the Netherlands, Nepal, and India, we bring together business expertise, technical skills, and industry insights.",
    "We offer innovative solutions in Web App Development, E-Commerce, Cloud Services, Blockchain, Graphic Design, Digital Marketing, QA, and AI Chatbot Development.",
  ],
};

export const solutions = {
  kicker: "What we do",
  title: "We Provide",
  highlight: "Solutions",
  image: "/images/brand/team.jpg",
  imageLabel: "Team Photo",
  paragraphs: [
    "With a deep understanding of modern technology and expertise across diverse industries, Plex Bit Infosystems delivers comprehensive solutions for startups and businesses, including high-quality web, mobile, and AI/ML applications.",
    "We specialize in developing custom software solutions that cater to the specific needs of our clients, supporting them throughout the journey — from concept to execution.",
    "Our commitment to innovation, flexibility, and complete transparency has made us a trusted technology partner. Plex Bit Infosystems stands for top-tier quality and exceptional IT services that empower businesses to thrive in a digital-first world.",
  ],
};

export const visionMission = [
  {
    icon: "🎯",
    title: "Vision",
    desc: "To be a global leader in IT services, redefining the standards of web and app development. Our vision is to set benchmarks in innovation, collaboration, and quality while enabling businesses to thrive in a rapidly evolving digital era.",
  },
  {
    icon: "🚀",
    title: "Mission",
    desc: "To empower businesses globally by delivering innovative and accessible IT solutions, Plex Bit Infosystems aims to transform digital landscapes through inclusivity, cost-effective strategies, and a commitment to quality. We prioritize building robust digital infrastructures to foster growth and success for our clients.",
  },
];

/* ------------------------------- People ------------------------------- */

export const coreTeam = {
  subtitle:
    "Our team comprises skilled professionals dedicated to driving innovation and excellence. With expertise across various domains, we collaborate to deliver impactful solutions. Together, we strive to achieve exceptional results for our clients.",
  people: [
    { name: "James Adamson", role: "CEO", image: "/images/team/james-adamson.jpg" },
    { name: "Prakash Bhandari", role: "Co-Founder", image: "/images/team/prakash-bhandari.jpg" },
    { name: "Dipendra Neupane", role: "Co-Founder", image: "/images/team/dipendra-neupane.jpg" },
  ],
};

export const representatives = {
  subtitle: "We have a diverse team from different countries working together.",
  people: [
    {
      name: "Kushal Dumre",
      role: "IT Consultant — Spain",
      image: "/images/team/kushal-dumre.jpg",
      blurb:
        "Plexbit ensures seamless project execution with exceptional coordination & client-focused delivery.",
    },
    {
      name: "Nischal Pakhrin",
      role: "IT Consultant — Canada",
      image: "/images/team/nischal-pakhrin.jpg",
      blurb:
        "We deliver innovative, reliable solutions with a strong commitment to client success.",
    },
    {
      name: "Ashish Khare",
      role: "IT Consultant — India",
      image: "/images/team/ashish-khare.jpg",
      blurb:
        "We excel in project management, consistently delivering results on time and exceeding client expectations.",
    },
  ],
};

/* ----------------------------- Why / Services ----------------------------- */

export const whyChooseUs = [
  {
    icon: "🌐",
    title: "Expert in Online Growth",
    desc: "With years of expertise in digital solutions, we empower businesses to expand their online presence through cutting-edge technology and proven strategies.",
  },
  {
    icon: "📊",
    title: "Data-Driven Results",
    desc: "Our solutions are guided by data analytics, ensuring precision, efficiency, and measurable success for every project.",
  },
  {
    icon: "🎯",
    title: "Tailored Strategies",
    desc: "We customize our approach to fit your unique business needs, delivering innovative and impactful solutions.",
  },
  {
    icon: "💰",
    title: "Cost-Effective Solutions",
    desc: "Offering high-quality services at competitive prices, we help you achieve maximum value for your investment.",
  },
];

export const services = [
  {
    icon: "👥",
    title: "Staff Augmentation",
    desc: "Boost your team with skilled professionals for seamless project execution.",
  },
  {
    icon: "💻",
    title: "Web Development",
    desc: "We create responsive, user-friendly, and visually appealing websites tailored to perfectly meet your business needs and goals.",
  },
  {
    icon: "🛒",
    title: "E-commerce Development",
    desc: "Build engaging, secure e-commerce platforms to drive sales and growth.",
  },
  {
    icon: "🚀",
    title: "MVP Development",
    desc: "We offer MVP development to quickly launch your product with core features, ensuring faster market validation.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "We create intuitive, scalable apps tailored for Android and iOS platforms.",
  },
  {
    icon: "🤖",
    title: "AI Development",
    desc: "We implement cutting-edge AI and ML solutions to streamline processes, automate tasks, and empower smarter decision-making for your business.",
  },
];

export const industries = [
  { icon: "🏦", title: "Fintech", meta: "+5 successful Fintech products" },
  { icon: "🏥", title: "Healthcare", meta: "+10 successful Healthtech products" },
  { icon: "🏠", title: "Proptech", meta: "+3 successful Proptech products" },
  { icon: "🎓", title: "Education", meta: "+20 successful Edtech products" },
  { icon: "💬", title: "Social", meta: "+15 successful social products" },
  { icon: "🚚", title: "Logistics", meta: "+10 successful logistics products" },
  { icon: "🛍️", title: "Marketplace", meta: "+20 successful marketplaces" },
  { icon: "🗺️", title: "Geotech", meta: "+5 successful Geotech products" },
  { icon: "📦", title: "ERP", meta: "+10 successful ERP products" },
];

/* ------------------------------ Workflow ------------------------------ */

export const workflow = {
  subtitle:
    "Our process of converting ideas into reality — from contract to delivery.",
  steps: [
    {
      title: "Contract",
      desc: "As soon as you decide to start working with us, we will assign you a team of a Project Manager, Sr. Developer, Sr. Designer, Sr. Quality Analyst, and an Account Manager.",
    },
    {
      title: "Project Kick-off",
      desc: "After the team is assigned, we start with the initial kick-off meeting, discuss the project plan, and set up the required tools.",
    },
    {
      title: "Setup Project on PMS",
      desc: "Upon the initial kick-off meeting, we will set up the project management tool and invite you in order to track the progress of the project.",
    },
    {
      title: "Collaborative Tools",
      desc: "We use tools like Asana, Slack, Zoom, Google Meet, Trello, Jira, BaseCamp, and ClickUp for efficient communication and management.",
    },
    {
      title: "Delivery & Support",
      desc: "The final product is delivered on time, followed by post-delivery support, including training, maintenance, and updates.",
    },
  ],
};

/* ------------------------- Clients / Tech / Logos ------------------------- */

export const clients = {
  subtitle:
    "We are proud to serve a diverse range of clients across various industries, delivering tailored solutions to meet their unique needs and goals.",
  logos: [
    { name: "KitchenDev",      src: "/images/clients/kitchen-dev.png" },
    { name: "Airtel",          src: "/images/clients/airtel.png" },
    { name: "Amchara",         src: "/images/clients/amchara.png" },
    { name: "BusyKid",         src: "/images/clients/busy-kid.png" },
    { name: "Palm Mind" , src: "/images/clients/palm-mind.png" },
    { name: "NexMuv",          src: "/images/clients/next-muv.png" },
    { name: "JFDS",            src: "/images/clients/jfds.png" },
    { name: "Proline",         src: "/images/clients/proline.png" },
    { name: "Jazp.com",        src: "/images/clients/jazp.png" },
    { name: "Johnson Outdoors", src: "/images/clients/johnson.png" },
    { name: "SecondNature",    src: "/images/clients/second-nature.png" },
    { name: "CG Digital",      src: "/images/clients/cg-digital.png" },
    { name: "Ted Baker",       src: "/images/clients/ted-baker.png" },
    { name: "General Bytes",   src: "/images/clients/general-bytes.png" },
    { name: "SAM Learning",    src: "/images/clients/sam-learning.png" },
    { name: "Smart Clerk",     src: "/images/clients/smart-clerk.png" },
    { name: "Bluestone",       src: "/images/clients/blue-stone.png" },
    { name: "AIO Tests",       src: "/images/clients/aio-tests.png" },
  ],
};

export const techStack = {
  subtitle:
    "We leverage the latest technologies and tools, including modern programming languages, frameworks, and platforms, to deliver innovative and efficient solutions.",
  categories: [
    { label: "Front-End", items: ["Vue.js", "React", "SolidJS", "Svelte", "Angular"] },
    { label: "Back-End", items: ["Node.js", "Python", "Flask", "Django", "Laravel", "Rails", "Go"] },
    { label: "Blockchain", items: ["Bitcoin", "Solana", "Polkadot", "Ethereum", "Skale", "Polygon"] },
    { label: "Desktop", items: ["C++", "Swift", "Go", "Python", "C#"] },
  ],
};

export const databases = {
  subtitle:
    "We leverage modern, battle-tested database technologies and cloud platforms to deliver reliable and scalable solutions.",
  logos: [
    { name: "Amazon RDS" },
    { name: "MySQL" },
    { name: "SQL Server" },
    { name: "PostgreSQL" },
    { name: "Google Cloud" },
    { name: "Amazon S3" },
    { name: "Oracle" },
    { name: "MongoDB" },
  ],
};

export const apiIntegrations = {
  subtitle:
    "We specialize in integrating major APIs, including payment gateways, social media platforms, mapping services, and third-party tools, to enhance functionality and user experience.",
  categories: [
    { label: "Payment Integrations", items: ["Stripe", "PayPal", "Wise", "Mollie", "Swish", "iDEAL"] },
    { label: "Shipping Integrations", items: ["PostNL", "DPD", "DHL", "FedEx"] },
    { label: "CRM & IRM Integrations", items: ["Zendesk", "MS Dynamics", "Salesforce", "HubSpot", "Odoo", "Oracle", "Zoho"] },
    { label: "Accounting / Booking", items: ["Zapier", "Xero", "QuickBooks", "FreshBooks"] },
  ],
};

export const certifications = {
  subtitle:
    "Our team is equipped with industry-recognized certifications, ensuring top-quality services and cutting-edge expertise. From advanced technical skills to specialized domains, our certifications reflect our commitment to excellence and continuous growth.",
  logos: [
     { name: "aws-certified",      src: "/images/certifications/aws-certified.png" },
     { name: "blockchains",      src: "/images/certifications/blockchains.png" },
     { name: "google-cloud-certifications",      src: "/images/certifications/google-cloud-certified.png" },
     { name: "istqb",      src: "/images/certifications/istqb.png" },
     { name: "magneto",      src: "/images/certifications/magneto.png" },
     { name: "professional-scrum-master",      src: "/images/certifications/professional-scrum-master.png" },
     
  ],
};

export const recognition = {
  subtitle:
    "Over the years of our activity, we have earned several awards and honors for our custom web development services.",
  logos: [
    { name: "Top Rated — Upwork",       src: "/images/recognition/upwork.png" },
    { name: "Trusted on TechBehemoths", src: "/images/recognition/behemoths.png" },
    { name: "5.0 Rating — Clutch",      src: "/images/recognition/clutch.png" },
  ],
};

/* ----------------------------- Working models ----------------------------- */

export const hourlyModel = {
  title: "Working Model —",
  highlight: "Hourly Basis",
  intro:
    "Our hourly-based model offers flexible and efficient team services tailored to your needs, starting at just $12 per hour.",
  items: [
    { title: "Customizable Hours", desc: "Our resources work according to the required hours you specify." },
    { title: "Dedicated Account Manager", desc: "We provide an account manager at no additional cost to ensure a smooth transition and effective communication." },
    { title: "Free 5-Day Trial", desc: "Try our services for five working days, absolutely free." },
    { title: "Flexibility for Evolving Projects", desc: "Perfect for projects with changing requirements, allowing you to modify project resources as your needs evolve." },
    { title: "Experimentation-Friendly", desc: "Ideal for exploring new activities or adapting to dynamic project demands." },
    { title: "Flexible Payment Options", desc: "Choose from weekly or monthly payment plans to suit your convenience." },
  ],
};

export const dedicatedModel = {
  title: "Working Model —",
  highlight: "Dedicated Resource",
  intro:
    "Hire dedicated team resources on a monthly basis to meet your specific project needs. Choose an individual expert or build a custom team tailored to your requirements.",
  items: [
    { title: "Cost-Efficient", desc: "Save up to 70% compared to hiring in-house." },
    { title: "Direct Communication", desc: "No delays, ensuring smooth project execution." },
    { title: "Secure & Reliable", desc: "Guaranteed data security and confidentiality." },
    { title: "Flexible", desc: "Seamlessly switch between projects or tasks as needed." },
    { title: "Timely Delivery", desc: "Receive daily updates with on-schedule results." },
    { title: "Availability", desc: "Resources work according to your project demands." },
  ],
};

export const capabilities = {
  title: "Our",
  highlight: "Capabilities",
  intro:
    "End-to-end engineering and consulting capabilities under one roof.",
  items: [
    { title: "Customized Software Development" },
    { title: "E-Commerce Platform Development" },
    { title: "Web & Mobile Application Development" },
    { title: "Graphics Designing" },
    { title: "Blockchain Development" },
    { title: "Hire Remote Developers" },
    { title: "IT Consulting" },
  ],
};

/* -------------------------------- Stats -------------------------------- */

export const stats = {
  subtitle:
    "We have a diverse network of trusted business partners, offering continuous IT solutions and support, along with innovative services and cutting-edge technologies that help us deliver exceptional results and drive growth for our clients.",
  items: [
    { value: "5+", label: "Years of Industry Experience" },
    { value: "97%", label: "Happy Clients" },
    { value: "120+", label: "Projects Done" },
    { value: "35+", label: "Team Members" },
  ],
  note: "We are a diverse team of 35 professionals from different countries, collaborating seamlessly to deliver exceptional solutions.",
};

/* ------------------------------- Projects ------------------------------- */

export interface Project {
  name: string;
  desc: string;
  image?: string;
}

export const projectPages: { title: string; highlight: string; projects: Project[] }[] = [
  {
    title: "Our",
    highlight: "Projects",
    projects: [
      {
        name: "BusyKid",
        image: "/images/projects/busykid.png",
        desc: "BusyKid is a chore and allowance app designed to teach kids money management through earning, saving, spending, and giving. It empowers children with financial literacy tools while providing parents with an easy way to assign chores and track progress.",
      },
      {
        name: "Zsenia",
        image: "/images/projects/zsenia.png",
        desc: "Zsenia is a powerful yet simplified investment, research and analytics platform. It is a decision-making tool that can help anyone improve their investment performance and make better informed investments.",
      },
    ],
  },
  {
    title: "Project",
    highlight: "Highlights",
    projects: [
      {
        name: "8fit",
        image: "/images/projects/8fit.png",
        desc: "8fit is a fitness and nutrition app that helps you achieve your health goals with personalized workout plans, meal planning, and expert guidance. It's your all-in-one solution for a healthier lifestyle.",
      },
      {
        name: "Zetwerk",
        image: "/images/projects/zetwerk.png",
        desc: "Zetwerk is a global manufacturing platform that connects businesses with reliable suppliers for custom manufacturing. It streamlines the production process, offering solutions for sourcing, quality control, and timely delivery.",
      },
    ],
  },
  {
    title: "Web Development",
    highlight: "Highlights",
    projects: [
      {
        name: "Fergus",
        image: "/images/projects/fergus.png",
        desc: "Fergus is a job management software designed for trades and service businesses. It simplifies scheduling, quoting, invoicing, and team communication, helping businesses save time, stay organized, and grow efficiently.",
      },
      {
        name: "KitchenDev",
        image: "/images/projects/kitchendev.png",
        desc: "KitchenDev streamlines kitchen business workflows with advanced configure-price-quote products that enhance efficiency, minimize errors, and save labor — with no training required and quick onboarding.",
      },
    ],
  },
  {
    title: "AI Development",
    highlight: "Highlights",
    projects: [
      {
        name: "SAM Learning",
        image: "/images/projects/sam-learning.png",
        desc: "SAM Learning is an online learning platform that offers interactive courses and assessments for students, primarily in the UK. It provides personalized learning experiences to help students improve in maths, science, and English.",
      },
      {
        name: "EliteFit.AI",
        image: "/images/projects/elitefit.png",
        desc: "Elite Fit is an AI-driven virtual trainer offering personalized training programs, nutritional guidance, and wellness support — with real-time prescriptive feedback and accuracy scores that assess movement correctness.",
      },
    ],
  },
];

/* ------------------------------ Case studies ------------------------------ */

export interface CaseStudy {
  name: string;
  teamSize: string;
  timeFrame: string;
  serviceArea: string;
  desc: string;
  tech: string[];
  servicesSupplied: string[];
  solutions: string[];
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    name: "Magnifi",
    teamSize: "8",
    timeFrame: "Aug 2024 — Ongoing",
    serviceArea: "Data & AI/ML",
    image: "/images/projects/magnifi.png",
    desc: "Magnifi by TIFIN is an AI-powered investing assistant designed to simplify and personalize investment decisions for individual investors. It enables users to link multiple brokerage accounts, providing a comprehensive view of their portfolios and offering real-time insights, risk assessments, and personalized recommendations.",
    tech: ["Flask", "Node.js", "FastAPI", "Pinecone", "OpenAI", "MongoDB", "AWS"],
    servicesSupplied: ["Development", "Support", "Maintenance"],
    solutions: [
      "Built smart algorithms for tailored advice and real-time investment insights.",
      "Linked brokerage accounts for seamless tracking and better user experience.",
      "Enabled NLP for easy discovery across varied financial instruments.",
      "Designed responsive UIs to simplify and present investment data clearly.",
    ],
  },
  {
    name: "Tawuniya",
    teamSize: "28",
    timeFrame: "Oct 2022 — Ongoing",
    serviceArea: "Business Analysis, Design, Development & Data Analytics",
    image: "/images/projects/tawuniya.png",
    desc: "Tawuniya, established in 1986, was the first national insurance company in Saudi Arabia to operate under the cooperative insurance model. It provides a wide range of insurance services, including health, motor, and property, and is regulated by the Saudi Central Bank (SAMA).",
    tech: ["React", "Flutter", "SharePoint", "Oracle PL/SQL", "webMethods", "UiPath"],
    servicesSupplied: ["Design", "Development", "Support", "Maintenance"],
    solutions: [
      "Developed claims automation system with RPA, streamlining workflows and enhancing accuracy.",
      "Simplified digital onboarding — accelerated client registration, policy management, and transactions.",
      "Launched MENA's first loyalty programs, driving safer habits and 96% wellness improvement.",
      "A centralized payment page streamlines transactions across all LOBs, enhancing efficiency.",
    ],
  },
];

/* -------------------------------- Offices -------------------------------- */

export const devOffices = {
  title: "Our Head Office &",
  highlight: "Development Office",
  offices: [
    {
      name: "Netherlands Head Office",
      address: "Teleport Towers Kingsfordweg 151, 1043 GR Amsterdam",
      image: "/images/offices/amsterdam.jpg",
    },
    {
      name: "Nepal Office",
      address: "Gairidhara, 44600, Kathmandu, Nepal",
      image: "/images/offices/kathmandu.jpg",
    },
    {
      name: "India Office",
      address: "Commercial Complex Tower - C, Central Business District, Sector-21, New Raipur Atal Nagar",
      image: "/images/offices/raipur.jpg",
    },
  ],
};

export const businessOffices = {
  title: "Our",
  highlight: "Business Office",
  offices: [
    {
      name: "Spain Office",
      address: "Av can Serra 46 P02, 08906 Barcelona, España",
      image: "/images/offices/barcelona.jpg",
    },
    {
      name: "Canada Office",
      address: "Scarborough, Ontario, Canada",
      image: "/images/offices/toronto.jpg",
    },
  ],
};

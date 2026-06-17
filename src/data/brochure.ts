/**
 * All brochure content lives here. Templates are dumb — change content
 * in this file (or add/remove pages in App.tsx) without touching design.
 *

 */

import {
  Factory,
  Globe,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Rocket,
  Share2,
  ShoppingCart,
  Target,
  Truck,
} from "lucide-react";

export const company = {
  name: "Plex Bit Infosystems",
  logoTop: "PLEX BIT",
  logoBottom: "INFOSYSTEMS",
  tagline: "Your Challenge is our Progress",
  website: "www.pbinfosystems.com",
  email: "info@pbinfosystems.com",
  phone: "+977 9867062429",
  address: "Bafal Sal Phat Marg, Kathmandu 44600, Nepal ",
  since: "2019",
};

// About

export const welcome = {
  kicker: "Since 2019",
  title: "Welcome to",
  highlight: "Our Company",
  image: "/images/brand/office.jpg",
  imageLabel: "Office Photo",
  paragraphs: [
    "Plex Bit Infosystems started in 2019 in Amsterdam, where our head office leads strategy and global partnerships. Our development center in Nepal showcases exceptional talent and creativity.",
    "We are a 360-degree software development company focused on solving client problems and driving business growth. With teams in the Netherlands, Nepal, and India, we bring together business expertise, technical skills, and industry insights.",
    "We offer innovative solutions in Web App Development, E-Commerce, Cloud Services, Graphic Design, Digital Marketing, QA, and AI Chatbot Development.",
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
    icon: Target,
    title: "Vision",
    desc: "To be a global leader in IT services, redefining the standards of web and app development. Our vision is to set benchmarks in innovation, collaboration, and quality while enabling businesses to thrive in a rapidly evolving digital era.",
  },
  {
    icon: Rocket,
    title: "Mission",
    desc: "To empower businesses globally by delivering innovative and accessible IT solutions, Plex Bit Infosystems aims to transform digital landscapes through inclusivity, cost-effective strategies, and a commitment to quality. We prioritize building robust digital infrastructures to foster growth and success for our clients.",
  },
];

// People

export const coreTeam = {
  subtitle:
    "Our team comprises skilled professionals dedicated to driving innovation and excellence. With expertise across various domains, we collaborate to deliver impactful solutions. Together, we strive to achieve exceptional results for our clients.",
  people: [
    {
      name: "James Adamson",
      role: "CEO",
      image: "/images/team/james-adamson.jpg",
    },
    {
      name: "Prakash Bhandari",
      role: "Co-Founder",
      image: "/images/team/prakash-bhandari.jpg",
    },
    {
      name: "Dipendra Neupane",
      role: "Co-Founder",
      image: "/images/team/dipendra-neupane.jpg",
    },
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

// Why / Services

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
    icon: "🤖",
    title: "AI Development",
    desc: "Custom AI solutions that automate processes and unlock business value.",
  },
  {
    icon: "👥",
    title: "Technology & Consulting",
    desc: "Expert technology consulting to optimize operations and drive innovation.",
  },
  {
    icon: "👥",
    title: "Staff Augmentation",
    desc: "Boost your team with skilled professionals for seamless project execution.",
  },
  {
    icon: "🛒",
    title: "Data",
    desc: "Transform data into actionable insights for smarter business decisions.",
  },
  {
    icon: "🚀",
    title: "AWS Cloud Solutions",
    desc: "Scalable, secure cloud solutions to accelerate growth and innovation.",
  },
  //   {
  //   icon: "💻",
  //   title: "Web Development",
  //   desc: "We create responsive, user-friendly, and visually appealing websites tailored to perfectly meet your business needs and goals.",
  // },
];

export const serviceDetails = {
  title: "Services we",
  highlight: "provide",
  categories: [
    {
      title: "AI Development",
      items: [
        "Advanced Machine Learning Solution",
        "Computer Vision and Image Processing",
        "Generative AI and NLP Solutions",
        "Virtual Assistant Development",
        "Data Analytics and Visualization",
        "AI Driven Automation and Integration",
      ],
    },
    {
      title: "Technology & Consulting",
      items: [
        "Python Development",
        "Java Development",
        "Quality Assurance",
        "Web App Development",
        "Product Design & Development",
        "Mobile Development",
        "eCommerce Website Development",
        "MVP",
      ],
    },
    {
      title: "Staff Augmentation",
      items: [
        "React.js",
        "Node.js",
        "DevOps",
        "Prompt Engineer",
        "QA Engineer",
        "Mobile Developer",
        "Machine Learning",
        "Python",
        "Java",
        "Conversational AI",
        "AI Engineer",
        ".Net",
      ],
    },
    {
      title: "Data",
      items: ["Data Engineering", "Data Lakehouse Development"],
    },
    {
      title: "AWS Cloud Solutions",
      items: [
        "AI Infrastructure on Cloud",
        "Cloud Migration & Modernization",
        "Cloud Economics Consulting",
        "AWS Cloud AI Services",
        "Compliance & Security",
      ],
    },
  ],
};

export const industries = [
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Landmark, title: "Fintech" },
  { icon: Factory, title: "Manufacturing" },
  { icon: GraduationCap, title: "Education" },
  { icon: Truck, title: "Logistics" },
  { icon: ShoppingCart, title: "Ecommerce" },
  { icon: Hotel, title: "Hospitality" },
  { icon: Share2, title: "Social" },
  { icon: Globe, title: "Geotech" },
];

// Workflow

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

// Clients / Tech / Logos

export const clients = {
  subtitle:
    "We are proud to serve a diverse range of clients across various industries, delivering tailored solutions to meet their unique needs and goals.",
  logos: [
    { name: "KitchenDev", src: "/images/clients/kitchen-dev.png" },
    { name: "Airtel", src: "/images/clients/airtel.avif" },
    { name: "BusyKid", src: "/images/clients/BusyKid.svg" },
    { name: "NexMuv", src: "/images/clients/next-muv.png" },
    { name: "Proline", src: "/images/clients/proline.png" },
    { name: "SecondNature", src: "/images/clients/second-nature.png" },
    { name: "CG Digital", src: "/images/clients/cg-digital.png" },
    { name: "General Bytes", src: "/images/clients/general_bytes.png" },
    { name: "SAM Learning", src: "/images/clients/sam_learning.png" },
    { name: "Bluestone", src: "/images/clients/blue-stone.png" },
    { name: "AIO Tests", src: "/images/clients/aio-tests.png" },
    { name: "Deloitte", src: "/images/clients/Deloitte.png" },
    { name: "UNICEF", src: "/images/clients/UNICEF.png" },
    { name: "TUI", src: "/images/clients/Tui.png" },
    { name: "Prabhu Bank", src: "/images/clients/Prabhu-Bank.png" },
    { name: "Everest Bank", src: "/images/clients/everest-bank.png" },
    { name: "Global IME Bank", src: "/images/clients/global-ime-bank.webp" },
    {
      name: "Laxmi Sunrise Bank",
      src: "/images/clients/laxmi-sunrise-bank.png",
    },
    {
      name: "Machhapuchhre Bank",
      src: "/images/clients/machhapuchhre-bank.png",
    },
    { name: "Cult.fit", src: "/images/clients/cultfit.svg" },
    { name: "FD Comsol", src: "/images/clients/fd-comsol.png" },
    { name: "Fergus", src: "/images/clients/fergus.svg" },
    { name: "Jason Outdoors", src: "/images/clients/jason_outdoors.png" },
    { name: "Lastminute.com", src: "/images/clients/last-minute.jpg" },
    { name: "Priceline", src: "/images/clients/priceline.png" },
    { name: "Striide", src: "/images/clients/striide.png" },
    { name: "Wealth AI", src: "/images/clients/wealth-ai.png" },
    { name: "CoachHQ", src: "/images/clients/coach-hq.svg" },
    { name: "Gymgrow", src: "/images/clients/grow-hq.svg" },
  ],
};

export const techStack = {
  subtitle:
    "We leverage the latest technologies and tools, including modern programming languages, frameworks, and platforms, to deliver innovative and efficient solutions.",
  categories: [
    {
      label: "Front-End",
      items: [
        { name: "Vue.js", src: "/images/technology-stack/frontend/vuejs.png" },
        { name: "React", src: "/images/technology-stack/frontend/reactjs.png" },
        {
          name: "Angular",
          src: "/images/technology-stack/frontend/angular.png",
        },
        {
          name: "SolidJS",
          src: "/images/technology-stack/frontend/solidjs.png",
        },
        { name: "Svelte", src: "/images/technology-stack/frontend/svelte.png" },
        {
          name: "Next.js",
          src: "/images/technology-stack/frontend/nextjs.svg",
        },
        {
          name: "Nuxt.js",
          src: "/images/technology-stack/frontend/nuxtjs.svg",
        },
        {
          name: "React Native",
          src: "/images/technology-stack/frontend/react-native.svg",
        },
        {
          name: "Flutter",
          src: "/images/technology-stack/frontend/flutter.jpeg",
        },
        {
          name: "JavaScript",
          src: "/images/technology-stack/frontend/javascript.png",
        },
        { name: "HTML5", src: "/images/technology-stack/frontend/html.webp" },
        {
          name: "Tailwind CSS",
          src: "/images/technology-stack/frontend/tailwindcss.webp",
        },
        {
          name: "Material UI",
          src: "/images/technology-stack/frontend/material-ui.png",
        },
        { name: "Vite", src: "/images/technology-stack/frontend/vite.svg" },
        {
          name: "Webpack",
          src: "/images/technology-stack/frontend/webpack.png",
        },
        {
          name: "Playwright",
          src: "/images/technology-stack/frontend/playwright.png",
        },
      ],
    },
    {
      label: "Back-End",
      items: [
        { name: "Node.js", src: "/images/technology-stack/backend/nodejs.png" },
        { name: "Python", src: "/images/technology-stack/backend/python.png" },
        { name: "Flask", src: "/images/technology-stack/backend/flask.png" },
        { name: "Django", src: "/images/technology-stack/backend/django.svg" },
        {
          name: "FastAPI",
          src: "/images/technology-stack/backend/fast-api.webp",
        },
        {
          name: "Express",
          src: "/images/technology-stack/backend/express-js.svg",
        },
        {
          name: "NestJS",
          src: "/images/technology-stack/backend/nest-js.png",
        },
        {
          name: "Laravel",
          src: "/images/technology-stack/backend/laravel.png",
        },
        { name: "PHP", src: "/images/technology-stack/backend/php.png" },
        { name: "Rails", src: "/images/technology-stack/backend/rails.png" },
        { name: "Go", src: "/images/technology-stack/backend/go.png" },
        { name: "Java", src: "/images/technology-stack/backend/java.png" },
        {
          name: "Spring Boot",
          src: "/images/technology-stack/backend/spring-boat.png",
        },
        {
          name: ".NET",
          src: "/images/technology-stack/backend/dotnet.png",
        },
        {
          name: "ASP.NET Core",
          src: "/images/technology-stack/backend/ASP-NET Core.png",
        },
        {
          name: "GraphQL",
          src: "/images/technology-stack/backend/graphql.png",
        },
        {
          name: "mongoDb",
          src: "/images/technology-stack/backend/mongo-db.png",
        },
      ],
    },
    {
      label: "Cloud",
      items: [
        { name: "AWS", src: "/images/technology-stack/cloud/aws.webp" },
        { name: "Azure", src: "/images/technology-stack/cloud/azure.png" },
        {
          name: "Google Cloud",
          src: "/images/technology-stack/cloud/google-cloud.svg",
        },
        {
          name: "Alibaba Cloud",
          src: "/images/technology-stack/cloud/Alibaba-cloud.png",
        },
        {
          name: "DigitalOcean",
          src: "/images/technology-stack/cloud/digital-ocean.svg",
        },
        {
          name: "Salesforce",
          src: "/images/technology-stack/cloud/salesforce.svg",
        },
        { name: "Redis", src: "/images/technology-stack/cloud/redis.png" },
        {
          name: "Pinecone",
          src: "/images/technology-stack/cloud/pinecone.svg",
        },
      ],
    },
    {
      label: "DevOps",
      items: [
        { name: "Docker", src: "/images/technology-stack/devops/docker.png" },
        {
          name: "Kubernetes",
          src: "/images/technology-stack/devops/kubernetes.png",
        },
        {
          name: "Jenkins",
          src: "/images/technology-stack/devops/jenkins.svg",
        },
        { name: "Nginx", src: "/images/technology-stack/devops/nginx.png" },
      ],
    },
    {
      label: "AI",
      items: [
        {
          name: "TensorFlow",
          src: "/images/technology-stack/ai/tensorFlow.png",
        },
        { name: "PyTorch", src: "/images/technology-stack/ai/pytorch.svg" },
        {
          name: "scikit-learn",
          src: "/images/technology-stack/ai/scikit-learn.png",
        },
        {
          name: "LangChain",
          src: "/images/technology-stack/ai/langchain.svg",
        },
        {
          name: "LlamaIndex",
          src: "/images/technology-stack/ai/LlamaIndex.png",
        },
        { name: "spaCy", src: "/images/technology-stack/ai/spaCy.png" },
        { name: "NumPy", src: "/images/technology-stack/ai/numpy.png" },
        {
          name: "Pandas AI",
          src: "/images/technology-stack/ai/pandas-ai.jpeg",
        },
        {
          name: "Amazon SageMaker",
          src: "/images/technology-stack/backend/Amazon-SageMaker.png",
        },
        {
          name: "Apache Spark",
          src: "/images/technology-stack/ai/spartkIt.png",
        },
        { name: "PowerAI", src: "/images/technology-stack/ai/power ai.png" },
        { name: "Kafka", src: "/images/technology-stack/ai/Kafka.png" },
        {
          name: "Snowflake",
          src: "/images/technology-stack/ai/Snowflake.png",
        },
      ],
    },
  ],
};

export const databases = {
  subtitle:
    "We leverage modern, battle-tested database technologies and cloud platforms to deliver reliable and scalable solutions.",
  items: [
    { name: "Amazon RDS", src: "/images/databases/amazon-rds.png" },
    { name: "MySQL", src: "/images/databases/mysql.png" },
    { name: "SQL Server", src: "/images/databases/sql-server.png" },
    { name: "PostgreSQL", src: "/images/databases/postgreSql.png" },
    { name: "Google Cloud", src: "/images/databases/google-cloud.png" },
    { name: "Amazon S3", src: "/images/databases/amazon-s3.png" },
    { name: "Oracle", src: "/images/databases/oracle.png" },
    { name: "MongoDB", src: "/images/databases/mongodb.svg" },
    { name: "Redis", src: "/images/databases/redis.png" },
    { name: "Pinecone", src: "/images/databases/pinecone.svg" },
  ],
};

export const apiIntegrations = {
  subtitle:
    "We specialize in integrating major APIs, including payment gateways, social media platforms, mapping services, and third-party tools, to enhance functionality and user experience.",
  categories: [
    {
      label: "Payment Integrations",
      items: [
        {
          name: "Stripe",
          src: "/images/api-integration/payment-integrations/stripe.png",
        },
        {
          name: "PayPal",
          src: "/images/api-integration/payment-integrations/paypal.png",
        },
        {
          name: "Wise",
          src: "/images/api-integration/payment-integrations/wise.png",
        },
        {
          name: "Mollie",
          src: "/images/api-integration/payment-integrations/mollie.png",
        },
        {
          name: "Swish",
          src: "/images/api-integration/payment-integrations/swish.png",
        },
        {
          name: "iDEAL",
          src: "/images/api-integration/payment-integrations/i-deal.png",
        },
        {
          name: "Razorpay",
          src: "/images/api-integration/payment-integrations/Razorpay.png",
        },
        {
          name: "Alipay",
          src: "/images/api-integration/payment-integrations/alipay.png",
        },
        {
          name: "PayU",
          src: "/images/api-integration/payment-integrations/payu.png",
        },
        {
          name: "WeChat Pay",
          src: "/images/api-integration/payment-integrations/we-chat-pay.png",
        },
        {
          name: "Worldpay",
          src: "/images/api-integration/payment-integrations/worldpay.png",
        },
      ],
    },
    {
      label: "Shipping Integrations",
      items: [
        {
          name: "PostNL",
          src: "/images/api-integration/shipping-integrations/postnl.png",
        },
        {
          name: "DPD",
          src: "/images/api-integration/shipping-integrations/dpd.png",
        },
        {
          name: "DHL",
          src: "/images/api-integration/shipping-integrations/dhl.png",
        },
        {
          name: "FedEx",
          src: "/images/api-integration/shipping-integrations/fedEx.png",
        },
        {
          name: "Aramex",
          src: "/images/api-integration/shipping-integrations/aramex.svg",
        },
        {
          name: "UPS",
          src: "/images/api-integration/shipping-integrations/ups.jpeg",
        },
      ],
    },
    {
      label: "CRM & IRM Integrations",
      items: [
        {
          name: "Zendesk",
          src: "/images/api-integration/crm-irm-integrations/zendesk.png",
        },
        {
          name: "MS Dynamics",
          src: "/images/api-integration/crm-irm-integrations/microsoft-dynamics.png",
        },
        {
          name: "Salesforce",
          src: "/images/api-integration/crm-irm-integrations/salesforce.png",
        },
        {
          name: "HubSpot",
          src: "/images/api-integration/crm-irm-integrations/hubspot.png",
        },
        {
          name: "Oracle",
          src: "/images/api-integration/crm-irm-integrations/oracle.png",
        },
        {
          name: "Zoho",
          src: "/images/api-integration/crm-irm-integrations/zoho.png",
        },
      ],
    },
    {
      label: "Accounting / Booking",
      items: [
        {
          name: "Zapier",
          src: "/images/api-integration/accounting-booking-integrations/zapier.png",
        },
        {
          name: "Xero",
          src: "/images/api-integration/accounting-booking-integrations/xero.png",
        },
        {
          name: "QuickBooks",
          src: "/images/api-integration/accounting-booking-integrations/quickbooks.png",
        },
        {
          name: "FreshBooks",
          src: "/images/api-integration/accounting-booking-integrations/freshBooks.png",
        },
      ],
    },
  ],
};

export const certifications = {
  subtitle:
    "Our team is equipped with industry-recognized certifications, ensuring top-quality services and cutting-edge expertise. From advanced technical skills to specialized domains, our certifications reflect our commitment to excellence and continuous growth.",
  logos: [
    { name: "aws-certified", src: "/images/certifications/aws-certified.png" },
    {
      name: "aws-generative-ai-developer",
      src: "/images/certifications/aws-generative-ai-developer.png",
    },
    {
      name: "aws-ml-engineer",
      src: "/images/certifications/aws-ml-engineer.png",
    },
    {
      name: "azure-ai-engineer",
      src: "/images/certifications/azure-ai-engineer.png",
    },
    {
      name: "google-cloud-certifications",
      src: "/images/certifications/google-cloud-certified.png",
    },
    {
      name: "google-cloud-ml",
      src: "/images/certifications/google-cloud-ml.png",
    },
    { name: "magneto", src: "/images/certifications/magneto.png" },
    {
      name: "professional-scrum-master",
      src: "/images/certifications/professional-scrum-master.png",
    },
  ],
};

export const recognition = {
  subtitle:
    "Over the years of our activity, we have earned several awards and honors for our custom web development services.",
  logos: [
    { name: "Top Rated — Upwork", src: "/images/recognition/upwork.png" },
    {
      name: "Trusted on TechBehemoths",
      src: "/images/recognition/behemoths.png",
    },
    { name: "5.0 Rating — Clutch", src: "/images/recognition/clutch.png" },
    { name: "AppFutura", src: "/images/recognition/appfutura.avif" },
    {
      name: "Top Mobile App Developer 2021",
      src: "/images/recognition/top-mobile-app-developer-2021.png",
    },
    { name: "Trustpilot", src: "/images/recognition/trust-pilot.png" },
  ],
};

// Working models

export const hourlyModel = {
  title: "Working Model —",
  highlight: "Hourly Basis",
  intro:
    "Our hourly-based model offers flexible and efficient team services tailored to your needs, starting at just $12 per hour.",
  items: [
    {
      title: "Customizable Hours",
      desc: "Our resources work according to the required hours you specify.",
    },
    {
      title: "Dedicated Account Manager",
      desc: "We provide an account manager at no additional cost to ensure a smooth transition and effective communication.",
    },
    {
      title: "Free 3-Days Trial",
      desc: "Try our services for five working days, absolutely free.",
    },
    {
      title: "Flexibility for Evolving Projects",
      desc: "Perfect for projects with changing requirements, allowing you to modify project resources as your needs evolve.",
    },
    {
      title: "Experimentation-Friendly",
      desc: "Ideal for exploring new activities or adapting to dynamic project demands.",
    },
    {
      title: "Flexible Payment Options",
      desc: "Choose from weekly or monthly payment plans to suit your convenience.",
    },
  ],
};

export const dedicatedModel = {
  title: "Working Model —",
  highlight: "Dedicated Resource",
  intro:
    "Hire dedicated team resources on a monthly basis to meet your specific project needs. Choose an individual expert or build a custom team tailored to your requirements.",
  items: [
    {
      title: "Cost-Efficient",
      desc: "Save up to 70% compared to hiring in-house.",
    },
    {
      title: "Direct Communication",
      desc: "No delays, ensuring smooth project execution.",
    },
    {
      title: "Secure & Reliable",
      desc: "Guaranteed data security and confidentiality.",
    },
    {
      title: "Flexible",
      desc: "Seamlessly switch between projects or tasks as needed.",
    },
    {
      title: "Timely Delivery",
      desc: "Receive daily updates with on-schedule results.",
    },
    {
      title: "Availability",
      desc: "Resources work according to your project demands.",
    },
  ],
};

export const capabilities = {
  title: "Our",
  highlight: "Capabilities",
  intro: "End-to-end engineering and consulting capabilities under one roof.",
  items: [
    { title: "Customized Software Development" },
    { title: "E-Commerce Platform Development" },
    { title: "Web & Mobile Application Development" },
    { title: "Graphics Designing" },
    // { title: "Blockchain Development" },
    { title: "Hire Remote Developers" },
    { title: "IT Consulting" },
  ],
};

// Stats

export const stats = {
  subtitle:
    "We have a diverse network of trusted business partners, offering continuous IT solutions and support, along with innovative services and cutting-edge technologies that help us deliver exceptional results and drive growth for our clients.",
  items: [
    { value: "5+", label: "Years of Industry Experience" },
    { value: "97%", label: "Happy Clients" },
    { value: "120+", label: "Projects Done" },
    { value: "50+", label: "Team Members" },
  ],
  note: "We are a diverse team of 50+ professionals from different countries, collaborating seamlessly to deliver exceptional solutions.",
};

// Projects

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

// Case studies

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
      "/images/case-studies/tech-stack-icons/flutter.jpeg",
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

// Offices

export const devOffices = {
  title: "Our Head Office &",
  highlight: "Development Office",
  offices: [
    {
      name: "Netherlands Head Office",
      address: "Teleport Towers Kingsfordweg 151, 1043 GR Amsterdam",
      image: "/images/offices/netherlands.png",
    },
    {
      name: "Nepal Development Office",
      address: "Bafal Sal Phat Marg,44600 Kathmandu, Nepal",
      image: "/images/offices/kathmandu.png",
    },
    {
      name: "India Development Office",
      address:
        "Commercial Complex Tower - C, Central Business District, Sector-21, New Raipur Atal Nagar",
      image: "/images/offices/raipur.png",
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

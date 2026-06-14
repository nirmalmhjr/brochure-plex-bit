import { cloneElement, type ReactElement } from "react";
import CoverPage from "./components/templates/CoverPage";
import IntroPage from "./components/templates/IntroPage";
import IconCardGridPage from "./components/templates/IconCardGridPage";
import TimelinePage from "./components/templates/TimelinePage";
import LogoGridPage from "./components/templates/LogoGridPage";
import DatabasesPage from "./components/templates/DatabasesPage";
import CertificationsPage from "./components/templates/CertificationsPage";
import RecognitionPage from "./components/templates/RecognitionPage";
import CategoryLogoPage from "./components/templates/CategoryLogoPage";
import HourlyModelPage from "./components/templates/HourlyModelPage";
import DedicatedModelPage from "./components/templates/DedicatedModelPage";
import StatsPage from "./components/templates/StatsPage";
import ProjectHighlightPage from "./components/templates/ProjectHighlightPage";
import ProjectPairPage from "./components/templates/ProjectPairPage";
import OfficesPage from "./components/templates/OfficesPage";
import ContactPage from "./components/templates/ContactPage";
import ContactMapPage from "./components/templates/ContactMapPage";
import VisionMissionPage from "./components/templates/VisionMissionPage";
import WhyChooseUsPage from "./components/templates/WhyChooseUsPage";
import ServicesHubPage from "./components/templates/ServicesHubPage";

import {
  welcome,
  solutions,
  visionMission,

  whyChooseUs,
  services,
  industries,
  workflow,
  clients,
  techStack,
  databases,
  apiIntegrations,
  certifications,
  recognition,
  hourlyModel,
  dedicatedModel,
  stats,
  projectPages,
  devOffices,
  company,
} from "./data/brochure";

/**
 * The brochure. Reorder / add / remove pages here — page numbers are
 * assigned automatically from the array order (cover = 0, unnumbered).
 */
const pages: ReactElement<{ pageNumber?: number }>[] = [
  <CoverPage key="cover" />,

  <IntroPage key="welcome" {...welcome} stamp={`Since ${company.since}`} image="/images/company-pictures/welcome-to-our-company.png" />,

  <VisionMissionPage
    key="vision-mission"
    title="Company Vision"
    highlight="& Mission"
    items={visionMission}
    image="/images/company-pictures/image1.png"
  />,

  // <PeopleGridPage
  //   key="core-team"
  //   title="Our Core"
  //   highlight="Team Members"
  //   subtitle={coreTeam.subtitle}
  //   people={coreTeam.people}
  // />,

  // <PeopleGridPage
  //   key="representatives"
  //   title="Our International"
  //   highlight="Representatives"
  //   subtitle={representatives.subtitle}
  //   people={representatives.people}
  // />,

  <IntroPage key="solutions" {...solutions} image="/images/company-pictures/provide-solutions.png" />,

  <WhyChooseUsPage
    key="why-choose-us"
    title="Why You Should"
    highlight="Choose Us?"
    items={whyChooseUs}
    image="/images/company-pictures/image1.png"
  />,

  <ServicesHubPage
    key="services"
    title="Our"
    highlight="Services"
    subtitle="Empowering your business with innovative solutions. At Plex Bit Infosystems, we specialize in delivering cutting-edge IT solutions tailored to meet the unique needs of various industries."
    items={services}
  />,

  <TimelinePage
    key="workflow"
    title="Our"
    highlight="Work-Flow"
    subtitle={workflow.subtitle}
    steps={workflow.steps}
  />,

  <IconCardGridPage
    key="industries"
    title="Industries We Have"
    highlight="Expertise In"
    subtitle="We always focus on getting industry expertise along with tech, as we believe technology is just a tool to support the innovative business."
    items={industries}
    columns={3}
    variant="tile"
  />,

  <LogoGridPage
    key="clients"
    title="Our"
    highlight="Clients"
    subtitle={clients.subtitle}
    logos={clients.logos}
    columns={5}
  />,

  <CategoryLogoPage
    key="tech-stack"
    title="Our Technology"
    highlight="Stack"
    subtitle={techStack.subtitle}
    categories={techStack.categories}
    layout="rows"
  />,

  <DatabasesPage
    key="databases"
    title="Database That"
    highlight="We Use"
    subtitle={databases.subtitle}
    items={databases.items}
  />,

  <CategoryLogoPage
    key="api-integrations"
    title="Major API"
    highlight="Integrations"
    subtitle={apiIntegrations.subtitle}
    categories={apiIntegrations.categories}
    layout="columns"
  />,

  <CertificationsPage
    key="certifications"
    title="Our Team"
    highlight="Certifications"
    subtitle={certifications.subtitle}
    certifications={certifications.logos}
    columns={3}
  />,

  <RecognitionPage
    key="recognition"
    title="Our"
    highlight="Recognition"
    subtitle={recognition.subtitle}
    logos={recognition.logos}
    columns={3}
  />,

  // <ChecklistPage
  //   key="capabilities"
  //   title={capabilities.title}
  //   highlight={capabilities.highlight}
  //   intro={capabilities.intro}
  //   items={capabilities.items}
  //   columns={1}
  // />,

  <HourlyModelPage
    key="hourly-model"
    title={hourlyModel.title}
    highlight={hourlyModel.highlight}
    intro={hourlyModel.intro}
    items={hourlyModel.items}
  />,

  <DedicatedModelPage
    key="dedicated-model"
    title={dedicatedModel.title}
    highlight={dedicatedModel.highlight}
    intro={dedicatedModel.intro}
    items={dedicatedModel.items}
  />,

 

  // "Our Projects" — one hero page per project
  ...projectPages[0].projects.map((project, qi) => (
    <ProjectHighlightPage
      key={`project-${project.name}`}
      project={project}
      sectionLabel={`${projectPages[0].title} ${projectPages[0].highlight}`}
      index={qi + 1}
    />
  )),

  // All other groups — two projects per page
  ...projectPages.slice(1).flatMap((page) => {
    const pairs: (typeof page.projects)[] = [];
    for (let i = 0; i < page.projects.length; i += 2) {
      pairs.push(page.projects.slice(i, i + 2));
    }
    return pairs.map((pair, pi) => (
      <ProjectPairPage
        key={`${page.title}-pair-${pi}`}
        projects={pair}
        sectionLabel={`${page.title} ${page.highlight}`}
      />
    ));
  }),

  // ...caseStudies.map((study) => (
  //   <CaseStudyPage key={`case-${study.name}`} study={study} />
  // )),

  // why choose us
 <StatsPage
    key="stats"
    title="Why"
    highlight="Choose Us?"
    subtitle={stats.subtitle}
    stats={stats.items}
    note={stats.note}
  />,
  <OfficesPage key="dev-offices" {...devOffices} />,
  // <OfficesPage key="business-offices" {...businessOffices} />,

  <ContactPage key="contact" />,
  <ContactMapPage key="contact-map" />,
];

export default function App() {
  return (
    <>
      {pages.map((page, i) => cloneElement(page, { pageNumber: i }))}

      <button
        type="button"
        onClick={() => window.print()}
        className="no-print fixed bottom-6 right-6 z-50 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-xl transition hover:bg-brand-dark"
      >
        🖨️ Print / Save as PDF
      </button>
    </>
  );
}

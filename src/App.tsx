import { cloneElement, type ReactElement } from "react";
import CaseStudyDetailPage from "./components/templates/case-study-detail-page";
import CategoryLogoPage from "./components/templates/category-logo-page";
import CertificationsPage from "./components/templates/certifications-page";
import ContactPage from "./components/templates/contact-page";
import CoverPage from "./components/templates/cover-page";
import DatabasesPage from "./components/templates/databases-page";
import DedicatedModelPage from "./components/templates/dedicated-model-page";
import HourlyModelPage from "./components/templates/hourly-model-page";
import IconCardGridPage from "./components/templates/icon-card-grid-page";
import IntroPage from "./components/templates/intro-page";
import LogoGridPage from "./components/templates/logo-grid-page";
import OfficesPage from "./components/templates/offices-page";
import ProjectHighlightPage from "./components/templates/project-highlight-page";
import ProjectPairPage from "./components/templates/project-pair-page";
import ServicesDetailPage from "./components/templates/services-detail-page";
import ServicesHubPage from "./components/templates/services-hub-page";
import SolutionsPage from "./components/templates/solutions-page";
import StatsPage from "./components/templates/stats-page";
import TimelinePage from "./components/templates/timeline-page";

import VisionMissionPage from "./components/templates/vision-mission-page";
import WhyChooseUsPage from "./components/templates/why-choose-us-page";
import WorldMapPage from "./components/templates/world-map-page";

import {
  apiIntegrations,
  caseStudies,
  certifications,
  clients,
  company,
  databases,
  dedicatedModel,
  devOffices,
  hourlyModel,
  industries,
  projectPages,
  recognition,
  serviceDetails,
  services,
  solutions,
  stats,
  techStack,
  visionMission,
  welcome,
  whyChooseUs,
  workflow,
} from "./data/brochure";

/**
 * The brochure. Reorder / add / remove pages here — page numbers are
 * assigned automatically from the array order (cover = 0, unnumbered).
 */
const pages: ReactElement<{ pageNumber?: number }>[] = [
  <CoverPage key="cover" />,

  <IntroPage
    key="welcome"
    {...welcome}
    image="/images/company-pictures/welcome-to-our-company.png"
    stamp={`Since ${company.since}`}
  />,

  <VisionMissionPage
    highlight="& Mission"
    image="/images/company-pictures/image.png"
    items={visionMission}
    key="vision-mission"
    title="Company Vision"
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

  <SolutionsPage
    key="solutions"
    {...solutions}
    image="/images/company-pictures/provide-solutions.png"
    recognitionLogos={recognition.logos}
  />,

  <WhyChooseUsPage
    highlight="Choose Us?"
    image="/images/company-pictures/company-profile.png"
    items={whyChooseUs}
    key="why-choose-us"
    title="Why You Should"
  />,

  <ServicesHubPage
    highlight="Services"
    items={services}
    key="services"
    subtitle="Empowering your business with innovative solutions. At Plex Bit Infosystems, we specialize in delivering cutting-edge IT solutions tailored to meet the unique needs of various industries."
    title="Our"
  />,

  <ServicesDetailPage
    categories={serviceDetails.categories}
    highlight={serviceDetails.highlight}
    key="services-detail"
    title={serviceDetails.title}
  />,

  <TimelinePage
    highlight="Work-Flow"
    key="workflow"
    steps={workflow.steps}
    subtitle={workflow.subtitle}
    title="Our"
  />,

  <IconCardGridPage
    columns={3}
    highlight="Expertise In"
    items={industries}
    key="industries"
    subtitle="We always focus on getting industry expertise along with tech, as we believe technology is just a tool to support the innovative business."
    title="Industries We Have"
    variant="tile"
  />,

  <LogoGridPage
    columns={5}
    highlight="Clients"
    key="clients"
    logos={clients.logos}
    subtitle={clients.subtitle}
    title="Our"
  />,

  <CategoryLogoPage
    categories={techStack.categories.slice(0, 2)}
    highlight="Stack"
    key="tech-stack"
    layout="rows"
    subtitle={techStack.subtitle}
    title="Our Technology"
  />,

  <CategoryLogoPage
    categories={techStack.categories.slice(2)}
    highlight="Stack"
    key="tech-stack-2"
    layout="rows"
    title="Our Technology"
  />,

  <DatabasesPage
    highlight="We Use"
    items={databases.items}
    key="databases"
    subtitle={databases.subtitle}
    title="Database That"
  />,

  <CategoryLogoPage
    categories={apiIntegrations.categories}
    highlight="Integrations"
    key="api-integrations"
    layout="columns"
    subtitle={apiIntegrations.subtitle}
    title="Major API"
  />,

  <CertificationsPage
    certifications={certifications.logos}
    columns={3}
    highlight="Certifications"
    key="certifications"
    subtitle={certifications.subtitle}
    title="Our Team"
  />,

  // <RecognitionPage
  //   columns={3}
  //   highlight="Recognition"
  //   key="recognition"
  //   logos={recognition.logos}
  //   subtitle={recognition.subtitle}
  //   title="Our"
  // />,

  // <ChecklistPage
  //   key="capabilities"
  //   title={capabilities.title}
  //   highlight={capabilities.highlight}
  //   intro={capabilities.intro}
  //   items={capabilities.items}
  //   columns={1}
  // />,

  <HourlyModelPage
    highlight={hourlyModel.highlight}
    intro={hourlyModel.intro}
    items={hourlyModel.items}
    key="hourly-model"
    title={hourlyModel.title}
  />,

  <DedicatedModelPage
    highlight={dedicatedModel.highlight}
    intro={dedicatedModel.intro}
    items={dedicatedModel.items}
    key="dedicated-model"
    title={dedicatedModel.title}
  />,

  // Detailed portfolio case studies — one page per study (add more in `caseStudies`)
  ...caseStudies.map((study, ci) => (
    <CaseStudyDetailPage
      index={ci + 1}
      key={`case-study-${study.name}`}
      study={study}
    />
  )),

  // "Our Projects" — one hero page per project
  ...projectPages[0].projects.map((project, qi) => (
    <ProjectHighlightPage
      index={qi + 1}
      key={`project-${project.name}`}
      project={project}
      sectionLabel={`${projectPages[0].title} ${projectPages[0].highlight}`}
    />
  )),

  // All other groups — two projects per page
  ...projectPages.slice(1).flatMap((page) => {
    const pairs: (typeof page.projects)[] = [];
    for (let i = 0; i < page.projects.length; i += 2) {
      pairs.push(page.projects.slice(i, i + 2));
    }
    return pairs.map((pair) => (
      <ProjectPairPage
        key={pair.map((project) => project.name).join("-")}
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
    highlight="Choose Us?"
    key="stats"
    note={stats.note}
    stats={stats.items}
    subtitle={stats.subtitle}
    title="Why"
  />,
  <OfficesPage key="dev-offices" {...devOffices} />,
  <WorldMapPage key="world-map" />,
  // <OfficesPage key="business-offices" {...businessOffices} />,

  <ContactPage key="contact" />,
  // <ContactMapPage key="contact-map" />,
];

export default function App() {
  return (
    <>
      {pages.map((page, i) => cloneElement(page, { pageNumber: i }))}

      <button
        className="no-print fixed right-6 bottom-6 z-50 rounded-full bg-brand px-6 py-3 font-bold text-sm text-white shadow-xl transition hover:bg-brand-dark"
        onClick={() => window.print()}
        type="button"
      >
        🖨️ Print / Save as PDF
      </button>
    </>
  );
}

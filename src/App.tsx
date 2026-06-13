import { cloneElement, type ReactElement } from "react";

import CoverPage from "./components/templates/CoverPage";
import IntroPage from "./components/templates/IntroPage";
import IconCardGridPage from "./components/templates/IconCardGridPage";
import PeopleGridPage from "./components/templates/PeopleGridPage";
import TimelinePage from "./components/templates/TimelinePage";
import LogoGridPage from "./components/templates/LogoGridPage";
import CertificationsPage from "./components/templates/CertificationsPage";
import RecognitionPage from "./components/templates/RecognitionPage";
import CategoryLogoPage from "./components/templates/CategoryLogoPage";
import ChecklistPage from "./components/templates/ChecklistPage";
import HourlyModelPage from "./components/templates/HourlyModelPage";
import StatsPage from "./components/templates/StatsPage";
import ProjectHighlightPage from "./components/templates/ProjectHighlightPage";
import CaseStudyPage from "./components/templates/CaseStudyPage";
import OfficesPage from "./components/templates/OfficesPage";
import ContactPage from "./components/templates/ContactPage";

import {
  welcome,
  solutions,
  visionMission,
  coreTeam,
  representatives,
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
  capabilities,
  stats,
  projectPages,
  caseStudies,
  devOffices,
  businessOffices,
  company,
} from "./data/brochure";

/**
 * The brochure. Reorder / add / remove pages here — page numbers are
 * assigned automatically from the array order (cover = 0, unnumbered).
 */
const pages: ReactElement<{ pageNumber?: number }>[] = [
  <CoverPage key="cover" />,

  <IntroPage key="welcome" {...welcome} stamp={`Since ${company.since}`} />,

  <IconCardGridPage
    key="vision-mission"
    title="Company Vision"
    highlight="& Mission"
    items={visionMission}
    columns={2}
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

  <IntroPage key="solutions" {...solutions} />,

  <IconCardGridPage
    key="why-choose-us"
    title="Why You Should"
    highlight="Choose Us?"
    items={whyChooseUs}
    columns={2}
  />,

  <IconCardGridPage
    key="services"
    title="Our"
    highlight="Services"
    subtitle="Empowering your business with innovative solutions. At Plex Bit Infosystems, we specialize in delivering cutting-edge IT solutions tailored to meet the unique needs of various industries."
    items={services}
    columns={3}
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

  <LogoGridPage
    key="databases"
    title="Database That"
    highlight="We Use"
    subtitle={databases.subtitle}
    logos={databases.logos}
    columns={4}
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

  <ChecklistPage
    key="dedicated-model"
    title={dedicatedModel.title}
    highlight={dedicatedModel.highlight}
    intro={dedicatedModel.intro}
    items={dedicatedModel.items}
  />,

  <StatsPage
    key="stats"
    title="Why"
    highlight="Choose Us?"
    subtitle={stats.subtitle}
    stats={stats.items}
    note={stats.note}
  />,

  ...projectPages.map((page) => (
    <ProjectHighlightPage
      key={`projects-${page.highlight}-${page.projects[0].name}`}
      title={page.title}
      highlight={page.highlight}
      projects={page.projects}
    />
  )),

  ...caseStudies.map((study) => (
    <CaseStudyPage key={`case-${study.name}`} study={study} />
  )),

  <OfficesPage key="dev-offices" {...devOffices} />,
  <OfficesPage key="business-offices" {...businessOffices} />,

  <ContactPage key="contact" />,
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

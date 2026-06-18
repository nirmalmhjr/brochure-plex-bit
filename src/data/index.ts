/**
 * All brochure content lives in this folder — one file per content section.
 * Templates are dumb: change content in the relevant file (or add/remove pages
 * in App.tsx) without touching design.
 *
 * This barrel re-exports every section so consumers can import from "./data".
 */

// biome-ignore lint/performance/noBarrelFile: intentional — brochure data is always loaded in full
export { apiIntegrations } from "./api-integrations";
export { capabilities } from "./capabilities";
export type { CaseStudy } from "./case-studies";
export { caseStudies } from "./case-studies";
export { certifications } from "./certifications";
export { clients } from "./clients";
export { company } from "./company";
export { databases } from "./databases";
export { industries } from "./industries";
export { businessOffices, devOffices } from "./offices";
export type { Project, ProjectBadge } from "./projects";
export { projectPages } from "./projects";
export { recognition } from "./recognition";
export { serviceDetails, services } from "./services";
export { solutions } from "./solutions";
export { stats } from "./stats";
export { striide } from "./striide";
export { coreTeam, representatives } from "./team";
export { techStack } from "./tech-stack";
export { visionMission } from "./vision-mission";
export { welcome } from "./welcome";
export { whyChooseUs } from "./why-choose-us";
export { workflow } from "./workflow";
export { dedicatedModel, hourlyModel } from "./working-models";

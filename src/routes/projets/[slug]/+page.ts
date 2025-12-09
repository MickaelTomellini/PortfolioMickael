import type { PageLoad } from "./$types";
import { projects } from "../../../lib/data/project";

export const load: PageLoad = ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    throw Error("Projet introuvable");
  }

  return { project };
};

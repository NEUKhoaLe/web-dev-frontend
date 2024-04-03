import courses from "./courses.json";
import modules from "./modules.json";
import links from "./NavigationLinks";
import assignments from "./assignments.json";

type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
}

export { courses, modules, links, assignments };
export type { Course };

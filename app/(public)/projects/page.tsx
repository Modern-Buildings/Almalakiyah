import type { Metadata } from "next";
import { constructMetadata } from "@/utils/metadata";
import ProjectsClient from "./ProjectsClient";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: "المشاريع | Al-Malakiyah",
    description: "كل مشروع هو تحفة فنية مستقلة استكشف محفظتنا من المشاريع المعمارية الرائدة",
    path: "/app/(public)/projects/",
  });
}

export default function ProjectsPage() {
  return <ProjectsClient />;
}

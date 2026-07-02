import { PROJECT_DETAILS } from "@/data/projects/registry";
import { ProjectDetailContent } from "@/components/ProjectDetailContent";

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDetailContent slug={slug} />;
}

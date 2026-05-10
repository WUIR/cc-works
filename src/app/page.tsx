import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

const FeaturedProjects = dynamic(
  () => import("@/components/sections/FeaturedProjects").then((m) => ({ default: m.FeaturedProjects })),
  { loading: () => <div className="py-24 text-center text-muted/50">加载中...</div> }
);

const Skills = dynamic(
  () => import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
  { loading: () => <div className="py-24 text-center text-muted/50">加载中...</div> }
);

const CTA = dynamic(
  () => import("@/components/sections/CTA").then((m) => ({ default: m.CTA }))
);

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <CTA />
    </>
  );
}

import { ParticleBackground } from "@/components/shared/ParticleBackground";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <FeaturedProjects />
      <Skills />
      <CTA />
    </>
  );
}

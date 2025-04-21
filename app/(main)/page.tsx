import HeroSection from "@/app/(main)/contents/hero/hero-section";
import VibeCodingIntroduction from "@/app/(main)/contents/vibe-coding-introduction/vibe-coding-introduction";
import AICodingToolsSection from "@/app/(main)/contents/ai-coding-tools/ai-coding-tools-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VibeCodingIntroduction />
      <AICodingToolsSection />
    </main>
  );
}

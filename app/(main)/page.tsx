import HeroSection from "@/app/(main)/contents/hero/hero-section";
import VibeCodingIntroduction from "@/app/(main)/contents/vibe-coding-introduction/vibe-coding-introduction";
import AICodingToolsSection from "@/app/(main)/contents/ai-coding-tools/ai-coding-tools-section";
import ModelsSection from "@/app/(main)/contents/models/models-section";
import PromptDesignSection from "@/app/(main)/contents/prompt-design/prompt-design-section";
import ExampleSection from "@/app/(main)/contents/example/example-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VibeCodingIntroduction />
      <AICodingToolsSection />
      <ModelsSection />
      <PromptDesignSection />
      <ExampleSection />
    </main>
  );
}

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Your Smart AI Assistant</h1>
        <p className="text-lg mb-8">
          Build, automate and scale with our AI-driven assistant platform.
        </p>
        <Button size="lg">Get Started</Button>
      </div>
    </section>
  );
}

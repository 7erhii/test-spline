import Hero from "@/components/hero";
import Spine from "@/components/spine";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <Spine />
    </div>
  );
}

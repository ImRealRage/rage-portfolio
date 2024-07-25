import { cn } from "@/lib/utils";

function GrainEffect() {
  return (
    <div
      className={cn("fixed top-0 left-0 w-full h-full", "before:content-none")}
    ></div>
  );
}

export default GrainEffect;

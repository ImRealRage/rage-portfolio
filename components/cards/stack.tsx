import { stackData } from "@/data";
import Card from "../ui/card";
import Tooltip from "../ui/tooltip";

export default function StackCard() {
  return (
    <Card title="My Tech Stack">
      <div className="flex flex-col gap-6 mt-2">
        {stackData.map((tech, i) => (
          <div
            key={i}
            className="grid items-center gap-[90px]"
            style={{ gridTemplateColumns: "50px 1fr" }}
          >
            {/* stack group name */}
            <div className="h-auto flex-none break-words whitespace-pre">
              <p className="text-secondary-foreground">{tech.title}</p>
            </div>
            {/* tooltip */}
            <div className="flex gap-4 ">
              {tech.stack.map((t) => (
                <Tooltip
                  key={t.id}
                  title={t.title}
                  image={t.image}
                  bgColor={t.bgColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

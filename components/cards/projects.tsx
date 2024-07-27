import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ProjectsCard() {
  return (
    <Card title="Other Projects">
      <span className="text-secondary-foreground font-semibold">
        Amazing projects from <b>other domains</b>
      </span>
      <Timeline>
        {projects.map((projects, i) => (
          <TimelineItem
            isCourse
            key={i}
            date={projects.date}
            title={projects.title}
            subTitle={projects.subTitle}
            link={projects.link}
            tag={projects.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const projects = [
  {
    date: "",
    title: "The Ultimate Next.js 14+ Crash course",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
  {
    date: "",
    title: "Build WhatsApp clone w video calls",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
  {
    date: "",
    title: "Build Facebook clone with REACT JS (MERN)",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
  {
    date: "",
    title: "ECOMMERCE WEBSITE REACT JS NEXT JS",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
];

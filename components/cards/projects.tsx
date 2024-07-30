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
    title: "iPhone 14 Webpage Clone",
    subTitle: "Next.js",
    link: "/https://iphonebyrage.vercel.app/",
    tag: "New",
  },
  {
    date: "",
    title: "Infinte Scrollable WebPage",
    subTitle: "Next.JS",
    link: "https://ankuslove.vercel.app/",
    tag: "New",
  },
  {
    date: "",
    title: "Lung Cancer Prediction",
    subTitle: "Medicals",
    link: "https://colab.research.google.com/drive/1iCa1BfILhIbWcd3YnEpDovPQSwrRfG2i?usp=sharing",
    tag: "AIML",
  },
  {
    date: "",
    title: "Machine Learning based Brain Tumor detection",
    subTitle: "Medicals",
    link: "https://colab.research.google.com/drive/1hH20eJHMNRupniIFBqDipUXjEqjAEUjA?usp=sharing",
    tag: "AIML",
  },
];

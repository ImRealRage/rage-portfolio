import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {experiencesData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
            link={ex.link}
            tag={ex.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const experiencesData = [
  {
    date: "2023 - 2023",
    title: " Software Engineer (Intern)",
    subTitle: "Walmart",
    link: "https://www.researchgate.net/publication/375551491_Retail_Supply_Chain_Systems_Analysis_A_Case_of_Walmart",
    tag: "Remote",
  },
  {
    date: "2023 - Now",
    title: "Reactjs developer",
    subTitle: "Self",
    link: " / ",
    tag: "Mee",
  },
];

import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {EducationsData.map((ed, i) => (
          <TimelineItem
            key={i}
            date={ed.date}
            title={ed.title}
            subTitle={ed.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const EducationsData = [
  {
    date: "2018 — 2020",
    title: "MPVM Ganga Gurukulam",
    subTitle: "CBSE, Maths",
  },
  {
    date: "2021 — 2025",
    title: "Chandigarh University",
    subTitle: "UnderGrad, CSE",
  },
];

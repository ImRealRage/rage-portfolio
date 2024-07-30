import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function CertificationsCard() {
  return (
    <Card title="My Certifications">
      <Timeline>
        {CertificationssData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const CertificationssData = [
  {
    date: "2024",
    title: "Quantum Mechanics - I",
    subTitle: "NPTEL",
  },
  {
    date: "2024",
    title: "Mobile Development and JavaScript",
    subTitle: "Meta",
  },
  {
    date: "2023",
    title: "Principles of UX/UI Design",
    subTitle: "Meta",
  },
  {
    date: "2023",
    title: "Data Structures and Performance",
    subTitle: "UC_SanDeigo",
  },
];

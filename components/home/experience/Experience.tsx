import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Infinite Co., Ltd.",
    position: "Software Engineer Internship",
    time: "June - July 2022",
    description:
      "Being a part of the automatic parking management system team. Responsible for developing native android application installed in the parking payment machine for paying parking fees through various payment methods.",
    tech: [
      "Android",
      "Java",
      "Kotlin",
    ],
  },
];

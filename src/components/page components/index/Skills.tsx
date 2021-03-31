import List from "@/components/layout/List";
import React from "react";
import SkillsCollection from "../../../static_data/SkillsCollection";
const Skills = (): JSX.Element => {
  const skillsCollection = SkillsCollection();
  const listStyle = "text-xl list-disc mb-10 md:mb-0 tracking-widest";
  return (
    <div className="flex flex-wrap justify-evenly md:content-center mt-20 md:flex-row flex-col">
      <List items={skillsCollection.languages} className={listStyle} />
      <List items={skillsCollection.frameworks} className={listStyle} />
      <List items={skillsCollection.cdAndCI} className={listStyle} />
    </div>
  );
};

export default Skills;

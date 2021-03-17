import List from "@/components/layout/List";
import React from "react";
import SkillsCollection from "../../../static_data/SkillsCollection";
const Skills = (): JSX.Element => {
  const skillsCollection = SkillsCollection();
  return (
    <div className="flex flex-wrap justify-evenly md:content-center mt-20 md:flex-row flex-col">
      <List items={skillsCollection.languages} />
      <List items={skillsCollection.frameworks} />
      <List items={skillsCollection.cdAndCI} />
    </div>
  );
};

export default Skills;

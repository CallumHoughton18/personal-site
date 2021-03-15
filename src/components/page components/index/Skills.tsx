import List from "@/components/layout/List";
import React from "react";
import SkillsCollection from "../../../business_logic/SkillsCollection";
const Skills = (): JSX.Element => {
  const skillsCollection = SkillsCollection();
  return (
    <div className="text-gray-100">
      <h2 className=" text-center text-4xl font-bold tracking-wide">
        Experience In:
      </h2>
      <div className="flex flex-wrap justify-evenly md:content-center mt-20 md:flex-row flex-col">
        <List items={skillsCollection.languages} />
        <List items={skillsCollection.frameworks} />
        <List items={skillsCollection.cdAndCI} />
      </div>
    </div>
  );
};

export default Skills;

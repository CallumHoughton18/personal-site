import List from "@/components/layout/List";
import React from "react";

const Skills = (): JSX.Element => {
  return (
    <div className="text-gray-100">
      <h2 className=" text-center text-4xl font-bold tracking-wide">
        Experience In:
      </h2>
      <div className="flex flex-wrap justify-evenly md:content-center mt-20 md:flex-row flex-col">
        <List items={["C#", "TypeScript", "Python"]} />
        <List items={["Xamarin Forms", "React", "Flask"]} />
        <List items={["Jenkins", "App Center", "Azure Pipelines"]} />
      </div>
    </div>
  );
};

export default Skills;

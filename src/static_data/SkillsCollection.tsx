import React from "react";
import { ListElement } from "@/components/layout/List";
import {
  SiAzuredevops,
  SiCsharp,
  SiDotNet,
  SiHockeyapp,
  SiJenkins,
  SiPython,
  SiReact,
  SiTypescript,
  SiXamarin,
} from "react-icons/si";

type SkillsList = {
  languages: ListElement[];
  frameworks: ListElement[];
  cdAndCI: ListElement[];
};

const SkillsCollection = (): SkillsList => {
  const iconStyle = "inline text-nordGreen text-2xl";
  const languages: ListElement[] = [
    {
      id: "csharp",
      content: (
        <span>
          C# <SiCsharp className={iconStyle} />
        </span>
      ),
    },
    {
      id: "typescript",
      content: (
        <span>
          TypeScript <SiTypescript className={iconStyle} />
        </span>
      ),
    },
    {
      id: "python",
      content: (
        <span>
          Python <SiPython className={iconStyle} />
        </span>
      ),
    },
  ];

  const frameworks: ListElement[] = [
    {
      id: "xam",
      content: (
        <span>
          Xamarin.Forms <SiXamarin className={iconStyle} />
        </span>
      ),
    },
    {
      id: "react",
      content: (
        <span>
          ReactJS <SiReact className={iconStyle} />
        </span>
      ),
    },
    {
      id: "net",
      content: (
        <span>
          .Net Platform <SiDotNet className={iconStyle} />
        </span>
      ),
    },
  ];

  const cdAndCI: ListElement[] = [
    {
      id: "jenkins",
      content: (
        <span>
          Jenkins <SiJenkins className={iconStyle} />
        </span>
      ),
    },
    {
      id: "appcenter",
      content: (
        <span>
          App Center <SiHockeyapp className={iconStyle} />
        </span>
      ),
    },
    {
      id: "azure",
      content: (
        <span>
          Azure DevOps <SiAzuredevops className={iconStyle} />
        </span>
      ),
    },
  ];

  return {
    languages: languages,
    frameworks: frameworks,
    cdAndCI: cdAndCI,
  };
};

export default SkillsCollection;

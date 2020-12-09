import React from "react";
import { PageProps } from "gatsby";

import Header from "@/components/Header";
import IntroCard from "@/components/page components/index/IntroCard";
import Section from "@/components/layout/Section";
import Skills from "@/components/page components/index/Skills";
import ProjectCard from "@/components/page components/index/ProjectCard";

const Home = (props: PageProps): JSX.Element => {
  console.log(props.uri);
  return (
    //TODO: this works for now, but there has to be a better way to load a background image via Gatsby?
    // Currently just retrieving file from static folder
    // Maybe using a hook?
    <main className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <div className="flex items-center justify-center mt-10 mb-36">
        <IntroCard />
      </div>
      <Section>
        <Skills />
      </Section>
      <div className="flex items-center justify-center mt-44 ml-20 mr-20">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
};

export default Home;

import React from "react";
import { PageProps } from "gatsby";

import Header from "@/components/Header";
import IntroCard from "@/components/page components/index/IntroCard";
import Section from "@/components/layout/Section";
import Skills from "@/components/page components/index/Skills";
import Projects from "@/components/page components/index/Projects";

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
      <div className="flex flex-wrap items-start justify-center mt-44 xl:ml-20 xl:mr-20">
        <Projects />
      </div>
    </main>
  );
};

export default Home;

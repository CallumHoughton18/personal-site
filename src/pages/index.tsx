import React from "react";
import { PageProps } from "gatsby";

import IntroCard from "@/components/page components/index/IntroCard";
import Section from "@/components/layout/Section";
import Skills from "@/components/page components/index/Skills";
import Projects from "@/components/page components/index/Projects";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "@/components/Header";
import PageWithNavBar from "@/components/layout/PageWithHeader";

const Home = (props: PageProps): JSX.Element => {
  console.log(props.uri);
  return (
    //TODO: this works for now, but there has to be a better way to load a background image via Gatsby?
    // Currently just retrieving file from static folder
    // Maybe using a hook?
    <PageWithNavBar header={<Header />}>
      <div className="flex items-center justify-center mt-10 mb-36">
        <IntroCard />
      </div>
      <Section style="bg-nordBg p-20">
        <div className="text-gray-100">
          <h2 className=" text-center text-4xl font-bold tracking-wide text-nordSnowStorm-light text-shadow-md">
            Experience In:
          </h2>
          <Skills />
        </div>
      </Section>
      <Section style="pt-20 pb-20 pr-5 pl-5 md:p-20">
        <h2 className="text-center text-4xl font-bold tracking-wide mb-10 text-nordSnowStorm-light text-shadow-md">
          Personal Projects
        </h2>
        <div className="flex flex-wrap items-start justify-center xl:ml-20 xl:mr-20">
          <Projects />
        </div>
      </Section>
    </PageWithNavBar>
  );
};

export default Home;

import React from "react";
import { PageProps } from "gatsby";

import Header from "@/components/Header";
import IntroCard from "@/components/IntroCard";

const Home = (props: PageProps): JSX.Element => {
  console.log(props.uri);
  return (
    //TODO: this works for now, but there has to be a better way to load a background image via Gatsby?
    // Currently just retrieving file from static folder
    // Maybe using a hook?
    <main className="bg-main-background bg-cover flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <div className="flex items-center justify-center mt-10">
        <IntroCard />
      </div>
    </main>
  );
};

export default Home;

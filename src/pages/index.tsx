import React from "react";
import { PageProps } from "gatsby";

import Header from "@/components/Header";
import IntroCard from "@/components/IntroCard";

const Home = (props: PageProps): JSX.Element => {
  console.log(props.uri);
  return (
    <main>
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

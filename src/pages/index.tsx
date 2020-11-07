import React from "react";
import { PageProps } from "gatsby";

import Header from "@/components/Header";

const Home = (props: PageProps): JSX.Element => {
  console.log(props.uri);
  return (
    <main>
      <header>
        <Header />
      </header>
      <p>Personal Site - Coming Soon!</p>
    </main>
  );
};

export default Home;

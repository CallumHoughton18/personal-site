import React, { ReactNode } from "react";

type SectionProps = {
  children?: ReactNode;
};

const Section = (props: SectionProps): JSX.Element => {
  return (
    <section className="bg-nordBg backdrop-blur bg-opacity-80 p-20 shadow-md h-screen">
      {props.children}
    </section>
  );
};

export default Section;

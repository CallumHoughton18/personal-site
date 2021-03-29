import React, { ReactNode } from "react";

type SectionProps = {
  children?: ReactNode;
  style?: string;
};

const Section = ({ style, children }: SectionProps): JSX.Element => {
  return (
    <section className={`bg-opacity-80 shadow-md h-screen ${style}`}>
      {children}
    </section>
  );
};

export default Section;

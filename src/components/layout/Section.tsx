import React, { ReactNode } from "react";

type SectionProps = {
  children?: ReactNode;
  className?: string;
};

const Section = ({ className, children }: SectionProps): JSX.Element => {
  return (
    <section className={`shadow-md h-screen ${className}`}>{children}</section>
  );
};

export default Section;

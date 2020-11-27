import React, { ReactNode } from "react";

type IntroCardProps = {
  children?: ReactNode;
};

const IntroCard = (props: IntroCardProps): JSX.Element => {
  return (
    <div className="flex items-center justify-center m-8 rounded-lg border border-gray-800 shadow-l bg-gray-700 h-32 lg:max-w-4xl">
      <div className="p-10">
        <h2 className="text-gray-400 text-center sm:text-xl xl:text-2xl">
          Callum Houghton
        </h2>
        <h1 className="text-gray-100 text-center sm:text-4xl xl:text-8xl font-extrabold tracking-wide">
          Web / Mobile Developer
        </h1>
      </div>
    </div>
  );
};

export default IntroCard;

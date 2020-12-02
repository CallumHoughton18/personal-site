import React, { ReactNode } from "react";
import CircleAvatar from "./CircleAvatar";

type IntroCardProps = {
  children?: ReactNode;
};

const IntroCard = (props: IntroCardProps): JSX.Element => {
  return (
    <div className="m-8 rounded-lg border border-gray-800 shadow-l bg-gray-700 lg:max-w-6xl backdrop-blur bg-opacity-80">
      <div className="flex flex-col justify-center items-center p-10">
        <CircleAvatar />
        <span className="font-sans text-center text-gray-400 sm:text-xl xl:text-2xl sm:mb-2 sm:mt-5 md:mb-5 md:mt-10">
          Callum Houghton
        </span>
        <h1 className="font-sans text-center text-gray-100 sm:text-4xl xl:text-7xl font-extrabold tracking-wide">
          Web / Mobile Developer
        </h1>
      </div>
    </div>
  );
};

export default IntroCard;

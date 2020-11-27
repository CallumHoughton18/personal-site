import React, { ReactNode } from "react";
import CircleAvatar from "./CircleAvatar";

type IntroCardProps = {
  children?: ReactNode;
};

const IntroCard = (props: IntroCardProps): JSX.Element => {
  return (
    <div className="m-8 rounded-lg border border-gray-800 shadow-l bg-gray-700 lg:max-w-4xl">
      <div className="flex flex-col justify-center items-center p-10">
        <CircleAvatar />
        <h2 className="text-gray-400 text-center sm:text-xl xl:text-2xl sm:mb-2 sm:mt-1 md:mb-5 md:mt-10">
          Callum Houghton
        </h2>
        <h1 className="text-gray-100 text-center sm:text-4xl xl:text-7xl font-extrabold tracking-wide">
          Web / Mobile Developer
        </h1>
      </div>
    </div>
  );
};

export default IntroCard;

import React, { ReactNode } from "react";

type IntroCardProps = {
  children?: ReactNode;
};

const IntroCard = (props: IntroCardProps): JSX.Element => {
  return (
    <div className="flex items-center justify-center m-8 rounded-lg border border-gray-800 shadow-l bg-gray-700 h-32 lg:max-w-4xl">
      <div className="p-10">
        <span className="text-gray-200 sm:text-lg xl:text-xl font-bold">
          Hello, My Name is Callum and I am a Software Developer
        </span>
      </div>
    </div>
  );
};

export default IntroCard;

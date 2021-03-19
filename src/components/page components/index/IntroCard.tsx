import Card from "@/components/layout/Card";
import React from "react";
import CircleAvatar from "./CircleAvatar";
import ContactsRibbon from "./ContactsRibbon";

const IntroCard = (): JSX.Element => {
  return (
    <div className="relative">
      <Card
        cardStyle="lg:max-w-6xl backdrop-blur bg-opacity-80 border-gray-800"
        innerChildrenStyle="p-10"
      >
        <CircleAvatar />
        <span className="font-sans text-center text-gray-400 sm:text-xl xl:text-2xl sm:mb-2 sm:mt-5 md:mb-5 md:mt-10 tracking-wide">
          Callum Houghton
        </span>
        <h1 className="font-sans text-center text-gray-100 sm:text-4xl xl:text-7xl font-extrabold tracking-wide">
          Web / Mobile Developer
        </h1>
      </Card>
      <div className="absolute sm:mr-8 top-16 right-6 text-2xl sm:text-3xl md:text-4xl text-gray-300">
        <ContactsRibbon />
      </div>
    </div>
  );
};

export default IntroCard;

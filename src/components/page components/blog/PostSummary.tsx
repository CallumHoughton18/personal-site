import React from "react";

type PostSummaryProps = {
  title: string;
  author: string;
  excerpt: string;
  date: string;
  postLink: string;
};

const PostSummary = ({
  title,
  excerpt,
  date,
  postLink,
}: PostSummaryProps): JSX.Element => {
  return (
    <article className="max-w-4xl px-10 my-4 py-6 bg-snowStorm rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-light text-polarNight-lightest">{date}</span>
        <a
          className="px-2 py-1 text-blueGray-500 font-bold rounded hover:text-blueGray-700"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          #blog-post
        </a>
      </div>
      <div className="mt-5">
        <a
          className="text-2xl text-polarNight-darkest font-bold hover:text-gray-600"
          href={postLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <p className="mt-5 text-polarNight-lightest">{excerpt}</p>
      </div>
      <div className="flex justify-between items-center mt-8">
        <a
          className="px-2 py-1 bg-polarNight text-snowStorm-lightest font-bold rounded hover:bg-blueGray-500"
          href={postLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          read more
        </a>
      </div>
    </article>
  );
};

export default PostSummary;

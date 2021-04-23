import { Link } from "gatsby";
import React from "react";

type PostSummaryProps = {
  title: string;
  author: string;
  excerpt: string;
  date: string;
  postExternalLink: string;
  postInternalLink: string;
};

const PostSummary = ({
  title,
  excerpt,
  date,
  postInternalLink,
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
        <span className="font-bold text-lg to-polarNight-darkest">{title}</span>
        <p className="mt-5 text-polarNight-lightest">{excerpt}</p>
      </div>
      <div className="flex justify-between items-center mt-8">
        <Link
          to={postInternalLink}
          className="px-2 py-1 bg-polarNight text-snowStorm-lightest font-bold rounded hover:bg-blueGray-500"
        >
          read more
        </Link>
        {/* <a
          className="px-2 py-1 bg-polarNight text-snowStorm-lightest font-bold rounded hover:bg-blueGray-500"
          href={postLink}
          target="_blank"
          rel="noopener noreferrer"
        > */}
        {/* </a> */}
      </div>
    </article>
  );
};

export default PostSummary;

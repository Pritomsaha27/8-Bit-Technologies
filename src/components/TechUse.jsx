import React from "react";
import "../css/hover.css";

function TechUse() {
  return (
    <div className="container mx-auto my-20">
      <p className="text-4xl text-center my-20 font-bold">Technologies We Use</p>
      <div className="grid px-5 grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-8 items-center justify-around">
        <img
          className="object-contain tech"
          src="https://d1brrfe9oh6qhi.cloudfront.net/javascrript-logo.png"
          alt="JavaScript"
        />
        <img
          className="object-contain tech"
          src="https://d1brrfe9oh6qhi.cloudfront.net/nodejs-logo.png"
          alt="Node.js"
        />
        <img
          className="object-contain tech"
          src="https://d1brrfe9oh6qhi.cloudfront.net/reactjs-logo.png"
          alt="React.js"
        />
        <img
          className="w-28 h-8 object-contain tech"
          src="https://d1brrfe9oh6qhi.cloudfront.net/nextjs-logo.png"
          alt="Next.js"
        />
        <img
          className="w-32 h-16 object-contain tech"
          src="https://d1brrfe9oh6qhi.cloudfront.net/php-logo.png"
          alt="PHP"
        />
        <img
          className="object-contain tech"
          src="https://d1brrfe9oh6qhi.cloudfront.net/laravel-logo.png"
          alt="Laravel"
        />
        <div className="col-span-3 flex justify-center sm:col-span-1">
          <img
            className="w-20 h-16 object-contain tech"
            src="https://d1brrfe9oh6qhi.cloudfront.net/aws_logo.png"
            alt="AWS"
          />
        </div>
      </div>
    </div>
  );
}

export default TechUse;

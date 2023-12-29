import React from "react";
import "../RightSidebar/RightSidebar.css";

const WidgetTags = () => {
  const tags = [
    "c",
    "c++",
    "java",
    "Tailwind",
    "Bootstrap",
    "python",
    "php",
    "javascript",
    "MongoDb",
    "Mysql",
    "React js",
    "Next js",
    "firebase",
    "html",
    "express js",
  ];
  return (
    <div className="widget-tags">
      <h4 className="">watched tags</h4>
      <div className=" widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;

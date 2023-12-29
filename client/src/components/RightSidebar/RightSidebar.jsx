import React from "react";
import "../RightSidebar/RightSidebar.css";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";
const RightSidebar = () => {
  return (
    <div>
      <aside
        className=" right-sidebar"
        // style={{ display: "flex", flexDirection: "column" }}
      >
        <Widget />
        <WidgetTags />
      </aside>
    </div>
  );
};

export default RightSidebar;

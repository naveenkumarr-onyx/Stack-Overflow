import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
// import Testing from "../AskQuestion/Testing";
import QuestionsDetails from "./QuestionsDetails";
import Testing from "../AskQuestion/Testing";
const DisplayQuestion = () => {
  return (
    <div className=" home-container-1">
      <LeftSidebar />
      <div className=" home-container-1">
        <QuestionsDetails />
        {/* <Testing /> */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;

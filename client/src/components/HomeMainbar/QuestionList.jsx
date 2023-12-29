import React from "react";
import Questions from "./Questions";

const QuestionList = ({ questionsList }) => {
  return (
    <>
      {questionsList?.map((question) => {
        return (
          <div key={question._id}>
            <Questions question={question} key={question._id} />
          </div>
        );
      })}
    </>
  );
};

export default QuestionList;

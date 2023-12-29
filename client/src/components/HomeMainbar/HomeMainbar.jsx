import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { PiSmileySadBold } from "react-icons/pi";
// import Questions from "./Questions";
const HomeMainbar = () => {
  const questionsList = useSelector((state) => state.questionsReducer);
  // console.log(questionsList);
  // var questionsList = [
  //   {
  //     _id: 1,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfanswers: 2,
  //     questionTitle: "What is a function",
  //     questionBody: "its meant by",
  //     questionTags: ["c", "c++", "java"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "Kumar",
  //         askedOn: "jan 1",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 2,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfanswers: 2,
  //     questionTitle: "What is a  arrow function",
  //     questionBody: "its meant by",
  //     questionTags: ["c", "c++", "java"],
  //     userPosted: "revi",
  //     askedOn: "jan 3",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "Kumar",
  //         askedOn: "jan 1",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 3,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfanswers: 2,
  //     questionTitle: "What is a anonyms function",
  //     questionBody: "its meant by",
  //     questionTags: ["c", "c++", "java"],
  //     userPosted: "gopal",
  //     askedOn: "jun  10",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "Kumar",
  //         askedOn: "jan 1",
  //         userId: 2,
  //       },
  //     ],
  //   },
  // ];
  const user = 1;
  const navigate = useNavigate();
  const redirect = () => {
    if (user === null) {
      alert("Login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  const location = useLocation();
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={redirect} className="ask-btn">
          Ask Question
        </button>
        {/* <Link
          to={user === null ? redirect() : "/AskQuestion"}
          className="ask-btn"
        >
          Ask Question
        </Link> */}
      </div>
      <div className="">
        {questionsList.data === null ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <p>Please wait........</p>
          </div>
        ) : (
          <>
            {" "}
            <p>
              {questionsList.data.length === 0 ? (
                <>
                  <h1
                    style={{
                      fontSize: "20px",
                      color: "red",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    No more questions......
                    <PiSmileySadBold />
                  </h1>
                </>
              ) : (
                <h1 style={{ textDecoration: "underline", fontSize: "20px" }}>
                  {questionsList.data.length} questions
                </h1>
              )}
            </p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;

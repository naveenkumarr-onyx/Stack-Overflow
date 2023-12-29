import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import upvote from "../../assets/sort-up.svg";
import downVote from "../../assets/sort-down.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Questions.css";
import DisplayAnswer from "./DisplayAnswer";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteQuestion,
  postAnswer,
  voteQuestion,
} from "../../actions/question";
import moment from "moment";
import copy from "copy-to-clipboard";
const QuestionsDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const url = "http://localhost:3000";
  var questionsList = useSelector((state) => state.questionsReducer);
  const User = useSelector((state) => state.currentUserReducer);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
    } else {
      if (answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: answer,
            userAnswered: User.result.name,
            userId: User.result._id,
          })
        );
      }
    }
  };
  const handleShare = () => {
    copy(url + location.pathname);
    alert(`Link copied successfully ${url + location.pathname}`);
    alert("Thank u");
  };
  const handleDelete = () => {
    if (!window.confirm("Are you sure?")) return "Deleted Successfully";
    dispatch(deleteQuestion(id, Navigate));
  };
  const handleUpVote = () => {
    if (User === null) {
      alert("Please Login or Signup");
      Navigate("/Auth");
    }
    dispatch(voteQuestion(id, "upVote"));
    console.log("up");
  };
  const handleDownVote = () => {
    if (User === null) {
      alert("Please Login or Signup");
      Navigate("/Auth");
    }
    dispatch(voteQuestion(id, "downVote"));
    console.log("down");
  };
  return (
    <div className=" question-details-page">
      {questionsList.data === null ? (
        <>
          <h1>Loading.....</h1>
        </>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => {
              return (
                <div key={question} style={{ margin: "10px" }}>
                  <section
                    className=" question-details-container"
                    style={{ margin: "10px" }}
                  >
                    <h1>{question.questionTitle}</h1>
                    <div className=" question-details-container-2">
                      <div className="question-votes">
                        <img
                          src={upvote}
                          alt="up_votes"
                          width={18}
                          className=" votes-icon"
                          onClick={handleUpVote}
                        />
                        <p>
                          {question.upVote.length - question.downVote.length}
                        </p>
                        <img
                          src={downVote}
                          alt="down_votes"
                          width={18}
                          className=" votes-icon"
                          onClick={handleDownVote}
                        />
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div>
                            <p className=" question-body">
                              {question.questionBody}
                            </p>
                          </div>
                          <div
                            style={{ display: "flex", gap: "10px" }}
                            className="question-details-tags"
                          >
                            {question.questionTags.map((tag) => {
                              return <p key={tag}>{tag}</p>;
                            })}
                          </div>
                          <div className=" question-actions-user">
                            <button type="button" onClick={handleShare}>
                              Share
                            </button>
                            {User?.result?._id === question?.userId && (
                              <button type="button" onClick={handleDelete}>
                                Delete
                              </button>
                            )}
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div>
                            <p
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "5px",
                              }}
                            >
                              asked:
                              {moment(question.askedOn).fromNow()}
                            </p>
                            <Link
                              to={`/Users/${question.userId}`}
                              className=" user-link"
                              style={{ color: "0086d8" }}
                            >
                              <Avatar
                                backgroundColor="orange"
                                px="8px"
                                py="5px"
                              >
                                {question.userPosted.charAt(0).toUpperCase()}
                              </Avatar>
                              <div>{question.userPosted}</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/*  */}
                  {/* answer section */}
                  {/*  */}
                  {question.noOfanswers !== 0 && (
                    <section style={{ width: "100%" }}>
                      <h1>
                        {question.noOfAnswers.length === 0 ? (
                          <>
                            <p>{question.noOfAnswers}answer</p>
                          </>
                        ) : (
                          <>
                            {" "}
                            <p>{question.noOfAnswers}answers</p>
                          </>
                        )}
                      </h1>

                      <DisplayAnswer
                        key={question._id}
                        question={question}
                        handleShare={handleShare}
                      />
                    </section>
                  )}
                  <section className="post-ans-container">
                    <h3>Your Answer</h3>
                    <form
                      onSubmit={(e) => {
                        handlePostAnswer(e, question.answer.length);
                      }}
                    >
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        onChange={(e) => {
                          setAnswer(e.target.value);
                        }}
                      ></textarea>{" "}
                      <br />
                      <input
                        type="submit"
                        value="post your answer"
                        className=" post-ans-btn"
                      />
                    </form>
                    <p
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      Browse other question tagged
                      {question.questionTags.map((tag) => {
                        return (
                          <Link to="/Tags" key={tag} className="ans-tags">
                            {tag}
                          </Link>
                        );
                      })}{" "}
                      or
                      <Link
                        to="/AskQuestion"
                        style={{ textDecoration: "none", color: "#009dff" }}
                      >
                        ask your own question
                      </Link>
                    </p>
                  </section>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;

import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnswer } from "../../actions/question";
const DisplayAnswer = ({ question, handleShare }) => {
  const { id } = useParams();
  const User = useSelector((state) => state.currentUserReducer);
  console.log(User);
  const dispatch = useDispatch();
  const handleDelete = (answerId, noOfAnswers) => {
    if (!window.confirm("Are you sure to delete these answer?")) return;
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };
  return (
    <div>
      {question.answer.map((ans) => {
        return (
          <div key={ans._id} className="display-ans">
            <p>{ans.answerBody}</p>
            <div style={{ display: "flex" }}>
              <div className="question-actions-user">
                <button type="button" onClick={handleShare}>
                  Share
                </button>
                {User?.result?._id === ans?.userId && (
                  <button
                    type="button"
                    onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                  >
                    Delete
                  </button>
                )}
              </div>
              <div>
                <p>Answered {moment(ans.answeredOn).fromNow()}</p>
                <Link
                  to={`/Users/${ans.userId}`}
                  className=" user-link"
                  style={{ color: "0086d8" }}
                >
                  <Avatar backgroundColor="green" px="8px" py="5px">
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avatar>
                  <div>{ans.userAnswered}</div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayAnswer;

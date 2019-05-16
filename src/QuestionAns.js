import React from "react";
import { connect } from "react-redux";

// imported action
import {
  addQuestion,
  nextQuestion,
  prevQuestion,
  specificQuestion,
  submitAnswer
} from "./action";

class QAns extends React.Component {
  render() {
    const currentQuestionNumber = this.props.quesCurrentCount;
    const questionArray = this.props.questionList;
    const totalQuestions = questionArray.length;
    const answeredArray = questionArray[currentQuestionNumber - 1].answered;
    return (
      <div>
        <h2>
          Q{currentQuestionNumber}{" "}
          {questionArray[currentQuestionNumber - 1].question}
        </h2>
        {questionArray[currentQuestionNumber - 1].options.map(
          (option, index) => (
            <h4
              key={option + index}
              onClick={() => {
                this.props.dispatch(submitAnswer(currentQuestionNumber, index));
                this.forceUpdate();
              }}
              className={answeredArray[1] === index ? "test option" : "option"}
            >
              {index + 1} {option}
            </h4>
          )
        )}
        <button
          onClick={() => {
            this.props.dispatch(nextQuestion());
          }}
          disabled={currentQuestionNumber >= totalQuestions ? true : false}
        >
          Next
        </button>
        <button
          onClick={() => {
            this.props.dispatch(prevQuestion());
          }}
          disabled={currentQuestionNumber <= 1 ? true : false}
        >
          Prev
        </button>
        <button
          hidden={currentQuestionNumber >= totalQuestions ? false : true}
          onClick={() => {
            this.props.history.push("/result");
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export const QuestionAnswer = connect(state => state)(QAns);

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Result extends React.Component {
  render() {
    // console.log('result',this.props.questionList);
    const result = [];
    for (let a of this.props.questionList) {
      result.push(a.answered[2]);
    }
    return (
      <div>
        <Link to="/" className="home">
          Home
        </Link>
        <h2>Result:</h2>
        {result.map((value, index) => {
          return (
            <h3 key={index + value + Math.random()}>
              Q{index + 1} {value === true ? "✔" : "❌"}
            </h3>
          );
        })}
      </div>
    );
  }
}

export const Res = connect(state => state)(Result);

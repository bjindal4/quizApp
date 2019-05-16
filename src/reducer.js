import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

export const questionSet = (
  state = {
    quesCurrentCount: 1,
    questionList: []
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
    case "ADD_QUESTION":
      // question , options , correctOption needed
      const question = action.question; // String
      const options = action.options; // array
      const correctOption = action.correctOption; // Number
      const answered = [false, undefined, false]; // format [anserorNot, optionNumber, rightOrwrong]   // question was answered or not
      return {
        ...state,
        questionList: [
          ...state.questionList,
          {
            question,
            options,
            correctOption,
            answered
          }
        ]
      };
    case "SUBMIT_ANSWER": {
      // question Number and option needed.
      const quesNumber = action.quesNumber;
      const optionNumber = action.sumbitOption; // option Number
      const rightOrwrong =
        state.questionList[quesNumber - 1].correctOption === optionNumber
          ? true
          : false;
      state.questionList[quesNumber - 1].answered = [
        true,
        optionNumber,
        rightOrwrong
      ];
      return state;
    }
    case "GET_NEXT_QUESTION": {
      const totalQuestion = state.questionList.length;
      const nextQuestion = state.quesCurrentCount + 1;
      return {
        ...state,
        quesCurrentCount:
          nextQuestion >= totalQuestion ? totalQuestion : nextQuestion
      };
    }
    case "GET_PREV_QUESTION": {
      const nextQuestion = state.quesCurrentCount - 1;
      return {
        ...state,
        quesCurrentCount: nextQuestion < 1 ? 1 : nextQuestion
      };
    }
    case "GET_SPECIFIC_QUESTION":
      // specific question no needed (reqQues)
      return {
        ...state,
        quesCurrentCount: action.reqQues
      };
  }
};

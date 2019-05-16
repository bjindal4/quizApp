export const addQuestion = (question, options, correctOption) => {
  return {
    type: "ADD_QUESTION",
    question,
    options,
    correctOption
  };
};

export const nextQuestion = () => ({
  type: "GET_NEXT_QUESTION"
});

export const prevQuestion = () => ({
  type: "GET_PREV_QUESTION"
});

export const specificQuestion = questionNumber => ({
  type: "GET_SPECIFIC_QUESTION",
  reqQues: questionNumber
});

export const submitAnswer = (currentQuestionNumber, option) => ({
  type: "SUBMIT_ANSWER",
  quesNumber: currentQuestionNumber,
  sumbitOption: option
});

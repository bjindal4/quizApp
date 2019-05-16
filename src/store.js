import { createStore } from "redux";
import { questionSet } from "./reducer";
const store = createStore(questionSet);
store.subscribe(() => {
  const state = store.getState();
  console.log("sub", state);
});
store.dispatch({
  type: "ADD_QUESTION",
  question: "What is HTML?",
  correctOption: 0,
  options: ["Hyper text markup", "Hyper tim mark", "Hello Tom Mortin"]
});
store.dispatch({
  type: "ADD_QUESTION",
  question: "What is JS?",
  correctOption: 1,
  options: ["Jony Sins", "JavaScript", "JobScript"]
});
store.dispatch({
  type: "ADD_QUESTION",
  question: "What is FB?",
  correctOption: 2,
  options: ["Face Blog", "Fine Bros", "Face Book"]
});

export { store };

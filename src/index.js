import React from "react";
import ReactDOM from "react-dom";
// router
import { BrowserRouter, Switch, Route } from "react-router-dom";
// style
import "./styles.css";

// sound
import Sound from "react-sound";

// store
import { store } from "./store";
import { Provider } from "react-redux";
// components
import { QuestionAnswer } from "./QuestionAns";
import { Res } from "./Result";
class Output extends React.Component {
  render() {
    return (
      <div>
        <header>Question and Answer App</header>
        <QuestionAnswer history={this.props.history} />
      </div>
    );
  }
  componentDidMount() {
    let link =
      "https://drive.google.com/uc?export=download&id=1arOy4Tgwh2qo9_N5N0CX4hzauli2QPDk";
    const audio = new Audio(link);
    // audio.volume = .2;
    audio.play();
  }
}

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Output} exact />
        <Route path="/result" component={Res} />
      </Switch>
    </div>
  </BrowserRouter>
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
const rootElement = document.getElementById("root");
ReactDOM.render(jsx, rootElement);

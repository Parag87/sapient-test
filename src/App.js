import React, { Component } from "react";
import "./App.css";
import HackerNews from "./component/hackerNews";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-8 m-2">
              <HackerNews data-testid="hackerNews" />
            </div>
            <div className="col"></div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

import { Component } from "react";
import Header from "./components/Header";
import { NobelPrizeType } from "./types";
import NobelPrize from "./components/NobelPrize";

import "./App.css";

type State = { nobelPrizes: NobelPrizeType[] };

class App extends Component {
  state: State = {
    nobelPrizes: [],
  };

  componentDidMount(): void {
    fetch("https://api.nobelprize.org/2.1/nobelPrizes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ nobelPrizes: data.nobelPrizes });
      });
  }

  render() {
    const { nobelPrizes } = this.state;
    return (
      <div className="App">
        <Header />
        {nobelPrizes.map((prize, index) => (
          <NobelPrize key={index} prizeInfo={prize} />
        ))}
      </div>
    );
  }
}
export default App;

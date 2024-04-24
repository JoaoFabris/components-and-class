import { Component } from "react";
import Laureate from "./Laureate";
import { NobelPrizeType } from "../types";

type Props = {
  prizeInfo: NobelPrizeType;
};

export default class NobelPrize extends Component<Props> {
  render() {
    const {
      prizeInfo: { categoryFullName, dateAwarded, laureates },
    } = this.props;

    return (
      <div>
        <h2>{categoryFullName.en}</h2>
        <h4>{dateAwarded}</h4>

        {laureates.map((laureate) => (
          <Laureate key={laureate.id} info={laureate} />
        ))}
      </div>
    );
  }
}

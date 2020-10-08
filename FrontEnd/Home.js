import React from "react";
import { Link } from "@reach/router";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hell: true };
  }

  render() {
    return (
      <div>
        <h1>satyam and roshan</h1>
      </div>
    );
  }
}

export default Home;

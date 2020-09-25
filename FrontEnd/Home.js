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
        <img
          src="https://img.icons8.com/cotton/2x/laptop-coding.png"
          alt="home-img"
        />
        <h1 className="hom">Blogify</h1>
        <h3>lorem ipsum </h3>

        <Link to={"/cp-guide"}>
          <button>CP stater guide</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    );
  }
}

export default Home;

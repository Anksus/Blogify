import React from "react";
import { Link } from "@reach/router";
import Sidebar from './Sidebar';
class Home extends React.Component {
  render() {
    return (
      <div>
        {/* Sidebar */}
        <div className="sidebar">
          <h1> Articles </h1>
          <hr/>
          <h4> Algebra </h4>
          <div>
              <div className="Algebra-bar">
                <li><a href="#Fundamen">Fundamentals</a>
                  <div className="submenu-01">
                    <ul>
                      <li><a href="#xyz"> Binary Exponentiation </a></li>
                      <li><a href="#xyz"> Euclidean algorithm for computing the GCD  </a></li>
                      <li><a href="#xyz"> Extended Euclidean Algorithm </a></li>
                      <li><a href="#xyz"> Linear Diophantine Equations </a></li>
                      <li><a href="#xyz"> Fibonacci Numbers </a> </li>
                    </ul>
                  </div>
                </li>
                <li><a href="#Home">Prime Numbers</a>
                  <div className="submenu-01">
                    <ul>
                      <li><a href="XYZ"> Sieve of Eratosthenes(SOE) </a> </li>
                      <li><a href="XYZ"> SOE with Linear Time complexity </a> </li>
                      <li><a href="XYZ"> Primality Test </a> </li>
                      <li><a href="XYZ"> Integer Factorization </a> </li>
                    </ul>
                  </div>
                </li>
                <li><a href="#Home">Number-theoratic functions</a>
                  <div className="submenu-01">
                    <ul>
                      <li><a href="XYZ"> Euler's totient function </a></li>
                      <li><a href="XYZ"> Number of Divisors / Sum of Divisors </a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="#Home"> Modular arithmetic </a>
                  <div className="submenu-01">
                    <ul>
                    <li><a href="XYZ"> Modular Inverse </a></li>
                    <li><a href="XYZ"> Linear Congruence Euation </a></li>
                    <li><a href="XYZ"> Chinese Remainder Theorem </a></li>
                    <li><a href="XYZ"> Factorial modulo p</a></li>
                    <li><a href="XYZ"> Discrete Log</a></li>
                    <li><a href="XYZ"> Primitive Root</a></li>
                    <li><a href="XYZ"> Discrete Root</a></li>
                    <li><a href="XYZ"> Montogomery Multiplication</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="#number systems"> Number systems</a>
                  <div className="submenu-01">
                    <ul>
                    <li><a href="XYZ"> Balanced Ternary</a></li>
                    <li><a href="XYZ"> Gray Code</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="#Miscellaneous"> Miscellaneous </a>
                <div className="submenu-01">
                  <ul>
                    <li><a href="XYZ"> Enumerating submasks of a bitmask </a></li>
                    <li><a href="XYZ"> Arbitrary-Precision Arithmetic</a></li>
                    <li><a href="XYZ"> Fast Fourier transform </a></li>
                    <li><a href="XYZ"> Operations on polynoials and series </a></li>
                  </ul>
                </div>
                </li>
              </div>
          </div>

          <h4>Data Structures </h4>
          <div>
            <div className="Data-bar">
              <li><a href="#Home"> Fundamentals </a>
                <div className="submenu-01">
                  <ul>
                    <li><a href="XYZ"> Minimum Stack / Minimum Queue</a></li>
                    <li><a href="XYZ"> Sparse Table</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="#Home">Trees</a>
                <div className="submenu-01">
                  <ul>
                    <li><a href="XYZ"> Disjoint Set Union</a></li>
                    <li><a href="XYZ"> Fenwick Tree</a></li>
                    <li><a href="XYZ"> Sqrt Decomposition</a></li>
                    <li><a href="XYZ"> Segment Tree</a></li>
                    <li><a href="XYZ"> Treap</a></li>
                    <li><a href="XYZ"> Sqrt Tree</a></li>
                    <li><a href="XYZ"> Randomized Heap</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="#Home"> Advanced</a>
                <div className="submenu-01">
                  <ul>
                    <li><a href="XYZ"> Deleting from a Data Structure in O(T(n)log(n)) </a></li>
                  </ul>
                </div>
              </li>
            </div>
          </div>

          <h4> Dynamic Programming </h4>
          <div>
              <div className="DP-bar">
                <li><a href="#Fundamen"> DP optimizations</a></li>
                <li><a href="#Home"> Tasks </a></li>
              </div>
          </div>

          <h4> String </h4>
          <div>
              <div className="String-bar">
                <li><a href="#Fundamen">Fundamentals</a></li>
                <li><a href="#Home"> Advanced </a></li>
                <li><a href="#Home">  Tasks </a></li>
              </div>
          </div>

          <h4> Linear Algebra </h4>
          <div>
              <div className=" Linear-Alg-bar">
                <li><a href="qwdqdm"> Matrices </a></li>
              </div>
          </div>

          <h4> Algebra </h4>
          <div>
              <div className="combi-bar">
                <li><a href="#Fundamen"> Fundamentals </a></li>
                <li><a href="#Home"> Techniques </a></li>
                <li><a href="#Home">  Tasks </a> </li>
              </div>
          </div>

          <h4> Numerical Methods </h4>
          <div>
              <div className="Numerical-bar ">
                <li><a href="#Fundamen"> Search </a></li>
                <li><a href="#Home"> Integration </a></li>
              </div>
          </div>

          <h4> Graph </h4>
          <div>
              <div className="graph-bar">
                <li><a href="#Fundamen"> Graph Traversal </a></li>
                <li><a href="#Home"> Conected components, Bridges, Articulations point </a></li>
                <li><a href="#Home"> Single-source shortest paths </a></li>
                <li><a href="#Home">  All-pairs shortest paths </a></li>
                <li><a href="#number systems"> Spanning Trees</a></li>
                <li><a href="#Miscellaneous">  Cycles </a></li>
                <li><a href="#lowest"> Lowest coon ancestor  </a></li>
                <li> <a href="#flows"> Flows and related problems </a></li>
                <li> <a href="matching"> Matchings and related problems </a></li>
                <li><a href="#miscell"> Miscellaneous </a></li>
              </div>
          </div>

          <h4> Miscellaneous </h4>
          <div>
              <div className="misscell-bar">
                <li><a href="#Fundamen"> Sequences </a></li>
                <li><a href="#Home"> Game theory </a></li>
                <li><a href="#Home">  Schedules </a></li>
                <li><a href="#Home">  Miscellaneous  </a></li>
              </div>
          </div>
        </div>
        {/* main */}
        <div className="right-side-main">
          <h2>Sidebar with Icons</h2>
          <p>This side navigation is of full height (100%) and always shown.</p>
          <p>
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like). Where does it come from? Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from
            the 1914 translation by H. Rackham.
          </p>
          <p>
            Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec et. Inciderint efficiantur his ad. Eum no molestiae
            voluptatibus.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like). Where does it come from? Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from
            the 1914 translation by H. Rackham.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;

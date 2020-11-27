import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

const Sidebar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios("http://localhost:8000/cp/topics");
      setTopics(res.data);
    };
    fetchData();
  }, []);
  // topics.map((ele) => {
  //   console.log(ele.topic);
  // });
  return (
    <div className="sidebar">
      <h1> Articles </h1>
      <hr />
      {/* {topics.map((top) => {
        <h4>top.topic</h4>;
        <li>

        </li>
      })} */}

      <h4> Algebra </h4>
      <div>
        <div className="Algebra-bar">
          <li>
            <a href="#Fundamen">Fundamentals</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="#xyz"> Binary Exponentiation </a>
                </li>
                <li>
                  <a href="#xyz"> Euclidean algorithm for computing the GCD </a>
                </li>
                <li>
                  <a href="#xyz"> Extended Euclidean Algorithm </a>
                </li>
                <li>
                  <a href="#xyz"> Linear Diophantine Equations </a>
                </li>
                <li>
                  <a href="#xyz"> Fibonacci Numbers </a>{" "}
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home">Prime Numbers</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Sieve of Eratosthenes(SOE) </a>{" "}
                </li>
                <li>
                  <a href="XYZ"> SOE with Linear Time complexity </a>{" "}
                </li>
                <li>
                  <a href="XYZ"> Primality Test </a>{" "}
                </li>
                <li>
                  <a href="XYZ"> Integer Factorization </a>{" "}
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home">Number-theoratic functions</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Euler's totient function </a>
                </li>
                <li>
                  <a href="XYZ"> Number of Divisors / Sum of Divisors </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Modular arithmetic </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Modular Inverse </a>
                </li>
                <li>
                  <a href="XYZ"> Linear Congruence Euation </a>
                </li>
                <li>
                  <a href="XYZ"> Chinese Remainder Theorem </a>
                </li>
                <li>
                  <a href="XYZ"> Factorial modulo p</a>
                </li>
                <li>
                  <a href="XYZ"> Discrete Log</a>
                </li>
                <li>
                  <a href="XYZ"> Primitive Root</a>
                </li>
                <li>
                  <a href="XYZ"> Discrete Root</a>
                </li>
                <li>
                  <a href="XYZ"> Montogomery Multiplication</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#number systems"> Number systems</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Balanced Ternary</a>
                </li>
                <li>
                  <a href="XYZ"> Gray Code</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Miscellaneous"> Miscellaneous </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Enumerating submasks of a bitmask </a>
                </li>
                <li>
                  <a href="XYZ"> Arbitrary-Precision Arithmetic</a>
                </li>
                <li>
                  <a href="XYZ"> Fast Fourier transform </a>
                </li>
                <li>
                  <a href="XYZ"> Operations on polynoials and series </a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
      <h4>Data Structures </h4>
      <div>
        <div className="Data-bar">
          <li>
            <a href="#Home"> Fundamentals </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Minimum Stack / Minimum Queue</a>
                </li>
                <li>
                  <a href="XYZ"> Sparse Table</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home">Trees</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Disjoint Set Union</a>
                </li>
                <li>
                  <a href="XYZ"> Fenwick Tree</a>
                </li>
                <li>
                  <a href="XYZ"> Sqrt Decomposition</a>
                </li>
                <li>
                  <a href="XYZ"> Segment Tree</a>
                </li>
                <li>
                  <a href="XYZ"> Treap</a>
                </li>
                <li>
                  <a href="XYZ"> Sqrt Tree</a>
                </li>
                <li>
                  <a href="XYZ"> Randomized Heap</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Advanced</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ">
                    {" "}
                    Deleting from a Data Structure in (T(n)log(n)){" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
      <h4> Dynamic Programming </h4>
      <div>
        <div className="DP-bar">
          <li>
            <a href="#Fundamen"> DP optimizations</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Divide and Conquer DP </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Tasks </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> DP on Broken profile. Problem "parquet".</a>
                </li>
                <li>
                  <a href="XYZ"> Finding the largest Zero submatrix</a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
      <h4> String </h4>
      <div>
        <div className="String-bar">
          <li>
            <a href="#Fundamen">Fundamentals</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> String Hashing</a>
                </li>
                <li>
                  <a href="XYZ"> Rabin-Karp for String Matching</a>
                </li>
                <li>
                  <a href="XYZ"> Prefix function-Knuth-Morris-Pratt (KMP)</a>
                </li>
                <li>
                  <a href="XYZ"> Z-Function </a>
                </li>
                <li>
                  <a href="XYZ"> Suffix Array </a>
                </li>
                <li>
                  <a href="XYZ"> Aho-Corasick algorithm</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Advanced </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Suffix Tree</a>
                </li>
                <li>
                  <a href="XYZ"> Suffix Automaton</a>
                </li>
                <li>
                  <a href="XYZ"> Lyndon Factorization</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Tasks </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Expression parsing </a>
                </li>
                <li>
                  <a href="XYZ">
                    {" "}
                    Manacher's Algorithm- Finding all subpalindrome in O(n)
                  </a>
                </li>
                <li>
                  <a href="XYZ"> Finding repetitions</a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
      <h4> Linear Algebra </h4>
      <div>
        <div className=" Linear-Alg-bar">
          <li>
            <a href="qwdqdm"> Matrices </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Gauss & System of Linear Equations </a>
                </li>
                <li>
                  <a href="XYZ"> Gauss & Determinant </a>
                </li>
                <li>
                  <a href="XYZ"> Kraut & Determinant </a>
                </li>
                <li>
                  <a href="XYZ"> Rank of Matrix</a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
      <h4> Algebra </h4>
      <div>
        <div className="combi-bar">
          <li>
            <a href="#Fundamen"> Fundamentals </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Finding power of Factorial Divisor </a>
                </li>
                <li>
                  <a href="XYZ"> Binomial Coefficients</a>
                </li>
                <li>
                  <a href="XYZ"> Catalan Numbers</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Techniques </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> The Inclusion-Exclusion Principle</a>
                </li>
                <li>
                  <a href="XYZ">Burnside's lemma</a>
                </li>
                <li>
                  <a href="XYZ"> Stars and Bars</a>
                </li>
                <li>
                  <a href="XYZ">
                    {" "}
                    Generating all <i>K</i>-combinations
                  </a>{" "}
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Tasks </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Placing Bishops on a chessboard</a>
                </li>
                <li>
                  <a href="XYZ"> Balanced bracket Sequences</a>
                </li>
                <li>
                  <a href="XYZ"> Counting labeled graphs</a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
      <h4> Numerical Methods </h4>
      <div>
        <div className="Numerical-bar ">
          <li>
            <a href="#Fundamen"> Search </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Ternary Search</a>
                </li>
                <li>
                  <a href="XYZ"> Newton's method for finding roots</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Integration </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Integration by Simpon's formula</a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
      <h4> Geometry</h4>
      <div>
        <div className="geometry-bar">
          <li>
            <a href="Element"> Elementary Operation</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Basic Geometry</a>
                </li>
                <li>
                  <a href="XYZ">
                    {" "}
                    Finding the equation of a line for a Segment
                  </a>
                </li>
                <li>
                  <a href="XYZ"> Intersection point of lines</a>
                </li>
                <li>
                  <a href="XYZ"> Check if two segments Intersect</a>
                </li>
                <li>
                  <a href="XYZ"> Circle-Line Intersection</a>
                </li>
                <li>
                  <a href="XYZ"> Circle-Circle Intersection</a>
                </li>
                <li>
                  <a href="XYZ"> Common tangents of two circles</a>
                </li>
                <li>
                  <a href="XYZ"> Length of the union of segments</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="polygons"> Polygons</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Oriented area of Triangle</a>
                </li>
                <li>
                  <a href="XYZ"> Area of simple polygon</a>
                </li>
                <li>
                  <a href="XYZ">
                    {" "}
                    Check if points belong to the convex polygon in O(log(N))
                  </a>
                </li>
                <li>
                  <a href="XYZ"> Minkowski sum of convex polygon</a>
                </li>
                <li>
                  <a href="XYZ"> Pick's Theorem-area of lattice polygon</a>
                </li>
                <li>
                  <a href="XYZ"> Lattice points of non-lattice polygon</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="Convex hull"> Convex hull</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ">
                    {" "}
                    Convex hull construction using Graham's Scan
                  </a>
                </li>
                <li>
                  <a href="XYZ"> Convex hull trick and Li chao Tree</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="sweep-line"> Sweep Line</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Search for a pair of intersecting segments</a>
                </li>
                <li>
                  <a href="XYZ"> Point location in O(log(N))</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="miscellaneous"> Miscellaneous</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Finding the nearest pair of points</a>
                </li>
                <li>
                  <a href="XYZ"> Delaunay traingulation and Voronoi diagram</a>
                </li>
                <li>
                  <a href="XYZ"> </a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
      <h4> Graph </h4>
      <div>
        <div className="graph-bar">
          <li>
            <a href="#Fundamen"> Graph Traversal </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Breadth First Search (BFS)</a>
                </li>
                <li>
                  <a href="XYZ"> Depth First Search (DFS)</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home">
              {" "}
              Conected components, Bridges, Articulations point{" "}
            </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ">Finding connected components </a>
                </li>
                <li>
                  <a href="XYZ">Finding Bridges in O(N+M)</a>
                </li>
                <li>
                  <a href="XYZ">FInding Bridges online</a>
                </li>
                <li>
                  <a href="XYZ">Finding Articulation Points in O(N+M)</a>
                </li>
                <li>
                  <a href="XYZ">
                    Strongly connected components and condensation Graph
                  </a>
                </li>
                <li>
                  <a href="XYZ"> Strong Orientation</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Single-source shortest paths </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ">
                    {" "}
                    Dijkstra- Finding shortest paths form given vertex
                  </a>
                </li>
                <li>
                  <a href="XYZ"> Dijkstra on Sparse graohs</a>
                </li>
                <li>
                  <a href="XYZ"> Bellaman-Ford Algorithm</a>
                </li>
                <li>
                  <a href="XYZ"> 0-1 BFS</a>
                </li>
                <li>
                  <a href="XYZ"> D'Esopo-Pape algorithm</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> All-pairs shortest paths </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Floyd-Warshall -Finding all shortest path</a>
                </li>
                <li>
                  <a href="XYZ">
                    {" "}
                    Number of paths of fixed length /shortestpaths of fixed
                    length
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#number systems"> Spanning Trees</a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Prim's Algorithm </a>
                </li>
                <li>
                  <a href="XYZ"> Kruskal</a>
                </li>
                <li>
                  <a href="XYZ"> Kruskal and Lowest common Ancestor</a>
                </li>
                <li>
                  <a href="XYZ"> Krichoff Theorem</a>
                </li>
                <li>
                  <a href="XYZ"> Prfuer Code</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Miscellaneous"> Cycles </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ">
                    {" "}
                    Checking a graph for acyclicity and finding a cycle in O(M)
                  </a>
                </li>
                <li>
                  <a href="XYZ"> Finding a negative Cycle in the graph</a>
                </li>
                <li>
                  <a href="XYZ"> Eulerian Path</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#lowest"> Lowest coon ancestor(LCA) </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> LCA</a>
                </li>
                <li>
                  <a href="XYZ"> Binary Lifting</a>
                </li>
                <li>
                  <a href="XYZ"> Farach-Colton and Bender algorithm</a>
                </li>
                <li>
                  <a href="XYZ"> Solve RMQ by finding LCA</a>
                </li>
                <li>
                  <a href="XYZ"> Tarjan's off-line algorithm</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            {" "}
            <a href="#flows"> Flows and related problems </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Maxium Flow-Ford-Fulkerson and Edmonds-Karp</a>
                </li>
                <li>
                  <a href="XYZ"> Push-relabel algorithm</a>
                </li>
                <li>
                  <a href="XYZ"> Push-relabel algorithm improved</a>
                </li>
                <li>
                  <a href="XYZ"> Dinic's algorithm</a>
                </li>
                <li>
                  <a href="XYZ"> MPM Algorithm</a>
                </li>
                <li>
                  <a href="XYZ"> Minium -Cost Flow</a>
                </li>
                <li>
                  <a href="XYZ">
                    {" "}
                    Assignment problem. Solution using min-cost flowin O(N^5)
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            {" "}
            <a href="matching"> Matchings and related problems </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Biparite Graph Check</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#miscell"> Miscellaneous </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ">Topological Sorting</a>
                </li>
                <li>
                  <a href="XYZ"> Edge connectivity/Vertes connectivity</a>
                </li>
                <li>
                  <a href="XYZ"> Tree Pianting </a>
                </li>
                <li>
                  <a href="XYZ"> 2-SAT</a>
                </li>
                <li>
                  <a href="XYZ"> Heavy-light Decomposition</a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
      <h4> Miscellaneous </h4>
      <div>
        <div className="misscell-bar">
          <li>
            <a href="#Fundamen"> Sequences </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> RMQ Tasks </a>
                </li>
                <li>
                  <a href="XYZ"> Longest Incresing subsequence</a>
                </li>
                <li>
                  <a href="XYZ">
                    {" "}
                    Search the subsegment with the maximum / minimum sum
                  </a>
                </li>
                <li>
                  <a href="XYZ"> K-th order statistic in O(N)</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Game theory </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Games on arbitrary graphs</a>
                </li>
                <li>
                  <a href="XYZ"> Spargue-Grundy theorem. Nim</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Schedules </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Scheduling jobs on the machine</a>
                </li>
                <li>
                  <a href="XYZ"> Scheduling jobs on two machines</a>
                </li>
                <li>
                  <a href="XYZ">
                    {" "}
                    Optimal schedule of jobs given their deadlines and durations
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#Home"> Miscellaneous </a>
            <div className="submenu-01">
              <ul>
                <li>
                  <a href="XYZ"> Josephus problem</a>
                </li>
                <li>
                  <a href="XYZ"> 15 puzzle game: Existance of the Solution</a>
                </li>
                <li>
                  <a href="XYZ"> The stern-Brocot Tree and Farey Sequences</a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

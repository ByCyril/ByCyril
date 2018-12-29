import React from "react";
import "../styles/navigation.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./about";
import Projects from "./projects";

function Navigation() {
  return (
    <div class="sidenav">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
}

// function Navigation() {
//   //   <div class="sidenav">
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         {/* <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} /> */}
//       </div>
//     </Router>
//   );

//   {
//     /* </div> */
//   }
// }

export default Navigation;

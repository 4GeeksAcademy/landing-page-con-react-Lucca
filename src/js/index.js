//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import '../styles/navbar.css';
import '../styles/card.css';

//import your own components
import Home from "./component/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import Card from "./component/Card.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

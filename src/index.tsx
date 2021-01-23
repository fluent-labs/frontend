import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

import Reader from "./components/Reader/Reader";

// Environment detection
// let apiUrl = "https://api.foreignlanguagereader.com/api/";
// if (window.location.hostname === "localhost") {
//   apiUrl = "http://localhost:8000/api/";
// }

ReactDOM.render(<Reader />, document.getElementById("root"));

//1. Create a new React app.
import React from "react";
import { createRoot } from "react-dom/client";
//2. Create a App.jsx component.

import App from "./components/App.jsx";
//Code fix since the use of react-dom is not supported in React 18
const domNode = document.getElementById("root")
const root = createRoot(domNode);

root.render(
  <App />
);



//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

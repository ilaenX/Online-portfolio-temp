import React from "react";
import {createRoot} from "react-dom/client";
import App from './App'
import './index.css'
// import cre

const reactRoot = createRoot(document.getElementById("root"));
reactRoot.render(<App />);
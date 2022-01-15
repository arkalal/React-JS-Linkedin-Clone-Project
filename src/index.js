import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css"
import store from './reduxStore/store'

reactDom.render
    (<Provider store={{ store }}>
        <App></App>
    </Provider>,
        document.getElementById("root"))
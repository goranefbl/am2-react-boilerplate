import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

const Index = () => {
    return <div>Hello React!</div>;
}
ReactDOM.render(<Index />, document.getElementById("index"));

if (module.hot) {
    module.hot.accept();
}
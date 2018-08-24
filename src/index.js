import React from 'react';
import ReactDOM from 'react-dom';

const Index = (
    <div>
        <h1>Hello React!</h1>
        <h3>evoa aksd</h3>
        <p>nest</p>
    </div>
);
ReactDOM.render(Index, document.getElementById('index'));

if (module.hot) {
    module.hot.accept();
}

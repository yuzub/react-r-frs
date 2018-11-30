import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './Hello';
// import Card from './Card';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { kittens } from './kittens';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello greeting={'Hello' + 'React Ninja'} />, document.getElementById('root'));
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
ReactDOM.render(<CardList kittens={kittens} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

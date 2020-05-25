var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./components/NavBar.jsx');
var ListsManager = require('./components/ListsManager.jsx');

ReactDOM.render(<Navbar title="navigation" />, document.getElementById('nav')); 
ReactDOM.render(<ListsManager title="Ingridients" />, document.getElementById('ingredients')); 


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// import TextForm from './TextForm.jsx';
// import TextFieldControl from './TextFieldControl.jsx';
import IFADashBoard from './IFADashBoard.jsx';
import Navbar from './navbar.jsx';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

const element = <App />;

//<div><div><Navbar agentId="IFA00001" agentName="Prasad"/></div><main className="container"><IFADashBoard agentId="IFA00001"/></main></div>; 

// <div>IFADashBoard agentId="IFA00001"/></div>;


ReactDOM.render(
element, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

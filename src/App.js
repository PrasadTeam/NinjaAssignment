import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IFADashBoard from './IFADashBoard.jsx';
import Navbar from './navbar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div><Navbar agentId="IFA001" agentName="Prasad"/></div>
        <main className="container"><IFADashBoard agentId="IFA001"/></main>
      </div>
    );
  }
}

export default App;

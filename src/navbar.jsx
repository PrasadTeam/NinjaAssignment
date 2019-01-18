import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Navbar extends Component{

   render()
   {
     console.log(this.props); 
     return (<nav className="navbar navbra-light bg-light">
       <a className="navbar-nav" href="#">Welcome to Dashboard again {this.props.agentName}. Your Advisor Id is {this.props.agentId}</a>
     </nav>
     )
   }
}

export default Navbar;

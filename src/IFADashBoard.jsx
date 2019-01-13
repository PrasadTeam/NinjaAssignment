import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Policy from './policy';

class IFADashBoard extends Component
{
   
   state = { agentId:this.props.agentId, 
             agentName:'Prasad', 
             policies : [
              //  { policyNumber:'11111',firstName: 'Prasad', lastName:'Rao', dob:'06/11/1979',status:'inforce',keyInDate:'10/12/2018',
              //    address: {} 
              //  }, 
              //  { policyNumber:'020304',firstName: 'Rohini', lastName:'Padma Priya', dob:'02/03/2013',status:'inforce4',keyInDate:'12/01/2019'},  
              //  { policyNumber:'020305',firstName: 'parimala', lastName:'mamidi', dob:'02/03/1982',status:'inforce4',keyInDate:'12/01/2019'}  
              ]
           };

    constructor(props)
    {
          super(props);
    }

    
   render()
   {
     // add different style based on status
   return (
              <div>
                    {this.renderPolicies()}
                    {this.state.policies.length === 0 && "Please Create New Policies"}
              </div> 
          );
   }


   renderPolicies()
   {
       if(this.state.policies.length === 0) return <p>No Policies available !!</p>;
       return (
        <table className="table">
        <tbody>
      
        <tr> 
            <th>Policy Id </th>
            <th>First Name </th>
            <th>Last Name </th>
            <th>DOB </th>
            <th>Date of Inception </th>
            <th>Status </th>
        </tr>
        {this.state.policies.map(
         policy => <Policy key={policy.policyNumber} policy={policy} />)
        }
        
       </tbody>         
       </table>
      );  

   }

   componentDidMount()
   {
      console.log("mounted");

      // Handle Error

      let res = fetch('http://localhost:9080/fetchIFADetails', {
        method: 'post',
        body: JSON.stringify({'agentId' : this.props.agentId}),
        headers: {Accept: "application/json", 'Content-Type' : 'application/json','Access-Control-Allow-Origin': '*'}
       }).then(response => {return response.json();}).then(data => this.setState(data));   //

   }


  }


export default IFADashBoard;
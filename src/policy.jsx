import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Policy extends Component{
  

    state = { 
                 policyNumber:this.props.policy.policyNumber,
                 firstName: this.props.policy.firstName, 
                 lastName:this.props.policy.lastName, 
                 dob:this.props.policy.dob,
                 status:this.props.policy.status,
                 keyInDate:this.props.policy.keyInDate, 
                 address : {
                      street:'street1',
                      doornum:'233',
                      city:'ii',
                      country:'UK',
                      postcode:'EH112HG'    
                 },
                 showFulldetails:'N'
           };


    constructor(props)
    {
        super(props);

        this.state.firstName = this.props.policy.firstName;
        this.state.policyNumber = this.props.policy.policyNumber;
        this.state.status = this.props.policy.status;
    }

    render()
    {
       return (

       <tr key={this.state.policyNumber}> 
                <td> <span className="badge badge-primary">{this.state.policyNumber} </span> </td>
                <td style={{fontWeight : 'bold'}}> {this.state.firstName} </td>
                <td> {this.state.lastName} </td>
                <td> {this.state.dob} </td>
                <td> {this.state.keyInDate} </td>
                <td style={this.getStyle()}> {this.state.status} </td> 
                <td> <button onClick={() => this.handleToggle()} className="btn btn-secondary btn-sm">Toggle Details</button></td>             
        </tr>
        
        );
    }


    getStyle()
    {
         let style = (this.state.status == "inforce") ? {fontWeight:'bold'} : {};
         return style;  
    }

    
    handleToggle = () => {
    
        if(this.state.showFulldetails == 'Y') 
        {
        this.state.showFulldetails = 'N';
        }
        else{
         this.state.showFulldetails = 'Y';
        }
        this.setState({showFulldetails : this.state.showFulldetails} );
    };

    renderDetails()
    {
         if(this.state.showFulldetails === 'N') return <p>Click Toggle Details for full details</p>;
         return (<p className="text-warning" >{this.state.address.doornum} '-' {this.state.address.postcode} </p>);
    }

}

export default Policy;
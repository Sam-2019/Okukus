import React, {Component} from 'react';

function formDate() {
    return     <div class="container col-md-6" 
    style={{ padding: '1em 6em 0em 6em'}}>   
    <div class="alert alert-success" 
    role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p class="mb-0">Aww yeah, you have successfully signup for the Polling App.<br />
    Below are your log in details</p>
    </div>
    </div>;
    }

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    this.handleSubmit = this.handleSubmit.bind(this);    
    }

    handleSubmit() {
        alert('Have a lonely night');} 

    render() {
    return (
   <div>
 <input type="submit"
    onClick={this.handleSubmit}/>

   </div>

)
}
}

export default Show;
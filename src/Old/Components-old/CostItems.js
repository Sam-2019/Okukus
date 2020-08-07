import React, {Component} from 'react';

const user = {
    currentTime: new Date(),
    details: {
        fName: 'Elon',
        lName: 'Musk',
        email: 'ElonMusk@gmail.com',
        pWord: 'PayPalMafia',
        cpWord: 'PayPalMafia',}
    };
    

    class CostItem extends Component {
        render() {
   
        return (
            <div>
<h3>{(user.details.fName + ' ' + user.details.lName)}</h3>
<h3>{(user.details.email)}</h3>
</div>  
        );
        }
        }

export default CostItem;
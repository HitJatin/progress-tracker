import React from 'react';
const Dat = (props) => {
  var today = new Date();
  var month=today.toLocaleString('default', { month: 'long' });
  var date = today.getDate();
  var year = today.getFullYear();

    return (<div className="Date" >
       {date+" "+ month +", "+year}
</div>);
}

export default Dat;
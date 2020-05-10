import React, {useState} from 'react';

function FormInput() {

    const [firstName, setFirstName] = useState("Default-Firstname");
    const [lastName, setLastName] = useState("Default-Lastname");
  
  
    return (
     <React.Fragment>
       <form>
         <div>
           <label>FirstName</label>
           <input value={firstName} onChange={event => setFirstName(event.target.value)} type="text" />
         </div>
  
         <div>
           <label>LastName</label>
           <input value={lastName} onChange={event => setLastName(event.target.value)} type="text" />
         </div>
       </form>
  
       <h1>Your FullName is {firstName+"-"+lastName}</h1>
     </React.Fragment>
    )
  }
  
  export default FormInput
  
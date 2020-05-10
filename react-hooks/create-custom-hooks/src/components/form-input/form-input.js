import React, {useState} from 'react';
import useInput from './hooks/useInput';

function FormInput() {
    const [firstName, bindFirstNameData, resetFirstName] = useInput('');
    const [lastName, bindLastNameData, resetLastName] = useInput('');
  

    const handleSubmit = (event) => {
      console.log(event.target.value);
      event.preventDefault();
      resetFirstName();
      resetLastName()
    }

    return (
     <React.Fragment>
       <form onSubmit={handleSubmit}>
         <div>
           <label>FirstName</label>
           <input type="text" 
            {
              ...bindFirstNameData
            }
           />
         </div>
  
         <div>
           <label>LastName</label>
           <input type="text" 
             {
              ...bindLastNameData
             }
           />
         </div>

         <button type="submit">Submit</button>
       </form>

       {
         (firstName && lastName) &&
         <h1>Your FullName is {firstName+"-"+lastName}</h1>
       }
  
     </React.Fragment>
    )
  }
  
  export default FormInput
  
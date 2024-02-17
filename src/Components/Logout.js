import React from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom';

function Logout() {
    const history = useHistory();
    const handleLogout = async()=>{
        

    const res = await fetch(`https://node-task04-back-end.vercel.app/users/logout`, {
        method :"GET",
        headers:{
            "Content-Type":"application/json",
            
        }
   });
   const data = await res.json();
   console.log(data)

   localStorage.clear()
 
   history.push("/login")
    
   }
  return (
    <div>
        <Base
        title={"Logout page"}
        description={"want to signout here..!"}
        >
         <h3>WELCOME BACK..!</h3>

         <button type='submit' onClick={handleLogout}>Logout</button><br></br>

         
        </Base>
    </div>
  )
}

export default Logout
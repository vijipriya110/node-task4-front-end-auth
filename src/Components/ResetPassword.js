import React, { useState } from 'react'
// import React, { useState } from 'react'
import Base from '../Base/Base';

function ResetPassword() {

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [confirmPassword, setConfirmPassword] = useState("")
    
//  const history = useHistory();

   const handleLogin = async()=>{
    const userInfo = {
        email,
        password,
        confirmPassword
    }

    const res = await fetch(`https://node-task04-back-end.vercel.app/users/resetpassword`, {
    method :"POST",
    body : JSON.stringify(userInfo),
    headers:{
        "Content-Type":"application/json",
        "x-auth-token" : localStorage.getItem("OTP")
    }
   });
   const data = await res.json();
   console.log(data)
   
    // localStorage.setItem("token", data.token)
    // localStorage.removeItem("")
  //   console.log(data.token)
  //  console.log(userInfo)
    // history.push("/students")
    
   }

  return (
    <div>
       <Base
       title = {"resetPage"}
       description={"continue to login page"}
       >
        <h3>WELCOME BACK..!</h3>
        <div className="us-container">
        <div className="img">
          <img src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" alt="Login"/>
        </div>
        <div className="user">
       <input
        placeholder='Enter Email'
        type ="Email"
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
        /><br></br>
        
        <input
        placeholder='Enter Password'
        type ="password"
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br></br>

        <input
        placeholder='Enter Password confirm password'
        type ="password"
        value = {confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)}
        /><br></br>
        
        <button type='submit' onClick={handleLogin}>Login</button><br></br>

        {/* <button onClick={()=>history.push("/forgotpassword")}>Forget Password?</button><br/><br/> */}

        </div>
        </div>


       </Base>
        

        
       
        
    </div>
  )
}

export default ResetPassword
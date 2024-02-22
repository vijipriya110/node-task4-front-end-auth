import Base from '../Base/Base';
import { useHistory } from 'react-router-dom';

function ResetPassword({email,setEmail,password,setPassword,confirmPassword,setConfirmPassword}) {
  
 const history = useHistory();

   const handleLogin = async()=>{
    const userInfo = {
        email,
        password,
        confirmPassword
    }

    const res = await fetch(`https://node-task04-back-end.vercel.app/users/reset-new-password/:token/:id`, {
    method :"POST",
    body : JSON.stringify(userInfo),
    headers:{
        "Content-Type":"application/json",
        "x-auth-token" : localStorage.getItem("OTP")
    }
   });
   const data = await res.json();
   console.log(data)
   history.push("/login")
        
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
        
        <button type='submit' onClick={handleLogin}>Submit</button><br></br>

        </div>
        </div>

       </Base>
      
    </div>
  )
}

export default ResetPassword
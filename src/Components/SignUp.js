import React,{ useState } from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";


function SignUp(){
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()


  const handleSignup = async()=>{
    const userInfo = {
      username,
      email,
      password

    }
  const response = await fetch("https://node-task04-back-end.vercel.app/users/signup", {
  method:"POST",
  body:JSON.stringify(userInfo),
  headers :{
    "Content-Type":"application/json"
  },
})
const data = await response.json()
console.log(data)
  // setTeachers([...teachers, data])
  history.push("/login")

  }
    
  return(
    <Base
    title={"User Register"}
    discription={"Here can register the users"}
    >
    <div className="App">
      <h3>WELCOME BACK..!</h3>
      <div className="us-container">
        
        <div className="img">
          <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702944000&semt=ais" alt="Signup"/>
        </div>
        <div className="user">
       <input
        placeholder='Enter User Name'
        type ="text"
        value = {username}
        onChange={(e)=>setUsername(e.target.value)}
        /><br></br>
        
        <input
        placeholder='Enter Email'
        type ="email"
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
        /><br></br>

<input
        placeholder='Enter Password'
        type ="password"
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br></br>
        
        <button type='submit' onClick={handleSignup}>Register</button><br></br>

        <button>Already have account?sing in</button><br/><br/>

         </div>

      </div>
    </div>

    </Base>
      )
}

export default SignUp
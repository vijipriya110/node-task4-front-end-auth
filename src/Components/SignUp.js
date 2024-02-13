import React,{} from "react";

// import { Button } from "bootstrap";
import Base from "../Base/Base";


function SignUp(){
    
  return(
    <Base
    title={"SignUp"}
    discription={"SignUp page"}
    >
    <div className="App">
      <h3>WELCOME BACK..!</h3>
      <div className="us-container">
        
        <div className="img">
          <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702944000&semt=ais" alt="Signup"/>
        </div>
        <div className="user">
          <div>
            <h4>Create An Account</h4>
            <label for="name"><b>Firstname</b></label><br/>
            <input type="text" name="Email" id="name"className="input" /><br/>
            <label for="name"><b>Lastname</b></label><br/>
            <input type="text" name="Email" id="name"className="input" /><br/>
          <label for="Email"><b>Email</b></label><br/>
          <input type="Email" name="Email" id="Email"className="input" placeholder="abc@gmail.com"/><br/>
          <label for="Pass" ><b> Create Password</b></label><br/>
          <input type="Password" name="Password" id="Pass" className="input" /><br/>
          <label for="Pass" ><b> Re-Enter Password</b></label><br/>
          <input type="Password" name="Password" id="Pass" className="input" /><br/><br/>
          <button className="input"><b>Register</b></button><br/><br/>

          
          
          <button>Already have an account? Login!</button>
          </div>
          
        </div>

      </div>
    </div>

    </Base>
      )
}

export default SignUp

import { Switch,Route } from 'react-router-dom';
import './App.css';
// import Base from './Base/Base'
import Students from './Components/Students.js';
import AddStudents from './Components/AddStudents';
import UpdateStudents from './Components/UpdateStudents';
// import data from './Data/data';
import { useEffect, useState } from 'react';
// import Nopage from './Components/Nopage';
import DashBoard from './Components/DashBoard';
import { Redirect } from 'react-router-dom';
import Teachers from './Components/Teachers.js';
import AddTeachers from './Components/AddTeachers.js';
import UpdateTeachers from './Components/UpdateTeachers.js';
import LoginPage from './Components/LoginPage.js';
import SignUp from './Components/SignUp.js';
// import { useHistory } from 'react-router-dom';

function App() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  // const history = useHistory();

  useEffect(()=>{
    const getStudents = async () =>{
        const response = await fetch(`https://node-task04-back-end.vercel.app/students/all`, {
          method:"GET",
          headers : {
            "x-auth-token" : localStorage.getItem("token")
          }
        }); 
        const data = await response.json();
        // console.log(data)
          setStudents(data.data)
        }
        getStudents();   
    
  }, [] )

  useEffect(()=>{
    const getTeachers = async () =>{
        const response = await fetch("https://node-task04-back-end.vercel.app/mentors/all", {
          method:"GET",
        }); 
        const data = await response.json();
        if(data){
          setTeachers(data.data)
        }
    }
    getTeachers();
    
  }, [])


  return (
    <div className="App">
       <Switch>
        {/* Exact path first page to load */}
         <Route exact path="/">
             <DashBoard/>
         </Route>

          <Route path="/students">
            <Students
            students = {students}
            setStudents ={setStudents}
            />
          </Route>

          <Route path="/teachers">
            <Teachers
            teachers = {teachers}
            setTeachers ={setTeachers}
            />
          </Route>

          <Route path="/details">
             <Redirect to ="/students"/>
          </Route>

         <Route path="/add">
            <AddStudents
            students = {students}
            setStudents ={setStudents}
            />
         </Route>

         <Route path="/addnew">
            <AddTeachers
            teachers = {teachers}
            setTeachers = {setTeachers}
            />
         </Route>

         <Route path="/edit/:id">
            <UpdateStudents
              students = {students}
              setStudents ={setStudents}
            />
         </Route>

         <Route path="/editt/:id">
            <UpdateTeachers
              teachers = {teachers}
              setTeachers ={setTeachers}
            />
         </Route>

          <Route path="/login">
              <LoginPage/>
          </Route>
          <Route path="/signup">
              <SignUp/>
          </Route>

       </Switch>
    </div>
  );
}

export default App;
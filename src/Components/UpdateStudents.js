import { useParams } from 'react-router-dom'
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'
import { useFormik } from 'formik'

const feildValidationShema = yup.object({
  name : yup.string().required("Please Enter the Student name"),
  batch : yup.string().min(5).required("Please enter the batch name"),
  gender : yup.string().required("Please spcify the gender"),
  qualification : yup.string().required("please enter the qualification"),


}) 

function UpdateStudents({students, setStudents}) {
    const {id} = useParams();

    const stud = students.find(stud => stud._id === id);
    
    const history = useHistory();

    const {handleSubmit,handleChange,values,handleBlur,touched,errors} = useFormik({
      initialValues : {
        name : (stud.name),
        batch : (stud.batch),
        gender : (stud.gender),
        qualification : (stud.qualification),
  
      },
      validationSchema : feildValidationShema,
      onSubmit : (studData)=>{
        // console.log("onsubmit");
        updateStudent(studData);
      },
    })


    async function updateStudent (updatedObject){
     const response = await fetch(`https://node-task04-back-end-v67f.vercel.app/students/edit/${stud._id}`, {
      method:"PUT",
      body:JSON.stringify(updatedObject),
      headers:{
        "Content-Type":"application/json",
        "x-auth-token" : localStorage.getItem("token")
      }
     })

     const data = await response.json()
     console.log(data)
     const studIndex = students.findIndex((stud)=>stud._id === id);
     if(data){
         console.log(updatedObject)
         students[studIndex] = updatedObject;
         setStudents([...students])
         history.push("/students/all")
     }
    }

  return (
    <Base
    title={"Edit a Student data"}
    description={"Edit Students data is here"}
    >
    <div>
    <form onSubmit={handleSubmit}>
    <input
        placeholder='Enter Name'
        name = "name"
        type ="name"
        onBlur={handleBlur}
        value = {values.name}
        onChange={handleChange}
        />
        

        <div style={{color:"crimson"}}>{errors.name? errors.name : ""}</div>
        <br></br>
        <input
        placeholder='Enter Batch'
        name = "batch"
        type ="batch"
        onBlur={handleBlur}
        value ={values.batch}
        onChange={handleChange}
        />

        <div style={{color:"crimson"}}>{touched.batch && errors.batch? errors.batch : ""}</div>  

        <br></br>
        <input
        placeholder='Enter Gender'
        name = "gender"
        type ="gender" 
        onBlur={handleBlur}
        value ={values.gender}
        onChange={handleChange}
        />

        <div style={{color:"crimson"}}>{touched.gender && errors.gender? errors.gender : ""}</div>

        <br></br>

        <input
        placeholder='Enter Qualification'
        name = "qualification"
        type ="qualification"
        onBlur={handleBlur}
        value= {values.qualification}
        onChange={handleChange}
        />

        <div style={{color:"crimson"}}>{touched.qualification && errors.qualification? errors.qualification : ""}</div>

        <br></br>
    <button
    // onClick={updateStudent}
    type="onSubmit"
    >Update Students</button>
    </form>
</div>
</Base>
  )
}

export default UpdateStudents
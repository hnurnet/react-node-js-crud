import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [student,setStudent] = useState({
    name: '',email: '',contact: null
  });
  const handleChange = (e) => {
    setStudent(prev => ({...prev,[e.target.name]: e.target.value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8800/api/students/post", student)
    navigate("/")

   
    
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <form className="form">
      <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Name" className="form-control" onChange={handleChange} name="name"/>
            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter Email" className="form-control" onChange={handleChange} name="email"/>
            </div>
            <div className="mb-2">
                <label htmlFor="">Contact</label>
                <input type="number" placeholder="Enter Contact" className="form-control" onChange={handleChange} name="contact"/>
            </div>
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
      
    </div>
   </div>
  )
}

export default Create
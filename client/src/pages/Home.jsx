import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import {Link} from "react-router-dom";

function Home() {
  
    const [student, setStudent] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8800/api/students")
        .then(res => {
            console.log(res)
            setStudent(res.data)
        })
        .then(err => console.log(err))
    
    }, []);
    const handleDelete = (id) => {
      axios.delete("http://localhost:8800/api/students/delete/"+ id)
      .then(res => {
       
        window.location.reload();
        
      })
      .catch(err => console.log(err))

    }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-70 bg-white rounded p-3">
      
        <h2 className={`text-capitalize h1 mb-4 w-100 text-center`}>
          Student List
        </h2>
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">Create+</Link>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>No:</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {student.map((student,index) => 
                <tr key={index+1}>
                  <th>{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.contact}</td>
                  <td>
                    <Link to={`/read/${student.id}`} className="btn btn-sm btn-info me-2">Read</Link>
                    <Link to = {`/edit/${student.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                    <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(student.id)}>Delete</button>
                  </td>

                </tr>
                )}

            </tbody>

        </table>
      </div>
    </div>
  );
}

export default Home;

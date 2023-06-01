import React,{useEffect,useState} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";

function Update() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [contact,setContact] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8800/api/students/"+id)
    .then(res => {
      setName(res.data[0].name);
      setEmail(res.data[0].email);
      setContact(res.data[0].contact);
    })
    .catch(err => console.log(err))
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8800/api/students/update/"+id,{name,email,contact})
    .then(res => {
      if(res.data.updated){
        navigate("/")
      } else {
        alert("Not updated!");
      }
    })
  }
     

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <form onSubmit={handleSubmit} className="form">
        <h2>Updtae Student</h2>
      <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Name" className="form-control" value={name} 
                onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter Email" className="form-control" value={email} 
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="mb-2">
                <label htmlFor="">Contact</label>
                <input type="number" placeholder="Enter Contact" className="form-control" value={contact} 
                onChange={e => setContact(e.target.value)}/>
            </div>
  <button type="submit" class="btn btn-success">Update</button>
</form>
      
    </div>
   </div>
  )
}

export default Update
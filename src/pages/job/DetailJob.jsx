
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from "timeago.js";



import './SeeJobs.css'
export default function DetailJob(route) {
    const navigate = useNavigate();
    const {state} = useLocation();
    const { job } =state;
    const contractor=JSON.parse(localStorage.getItem('contractor'));
    console.log("check")
    const [contractors, setContractors] = useState({})
    const [data,setData]=useState([]);
    const handleMessage=async(receiverId)=>{
        // console.log(user.data._id)
        const body = {
        "senderId":contractor.data._id,
        "receiverId":receiverId
        };
        try {
          const res = await axios.post("http://localhost:6969/conversations/",body);
          navigate('/messenger',{state:{curCon:res}})
          
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <div style={{padding:20}}>
            <div className=''>
                                <h1>{job.title}</h1>
                                <img src={`http://localhost:6969/img/job/${job.coverImage}`} alt="propal.com"className='imgTag'></img>
                                <p>Type:{job.types}</p>
                                <h5>Contact:{job.phoneNumber}</h5>
                                <p><b>{format(job.createdAt)}</b></p>
                                <h5>City: {job.city}</h5>
                                <h5>Address: {job.address}</h5>
                                <h5>Price: {job.price}</h5>
                                <button onClick={()=>handleMessage(job.postedBy)} >Message Job Owner</button>
                            </div>
        </div>
    )
}
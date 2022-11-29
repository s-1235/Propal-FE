
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from "timeago.js";



import './FindContractors.css'
export default function Detail(route) {
    const navigate = useNavigate();
    const {state} = useLocation();
    const { gig } =state;
    const user=JSON.parse(localStorage.getItem('user'));
    console.log(gig)
    console.log("check")
    const [contractors, setContractors] = useState({})
    const [data,setData]=useState([]);
    const handleMessage=async(receiverId)=>{
        // console.log(user.data._id)
        const body = {
        "senderId":user.data._id,
        "receiverId":receiverId
        };
        try {
          const res = await axios.post("http://localhost:6969/conversations/",body);
          navigate('/messenger',{state:{curCon:res}})
          
        } catch (err) {
          console.log(err);
        }
      };
    
    const [text,setText]=useState("");
    const inputHandler=(e)=>{
        setText(e.target.value)
    }
    return (
        <div style={{padding:20}}>
            <div className=''>
                                <h1>{gig.title}</h1>
                                <img src={`http://localhost:6969/img/gigs/${gig.coverImage}`} alt="W3Schools.com"className='imgTag'></img>
                                <p>Type:{gig.types}</p>
                                <p>Typically Charges for 5 marla single:<b> RS {gig.typicallyCharge}</b></p>
                                <h5>Contact:{gig.phoneNumber}</h5>
                                <p><b>{format(gig.createdAt)}</b></p>
                                <h5>City: {gig.city}</h5>
                                <h5>Address: {gig.address}</h5>
                                <h5>Price: {gig.price}</h5>
                                <button onClick={()=>handleMessage(gig.postedBy)} >Message Contractor</button>
                            </div>
        </div>
    )
}
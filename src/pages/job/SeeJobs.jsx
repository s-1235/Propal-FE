
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from "timeago.js";



import './SeeJobs.css'
export default function SeeJobs() {
    const navigate = useNavigate();
    console.log("check")
    const [contractors, setContractors] = useState({})
    const [data,setData]=useState([]);
    const callFunc=async()=>{
        console.log(text)
        if(text==""){
            text="all";
        }
        try {
            const response = await axios({
              method: "get",
              url: "http://localhost:6969/job/search/"+text,
            });
            console.log(response)
            if (response.status==201){
                setData(response.data.data.job)
            }
            else{
                console.log("error")
            }
          } catch(error) {
            console.log(error)
          }

    }
    var [text,setText]=useState("");
    const inputHandler=(e)=>{
        setText(e.target.value)
    }
    return (
        <div className="main" >
            <h3>Search For Jobs</h3>
                <input type="text" name="name" style={{padding:10 , borderRadius:10,width:500}} onChange={inputHandler} />
                <div>
                    <h5>Keyword Only do not use space.</h5>
                <button onClick={callFunc}>Find</button>
                </div>
                <div style={{width:"100%"}}>
                    {
                        data.map((element)=>(
                            <div className='gigInternal' onClick={()=>navigate('/detailJob',{state:{job:element}})}>
                                <h1>{element.title}</h1>
                                <img src={`http://localhost:6969/img/job/${element.coverImage}`} alt=""className='imgTag'></img>
                                <p>Type:{element.types}</p>
                                <p>Price:<b> RS {element.price}</b></p>
                                <h5>Contact:{element.phoneNumber}</h5>
                                <p><b>{format(element.createdAt)}</b></p>

                            </div>
                        ))
                    }
                </div>
            </div>
    )
}
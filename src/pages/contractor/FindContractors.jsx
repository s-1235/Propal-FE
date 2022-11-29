
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from "timeago.js";



import './FindContractors.css'
export default function FindContractor() {
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
              url: "http://localhost:6969/gig/search/"+text,
            });
            console.log(response)
            if (response.status==201){
                setData(response.data.data.gig)
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
            <h3>Search For Gigs</h3>
                <input type="text" name="name" style={{padding:10 , borderRadius:10,width:500}} onChange={inputHandler} />
                <div>
                    <h5>Keyword Only do not use space.</h5>
                <button onClick={callFunc}>Search</button>
                </div>
                <div style={{width:"100%"}}>
                    {
                        data.map((element)=>(
                            <div className='gigInternal' onClick={()=>navigate('/detail',{state:{gig:element}})}>
                                <h1>{element.title}</h1>
                                <img src={`http://localhost:6969/img/gigs/${element.coverImage}`} alt="W3Schools.com"className='imgTag'></img>
                                <p>Type:{element.types}</p>
                                <p>Typically Charges for 5 marla single:<b> RS {element.typicallyCharge}</b></p>
                                <h5>Contact:{element.phoneNumber}</h5>
                                <p><b>{format(element.createdAt)}</b></p>

                            </div>
                        ))
                    }
                </div>
            </div>
    )
}
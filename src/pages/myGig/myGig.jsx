import "./myGig.css";
import { Divider } from "@mui/material";
import { format } from "timeago.js";

export default function MyGig() {
  const contractor = JSON.parse(localStorage.getItem("contractor"));

  return (
    <div className="card">
      <h1>My Gigs</h1>
      {contractor.data.gigs.map((gig) => (
        <div className="top">
          <h2>{gig.title}</h2>
          <div className="conta">
            <div
              style={{
                backgroundImage: `url(http://localhost:6969/img/gigs/${gig.coverImage})`,
              }}
              className="inner"
            ></div>
            <div className="des">
              <h4>Type:{gig.types}</h4>
              <p>Description:{gig.description}</p>
              <p>Price:{gig.typicallyCharge}</p>
              <p>Price Negotiable:{gig.price}</p>
              <p>Time:{format(gig.createdAt)}</p>
              <p>City:{gig.city}</p>
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
}

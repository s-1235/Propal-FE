import { Box, Typography, Container, Paper, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import PropertyCollage from "../../components/collage/property-collage.component";
import { Link, useNavigate } from "react-router-dom";

const Property = () => {
  //It will recieve id as a prop
  //with id fetch call will get the data from api
  // Then it will be destructed and rendered

  const [propData, setPropData] = useState(null);
  const { id } = useParams();
  const user1 = JSON.parse(localStorage.getItem("user"));
  const currentlyLogged = localStorage.getItem("currentlyLogged");
  const contractor = JSON.parse(localStorage.getItem("contractor"));
  var user;
  if (currentlyLogged === "user") {
    user = user1;
  } else {
    user = contractor;
  }

  const [contactToggle, setContactToggle] = useState(false);

  const handleContactClick = () => {
    setContactToggle((state) => !state);
  };

  useEffect(() => {
    const dumb = async () => {
      const data = await axios.get(`http://localhost:6969/property/${id}`);
      setPropData(data);
    };
    dumb();
  }, [id]);

  const property = propData?.data?.data?.property;
  const navigate = useNavigate();
  console.log("prop-data", property);
  const handleMessage = async (receiverId) => {
    console.log(user.data._id);
    const body = {
      senderId: user.data._id,
      receiverId: receiverId,
    };
    try {
      const res = await axios.post(
        "http://localhost:6969/conversations/",
        body
      );
      navigate("/messenger", { state: { curCon: res } });
    } catch (err) {
      console.log(err);
    }
  };

  return property ? (
    <Paper sx={{ bgcolor: "#a8dadc" }}>
      <Container sx={{ padding: " 4rem 7rem", color: "#010101" }}>
        <Box
          sx={{
            display: "flex",
            gap: ".2rem",
            // margin: '4rem 0 2rem 0',
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ letterSpacing: ".3rem", fontWeight: 300, fontSize: "2.6rem" }}
          >
            {property.title}
            <br />
          </Typography>

          <Typography
            variant="h3"
            component="h1"
            sx={{ color: "#1d3557", fontWeight: 500, fontSize: "2.1rem" }}
          >
            Rs.{property.price}
          </Typography>
          <Typography sx={{ marginTop: "1.5rem" }}>
            Location: {property.city}
          </Typography>
        </Box>
        <Box sx={{ width: "100" }}>
          <PropertyCollage images={property.images} />
        </Box>

        <Typography>Posted by: [USER]</Typography>
        <Typography variant="h3" component="h1">
          About this Property:
        </Typography>
        <Typography variant="p" component="p">
          {/* {property.description}
           */}
          {/* //?Improve Later */}
          <span dangerouslySetInnerHTML={{ __html: property.description }} />
        </Typography>

        <Button variant="contained" onClick={handleContactClick}>
          {" "}
          Contact Owner
        </Button>
        {contactToggle ? <Box pt={2}> {property.phoneNumber}</Box> : ""}
        {contactToggle ? (
          <Button>
            <p onClick={() => handleMessage(property.postedBy)}>
              <b> Message</b>
            </p>
          </Button>
        ) : (
          ""
        )}
      </Container>
    </Paper>
  ) : (
    "Unable to Load Property! Try Later"
  );
};

export default Property;

import HeaderContainer from "./headerContainer";
// import ImagesContainer from "./imagesContainer";
import BottomContainer from "./bottomContainer";
import AboutPropertyContainer from "./aboutPropertyContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import PropertyCollage from "../../components/collage/property-collage.component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ViewPropertyPage = () => {
  const [propertyData, setPropertyData] = useState(null);
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
  useEffect(() => {
    const dumb = async () => {
      const data = await axios.get(`http://localhost:6969/property/${id}`);
      setPropertyData(data.data?.data?.property);
      console.log(`Property is  ${JSON.stringify(data.data?.data?.property)}`);
    };
    dumb();
  }, [id]);

  const property = propertyData?.data?.data?.property;
  const navigate = useNavigate();
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
  return (
    <>
      <HeaderContainer
        Name={propertyData?.title}
        City={propertyData?.city}
        Area={propertyData?.area}
      />
      <PropertyCollage images={propertyData?.images} />
      {/* <ImagesContainer /> */}
      <BottomContainer
        Garages={propertyData?.noofgarages}
        Bedrooms={propertyData?.noofbedrooms}
        Washrooms={propertyData?.noofwashrooms}
        Price={propertyData?.price}
      />
      <Divider
        variant="inset"
        sx={{
          width: "1150px",
          marginLeft: 12.5,
          marginTop: -2,
        }}
      />
      <AboutPropertyContainer
        City={propertyData?.city}
        Area={propertyData?.area}
        Date={propertyData?.createdAt}
        Garages={propertyData?.noofgarages}
        Bedrooms={propertyData?.noofbedrooms}
        Washrooms={propertyData?.noofwashrooms}
        Description={propertyData?.description}
        Price={propertyData?.price}
        Name={propertyData?.title}
        PhoneNumber={propertyData?.phoneNumber}
      />
    </>
  );
};
export default ViewPropertyPage;

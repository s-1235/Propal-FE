import React from "react";
import "./ProfileSlider.css";
import ProfileCard from "../ProfileCard/profileCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { getAllUsers_ } from "../../Store/api";
// const profiles = [
//   {
//     id: "1",
//     name: "Mazen Jamshed",
//     profiletype: "Contractor",
//     bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
//     Image: "./assets/img/garlic.jpg",
//     rating: 3.5,
//   },
//   {
//     id: "2",
//     name: "Sadam Hussain",
//     profiletype: "Dealer",
//     bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
//     Image: "./assets/img/hero_bg.jpg",
//     rating: 3.5,
//   },
//   {
//     id: "3",
//     name: "Ali Hassan",
//     profiletype: "Agency",
//     bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
//     Image: "./assets/img/Jamshed_Thug.jpg",
//     rating: 3.5,
//   },
//   {
//     id: "4",
//     name: "Zaheer Khan",
//     profiletype: "Dealer",
//     bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
//     Image: "./assets/img/bedroom1.jpg",
//     rating: 3.5,
//   },
//   {
//     id: "5",
//     name: "Imran Khan",
//     profiletype: "Agency",
//     bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
//     Image: "./assets/img/bedroom-2.jpg",
//     rating: 3.5,
//   },
//   {
//     id: "6",
//     name: "Imran Khan",
//     profiletype: "Agency",
//     bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
//     Image: "./assets/img/bedroom-2.jpg",
//     rating: 3.5,
//   },
// ];
const ReactCardSlider = (props) => {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    const dumy = async () => {
      const data = await getAllUsers_();
      setProfileData(data?.data?.data.docs);
      console.log(data);
      console.log(data?.data?.data.docs);
    };
    dumy();
  }, []);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">
        {profileData?.map((profile) => {
          return (
            <ProfileCard
              key={profile?.id}
              Id={profile.id}
              Image={"./assets/img/garlic.jpg"}
              bio={profile.bioText}
              about={profile.about}
              FirstName={profile.firstname}
              LastName={profile.lastname}
              profiletype={profile.role}
            />
          );
        })}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};
export default ReactCardSlider;

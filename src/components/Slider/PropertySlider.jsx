import { Box } from "@mui/system";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./PropertySlider.css";
import PropertyCard from "../PropertyCard/propertyCard.jsx";

const PropertySlider = (props) => {
  const slideTop = () => {
    var slider = document.getElementById("PropertySlider");
    slider.scrollTop = slider.scrollTop + 500;
  };

  const slideDown = () => {
    var slider = document.getElementById("PropertySlider");
    slider.scrollTop = slider.scrollTop - 500;
  };
  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
      }}
    >
      <MdKeyboardArrowUp
        size={60}
        className="slider-icon Up"
        onClick={slideTop}
      />
      <div id="PropertySlider">
        {props.Properties?.map((property) => {
          return (
            <PropertyCard
              key={property?._id}
              Id={property?._id}
              Description={property?.description}
              Images={property?.images}
              Name={property?.title}
              City={property?.city}
              Area={property?.area}
              Washrooms={property?.noofwashrooms}
              Garages={property?.noofgarages}
              Bedrooms={property?.noofbedrooms}
              PostedBy={property?.postedBy}
            />
          );
        })}
      </div>
      <MdKeyboardArrowDown
        size={60}
        className="slider-icon Down"
        onClick={slideDown}
      />
    </Box>
  );
};
export default PropertySlider;

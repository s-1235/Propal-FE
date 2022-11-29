import { Typography, Box, Grid } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import Button from "@mui/material/Button";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { TextField, MenuItem } from "@mui/material";
const TextFieldStyled = styled(TextField)({
  width: "223px",
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& label": {
    color: "white",
  },
  "&:hover label": {
    color: "rgb(255,110,91)",
  },
  "& label.Mui-focused": {
    color: "red",
  },
  "& .MuiInput-label:before": {
    borderBottomColor: "white",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "white",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "rgb(255,110,91)", // Solid underline on hover
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "red", // Solid underline on focus
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      color: "white",
    },
  },
  marginLeft: 10,
});
const ToggleButton1 = styled(ToggleButton)({
  color: "black",
  backgroundColor: "white",
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#03e9f4",
  },
  "&:hover": {
    color: "black",
    backgroundColor: "#bfc4e2",
  },
});
const SearchBar = () => {
  const [alignment, setAlignment] = useState("buy");
  const [cityValue, setCityValue] = useState("");
  const [provinceValue, setProvinceValue] = useState("");
  const [propertyTypeValue, setPropertyTypeValue] = useState(null);
  const [areaValue, setAreaValue] = useState("");
  const cityRef = useRef();
  const provinceRef = useRef();
  const propertyTypeRef = useRef();
  const areaRef = useRef();
  const navigate = useNavigate();
  const countRef = useRef(0);

  // const cities = [
  //   { name: "Lahore", value: "lahore" },
  //   { name: "Islamabad", value: "islamabad" },
  //   { name: "Kohat", value: "kohat" },
  // ];
  // const provinces = [
  //   { name: "Punjab", value: "punjab" },
  //   { name: "Khyber Pakhtunkhuwa", value: "kpk" },
  //   { name: "Sindh", value: "sindh" },
  //   { name: "Balochistan", value: "balochistan" },
  // ];
  const propertyTypes = [
    { name: "Flat", value: "flat" },
    { name: "House", value: "house" },
    { name: "Plot", value: "plot" },
    { name: "Commercial", value: "Commercial" },
  ];
  // const propertyTypes = ["Flat", "House", "Plot", "Commercial"];
  const handleCategoryChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleProvinceChange = (event) => {
    setProvinceValue(event.target.value);
  };
  const handleCityChange = (event) => {
    setCityValue(event.target.value);
  };
  const handleAreaChange = (event) => {
    setAreaValue(event.target.value);
  };
  const handlePropertyTypeChange = (event) => {
    setPropertyTypeValue(event.target.value);
    console.log(event.target.value);
  };
  const searchPropertiesHandler = () => {
    if (!propertyTypeValue) {
      propertyTypeRef.current.focus();
      return;
    } else if (!provinceValue) {
      provinceRef.current.focus();
      return;
    } else if (!cityValue) {
      cityRef.current.focus();
      return;
    } else if (!areaValue) {
      areaRef.current.focus();
      return;
    }
    let searchdata = {
      category: alignment,
      subCategory: propertyTypeValue,
      province: provinceValue,
      city: cityValue,
      area: areaValue,
    };
    navigate(`/property/search`, { state: { searchdata } });
  };
  countRef.current = countRef.current + 1;
  return (
    <Grid
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: "300px",
        width: "600px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          marginTop: -2,
          fontFamily: "baloo 2",
        }}
      >
        Search Here {countRef.current}
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleCategoryChange}
        aria-label="Platform"
        sx={{ marginTop: 2, marginBottom: 1 }}
      >
        <ToggleButton1 value="buy">BUY</ToggleButton1>
        <ToggleButton1 value="rent">RENT</ToggleButton1>
      </ToggleButtonGroup>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "space-around",
          }}
        >
          <TextFieldStyled
            inputRef={propertyTypeRef}
            select
            variant="standard"
            label="PropertyType"
            value={propertyTypeValue || ""}
            onChange={handlePropertyTypeChange}
          >
            {propertyTypes.map((option) => (
              <MenuItem key={option.name} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </TextFieldStyled>
          <TextFieldStyled
            inputRef={provinceRef}
            label="Province"
            variant="standard"
            onChange={handleProvinceChange}
            value={provinceValue}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "space-around",
          }}
        >
          <TextFieldStyled
            inputRef={cityRef}
            label="City"
            variant="standard"
            onChange={handleCityChange}
            value={cityValue}
          />

          <TextFieldStyled
            inputRef={areaRef}
            label="Area"
            variant="standard"
            onChange={handleAreaChange}
            value={areaValue}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        endIcon={<ManageSearchIcon />}
        sx={{
          height: "50px",
          width: "100px",
          color: "black",
          backgroundColor: "white",
          marginTop: 2,
          "&:hover": {
            color: "black",
            backgroundColor: "#03e9f4",
          },
        }}
        onClick={searchPropertiesHandler}
      >
        Search
      </Button>
    </Grid>
  );
};
export default SearchBar;

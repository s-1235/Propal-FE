import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Container,
  Divider,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch } from "react-redux";
import { addProperty } from "../../store/slices/propertySlice";

const AddProperty = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const titleRef = useRef();
  const priceRef = useRef();
  const subTypeRef = useRef();
  const cityRef = useRef();
  const provinceRef = useRef();
  const areaRef = useRef();
  const noOfGaragesRef = useRef();
  const noOfBedroomsRef = useRef();
  const noOfWashroomsRef = useRef();
  const detailedAddressRef = useRef();
  // const phoneRef = useRef();
  const descriptionRef = useRef();
  const numbers = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];
  const options = [
    { value: "House", label: "House" },
    { value: "Flat", label: "Flat" },
    { value: "Shop", label: "Shop" },
  ];
  const [title, setTitle] = useState("");
  const [selectedCover, setSelectedCover] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const [price, setPrice] = useState("");
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const [propertyFor, setPropertyFor] = useState("buy");
  const handlePropertyFor = (e) => {
    setPropertyFor(e.target.value);
  };

  const [propertyType, setPropertyType] = useState("residential");

  const handlePropertyType = (e) => {
    setPropertyType(e.target.value);
  };

  const [city, setCity] = useState("LHR");
  const [province, setProvince] = useState(null);
  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
  };
  const cities = [
    {
      value: "LHR",
      label: "Lahore",
    },
    {
      value: "KHI",
      label: "Karachi",
    },
  ];
  const provinces = [
    {
      value: "Punjab",
      label: "Punjab",
    },
    {
      value: "Khyberpakhtunkhuwa",
      label: "Khyberpakhtunkhuwa",
    },
    {
      value: "Balochistan",
      label: "Balochistan",
    },
    {
      value: "Sindh",
      label: "Sindh",
    },
  ];
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const [area, setArea] = useState("");
  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };
  const [subType, setSubType] = useState("");
  const handleSubTypeChange = (e) => {
    setSubType(e.target.value);
  };
  const [detailedAddress, setDetailedAddress] = useState("");
  const handleDetailedAddress = (e) => {
    setDetailedAddress(e.target.value);
  };

  const [phoneNumber, setPhoneValue] = useState("");
  const handlePhoneChange = (e) => {
    setPhoneValue(e);
  };

  const [description, setDescription] = useState("");
  const handleDescriptionChange = (e) => {
    setDescription(e);
  };
  const [noOfBedrooms, setNoOfBedrooms] = useState("");
  const handleNoOfBedroomsChange = (e) => {
    setNoOfBedrooms(e.target.value);
  };
  const [noOfWashrooms, setNoOfWashrooms] = useState("");
  const handleNoOfWashroomsChange = (e) => {
    setNoOfWashrooms(e.target.value);
  };
  const [noOfGarages, setNoOfGarages] = useState("");
  const handleNoOfGaragesChange = (e) => {
    setNoOfGarages(e.target.value);
  };
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title.length <= 0 || !title) {
      titleRef.current.focus();
    } else if (price.length <= 0 || !price) {
      priceRef.current.focus();
    } else if (subType.length <= 0 || !subType) {
      subTypeRef.current.focus();
    } else if (province.length <= 0 || !province) {
      provinceRef.current.focus();
    } else if (city.length <= 0 || !city) {
      cityRef.current.focus();
    } else if (area.length <= 0 || !area) {
      areaRef.current.focus();
    } else if (noOfGarages.length <= 0 || !noOfGarages) {
      noOfGaragesRef.current.focus();
    } else if (noOfBedrooms.length <= 0 || !noOfBedrooms) {
      noOfBedroomsRef.current.focus();
    } else if (noOfWashrooms.length <= 0 || !noOfWashrooms) {
      noOfWashroomsRef.current.focus();
    } else if (detailedAddress.length <= 0 || !detailedAddress) {
      detailedAddressRef.current.focus();
    }
    // } else if (phoneNumber.length <= 0 || !phoneNumber) {
    //   phoneRef.current.focus();
    // }
    const formData = new FormData();
    formData.append("coverImage", selectedCover);
    formData.append("images", selectedFile);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("category", propertyFor);
    formData.append("type", propertyType);
    formData.append("city", city);
    formData.append("province", province);
    formData.append("area", area);
    formData.append("subType", subType);
    formData.append("detailedAddress", detailedAddress);
    formData.append("phoneNumber", phoneNumber);
    formData.append("description", description);
    formData.append("noofbedrooms", noOfBedrooms);
    formData.append("noofgarages", noOfGarages);
    formData.append("noofwashrooms", noOfWashrooms);
    // selectedFile.map((f)=>formData.append("images",f))
    console.log(formData);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:6969/property/" + user.data._id,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmission = (e) => {
  //   // Object of all Values
  //   console.log({
  //     title,
  //     price,
  //     propertyFor,
  //     propertyType,
  //     city,
  //     area,
  //     detailedAddress,
  //     phoneNumber,
  //     description,
  //   });

  //   dispatch(
  //     addProperty({
  //       coverImage: selectedCover,
  //       images: selectedFile,
  //       title,
  //       price,
  //       propertyFor,
  //       propertyType,
  //       city,
  //       area,
  //       detailedAddress,
  //       phoneNumber,
  //       description,
  //     })
  //   );
  // };

  //!=============================
  const handleCoverSelect = (event) => {
    setSelectedCover(event.target.files[0]);
  };
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    // event.target.files.map((f)=>selectedFile.push(f));
  };

  // ---------------------------------Handlers -----------------------------------------

  return (
    <Box>
      <Box
        p={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#a8dadc",
        }}
      >
        <Typography variant="h2" component="h1">
          Add a property
        </Typography>
        <Typography variant="body1" component="h2">
          Sell or rent out your property. Enter your property details below to
          get it listed on our portal and receive leads on your property
        </Typography>
      </Box>

      <Container
        fixed
        sx={{
          "& > *": {
            marginBottom: "1rem ",
          },
        }}
      >
        <Typography mt={2}>Give your property a name:</Typography>
        <TextField
          inputRef={titleRef}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{ width: "220px" }}
          value={title}
          onChange={handleTitleChange}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "430px",
            marginTop: 3,
          }}
        >
          <TextField
            inputRef={priceRef}
            id="outlined-basic"
            label="Price(pkr)"
            variant="outlined"
            sx={{ width: "220px" }}
            value={price}
            onChange={handlePriceChange}
          />
          <TextField
            // error={subTypeHasError ? subTypeHasError : undefined}
            // helperText={subTypeHasError ? "Please Select a Value" : undefined}
            inputRef={subTypeRef}
            id="city-Selection"
            select
            label="Select Type"
            onChange={handleSubTypeChange}
            // onBlur={subTypeBlurHandler}
            value={subType}
            sx={{ width: "180px" }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <FormControl sx={{ marginTop: "1rem" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Property:
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handlePropertyFor}
            value={propertyFor}
          >
            <FormControlLabel value="buy" control={<Radio />} label="Buy" />
            <FormControlLabel value="rent" control={<Radio />} label="Rent" />
          </RadioGroup>
        </FormControl>
        <Divider />

        <FormControl>
          <FormLabel id="property-type">Type of Property:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handlePropertyType}
            value={propertyType}
          >
            <FormControlLabel
              value="residential"
              control={<Radio />}
              label="Residential"
            />
            <FormControlLabel
              value="commercial"
              control={<Radio />}
              label="Commerecial"
            />
            <FormControlLabel value="plot" control={<Radio />} label="Plot" />
          </RadioGroup>
        </FormControl>
        <Divider />
        <Box
          sx={{
            margin: "1rem 0",
            "& > *": {
              marginTop: "1rem",
            },
          }}
        >
          <Typography marginBottom={2}>Property Location:</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "900px",
            }}
          >
            <TextField
              inputRef={provinceRef}
              id="city-selection"
              select
              label="Province"
              value={province}
              onChange={handleProvinceChange}
              sx={{ width: "250px" }}
              helperText="Please select your Province"
            >
              {provinces.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              inputRef={cityRef}
              id="city-selection"
              select
              label="City"
              value={city}
              onChange={handleCityChange}
              sx={{ width: "250px" }}
              helperText="Please select your City"
            >
              {cities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              inputRef={areaRef}
              id="area-selection"
              label="Area"
              // defaultValue='e.g. Bahria Town'
              sx={{ width: "250px" }}
              value={area}
              onChange={handleAreaChange}
              placeholder="e.g. Bahria Town"
            />
          </Box>
          <Typography marginBottom={2}>Add Key-Charcteristics:</Typography>
          <Box
            sx={{
              display: "flex",
              direction: "row",
              justifyContent: "space-between",
              width: "900px",
            }}
          >
            <TextField
              // error={noOfGaragesHasError ? noOfGaragesHasError : undefined}
              // helperText={
              //   noOfGaragesHasError ? "Please Select a Value" : undefined
              // }
              inputRef={noOfGaragesRef}
              id="city-Selection"
              select
              label="Select No of Garages"
              onChange={handleNoOfGaragesChange}
              // onBlur={noOfGaragesBlurHandler}
              value={noOfGarages}
              sx={{ width: "250px" }}
            >
              {numbers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              // error={noOfBedroomsHasError ? noOfBedroomsHasError : undefined}
              // helperText={
              //   noOfBedroomsHasError ? "Please Select a Value" : undefined
              // }
              inputRef={noOfBedroomsRef}
              id="city-Selection"
              select
              label="Select No of Bedrooms"
              onChange={handleNoOfBedroomsChange}
              // onBlur={noOfBedroomsBlurHandler}
              value={noOfBedrooms}
              sx={{ width: "250px" }}
            >
              {numbers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              // error={noOfWashroomsHasError ? noOfWashroomsHasError : undefined}
              // helperText={
              //   noOfWashroomsHasError ? "Please Select a Value" : undefined
              // }
              inputRef={noOfWashroomsRef}
              id="city-Selection"
              select
              label="Select No of Washrooms"
              onChange={handleNoOfWashroomsChange}
              // onBlur={noOfWashroomsBlurHandler}
              value={noOfWashrooms}
              sx={{ width: "250px" }}
            >
              {numbers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ width: "26rem" }}>
            <TextField
              inputRef={detailedAddressRef}
              id="adress-multiline"
              label="Detailed Address"
              placeholder="Address here"
              multiline
              rows={4}
              sx={{ width: "100%" }}
              value={detailedAddress}
              onChange={handleDetailedAddress}
            />
          </Box>
          <PhoneInput
            // inputRef={phoneRef}
            // ref={phoneRef}
            // inputProps={phoneRef}
            country={"pk"}
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="+92 333 1234567"
          />

          <Box>
            <ReactQuill
              ref={descriptionRef}
              theme="snow"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Box>
        </Box>
        <h4>Upload Cover Photo</h4>
        <input type="file" id="houseFile" onChange={handleCoverSelect} />
        <h4>Upload Images</h4>
        <input
          type="file"
          id="houseFile"
          multiple
          onChange={handleFileSelect}
        />

        <Button
          variant="filled"
          size="large"
          sx={{
            bgcolor: "#457b9d",
            color: "#fff",
            padding: "1rem 3.2rem",
            width: "16rem",
            margin: "2rem 0",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export default AddProperty;

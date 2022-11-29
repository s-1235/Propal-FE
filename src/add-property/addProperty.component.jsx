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
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch } from "react-redux";
import { addProperty } from "../../store/slices/propertySlice";
import useInput from "./../../hooks/use-input";
const isString = (value) => {
  if (isNaN(value) && value.trim() !== "") {
    return true;
  }
  return false;
};
const isAddress = (value) => {
  if (isNaN(value) && value.trim() !== "" && value.length > 14) {
    return true;
  }
  return false;
};
const isNumberandNotZero = (value) => {
  if (!isNaN(value) && parseFloat(value) > 0) {
    return true;
  }
  return false;
};
const AddProperty = () => {
  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isString);
  const {
    value: priceValue,
    isValid: priceIsValid,
    hasError: priceHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPrice,
  } = useInput(isNumberandNotZero);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isString);
  const {
    value: areaValue,
    isValid: areaIsValid,
    hasError: areaHasError,
    valueChangeHandler: areaChangeHandler,
    inputBlurHandler: areaBlurHandler,
    reset: resetArea,
  } = useInput(isString);
  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput(isAddress);
  const [formIsValid, setFormIsValid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberIsValid, setphoneNumberIsValid] = useState(false);
  // const [title, setTitle] = useState("");
  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const [price, setPrice] = useState("");
  // const handlePriceChange = (e) => {
  //   setPrice(e.target.value);
  // };
  const [propertyFor, setPropertyFor] = useState("buy");
  const handlePropertyFor = (e) => {
    setPropertyFor(e.target.value);
  };

  const [propertyType, setPropertyType] = useState("residential");
  const handlePropertyType = (e) => {
    setPropertyType(e.target.value);
  };

  // const [city, setCity] = useState("LHR");
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
  useEffect(() => {
    if (
      titleIsValid &&
      priceIsValid &&
      cityIsValid &&
      areaIsValid &&
      addressIsValid &&
      phoneNumberIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    titleIsValid,
    priceIsValid,
    cityIsValid,
    areaIsValid,
    addressIsValid,
    phoneNumberIsValid,
  ]);
  // const handleCityChange = (event) => {
  //   setCity(event.target.value);
  // };

  // const [area, setArea] = useState("");
  // const handleAreaChange = (e) => {
  //   setArea(e.target.value);
  // };

  // const [detailedAddress, setDetailedAddress] = useState("");
  // const handleDetailedAddress = (e) => {
  //   setDetailedAddress(e.target.value);
  // };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e);
  };
  const handlePhoneBlur = () => {
    console.log(phoneNumber);
    if (
      !isNaN(phoneNumber) &&
      parseFloat(phoneNumber) > 0 &&
      phoneNumber.length > 10
    ) {
      setphoneNumberIsValid(true);
      console.log("phonenumber validation completed");
      return;
    }
    setphoneNumberIsValid(false);
    return;
  };
  const [description, setDescription] = useState("");
  const handleDescriptionChange = (e) => {};
  const dispatch = useDispatch();
  const handleSubmission = (e) => {
    // Object of all Values
    console.log({
      titleValue,
      priceValue,
      propertyFor,
      propertyType,
      cityValue,
      areaValue,
      addressValue,
      phoneNumber,
      description,
    });
    dispatch(
      addProperty({
        titleValue,
        priceValue,
        propertyFor,
        propertyType,
        cityValue,
        areaValue,
        addressValue,
        phoneNumber,
        description,
      })
    );
  };

  //!=============================

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
          error={titleHasError ? titleHasError : undefined}
          helperText={titleHasError ? "Please Enter Correct Value" : undefined}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{ display: "block" }}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
          value={titleValue}
        />
        <Typography mt={2}>Give your property a value:</Typography>

        <TextField
          error={priceHasError ? priceHasError : undefined}
          helperText={priceHasError ? "Please Enter Correct Value" : undefined}
          id="outlined-basic"
          label="Price(pkr)"
          variant="outlined"
          sx={{ display: "block" }}
          onChange={priceChangeHandler}
          onBlur={priceBlurHandler}
          value={priceValue}
        />
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

          <TextField
            error={cityHasError ? cityHasError : undefined}
            helperText={cityHasError ? "Please Select a Value" : undefined}
            id="city-selection"
            select
            label="City"
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            value={cityValue}
            sx={{ width: "180px" }}
          >
            {cities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            error={areaHasError ? areaHasError : undefined}
            helperText={areaHasError ? "Please Select a Value" : undefined}
            sx={{ marginLeft: "1.3rem" }}
            id="area-selection"
            label="Area"
            // defaultValue='e.g. Bahria Town'
            placeholder="e.g. Bahria Town"
            onChange={areaChangeHandler}
            onBlur={areaBlurHandler}
            value={areaValue}
          />
          <Box sx={{ width: "26rem" }}>
            <TextField
              error={addressHasError ? addressHasError : undefined}
              helperText={
                addressHasError
                  ? "detailed address must be 15 characters long!"
                  : undefined
              }
              id="adress-multiline"
              label="Detailed Address"
              placeholder="Address here"
              multiline
              rows={4}
              sx={{ width: "100%" }}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
              value={addressValue}
            />
          </Box>
          <PhoneInput
            country={"pk"}
            isValid={phoneNumberIsValid}
            placeholder="+92 333 1234567"
            value={phoneNumber}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
          />
          <Box>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Box>
        </Box>

        <Button
          variant="filled"
          size="large"
          disabled={!formIsValid}
          sx={{
            bgcolor: "#457b9d",
            color: "#fff",
            padding: "1rem 3.2rem",
            width: "16rem",
            margin: "2rem 0",
          }}
          onClick={handleSubmission}
        >
          Submit
        </Button>
      </Container>
    </Box>
  );
};

export default AddProperty;

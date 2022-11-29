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
  } from '@mui/material';
  import axios from 'axios';
  import { useState } from 'react';
  import ReactQuill from 'react-quill';
  import 'react-quill/dist/quill.snow.css';
  
  import PhoneInput from 'react-phone-input-2';
  import 'react-phone-input-2/lib/style.css';
  import { useDispatch } from 'react-redux';
  import { addProperty } from '../../store/slices/propertySlice';
  
  
  const AddGig = () => {
    const contractor = JSON.parse(localStorage.getItem('contractor'));
  
    const [title, setTitle] = useState('');
    const [selectedCover, setSelectedCover] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const [price, setPrice] = useState('');
    const handlePriceChange = (e) => {
      setPrice(e.target.value);
    };
    const [propertyFor, setPropertyFor] = useState('buy');
    const handlePropertyFor = (e) => {
      setPropertyFor(e.target.value);
    };
  
    const [priceNego, setPriceNego] = useState('negotiable');
  
    const handlePriceNego = (e) => {
        setPriceNego(e.target.value);
    };
    const [gigType,setGigType]=useState("lenter")
    const handleGigType=(e)=>{
        setGigType(e.target.value)
    }
  
    const [type, setType] = useState('lenter');
    const [message,setMessage]=useState("")
    const types = [
      {
        value: 'wiring',
        label: 'Wiring',
      },
      {
        value: 'paint',
        label: 'Paint',
      },
      {
        value: 'lenter',
        label: 'Lenter',
      },
      {
        value: 'woodwork',
        label: 'Woodwork',
      },
      {
        value: 'construction',
        label: 'Construction',
      },
      {
        value: 'interiordesign',
        label: 'Interior Design',
      },
      {
        value: 'exteriordesign',
        label: 'Exterior Design',
      },
      {
        value: 'plumbing',
        label: 'Plumbing',
      },
      
    ];
    const [city, setCity] = useState('LHR');
    const cities = [
      {
        value: 'LHR',
        label: 'Lahore',
      },
      {
        value: 'ISL',
        label: 'Islamabad',
      },
      
      
    ];


    const handleCityChange = (event) => {
      setCity(event.target.value);
    };
  
    const [area, setArea] = useState('');
    const handleAreaChange = (e) => {
      setArea(e.target.value);
    };
  
    const [detailedAddress, setDetailedAddress] = useState('');
    const handleDetailedAddress = (e) => {
      setDetailedAddress(e.target.value);
    };
  
    const [phoneNumber, setPhoneValue] = useState('');
    const handlePhoneChange = (e) => {
      setPhoneValue(e);
    };
  
    const [description, setDescription] = useState('');
    const handleDescriptionChange = (e) => {
      setDescription(e);
    };
  
    const dispatch = useDispatch();
  
    const handleSubmit = async(event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append("coverImage", selectedCover);
      formData.append("images", selectedFile);
      formData.append("title", title);
      formData.append("typicallyCharge", price);
      formData.append("price", priceNego);
      formData.append("types", gigType);
      formData.append("city", city);
      formData.append("detailedAddress", detailedAddress);
      formData.append("phoneNumber", phoneNumber);
      formData.append("description", description);
      // selectedFile.map((f)=>formData.append("images",f))
      console.log(formData)
  
      
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:6969/gig/"+contractor.data._id,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response)
        if (response.status==200){
          setMessage("succesfully submitted")
        }
        else{
          setMessage("Error")
        }
      } catch(error) {
        console.log(error)
        setMessage("Error!!!")
      }
    }
  
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
      setSelectedCover(event.target.files[0])
    }
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
        // event.target.files.map((f)=>selectedFile.push(f));
    }
    
    // ---------------------------------Handlers -----------------------------------------
  
    return (
      <Box>
        <Box
          p={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#a8dadc',
          }}
        >
          <Typography variant='h2' component='h1'>
            Add a Gig
          </Typography>
          <Typography variant='body1' component='h2'>
            Add a resume gig to reach propal customers and start earning today
          </Typography>
        </Box>
  
        <Container
          fixed
          sx={{
            '& > *': {
              marginBottom: '1rem ',
            },
          }}
        >
          <Typography mt={2}>Give your Gig a name:</Typography>
  
          <TextField
            id='outlined-basic'
            label='Title'
            variant='outlined'
            sx={{ display: 'block' }}
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
              id='gig-selection'
              select
              label='Gig Type'
              value={type}
              onChange={handleGigType}
              helperText='Select Type'
              sx={{ marginTop: '1rem' }}
              
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          <Typography mt={2}>Give your charges for 5 marla:</Typography>
  
          <TextField
            id='outlined-basic'
            label='Price(pkr)'
            variant='outlined'
            sx={{ display: 'block' }}
            value={price}
            onChange={handlePriceChange}
          />
          <FormControl sx={{ marginTop: '1rem' }}>
            <FormLabel id='demo-row-radio-buttons-group-label'>
              Price Negotiable:
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='row-radio-buttons-group'
              onChange={handlePriceNego}
              value={priceNego}
            >
              <FormControlLabel value='Negotiable' control={<Radio />} label='Negotiable' />
              <FormControlLabel value='Not Negotiable' control={<Radio />} label='Not Negotiable' />
            </RadioGroup>
          </FormControl>
          <Divider />
  
          
          <Box
            sx={{
              margin: '1rem 0',
              '& > *': {
                marginTop: '1rem',
              },
            }}
          >
            <Typography marginBottom={2}>Access Location:</Typography>
  
            <TextField
              id='city-selection'
              select
              label='City'
              value={city}
              onChange={handleCityChange}
              helperText='Please select your currency'
            >
              {cities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
  
            <Box sx={{ width: '26rem' }}>
              <TextField
                id='adress-multiline'
                label='Office Address'
                placeholder='Address here'
                multiline
                rows={4}
                sx={{ width: '100%' }}
                value={detailedAddress}
                onChange={handleDetailedAddress}
              />
            </Box>
            <PhoneInput
              country={'pk'}
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder='+92 333 1234567'
            />
  
            <Box>
              <ReactQuill
                theme='snow'
                value={description}
                onChange={handleDescriptionChange}
              />
            </Box>
          </Box>
          <h4>Upload Cover Photo</h4>
          <input type="file" id="houseFile" onChange={handleCoverSelect} />
          <h4>Upload Previous Images</h4>
          <input type="file" id="houseFile" multiple onChange={handleFileSelect} />
  
          <Button
            variant='filled'
            size='large'
            sx={{
              bgcolor: '#457b9d',
              color: '#fff',
              padding: '1rem 3.2rem',
              width: '16rem',
              margin: '2rem 0',
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Container>
        <h4>{message}</h4>
      </Box>
    );
  };
  
  export default AddGig;
  
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
  
  
  const Job = () => {
    const user = JSON.parse(localStorage.getItem('user'));
  
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
    
  
    const [priceNego, setPriceNego] = useState('negotiable');
  
    
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
    //   formData.append("typicallyCharge", price);
      formData.append("price", price);
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
          url: "http://localhost:6969/job/"+user.data._id,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response)
        if (response.status==201){
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
            Add a Job
          </Typography>
          <Typography variant='body1' component='h2'>
            Post a Job to reach propal contractors and start building today
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
          <Typography mt={2}>Give your Job a title:</Typography>
  
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
              label='Job Type'
              value={gigType}
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
            <Typography mt={2}>Area of propery to work on in marla</Typography>

            <TextField
            sx={{ marginTop: '1.3rem',marginBottom: '1.3rem' }}
            id='area-selection'
            label='Area'
            // defaultValue='e.g. Bahria Town'
            value={area}
            onChange={handleAreaChange}
            placeholder='ie: 5'
          />
  
          <TextField
            id='outlined-basic'
            label='Price(pkr)'
            variant='outlined'
            sx={{ display: 'block' }}
            value={price}
            onChange={handlePriceChange}
          />
         
          <Divider />
  
          
          <Box
            sx={{
              margin: '1rem 0',
              '& > *': {
                marginTop: '1rem',
              },
            }}
          >
            {/* <Typography marginBottom={2}>City:</Typography> */}
  
            <TextField
              id='city-selection'
              select
              label='City'
              value={city}
              onChange={handleCityChange}
              helperText=''
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
                label=' Site Address'
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
          <h4>Upload Helping Images</h4>
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
  
  export default Job;
  
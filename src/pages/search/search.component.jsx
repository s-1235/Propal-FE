import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchCard from "../../components/cards/search-card.component";
import { useLocation } from "react-router-dom";
import PropertySlider from "../../components/Slider/PropertySlider";
const Search = () => {
  const [searchObj, setSearchObj] = useState(null);
  const { state } = useLocation();
  const { searchdata } = state;
  // const key = JSON.parse(searchdata);
  console.log(`Search data is ${searchdata}`);

  useEffect(() => {
    const dumb = async () => {
      const data = await axios.get(`http://localhost:6969/property/search`, {
        params: { searchdata },
      });
      setSearchObj(data);
    };
    dumb();
  }, [searchdata]);

  const result = searchObj?.data?.data?.properties;
  console.log("search-data", result);

  return (
    <>
      <Box sx={{ background: "#A8DADC", width: "100%" }}>
        <Box
          sx={{
            margin: "0 0 2rem 0",
            padding: "2rem 6rem ",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              fontFamily: "baloo 2",
            }}
          >
            Filters
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              width: "80px",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                fontFamily: "baloo 2",
              }}
            >
              For:
            </Typography>
            <Typography
              sx={{
                fontSize: "23px",
                fontWeight: "bold",
                fontFamily: "anek bangla",
                textTransform: "capitalize",
                marginLeft: 1,
                marginTop: 0.3,
              }}
            >
              {searchdata?.category}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              width: "80px",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                fontFamily: "baloo 2",
              }}
            >
              Province:
            </Typography>
            <Typography
              sx={{
                fontSize: "23px",
                fontWeight: "bold",
                fontFamily: "anek bangla",
                textTransform: "capitalize",
                marginLeft: 1,
                marginTop: 0.3,
              }}
            >
              {searchdata?.province}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              width: "80px",
              marginLeft: 8,
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                fontFamily: "baloo 2",
              }}
            >
              City:
            </Typography>
            <Typography
              sx={{
                fontSize: "23px",
                fontWeight: "bold",
                fontFamily: "anek bangla",
                textTransform: "capitalize",
                marginLeft: 1,
                marginTop: 0.3,
              }}
            >
              {searchdata?.city}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              width: "80px",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                fontFamily: "baloo 2",
              }}
            >
              Area:
            </Typography>
            <Typography
              sx={{
                fontSize: "23px",
                fontWeight: "bold",
                fontFamily: "anek bangla",
                textTransform: "capitalize",
                marginLeft: 1,
                marginTop: 0.3,
              }}
            >
              {searchdata?.area}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              width: "80px",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                fontFamily: "baloo 2",
              }}
            >
              Type:
            </Typography>
            <Typography
              sx={{
                fontSize: "23px",
                fontWeight: "bold",
                fontFamily: "anek bangla",
                textTransform: "capitalize",
                marginLeft: 1,
                marginTop: 0.3,
              }}
            >
              {searchdata?.subCategory}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mb: "4rem" }}>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              scrollBehavior: "auto",
              flexBasis: "64%",
              padding: "0 0 0 6rem",
            }}
          >
            {result?.length !== 0 ? (
              // result?.map((prop) => (
              //   <SearchCard
              //     title={prop.title}
              //     price={prop.price}
              //     id={prop._id}
              //     key={prop._id}
              //   />
              // ))
              <PropertySlider Properties={result} />
            ) : (
              <Box
                sx={{
                  paddingTop: "5rem",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: "#1d3557",
                }}
              >
                Ops! No Results Found!
              </Box>
            )}
            {/* <SearchCard /> */}
          </Box>
          <Box sx={{ flexBasis: "35%" }}>
            <Typography variant="h4">
              {/* Advertisments here */}
              <img
                src="./../assets/img/banners/ad-1.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />

              {result?.length > 5 ? (
                <img
                  src="./../assets/img/banners/ad-2.jpeg"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              ) : (
                ""
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Search;

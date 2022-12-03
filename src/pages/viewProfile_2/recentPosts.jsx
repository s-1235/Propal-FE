import { Grid, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPropertiesOfAUser } from "../../Store/api";
import PostCard from "./postCard";
const RecentPosts = () => {
  const [propertyData, setPropertyData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const dumy = async () => {
      const data = await getPropertiesOfAUser(id);
      setPropertyData(data?.data?.data.docs);
      console.log(data);
      console.log(data?.data?.data.docs);
    };
    dumy();
  }, [id]);
  return (
    <Grid display="flex" flexDirection="column">
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 700,
          fontFamily: "Roboto",
          textTransform: "capitalize",
          color: "rgb(52, 71, 103)",
          lineHeight: 1.5,
          letterSpacing: "1px",
          marginLeft: 4,
        }}
      >
        Recent Posts
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 23,
          marginTop: 2,
        }}
      >
        {propertyData && propertyData.length > 3 ? (
          propertyData?.slice(0, 3).map((property) => {
            return (
              <PostCard
                Id={property.id}
                Description={property.description}
                Images={property.images}
                Name={property.name}
              />
            );
          })
        ) : !propertyData ? (
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "Roboto",
              textTransform: "capitalize",
              color: "rgb(52, 71, 103)",
              lineHeight: 1.5,
              letterSpacing: "1px",
            }}
          >
            He does'nt post anything yet!
          </Typography>
        ) : (
          propertyData?.map((property) => {
            return (
              <PostCard
                Id={property.id}
                Description={property.description}
                Images={property.images}
                Name={property.name}
              />
            );
          })
        )}
      </Box>
    </Grid>
  );
};
export default RecentPosts;

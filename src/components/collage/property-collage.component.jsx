import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
export default function PropertyCollage({ images }) {
  console.log("xxxxx", images);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "30rem",
        marginTop: 15,
      }}
    >
      <Carousel
        // showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
        statusFormatter={(current, total) =>
          `Current slide: ${current} / Total: ${total}`
        }
        autoplay
        axis="vertical"
        swipeable={true}
        emulateTouch={true}
      >
        {images?.map((path, i) => (
          <Box sx={{ height: "30rem", width: "80vw", borderRadius: "40rem" }}>
            <img
              src={`http://localhost:6969/img/properties/${path}`}
              loading="lazy"
              style={{ borderRadius: "20px" }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

// const itemData = [
//   {
//     img: 'https://www.graana.com/blog/wp-content/uploads/2022/03/2d9eda99cc692078d0df2da61b157bb6.jpg',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://www.graana.com/blog/wp-content/uploads/2022/03/db3969401ebc76c6cc405e8c9c832ca5-e1646908950530.jpg',
//     title: 'Burger',
//   },

//   {
//     img: 'https://www.graana.com/blog/wp-content/uploads/2022/03/d261c1cb1aeb14d1d129c7e3e77fb802.jpg',
//     title: 'Camera',
//   },
//   {
//     img: 'https://www.graana.com/blog/wp-content/uploads/2022/03/e9895933ccaa3408f98d534c1e129ede-e1646909019163.jpg',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://www.graana.com/blog/wp-content/uploads/2022/03/2d9eda99cc692078d0df2da61b157bb6.jpg',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://www.graana.com/blog/wp-content/uploads/2022/03/db3969401ebc76c6cc405e8c9c832ca5-e1646908950530.jpg',
//     title: 'Burger',
//   },
//   // {
//   //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//   //   title: 'Basketball',
//   // },
//   // {
//   //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//   //   title: 'Fern',
//   // },
//   // {
//   //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//   //   title: 'Mushrooms',
//   // },
//   // {
//   //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//   //   title: 'Tomato basil',
//   // },
//   // {
//   //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//   //   title: 'Sea star',
//   // },
//   // {
//   //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//   //   title: 'Bike',
//   // },
// ];

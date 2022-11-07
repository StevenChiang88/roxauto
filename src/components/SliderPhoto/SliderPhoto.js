import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,  
};
const SliderPhoto = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: 0,
          width: { xs: "360px", sm: "700px", md: "380px", lg: "430px" },
        }}
      >
        <Slider {...settings} >
          {props.Sliderphoto.map((item) => (
            <img
              style={{ width: "100%" }}
              src={require(`../../pictures/${item}`)}
              alt={item}
            />
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default SliderPhoto;

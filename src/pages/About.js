import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Shah's Kitchen</Typography>
        <p>
          We are here with the home made recipies where these have been the signature dishes in my home for years,
          Now its time for all of you to taste the most awaited tasty healthy and aromatic food ever. I am sure once
          eaten your hands start fragrating the same.
        </p>
        <br />
        <p>
        where every meal is crafted with love and care, just like mom used to make. Our kitchen is a haven for wholesome, delicious, and comforting dishes prepared using time-honored family recipes. We believe that there's something truly special about the taste of home-cooked food, and we're here to share that experience with you.

Our ingredients are carefully selected to ensure the highest quality, and many are sourced locally to support our community. From hearty stews to savory casseroles, from mouthwatering desserts to freshly baked bread, our menu offers a diverse range of flavors that will satisfy any craving.

Whether you're dining in, ordering takeout, or having a meal delivered to your doorstep, we promise a warm and welcoming experience that will transport you to the cozy atmosphere of your own kitchen. Join us at Homemade Kitchen for a taste of tradition, a dash of nostalgia, and a whole lot of flavor. We can't wait to serve you a homemade meal that feels just like coming home.


        </p>
      </Box>
    </Layout>
  );
};

export default About;

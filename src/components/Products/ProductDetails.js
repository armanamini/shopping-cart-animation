import React from "react";
import { useParams } from "react-router-dom";
import data from "../../utils/DummyData.json";
import { motion } from "framer-motion";
import { Backdrop } from "@mui/material";
import { useState } from "react";
import { createBrowserHistory } from "history";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BackArrow from "../../SVG/BackArrow";
import tripple from '../../images/tripple.jpg';
import apple from '../../images/applePicture.jpg';
import grape from '../../images/grapeFruit.jpg';
const ProductDetails = (props) => {



  const [open, setOpen] = useState(true);
  const params = useParams();
  const history = createBrowserHistory();
  const id = params.id;
  const newData = data[id - 1];
  const { img, title, price, description } = newData; 
  const handleClose = () => {
    setOpen(false);
    history.go(-1);
  };

  return (
    <Backdrop
      sx={{
        color: `background: hsla(177, 53%, 55%, 1);
       background: linear-gradient(45deg, hsla(177, 53%, 55%, 1) 10%, hsla(177, 52%, 73%, 1) 90%);      
       background: -moz-linear-gradient(45deg, hsla(177, 53%, 55%, 1) 10%, hsla(177, 52%, 73%, 1) 90%);     
       background: -webkit-linear-gradient(45deg, hsla(177, 53%, 55%, 1) 10%, hsla(177, 52%, 73%, 1) 90%);      
       filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#50C9C3", endColorstr="#96DEDA", GradientType=1 )`,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <motion.div
        animate={{
          y: -100,
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "55px",
          marginTop: "250px",
        }}
      >
        <p
          onClick={handleClose}
          style={{
            cursor: "pointer",
            display: "flex",
            direction: "row",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <BackArrow />
          Back To Home
        </p>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image={img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              {price}
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
    </Backdrop>
  );
};

export default ProductDetails;

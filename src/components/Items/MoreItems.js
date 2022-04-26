import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import ItemAddForm from "../../utils/ItemAddForm";
import style from "./Items.module.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Roundcircle from "../../SVG/Round_circle";
import { useState } from "react";
import { motion } from "framer-motion";




const MoreItems = (props) => {
const [isBs, setIsBs] = useState(false);
const [isPriceBs, setPriceBs] = useState(false);
  const cartCtx = useContext(CartContext);
  const { item } = props;
  const { id, title, price, img, description } = item;
  const priceValue = `$${price}`;
  const [showDetails, setShowDetails] = useState(false);
  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      title,
      amount: amount,
      price,
    });
  };

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "33px",
    maxHeight: "33px",
  });
  const handleShowDetail = () => {
    setShowDetails(!showDetails);
  };
  const setBs = isBs ? 'linear-gradient(44.39deg, #50C9C3 6.16%, #96DEDA 94.73%)' : 'white'
  

  return (
    
    <motion.div whileHover={{ scale: 1.1 }}  onHoverStart={()=>{setIsBs(true); setPriceBs(true)}} onHoverEnd={() => {setIsBs(false); setPriceBs(false)}} >
    <Paper
    className={style.container}
      sx={{
        p: "0 50px",
        margin: "10px 0",
        position: "relative",
        left: "0",
        maxWidth: '300px',
        flexGrow: 1,
        borderRadius: "32px",
        background:`${setBs}`, 
      }}
      component="div"
    >
      <Grid container xs={12} md={12} lg={12}  >
        <Grid
          xs="auto"
          container
          direction="row-reverse"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ marginRight: "30px", gap: "2" }}
        >
          <ButtonBase sx={{ width: 40, height: 40,background: "#F6F6F6",borderRadius:'50%'}}>
            <Img alt="complex" src={img} />
          </ButtonBase>

          <Typography
            variant="subtitle1"
            sx={{ transform: "rotate(90deg)" }}
            component="div"
          >

            {isPriceBs ? <p style={{background:'#25A2A6',borderRadius:'30px' , padding:'2px 5px',color:'white'}}>{priceValue}</p>: <p>{priceValue}</p>}

          </Typography>
        </Grid>

        <Grid item xs={8} sm container direction="row">
          <Grid item xs="auto" sx={{ marginRight: "10px" }}>
            <Typography gutterBottom component="div">
              <h3 style={{ marginBottom: "0px" }}>{title}</h3>
              <small>{description}</small>
            </Typography>
          </Grid>

          <Grid item xs={1} sx={{ marginTop: "50%", marginLeft: "20px" }}>
            <Typography sx={{ cursor: "pointer" }} variant="body2">
              <Grid onClick={handleShowDetail}>
                <Roundcircle />
              </Grid>

              {showDetails && (
                <div style={{ position: "absolute",display:'flex',direction:'row',top:'65%',left:"18%" }}>
                  <Link to={`/productDetails/${id}`} style={{marginRight:'10px'}}><h4>details</h4></Link>
                  <ItemAddForm onAddToCart={addItemToCartHandler} />
                </div>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </motion.div>
  );
};

export default MoreItems;

import React from "react";
import ItemAddForm from "../../utils/ItemAddForm";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Roundcircle from "../../SVG/Round_circle";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

const Items = (props) => {
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
  const handleShowDetail = () => {
    setShowDetails(!showDetails);
  };
  return (
    <motion.div whileHover={{ scale: 1.1 }} >
        <Card sx={{ maxWidth: 345 , margin:'0 20px',position:'Relative',borderRadius:'50px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="348"
        width="320"
        image={img}
      />
      <CardContent sx={{background: 'linear-gradient(313.37deg, #50C9C3 6.19%, #96DEDA 95.6%)',marginTop:'-60px',boxShadow: "-9px 0px 29px 0px #59C5BA65"
, borderRadius:"50px" ,padding:"30px 10px"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#f7f7f7'}}>
        <h3>{title}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color:'#f7f7f7'}}>
        {description}
        
        </Typography>
        <CardActions sx={{justifyContent:'space-between'}} >
        <p style={{color:'#f7f7f7'}}>{priceValue}</p>
        <Typography sx={{ cursor: "pointer" }} variant="body2">
              <Grid onClick={handleShowDetail}>
                <Roundcircle />
              </Grid>

              {showDetails && (
                <div style={{ position: "absolute",display:'flex',direction:'row',top:'90%',left:"5%" }}>
                  <Link to={`/productDetails/${id}`} style={{marginRight:'10px'}}><h4>details</h4></Link>
                  <ItemAddForm onAddToCart={addItemToCartHandler} />
                </div>
              )}
            </Typography>
      </CardActions>

      </CardContent>
      
    </Card>
    </motion.div>

  );
};

export default Items;

import React from "react";
import CartButton from "../../utils/CartButton";
import Search from "../../utils/Search";
import Data from '../../utils/DummyData.json'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';




const Navbar = (props) => {
  return (
       <Box sx={{ flexGrow: 1 , position:"absolute" , width:'100%',top:"0",zIndex:'999999'}}>
      <AppBar sx={{backgroundColor:'transparent',boxShadow:'none'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color: "#0B7171",marginLeft:'30px' }}>
          <h2>Lotus</h2>
          </Typography>
          <Search placeholder='Search' data={Data}/>
          <CartButton onClick={props.onShowCart} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

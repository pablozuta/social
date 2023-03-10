import { AppBar, Box, Toolbar, styled, Typography, Avatar, ListItemButton, Switch, Button } from "@mui/material";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})



const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));



const Navbar = ({ mode, setMode }) => {
  //implementa el estado del menu de version movil
  const [open, setopen] = useState(false)


  return (

    <AppBar position="sticky" sx={{ bgcolor: "#A2CDCB" }}>

      <StyledToolbar>

        <Typography component={Link} to="/" variant="h6" sx={{ textDecoration: "none", color: "inherit", display: { xs: "none", sm: "block" } }}>
          SOCIAL APP
        </Typography>

        {/* este icono se mostrara solo en version movil */}
        <MenuItem component={Link} to="/"> <AirportShuttleIcon from sx={{ display: { xs: "block", sm: "none" } }} />
        </MenuItem>



        <Icons>

          <Avatar sx={{ width: 30, height: 30 }} alt="Cindy Baker" src="https://avatars.githubusercontent.com/u/87880432?v=4"
            onClick={(e) => setopen(true)} />

        </Icons>


        <UserBox onClick={(e) => setopen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} alt="Cindy Baker" src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Typography variant="span" className="menu">MENU</Typography>
        </UserBox>

      </StyledToolbar>


      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setopen(false)}

        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem component={Link} to="/">Home</MenuItem>
        <MenuItem component={Link} to="/groups">Groups</MenuItem>
        <MenuItem component={Link} to="/market">Market</MenuItem>
        <MenuItem component={Link} to="/profile">Profile</MenuItem>
        <MenuItem onClick={(e) => setopen(false)}>Close</MenuItem>

        <ListItemButton>
          <Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")} />
        </ListItemButton>

      </Menu>

    </AppBar>
  )
}

export default Navbar
import { AppBar, Box, Toolbar, styled, Typography, InputBase, Avatar, Button } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import  { useState } from 'react';



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0.3rem 10px",
  borderRadius: theme.shape.borderRadius,
  width: "38%"
}));

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



const Navbar = () => {
  const [open, setopen] = useState(false)
  return (

    <AppBar position="sticky"  sx={{ bgcolor: "pink" }}  >
      <StyledToolbar>
        <Typography variant="h6" color="#121212"  sx={{ display: { xs: "none", sm: "block" }}}>SOCIAL APP </Typography>

        <AirportShuttleIcon  from sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder="search..." /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} alt="Cindy Baker" src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          onClick={(e)=>setopen(true)}
          />
        </Icons>
        <UserBox onClick={(e)=>setopen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} alt="Cindy Baker" src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Typography variant="span">Alice</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setopen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      
    </AppBar>
  )
}

export default Navbar
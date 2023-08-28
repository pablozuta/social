import { AppBar, Box, Toolbar, styled, Typography, Avatar } from "@mui/material";
import Menu from '@mui/material/Menu';
import Login from './Login';
import Logout from './Logout'
import MenuItem from '@mui/material/MenuItem';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { Link } from "react-router-dom";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});



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
  const { isAuthenticated } = useAuth0();
  //implementa el estado del menu de version movil
  const [open, setopen] = useState(false);

  function cerrarMenu() {
    setopen(false);
  }


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
        {isAuthenticated? <Logout/> : <Login />}

          {/*    <Avatar sx={{ width: 30, height: 30 }} alt="pablo avatar" src="https://avatars.githubusercontent.com/u/87880432?v=4"
            onClick={(e) => setopen(true)} /> */}

        </Icons>


        <UserBox onClick={(e) => setopen(true)}>
          {/* <Avatar sx={{ width: 30, height: 30 }} alt="pablo avatar" src="https://avatars.githubusercontent.com/u/87880432?v=4" /> */}
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
        <MenuItem component={Link} to="/" onClick={cerrarMenu}>Home</MenuItem>
        <MenuItem component={Link} to="/groups" onClick={cerrarMenu}>Groups</MenuItem>
        <MenuItem component={Link} to="/market" onClick={cerrarMenu}>Market</MenuItem>
        <MenuItem component={Link} to="/profile" onClick={cerrarMenu}>Profile</MenuItem>


      </Menu>

    </AppBar>
  );
};

export default Navbar;

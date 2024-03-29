import { Box, Switch } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <Box  flex={0} p={1.5} sx={{ display: { xs: "none",md: "none", lg: "block" }, marginLeft: "-1rem" }}>
      <Box   >
        <List className="sidebar-menu">

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/groups">
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/market">
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Market" />
            </ListItemButton>
          </ListItem>

      
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/profile">
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

        </List>

      </Box>

    </Box>
  )
}

export default Sidebar;
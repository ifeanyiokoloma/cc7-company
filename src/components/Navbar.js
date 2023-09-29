import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { navItems } from "../data/navItems";
import { Link } from "react-router-dom";
import SignUpBtn from "./SignUpBtn";

const drawerWidth = 240;

function DrawerAppBar({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LOGO
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item.name}>
            <ListItemButton>
              <Link
                style={{
                  textTransform: "capitalize",
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
                to={item.link}
              >
                {item.name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{display: "flex", justifyContent: "space-between", color: "white"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>


          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>


          <Box component="ul" sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map(item => (
              <ListItem key={item.name}>
                <ListItemButton>
                  <Link
                    style={{
                      textTransform: "capitalize",
                      width: "100%",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </Box>

          <SignUpBtn />
        </Toolbar>
      </AppBar>




      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default DrawerAppBar;

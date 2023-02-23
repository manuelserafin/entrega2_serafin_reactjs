import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logo from "../../assets/logo.png";
import CardWidget from "./CartWidget";
import { NavbarItems } from "./NavbarItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  const style = {
    logo: {
      width: 60,
      height: "100%",
    },
    bgColor: {
      backgroundColor: "#231F20",
    },
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={style.bgColor}>
          <Toolbar>
            <Link to={"/"}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img src={logo} style={style.logo} />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CHIQUITITO CAFE
            </Typography>
            <NavbarItems />
            <Link to={"/cart"}>
              <CardWidget />
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function Navbar() {
  return (
    <div >
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 10 }}
          >
            <div variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a href="https://ibb.co/x7Z3Wzq">
                <img
                  src="https://i.ibb.co/x7Z3Wzq/Dr.png"
                  alt="Dr"
                  border="0"
                  style={{ height: "40px", width: "40px" }}
                />
              </a>
            </div>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          <Typography style={{color: 'blue', marginRight: '7rem'}}>Help?</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

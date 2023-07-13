import { AppBar, Box, Container, CssBaseline, Grid, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";


const Layout: FC = () => {
   return <>
       <CssBaseline />
       <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        sx={{
          background: "#F7F8F9",
          flexGrow: 1,
          minHeight: "93vh"

        }}
        container
        component={"main"}
      >    
        <Outlet />
        </Grid> 
   </>
}

export default Layout;
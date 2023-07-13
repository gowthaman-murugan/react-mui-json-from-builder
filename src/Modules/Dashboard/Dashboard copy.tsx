import { Box, Link, Paper, Toolbar } from "@mui/material";
import { FC, SyntheticEvent, useState } from "react";
import { Route, Routes,  Link as RouterLink, useLocation, Navigate, Outlet } from "react-router-dom";
import UIView from "./UIView";


 
 
  
const Dashboard1: FC = () => {
    const [value, setValue] = useState(0);
    const location = useLocation()
    const sections = [
        {
            title: "Ui",
            url: "ui"
        },
        {
            title: "Schema",
            url: "schema"
        },
        {
            title: "UiSchema",
            url: "uischema"
        },
        {
            title: "data",
            url: "data"
        }
    ]


  return (
    <>
    {/* <Box sx={{ width: '100%' }}>
        <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            component={RouterLink}
            noWrap
            key={section.title}
            variant="body2"
            to={section.url}
            sx={{ p: 1}}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Paper
          elevation={0}
          sx={{
             p: "40px",
            borderRadius: "16px",
            marginTop: "10px !important",
            margin: "0 auto",
           
          }}
        >
         <Outlet />
      </Paper>
      </Box> */}
     
      </>
  );
}
export default Dashboard1
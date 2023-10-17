import { Box, Button } from '@mui/material';
import React from 'react'
import { Outlet, Link, useLocation } from "react-router-dom";

const RootLayout = () => {
    const location = useLocation();
  return (
    <>
        <Box backgroundColor={'azure'} sx={{height:'10vh'}}>
        <Link to="/caged-in/feed"><Button color='error' variant={location.pathname == "/caged-in/feed" ?'contained': 'outlined'}>Feed</Button></Link>
        <Link to="/caged-in"><Button color='error' variant={location.pathname == "/caged-in" ?'contained': 'outlined'}>Profile Image</Button></Link>
        </Box>
        <Box height={'80vh'}><Outlet /></Box>
        <Box backgroundColor={'orange'} height={'10vh'} sx={{}}><h2>Footer</h2></Box>
    </>
  )
}

export default RootLayout
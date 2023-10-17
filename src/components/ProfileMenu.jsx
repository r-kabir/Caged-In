import React from 'react'
import { Box,Button } from '@mui/material'
import { Link, useLocation } from 'react-router-dom';

const ProfileMenu = () => {
    const location = useLocation();
  return (
    <>
        <Box height={'5vh'} boxShadow={1}>
        <Link to="/caged-in"><Button color='error' variant={location.pathname == "/caged-in" ?'contained': 'outlined'}>Profile</Button></Link>
        <Link to="/caged-in/friends"><Button color='error' variant={location.pathname == "/caged-in/friends" ?'contained': 'outlined'}>Friends</Button></Link>
        <Link to="/caged-in/posts"><Button color='error' variant={location.pathname == "/caged-in/posts" ?'contained': 'outlined'}>Posts</Button></Link>
        </Box>
    </>
  )
}

export default ProfileMenu
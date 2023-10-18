import { Box, Button } from '@mui/material';
import React, {useEffect} from 'react'
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import { useSelector, useDispatch } from 'react-redux';
import { reduxuserdata } from '../slices/user/userSlice'

const RootLayout = () => {

  let currentuser = useSelector((state)=>state.storeduser.value)
  let dispatch = useDispatch()
  const auth = getAuth();
  let bokNavigate = useNavigate();

  const location = useLocation();

  useEffect(()=>{
    if (currentuser == null){
      bokNavigate("/login");
    }
  },[])

  let handleSignOut =() => {
    signOut(auth).then(() => {
        localStorage.removeItem("localuserdata")
        bokNavigate('/login')
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });          
  }

  return (
    <>
        <Box backgroundColor={'azure'} sx={{height:'10vh'}}>
        <Link to="/caged-in/feed"><Button color='error' variant={location.pathname == "/caged-in/feed" ?'contained': 'outlined'}>Feed</Button></Link>
        <Link to="/caged-in"><Button color='error' variant={location.pathname == "/caged-in" ?'contained': 'outlined'}>Profile Image</Button></Link>
        <p>User Name</p>
        <Button color='inherit' variant='contained' onClick={handleSignOut}>Sign Out</Button>
        </Box>
        <Box height={'80vh'}><Outlet /></Box>
        <Box backgroundColor={'orange'} height={'10vh'} sx={{}}><h2>Footer</h2></Box>
    </>
  )
}

export default RootLayout
import React from 'react'
import { useState } from 'react';
import {Button, Box, TextField, CircularProgress, Alert, Stack} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from "../assets/Logo.png"

let bokInitialValues = {
  email:"",
  fullName:"",
  password:"",
  loading:false,
  inputError:""
}

const Registration = () => {
  let [bokValues, setBokValues] = useState(bokInitialValues);

  let handleBokBokValues = (e) => {
    setBokValues({
      ...bokValues,
      [e.target.name] : e.target.value
    })
  }

  let handleSubmit =()=> {
    let {email, fullName, password} = bokValues;

    if(!email){
      setBokValues({
        ...bokValues, inputError:"Please Enter Your Email"
      })
      return;
    }
    if(!fullName){
      setBokValues({
        ...bokValues, inputError:"Please Enter Your Full Name" 
      })
      return;
    }
    if(!password){
      setBokValues({
        ...bokValues, inputError:"Please Enter Your Password" 
      })
      return;
    }
    setBokValues({
      ...bokValues,
      loading : true
    })
  }
  return (
    <>
      <Box sx={{height:"100vh", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"cornsilk"}}>
        <Stack spacing={3} boxShadow={4} sx={{padding:"5vh"}}>
          <img src={logo} height={70} width={70}/>
          <h2>Get Started With Easy Registration !</h2>
          <p>Free Registration And You Can Enjoy It !!</p>
          <TextField onChange={handleBokBokValues} value ={bokValues.email} name="email" label="Email Address" variant="outlined" color='warning' />
          {bokValues.inputError.includes("Email") && <Alert variant="filled" severity="error" sx={{ py:"0px"}}>{bokValues.inputError}</Alert>}
          <TextField onChange={handleBokBokValues} value ={bokValues.fullName} name="fullName" label="Full Name" variant="outlined" color='warning' />
          {bokValues.inputError.includes("Full Name") && <Alert variant="outlined" severity="error" sx={{ py:"0"}}>{bokValues.inputError}</Alert>}
          <TextField onChange={handleBokBokValues} value ={bokValues.password} name="password" label="Password" variant="outlined" color='warning' type='password' />
          {bokValues.inputError.includes("Password") && <Alert variant="outlined" severity="error" sx={{ py:"0"}}>{bokValues.inputError}</Alert>}
          {bokValues.loading ?
            <CircularProgress color="warning" />
              :
            <Button onClick={handleSubmit} variant="contained" color='warning'>Sign Up</Button>
          }
          <Alert sx={{py:0, px:0}}>
              Already Have an Account?<strong><Link to='/login'> Login</Link></strong>
          </Alert>
        </Stack>
      </Box>
    </>
  )
}

export default Registration
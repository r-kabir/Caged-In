import React from 'react'
import { useState } from 'react';
import {Button, Box, TextField, CircularProgress, Alert, Stack} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from "../assets/Logo.png"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { reduxuserdata } from '../slices/user/userSlice'

let bokInitialValues = {
  email:"",
  password:"",
  loading:false,
  inputError:""
}

const Login = () => {
  const auth = getAuth();
  let bokNavigate = useNavigate();
  let dispatch = useDispatch();
  let [bokValues, setBokValues] = useState(bokInitialValues);

  let handleBokBokValues = (e) => {
    setBokValues({
      ...bokValues,
      [e.target.name] : e.target.value
    })
  }

  let handleSubmit =()=> {
    let {email, password} = bokValues;

    if(!email){
      setBokValues({
        ...bokValues, inputError:"Please Enter Your Email"
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
    signInWithEmailAndPassword(auth, email, password).then((bokuser)=>{
      setBokValues({
        email:"",
        password:"",
        loading : false
      })
      if(bokuser.user.emailVerified)
        {
          dispatch(reduxuserdata(bokuser.user));
          localStorage.setItem("localuserdata", JSON.stringify(bokuser.user))
          bokNavigate("/caged-in");
        }
      else{
        toast("Please Verifiy Your Email Address")
        setBokValues({
        ...bokValues,
        password:"",
        loading: false
        })
      };
    }).catch((error) => {
      const errorCode = error.code;

      if(errorCode.includes("auth/wrong-password")){
        setBokValues({
        ...bokValues,
        password:"",
        loading: false
        })
        toast("!!Wrong Password!!")
        
      }
      if(errorCode.includes("auth/user-not-found")){
        setBokValues({
        ...bokValues,
        email:"",
        password:"",
        loading: false
        })
        toast("!!You Are Not Registered Yet!!")
        
      }
    });
  }
  return (
    <>
      <Box sx={{height:"100vh", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"cornsilk"}}>
        <Stack spacing={3} boxShadow={4} sx={{padding:"5vh"}}>
          <img src={logo} height={65} width={65}/>
          <h2>Login</h2>
          <p>Free Registration And You Can Enjoy It !!</p>
          <TextField onChange={handleBokBokValues} value ={bokValues.email} name="email" label="Email Address" variant="outlined" color='warning' />
          {bokValues.inputError.includes("Email") && <Alert variant="filled" severity="error" sx={{ py:"0px"}}>{bokValues.inputError}</Alert>}
          <TextField onChange={handleBokBokValues} value ={bokValues.password} name="password" label="Password" variant="outlined" color='warning' type='password' />
          {bokValues.inputError.includes("Password") && <Alert variant="outlined" severity="error" sx={{ py:"0"}}>{bokValues.inputError}</Alert>}
          {bokValues.loading ?
            <CircularProgress color="warning" />
              :
            <Button onClick={handleSubmit} variant="contained" color='warning'>Login</Button>
          }
          <Alert sx={{py:0, px:0}}>
              Don't Have an Account?<strong><Link to='/'>Register</Link></strong>
          </Alert>
        </Stack>
      </Box>
    </>
  )
}

export default Login
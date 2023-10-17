import React from 'react'
import { Box,Button } from '@mui/material'
import ProfileCover from '../components/ProfileCover'
import ProfileMenu from '../components/ProfileMenu'
const Profile = () => {
    
  return (
    <>
    <ProfileCover />
    <ProfileMenu />
    <Box>About</Box>
    <Box>Projects</Box>
    <Box>Experience</Box>
    <Box boxShadow={1}>Education</Box>
    </>
  )
}

export default Profile
import React from 'react'
import { Box, typography } from '@mui/system'
import { Typography } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LogoCog from '../Resources/Logos/Logo-White.png'
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <div>
      <Box color= "primary" sx={{position: 'fixed' , backgroundColor:'#007fd3' ,width:'100%', minHeight: 75, bottom:0, display:'flex', flexDirection:'row'}}>
        <Typography color='white' sx={{display :'flex', position:'relative', ml:3, bottom:-30}}> <CopyrightIcon sx={{mr:1}}/>COGNIRA</Typography>
        <Box sx={{display:'flex', flexDirection:'row', position:'relative', left: '35%',bottom:-30, color:'white'}}>
            <Link href="https://www.facebook.com/cogniratn" color="inherit" rel="noopener"><FacebookRoundedIcon/></Link>
            <Link href="https://www.instagram.com/cogniratunisia" color="inherit"><InstagramIcon/></Link>
            <Link href="https://www.linkedin.com/company/cognira/mycompany/" color="inherit"><LinkedInIcon/></Link>
            <Link href="https://cognira.com/life-at-cognira/" color="inherit"><img src={LogoCog} width={100} height={20} style={{marginLeft: 10}}/></Link>
        </Box>
        <Typography color='white' sx={{display :'flex', position:'relative', ml:3, bottom:-30, left:'70%'}}> August, 2022</Typography>

      </Box>
    </div>
  )
}

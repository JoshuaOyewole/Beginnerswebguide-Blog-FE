import React, { useState } from "react";
import {
  AppBar,
  Link as MUILink ,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme, 
} from "@mui/material";
import WebhookIcon from '@mui/icons-material/Webhook';
import DrawerComp from "./Drawer";
import Link from 'next/link'

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const customHeight = isMatch ? '0.7em' : '1em';
  const customWidth = isMatch ? '0.7em' : '1em';
  const customPR = isMatch ? '1rem' : '6rem';
  const customPL = isMatch ? '6%' : '8%';
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#fff", color:"#141718", px:`${customPR}`}}  position='sticky'  >
        <Toolbar>
        <Link href='/'>
            <a style={{display:'flex', color:'#333', alignItems:'center'}}>
            <WebhookIcon sx={{ transform: "scale(2)", width:`${customWidth}`, height:`${customHeight}` }} />
          <Typography sx={{ fontSize: "1.1rem", paddingLeft: `${customPL}`, fontWeight:'600' }}>
                Beginnerswebguide
           </Typography>
            </a>
          </Link>
          
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              {/* <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
               <Tab label="Home" />
                <Tab label="Categories" />
                <Tab label="About Us" />
                <Tab label="Contact" /> 
              </Tabs> */}
              <Tabs
                sx={{ marginLeft: "auto", justifyContent:'center', alignItems:'center' }}
                indicatorColor="secondary"
                textColor="#000"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                  <Link href="/" passHref>
                         <MUILink color='#000' underline='hover' sx={{fontFamily:'montserrat', textTransform:'uppercase', display:'inline-block', 
                         pr:'2rem',
                         fontWeight:'600'}}>Home</MUILink>
                    </Link>
                    <Link href="/categories" passHref>
                         <MUILink color='#000' underline='hover' sx={{fontFamily:'montserrat', textTransform:'uppercase', display:'inline-block', pr:'2rem',fontWeight:'600'}}>Categories</MUILink>
                    </Link>
                    <Link href="/about" passHref>
                         <MUILink color='#000' underline='hover' sx={{fontFamily:'montserrat', textTransform:'uppercase', display:'inline-block', pr:'2rem',fontWeight:'600'}}>About</MUILink>
                    </Link>
                    <Link href="/contact" passHref>
                         <MUILink color='#000' underline='hover' sx={{fontFamily:'montserrat', textTransform:'uppercase',  display:'inline-block', pr:'2rem',fontWeight:'600'}}>Contact Us</MUILink>
                    </Link>
              </Tabs>
              {/* <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
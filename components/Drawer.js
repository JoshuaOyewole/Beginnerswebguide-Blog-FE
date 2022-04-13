import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Link as MUILink,
  Typography
} from "@mui/material";
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@mui/icons-material/Youtube';
import MenuIcon from '@mui/icons-material/Menu';
const pages = [{name: 'HOME', url: '/'},{name: 'CATEGORIES', url: '/categories'},{name: 'ABOUT', url: '/about'},{name: 'CONTACT US', url: '/contact'}]



const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{width:"74vw", flexDirection:'column', display:'flex', alignItems:'center', my:'2rem'}} >
          {pages.map((page, index) => (
            <ListItemButton key={index}  >
                <Link href={`${page.url}`} passHref>
                         <MUILink color='#000' underline='hover' sx={{fontFamily:'Montserrat', textTransform:'uppercase', display:'inline-block', 
                         pr:'2rem',
                         fontWeight:'600'}}>{page.name}</MUILink>
                    </Link>
            </ListItemButton>
          ))}
          <List sx={{display:'flex', alignItems:'center'}}>
              <ListItem>
             <Typography color='#212121' fontWeight='600'> Follow us on: </Typography> 
            <TwitterIcon color='#b71c1c' fontSize='medium' />
            <FacebookIcon color='primary' />
            <YoutubeIcon color='#b71c1c' />
            </ListItem>
          </List>
         
         
        </List>
               
      </Drawer>
      <IconButton
        sx={{ color: "#141718", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="#000" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
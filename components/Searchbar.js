import React from 'react'
import {Box, TextField,Button} from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar() {
  return (
      <Box component='section' sx={{display:'flex', mt:4}}>
            <TextField
                label="Search Topics"
                InputProps={{
                type: 'search',
                }}
                size='small'
            />
        <Button
            onClick={() => {
            alert('clicked');
        }}
        variant="contained" color="primary" size='small'>
            Search  <SearchIcon />
        </Button>
      </Box>
    
  )
}
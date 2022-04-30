import React from 'react'
import {Grid, TextField, Button} from '@mui/material'



export default function ContactForm() {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
        <br />  
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} lg={6}>
        <label > Your Name:</label><br />
            <TextField id="outlined-basic" variant="outlined" fullWidth name='name'/>
        
        </Grid>
        <Grid item xs={12} lg={6} mt={{xs:'1rem', lg: '0'}}>
             <label> Email:</label> <br />
            <TextField id="outlined-basic" variant="outlined" name='email' fullWidth/> <br />
        </Grid>
        <Grid item xs={12} lg={6} mt={{xs:'1rem', lg:'0'}}>
            <label> Message:</label> <br />
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                fullWidth
                name='message'
            />
        </Grid>
        <Grid item xs={12} lg={12} mt={{xs:'1rem'}}>

            <Button variant="contained" size="large" type='submit'>
                Submit
            </Button>
        </Grid>
        
    </Grid>
</form>
  )
}

import React from 'react';
import { Typography,AppBar,Button,CssBaseline,Grid,Toolbar,Container } from '@mui/material';
import { CameraAlt } from '@mui/icons-material';
import Cards from '../reUseComponent/Cards';
import './albumPage.css'


function AlbumPage(){
    return(
        <> 
        <CssBaseline/>
        <AppBar position='relative'>
           <Toolbar>
            <CameraAlt className='icon'/>
            <Typography variant='h6'>PhotoAlbum</Typography>
           </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth='sm' className='container'>
                 <Typography variant='h2' color='textPrimary' align='center' gutterBottom>
                    PhotoAlbum
                 </Typography>
                 <Typography variant='h5' color='textSecondary' align='center' paragraph>
                 photo albums keep your memories fresh and your photos safe. If you travelled solo a photo album is the perfect way to share your memories with your friends and family. Plus, they're a lot of fun to look through!
                 </Typography>
                 <div>
                    <Grid container spacing={2} justifyContent='center'>
                      <Grid item>
                        <Button variant='contained' color='primary'className='button'>See my photos</Button>
                      </Grid>
                      <Grid item>
                        <Button variant='outlined' color='primary' className='button'>Secindary actions</Button>
                      </Grid>
                    </Grid>
                 </div>
                </Container>
            </div>
            <Container maxWidth='lg'>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                 <Cards/>
                </Grid>
              </Grid>
            </Container>
        </main>
        <footer className='footer'>
            <Typography variant='h6' align='center'>
               Footer
            </Typography>
            <Typography variant='subtitle1' align='center'>
               Somthing gose here!
            </Typography>
        </footer>
        </>
    )
}
export default AlbumPage;
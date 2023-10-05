import React from 'react';
import { Button,Typography,Card,CardMedia,CardActions,CardContent } from '@mui/material';

function Cards(){
    return(
        <>
                    <Card className='card'>
                      <CardMedia 
                      className='image'
                      image='https://source.unsplash.com/random'
                      title='image title'
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5'>
                            Heading
                        </Typography>
                        <Typography>
                          This is a media you can use this to describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small' color='primary'>View</Button>
                        <Button size='small' color='secondary'>Edit</Button>
                      </CardActions>
                    </Card>
        </>
    )
}
export default Cards;
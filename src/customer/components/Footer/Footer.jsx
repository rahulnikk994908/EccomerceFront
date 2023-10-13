import React from 'react'
import { Grid, Typography,Button } from '@mui/material'

const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10'
        container
        sx={{bgcolor:"black",color:'White',py:3}}>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Company</Typography>
                <div>
                <Button  className='pb-5' variant='h6'>About</Button>

                </div>
                <div>
                <Button  className='pb-5' variant='h6'>Blog</Button>

                </div>
                <div>
                <Button  className='pb-5' variant='h6'>Press</Button>

                </div>
                <div>
                <Button  className='pb-5' variant='h6'>Jobs</Button>

                </div>
                <div>
                <Button  className='pb-5' variant='h6'>Partners</Button>

                </div>
              

            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Solutions</Typography>
                <div>
                <Button  className='pb-5' variant='h6'>Marketing</Button>

                </div>
                <div>
                <Button  className='pb-5' variant='h6'>Analytics</Button>

                </div>
                <div>
                <Button  className='pb-5' variant='h6'>Commerce</Button>

                </div>
                <div>
                <Button  className='pb-5' variant='h6'>Insight</Button>

                </div>
                <div>
                <Button  className='pb-5' variant='h6'>Support</Button>

                </div>
              

            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Documentation</Typography>
                <div>
                <Button  className='pb-5' variant='h6'>Guides</Button>

                </div>
                <div>
                <Button  className='pb-5' variant='h6'>API Status</Button>

                </div>
        
              

            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Legal</Typography>
                <div>
                <Button  className='pb-5' variant='h6'>Claim</Button>

                </div>
                <div>
                <Button  className='pb-5' variant='h6'>Privacy</Button>

                </div>
                <div>
                <Button  className='pb-5' variant='h6'>Terms</Button>

                </div>
              

            </Grid>
            <Grid className=''item xs={12} >
                <Typography component='p' variant='body2' align='center'>
                    &copy; 2023 R&R . All rights reserved.
                </Typography>
                <Typography component='p' variant='body2' align='center'>
                    Traditional Dresses and Modern Choices.
                </Typography>
                <Typography component='p' variant='body2' align='center'>
                    Your Always Welcome.
                </Typography>
            </Grid>
        </Grid>


    </div>
  )
}

export default Footer
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const RecoveryEmail = () => {
    return (
        <Box sx={{
            margin: 0,
            width: '100%',
            minHeight: '100vh',
            backgroundImage: 'url("https://i.postimg.cc/L8BXS0GH/Rectangle-83.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'relative'
        }}>

            <Box sx={{
                backgroundColor: '#F2F6F9',
                position: 'absolute',
                height: '65%',
                width: { xs: '85%', md: '22%' },
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                paddingBlock: {xs:'45px', md:'60px'},
                paddingInline: {xs:'20px', md:'40px'},
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.25)'
            }}>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        style={{ width: '70px', height: '70px' }}
                        src='https://i.postimg.cc/LsDRwXNH/LOGO2-1.png'
                        alt=''
                        loading="lazy"
                    />
                    <Typography sx={{ fontWeight: '700', fontFamily: 'Khand, sans-serif', fontSize: '26px', color: '#232323' }}>REAL COST ESTIMATING INC</Typography>
                </Box>

                <Box sx={{ display: 'grid', gap: '30px' }}>
                    <Typography sx={{ textAlign: 'center', fontSize: '26px', fontWeight: '600', }} variant=''>Forgot Password ?</Typography>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '500', textAlign: 'start', marginBottom: '8px', fontFamily:'inherit'}}>Enter your registered email</Typography>
                        <TextField sx={{ backgroundColor: 'white', borderRadius:'10px'   }} fullWidth variant="outlined" />
                    </Box>
                    <Link to={'/otpvalidation'}>
                        <Button sx={{
                            background: 'linear-gradient(95.67deg, #4776E6 0%, #7B54E9 95.18%)',
                            textTransform: 'none',
                            fontWeight: '600',
                            fontFamily:'inherit'
                        }}
                            variant='contained'
                            fullWidth>
                            Get OTP
                        </Button>
                    </Link>
                </Box>

                <Box sx={{ width: '100%', display: 'grid', gap: '30px', textAlign: 'center' }}>
                    <Divider></Divider>
                    <Typography sx={{fontWeight:'600',  color:'#3153CD', fontFamily:'inherit'}}>Back to Login</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RecoveryEmail
import React from 'react'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const SuccessScreen = () => {
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

                <Box sx={{
                    display: 'grid',
                    gap: '20px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width:'70%'
                }}>
                    <Box sx={{ marginInline: 'auto' }}>
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.6423 21.6886C46.8471 20.8575 46.0245 20.0011 45.7144 19.248C45.4275 18.5583 45.4106 17.415 45.3937 16.3076C45.3621 14.2488 45.3284 11.9159 43.7062 10.2937C42.0841 8.67164 39.7512 8.63789 37.6924 8.60625C36.585 8.58938 35.4417 8.5725 34.752 8.28562C34.001 7.97555 33.1425 7.15289 32.3114 6.35766C30.8559 4.95914 29.2022 3.375 27 3.375C24.7978 3.375 23.1462 4.95914 21.6886 6.35766C20.8575 7.15289 20.0011 7.97555 19.248 8.28562C18.5625 8.5725 17.415 8.58938 16.3076 8.60625C14.2488 8.63789 11.9159 8.67164 10.2937 10.2937C8.67164 11.9159 8.64844 14.2488 8.60625 16.3076C8.58938 17.415 8.5725 18.5583 8.28562 19.248C7.97555 19.999 7.15289 20.8575 6.35766 21.6886C4.95914 23.1441 3.375 24.7978 3.375 27C3.375 29.2022 4.95914 30.8538 6.35766 32.3114C7.15289 33.1425 7.97555 33.9989 8.28562 34.752C8.5725 35.4417 8.58938 36.585 8.60625 37.6924C8.63789 39.7512 8.67164 42.0841 10.2937 43.7062C11.9159 45.3284 14.2488 45.3621 16.3076 45.3937C17.415 45.4106 18.5583 45.4275 19.248 45.7144C19.999 46.0245 20.8575 46.8471 21.6886 47.6423C23.1441 49.0409 24.7978 50.625 27 50.625C29.2022 50.625 30.8538 49.0409 32.3114 47.6423C33.1425 46.8471 33.9989 46.0245 34.752 45.7144C35.4417 45.4275 36.585 45.4106 37.6924 45.3937C39.7512 45.3621 42.0841 45.3284 43.7062 43.7062C45.3284 42.0841 45.3621 39.7512 45.3937 37.6924C45.4106 36.585 45.4275 35.4417 45.7144 34.752C46.0245 34.001 46.8471 33.1425 47.6423 32.3114C49.0409 30.8559 50.625 29.2022 50.625 27C50.625 24.7978 49.0409 23.1462 47.6423 21.6886ZM36.6314 23.1314L24.8189 34.9439C24.6622 35.1008 24.4761 35.2253 24.2712 35.3102C24.0664 35.3951 23.8468 35.4388 23.625 35.4388C23.4032 35.4388 23.1836 35.3951 22.9788 35.3102C22.7739 35.2253 22.5878 35.1008 22.4311 34.9439L17.3686 29.8814C17.0519 29.5648 16.8741 29.1353 16.8741 28.6875C16.8741 28.2397 17.0519 27.8102 17.3686 27.4936C17.6852 27.1769 18.1147 26.9991 18.5625 26.9991C19.0103 26.9991 19.4398 27.1769 19.7564 27.4936L23.625 31.3643L34.2436 20.7436C34.4004 20.5868 34.5865 20.4624 34.7914 20.3776C34.9962 20.2927 35.2158 20.2491 35.4375 20.2491C35.6592 20.2491 35.8788 20.2927 36.0836 20.3776C36.2885 20.4624 36.4746 20.5868 36.6314 20.7436C36.7882 20.9004 36.9126 21.0865 36.9974 21.2914C37.0823 21.4962 37.1259 21.7158 37.1259 21.9375C37.1259 22.1592 37.0823 22.3788 36.9974 22.5836C36.9126 22.7885 36.7882 22.9746 36.6314 23.1314Z" fill="#0C9500" />
                        </svg>
                    </Box>
                    <Typography sx={{ textAlign: 'center', fontSize: '26px', fontWeight: '600', }} variant=''>Reset Password</Typography>
                    <Typography sx={{ textAlign: 'center', fontWeight: '400', fontSize: '16px', }} variant=''>Enter a new password to reset</Typography>

                    <Link to={"/"}>
                        <Button sx={{
                            background: 'linear-gradient(95.67deg, #4776E6 0%, #7B54E9 95.18%)',
                            textTransform: 'none',
                            fontWeight: '600',
                            fontFamily: 'inherit'
                        }}
                            variant='contained'
                            fullWidth>
                            Login
                        </Button>
                    </Link>
                </Box>

            </Box>
        </Box>
    )
}

export default SuccessScreen
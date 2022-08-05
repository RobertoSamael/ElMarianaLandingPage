import React from 'react'
import {Box, useMediaQuery} from '@mui/material'

import {FaFacebook, FaTwitter, FaTwitch, FaYoutube, FaTiktok} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

import '../Css/Socials.css'

export default function Socials() {
  const smallSc = useMediaQuery('(max-width: 1024px)')

  return (
  <Box className='container' width={smallSc ? '80%' : '50%'} height={'80%'} position='absolute' display='flex' justifyContent='center' alignItems='center'>
        <FaFacebook onClick={() => window.location.href='https://www.facebook.com/ElMarianaFB'} className='fbicon' size={50}/>

        <FaTwitter onClick={() => window.location.href='https://twitter.com/elmarianaa'}className='twittericon' size={50}/>

        <FaTwitch onClick={() => window.location.href='https://www.twitch.tv/elmariana'} className='twitchicon' size={50}/>

        <FaYoutube onClick={() => window.location.href='https://www.youtube.com/c/ElMariana'} className='youtubeicon' size={50}/>

        <FaTiktok onClick={() => window.location.href='https://www.tiktok.com/@elmarianaa'} className='tiktokicon' size={50}/>

        <AiFillInstagram onClick={() => window.location.href='https://www.instagram.com/elmarianaa'} className='instagramicon' size={50}/>
    </Box>
  )
}

import { Box } from '@mui/material'
import React, { useEffect, useRef} from 'react'
import {gsap} from 'gsap';

import '../Css/LoadingScreen.css'

export default function LoadingScreen({ref1}) {

  const bgImg = useRef();
  const logo = useRef();
  const zazabg = useRef();

  useEffect(() => {
    gsap.to(bgImg.current, {duration: 2, autoAlpha: 0, delay: 2})
    gsap.fromTo(logo.current, {scale: 1},
                          {scale: 1.2,duration: 1,
                          ease: "power3.inOut", yoyo:true, delay: 0.3, repeat: true})
    gsap.to(zazabg.current, {x: 100, y: -100, duration: 5})
  },[])

  return (
    <Box className='loading-screen' ref={bgImg} width={'100%'} height={'100%'} bgcolor='#3b0670' display={'flex'} flexDirection='column' justifyContent='center' alignItems={'center'}>
      <img className='zazabg' ref={zazabg} alt='zaza-background' src='zazabg.png' width={'100%'} max-height='100%'/>
      <Box className='mariana-header' width={'100%'} height={'23%'} display='flex' justifyContent={'center'} alignItems={'center'}></Box>
      <Box className='info-container' width={'100%'} height={'100%'} display='flex' justifyContent={'center'} alignItems={'center'}>
        <img className='loading-logo' ref={logo} alt='loading' src='zaza.png' width={'360px'} height={'400px'}/>
      </Box>
      <Box className='mariana-header' width={'100%'} height={'20%'} display='flex' justifyContent={'center'} alignItems={'center'}></Box>
    </Box>
  )
}

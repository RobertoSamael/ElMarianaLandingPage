import React, { useEffect , useState, useRef} from 'react'
import {Box, Typography, useMediaQuery} from '@mui/material'
import Socials from '../Components/Socials'
import API from '../Components/API'
import gsap from 'gsap'

import '../Css/Main.css'


export default function Main() {
  const smallSc = useMediaQuery('(max-width: 768px)')

  const [getData, setData] = useState(null)
  
  useEffect(() => {
    API(setData)
    
  },[])
  console.log(getData)

  const mountains = useRef();
  const live = useRef();
    useEffect(() => {
      gsap.fromTo(mountains.current,{y: 300},{y: 0, duration: 2, delay: 3, ease: 'power3.out'})
      gsap.fromTo(live.current,{scale: 0.5, autoAlpha: 0},{scale: 1, duration: 2, autoAlpha: 1, ease: 'power3.out', delay: 3})
    },[])

  return (
    <Box className='main' width={'100%'} height={'100vh'} display='flex' flexDirection={'column'}>
      <Box className='mountains' ref={mountains} width={'100%'} height={'100%'}></Box>
      <Box className='mariana-header' width={'100%'} height={'20%'} display='flex' justifyContent={'center'} alignItems={'center'}>
        <Typography className='name' fontSize={80} fontFamily='Kanit' color={'white'}>
          EL MARIANA
        </Typography>
      </Box>
      <Box className='info-container' width={'100%'} height={'100%'} display='flex' justifyContent={'center'} alignItems={'center'}>
        <img className={getData? 'zazalogo-live' : 'zazalogo'} src={'zaza.png'} alt='elmarianazaza' width={'360px'} height={'400px'}/>
        <Socials/>
      </Box>
      <Box className='mariana-bottom' ref={live} width={'100%'} height={'20%'} display='flex' justifyContent={'center'} alignItems={'center'}>
        {getData? <Box className='red-circle' width={'30px'} height={'30px'} bgcolor='red' marginX={'10px'} borderRadius='20px'></Box>: null}
        {getData? <Typography className='live' fontSize={50} fontFamily='Kanit' color={'white'}>
          Live
        </Typography> : null}
      </Box>
    </Box>
  )
}

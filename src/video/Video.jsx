import { Container } from 'react-bootstrap'
import React from 'react'
import ReactPlayer from 'react-player'
import style from '../video/Video.module.css'
export default function VideoHome() {
  return (
  


 <Container id='Video'>
 <div className="container p-5 me-5">
  <div className= " player__wrapper ">
 <ReactPlayer
     
     url="https://github.com/himahamoda/HN/assets/133769074/619fd79b-fcaf-4285-a551-504aa80b03bd     "
     width="100%"
     height="100%"
     playing={true}
     muted={true}
     loop
     controls
   />
</div>

 </div>
 </Container>

 

  )
}

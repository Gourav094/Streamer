import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from "./VideoContainer"
import { useSelector } from 'react-redux'

const MainContainer = () => {
  
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  return (
    <div className={`${isMenuOpen?"pl-7":"ml-20"} overflow-x-hidden`}>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer

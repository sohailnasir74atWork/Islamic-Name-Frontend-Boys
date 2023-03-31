import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import "./Layout.scss"
import { useGlobalState } from "../GlobelState";
const Main= () => {
  const {darkMode } = useGlobalState()
  return (
    <div >
      <Header/>
      <div className={` outlet ${darkMode ? "dark-mode-active" : ""}`}>
            <Outlet />
            </div>
        <Footer/>
    </div>
  )
}

export default Main
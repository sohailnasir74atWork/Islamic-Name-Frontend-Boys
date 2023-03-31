import React, { useEffect } from 'react'
import ExtractData from '../../Common/DataExtracter'
import Translate from '../../Common/Translat'
import TranslateObject from '../../Common/TranslateObject'
import ABCsection from './ABCsection'
import Banner from './Banner'
import PostArtical from './Suggestions'
import PoweredbyCommunity from './PoweredbyCommunity'
import TrendingSection from './TrendingSection'
import { useLocation } from 'react-router-dom';
import { useGlobalState } from "../../GlobelState";
import FiftyNames from './FiftyNames'
import NamesSaperator from '../../Common/NamesSaperator'

const Home = () => {
    const location = useLocation();
    const  {darkMode} = useGlobalState()
    useEffect(() => {
      console.log("location", location)
      if (location.hash === "#trending")
       {
        const trendingSection = document.getElementById("trending");
        if (trendingSection) { // Check if element was found
          trendingSection.scrollIntoView({ behavior: "smooth" });
           // Use smooth scrolling
        } else {
          console.error("Could not find element with id 'trending'");
        }
      }
    }, [location.pathname]);
    

  return (
    <div className={` pb-1 ${darkMode? "dark-m ode-active" : ""}`}>
        <Banner/>
        <ABCsection/>
        <TrendingSection/>
        <FiftyNames/>
        <PoweredbyCommunity/>
        <PostArtical/>
        {/* <ExtractData/> */}
        {/* <TranslateObject data={names}/> */}
    </div>
  )
}

export default Home
import React, { useEffect } from 'react'
import "./Style/TrendingSection.scss"
import { useState } from 'react';
import { useGlobalState } from "../../GlobelState";
import TrendingCardHome from './Cards/TrendingCardHome';
import axios from 'axios';
const TrendingSection = () => {
  const [trendingGirls, setTrendingGirls] = useState([]);
  const [quranicGirls, setQuranicGirls] = useState([]);
  const [allah, setAllah] = useState([]);
  const [muhammad, setMuhammad] = useState([]);
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [totalPagesTrendingGirls, setTotalPagesTrendingGirls] = useState(0);
  const [totalPagesQuranicGirls, setTotalPagesQuranicGirls] = useState(0);
  const [totalPagesAllah, setTotalPagesAllah] = useState(0);
  const [totalPagesMuhammad, setTotalPagesMuhammad] = useState(0);
  const [currentTrendingGirls, setCurrentTrendingGirls] = useState(1);
  const [currentQuranicGirls, setCurrentQuranicGirls] = useState(1);
  const [currentAllah, setCurrentAllah] = useState(1);
  const [currentMuhammad, setCurrentMuhammad] = useState(1);
  const { activeBtnIndex, handleButtonClick } = useGlobalState();
  const toggleTab = () => {
    setIsOpen(!isOpen);
  }
  const handlePageChange = (pageNumber) => {
    setLoading(true)

    if (activeBtnIndex === 0) {
      setCurrentTrendingGirls(pageNumber);
    } else if (activeBtnIndex === 1) {
      setCurrentQuranicGirls(pageNumber);
    } else if (activeBtnIndex === 2) {
      setCurrentAllah(pageNumber);
    } else if (activeBtnIndex === 3) {
      setCurrentMuhammad(pageNumber);
    }
  };

const getTrendingGirls = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/trending/girls?page=${currentTrendingGirls}`);
    setTrendingGirls(response.data.allNames);
    setTotalPagesTrendingGirls(response.data.totalPages);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}


const getQuranicGirls = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/quranic/girls?page=${currentQuranicGirls}`);
    setQuranicGirls(response.data.allNames);
    setTotalPagesQuranicGirls(response.data.totalPages);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

const getAllah = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/allah?page=${currentAllah}`);
    setAllah(response.data.allNames);
    setTotalPagesAllah(response.data.totalPages);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

const getMuhammad = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/muhammad?page=${currentMuhammad}`);
    setMuhammad(response.data.allNames);
    setTotalPagesMuhammad(response.data.totalPages);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

const getData = async () => {
  try {
    await Promise.all( [getTrendingGirls(), getQuranicGirls(), getAllah(), getMuhammad()]);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getTrendingGirls();
}, [currentTrendingGirls]);
useEffect(() => {
  getQuranicGirls();
}, [currentQuranicGirls]);
useEffect(() => {
  getAllah();
}, [currentAllah]);
useEffect(() => {
  getMuhammad();
}, [currentMuhammad]);

useEffect(() => {
  getData();
}, [activeBtnIndex]);



  return (
    <div id="trending">
      <div className='container' data-aos="fade-up">
        <div className='section-title-main'>
          <h2 >SEARCH NAMES BY FEATURES</h2>
          <h3>فلٹرز کے ذریعے نام تلاش کریں
          </h3>
        </div>
        <div className="sticky-button-trending" onClick={toggleTab}>
          <span>Select Filters</span>
          <i className={`fa-solid fa-bars ${isOpen ? 'open' : ''}`}></i>
          {isOpen && (
            <div className="filter-tab">
              <p onClick={() => handleButtonClick(0)}>Trending Names - Girls</p>
              <p onClick={() => handleButtonClick(1)}>Quranic Names - Girls</p>
              <p onClick={() => handleButtonClick(2)}>Allah's Name</p>
              <p onClick={() => handleButtonClick(3)}>Muhammads's Name</p>
              <p></p>
            </div>
          )}
        </div>
        <div className='section-container'>
          <div className='container w-30 p-0'>
            <div className='col custimize-btn-cont'>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 0 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(0)}
                >
                  Trending Names - Girls
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 1 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(1)}
                >
                  Quranic Names - Girls               </button>
              </div>
              <div className='col flex-center p-0 w-100 m-0'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 2 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(2)}
                >
                  Allah's Name
                </button>
              </div>
              <div className='col flex-center p-0 w-100 m-0'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 3 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(3)}
                >
                  Muhammad's Name
                </button>
              </div>
            </div>
          </div>
          <div className='trending-cards-cont'>
            {loading && (<div class="d-flex justify-content-center m-auto">
  <div class="spinner-border spinner-border-custom" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>)}
          {!loading && <TrendingCardHome 
  data={
        activeBtnIndex === 0 ? trendingGirls :
        activeBtnIndex === 1 ? quranicGirls :
        activeBtnIndex === 2 ? allah :
        activeBtnIndex === 3 ? muhammad :
        null
  }
  totalPages={
    activeBtnIndex === 0 ? totalPagesTrendingGirls :
    activeBtnIndex === 1 ? totalPagesQuranicGirls :
    activeBtnIndex === 2 ? totalPagesAllah :
    activeBtnIndex === 3 ? totalPagesMuhammad :
    null
  }
  currentPage={
    activeBtnIndex === 0 ? currentTrendingGirls :
    activeBtnIndex === 1 ? currentQuranicGirls :
    activeBtnIndex === 2 ? currentAllah :
    activeBtnIndex === 3 ? currentMuhammad :
    null
  }
  onPageChange={handlePageChange}
/>}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}


export default TrendingSection
import React, { useEffect } from 'react'
import "./Style/TrendingSection.scss"
import { useState } from 'react';
import { useGlobalState } from "../../GlobelState";
import TrendingCardHome from './Cards/TrendingCardHome';
import axios from 'axios';
const TrendingSection = () => {
  const [trendingBoys, setTrendingBoys] = useState([]);
  const [quranicBoys, setQuranicBoys] = useState([]);
  const [allah, setAllah] = useState([]);
  const [muhammad, setMuhammad] = useState([]);
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [totalPagesTrendingBoys, setTotalPagesTrendingBoys] = useState(0);
  const [totalPagesQuranicBoys, setTotalPagesQuranicBoys] = useState(0);
  const [totalPagesAllah, setTotalPagesAllah] = useState(0);
  const [totalPagesMuhammad, setTotalPagesMuhammad] = useState(0);
  const [currentTrendingBoys, setCurrentTrendingBoys] = useState(1);
  const [currentQuranicBoys, setCurrentQuranicBoys] = useState(1);
  const [currentAllah, setCurrentAllah] = useState(1);
  const [currentMuhammad, setCurrentMuhammad] = useState(1);
  const { activeBtnIndex, handleButtonClick } = useGlobalState();
  const toggleTab = () => {
    setIsOpen(!isOpen);
  }
  const handlePageChange = (pageNumber) => {
    setLoading(true)

    if (activeBtnIndex === 0) {
      setCurrentTrendingBoys(pageNumber);
    } else if (activeBtnIndex === 1) {
      setCurrentQuranicBoys(pageNumber);
    } else if (activeBtnIndex === 2) {
      setCurrentAllah(pageNumber);
    } else if (activeBtnIndex === 3) {
      setCurrentMuhammad(pageNumber);
    }
  };

const getTrendingBoys = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/trending/boys?page=${currentTrendingBoys}`);
    setTrendingBoys(response.data.allNames);
    setTotalPagesTrendingBoys(response.data.totalPages);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}


const getQuranicBoys = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/quranic/boys?page=${currentQuranicBoys}`);
    setQuranicBoys(response.data.allNames);
    setTotalPagesQuranicBoys(response.data.totalPages);
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
    await Promise.all( [getTrendingBoys(), getQuranicBoys(), getAllah(), getMuhammad()]);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getTrendingBoys();
}, [currentTrendingBoys]);
useEffect(() => {
  getQuranicBoys();
}, [currentQuranicBoys]);
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
              <p onClick={() => handleButtonClick(0)}>Trending Names - Boys</p>
              <p onClick={() => handleButtonClick(1)}>Quranic Names - Boys</p>
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
                  Trending Names - Boys
                </button>
              </div>
              <div className='col flex-center p-0 w-100'>
                <button
                  className={`custimize-btn m-0  ${activeBtnIndex === 1 ? 'active' : ''}`}
                  onClick={() => handleButtonClick(1)}
                >
                  Quranic Names - Boys               </button>
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
        activeBtnIndex === 0 ? trendingBoys :
        activeBtnIndex === 1 ? quranicBoys :
        activeBtnIndex === 2 ? allah :
        activeBtnIndex === 3 ? muhammad :
        null
  }
  totalPages={
    activeBtnIndex === 0 ? totalPagesTrendingBoys :
    activeBtnIndex === 1 ? totalPagesQuranicBoys :
    activeBtnIndex === 2 ? totalPagesAllah :
    activeBtnIndex === 3 ? totalPagesMuhammad :
    null
  }
  currentPage={
    activeBtnIndex === 0 ? currentTrendingBoys :
    activeBtnIndex === 1 ? currentQuranicBoys :
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
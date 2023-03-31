import React from 'react'
import CardSecondary from './Cards/CardSecondary'
import SearchCardABC from './Cards/SearchCardABC'
import "./Style/ABCsection.scss"
const ABCsection = () => {
  return (
    <div  className="pt-6">
    <div className='container' data-aos="fade-up">
      <div className='section-title-main mb-3'>
      <h2  >SEARCH NAMES BY ALPHABETS</h2>
      <h3>حروف تہجی کے لحاظ سے نام تلاش کریں
</h3>
      </div>
        <div className='row'>
            <div className='col cards-container' style={{height:"auto"}}>
              <div className='w-50-ondestop'> <SearchCardABC gender="BOYS"/></div>
              <div className='w-50-ondestop'> <CardSecondary/></div>
              </div>
         </div>
    </div>
    </div>
  )
}

export default ABCsection
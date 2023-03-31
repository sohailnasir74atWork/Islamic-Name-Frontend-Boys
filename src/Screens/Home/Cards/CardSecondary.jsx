import React from 'react'
import { Link } from 'react-router-dom';

import "../Style/SearchbyABCcard.scss"
const CardSecondary = () => {
  
  return (
    <div className='ABC-card-container col flex-center'>
      <div class="card text-white bg-secondary mb-3">
  <div class="card-header"> BOYS NAMES</div>
  <div class="card-body">
    <ul className='ABC-container no-hover'>
        <li className='p-0'>Expecting a Baby Boy?</li>
  <li>Explore a wonderful selection of charming and meaningful names for your little prince.</li></ul>
  <button className='btn-primary'>Explore</button>
  </div>
</div>
    </div>
  )
}

export default CardSecondary
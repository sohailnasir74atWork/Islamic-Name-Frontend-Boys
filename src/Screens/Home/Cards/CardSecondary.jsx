import React from 'react'
import { Link } from 'react-router-dom';

import "../Style/SearchbyABCcard.scss"
const CardSecondary = () => {
  
  return (
    <div className='ABC-card-container col flex-center'>
      <div class="card text-white bg-secondary mb-3">
  <div class="card-header"> GIRLS NAME</div>
  <div class="card-body">
    <ul className='ABC-container no-hover'>
        <li className='p-0'>Expecting a Baby Girl?</li>
  <li>Explore a wonderful selection of charming and meaningful names for your little princess.</li></ul>
  <button className='btn-primary'><a href='https://girls-name.onrender.com/'>Explore</a></button>
  </div>
</div>
    </div>
  )
}

export default CardSecondary
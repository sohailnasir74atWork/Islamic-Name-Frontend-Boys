import React, { useEffect, useState } from 'react'
import Translate from '../../Common/Translat';
import "../Home/Style/TrendingCard.scss"

const ByAlphabetsCard = ({ marginZero, data, totalPages, currentPage, onPageChange }) => {
  const [like, setLike] = useState(0);
  const [show, setShow] = useState(Array(data.length).fill(false));
  const [clickedIndex, setClickedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLikeClick = (index) => {
    setActiveIndex(index);
    
  };
  const handleUrduClick = (index) => {
    setShow((prevShow) => {
      const newShow = [...prevShow];
      // Toggle the clicked item
      newShow[index] = !prevShow[index];
      // Close all other items
      for (let i = 0; i < newShow.length; i++) {
        if (i !== index) {
          newShow[i] = false;
        }
      }
      return newShow;
    });
  };
  
  
  const pagesToShow = 2;
const range = Math.floor(pagesToShow / 2);
  return (
    <div className={`trending-card ${marginZero}`}>
      <div>
      {/* ///////////////////////////////destopview///////////////////////*/}
        <div className='d-flex'>
          <th className='mobile-hide col-2'>NAMES</th>
          <th className='mobile-hide urdu-cont col-1'>نام</th>
          <th className='mobile-hide col-4'>MEANINGS</th>
          <th className='urdu-cont mobile-hide col-5 justify-content-end p-3'>اردو معنی</th>
          {/* <th className='mobile-hide support-cont col-2'>
            <h3>SUPPORT</h3>
            <i className='fa-regular fa-heart fa-solid p-3 heart-w'></i>
          </th> */}
        {/* ///////////////////////////////Mobileview///////////////////// */}
        <div className='d-flex container p-0'>
        <th className='hide col-4'>NAMES</th>
          <th className='hide urdu-cont col-4'>نام</th>
          <th className='hide urdu-cont col-4 '>اردو معنی</th>
          </div>
        </div>
        {data.map((item, index) => {
          return (
            <div className='col line-color br-10'>
        {/* /////////////////////////////destopview////////////// */}
              <div className='d-flex mr-custom'>
                <td className='mobile-hide col-2'>{item.name}</td>
                <td className='mobile-hide urdu-cont col-1'>{item.urduName}</td>
                <td className='mobile-hide col-4'>{item.englishMeaning}</td>
                <td className='mobile-hide col-5 tac urdu-cont justify-content-end p-3'>{item.urduMeaning}</td>
               {/* <td className='mobile-hide urdu-cont col-2'>
              <span className='span-heart'>{item.like} People liked</span>
                <i className={`fa-regular fa-heart${index === activeIndex ? ' fa-solid' : ''} p-3 heart`}
                    onClick={()=>{handleLikeClick(index)}}
                  ></i>
                </td> */}
              </div>
            {/* /////////////////////////////////mobileview///////////////// */}
              <div className='hide'>
                <td>{item.name}</td>
                <td className='hide urdu-cont col-1'>{item.urduName}</td>
                <td className='urdu-cont d-flex justify-content-end'>
                <button className='btn btn-primary btn-cont' onClick={()=>handleUrduClick(index)}>Check Details</button>
                </td>
              </div>
              {show[index] && <div className='d-flex' style={{background:"var(--color-one)", color:"var(--color-three)"}}>
              <span className='hide m-1 w-50 text-left d-flex flex-column' style={{ fontFamily: "var(--text-font)", fontSize: ".7rem" }}><span style={{color:"var(--color-three)", fontWeight:"500"}}>English Meaning:</span><span> {item.englishMeaning}</span></span>
                
                 <span className='urdu-cont w-50' style={{fontSize:".6rem", lineHeight:"1.5rem"}}> {item.urduMeaning}</span>
                
                {/* <td className='hide urdu-cont col'>
                  <span className='span-heart'>{item.like} People liked</span>
                  <i className={`fa-regular fa-heart${index === activeIndex ? ' fa-solid' : ''} p-2 heart`}
                    onClick={() => { handleLikeClick() }}
                  ></i>
                </td> */}
              </div>
              }

            </div>
          );
        })}
      <div className='pagination-container'>
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <a className="page-link" href="#" onClick={() => onPageChange(currentPage - 1)} aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </a>
      </li>
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        if (pageNumber === 1 || pageNumber === totalPages ||
            (pageNumber >= currentPage - range && pageNumber <= currentPage + range)) {
          return (
            <li key={index} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
              <a className="page-link" href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
          );
        }
        if (pageNumber === currentPage - range - 1 || pageNumber === currentPage + range + 1) {
          return (
            <li key={index} className="page-item disabled">
              <a className="page-link" href="#">...</a>
            </li>
          );
        }
        return null;
      })}
      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <a className="page-link" href="#" onClick={() => onPageChange(currentPage + 1)} aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </a>
      </li>
      
    
    </ul>
    <ul className='tac p-0'>
    <li className="page-item" >
        <span className="page-link">
          Page {currentPage} of {totalPages}
        </span>
      </li>
    </ul>
  </nav>
</div>
</div>
</div>
  );
}

export default ByAlphabetsCard

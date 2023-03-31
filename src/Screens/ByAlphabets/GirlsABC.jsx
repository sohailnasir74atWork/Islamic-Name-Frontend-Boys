import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./ByAlphabets.scss"
import ByAlphabetsCard from './ByAlphabetsCard'

const GirlsABC = () => {

  const [newData, setNewData] = useState([])
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  
  const {id} = useParams()

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const getData = async (id, currentPage) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}/names/girls?id=${id}&page=${currentPage}`);
      const data = response.data.allNames;

      setNewData(data)
      setLoading(false)
      setTotalPages(response.data.totalPages)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    scrollToTop();
    getData(id, currentPage);
  }, [id, currentPage]);

  return (
    <div className='container pt-3'>
      <div className='section-title-main heading-by-abc'>
        <h2 className='' >GIRLS NAMES STARTING WITH {`"${id}"`}</h2>
        <h3><span>کے ساتھ شروع ہونے والے نام </span>{id}</h3>
      </div>
      <div className='d-flex mt-3 mb-3'>
        <span> 
          <Link to="/" className="btn btn-primary">BACK</Link>
        </span>
      </div>
      <div></div>
      {loading && (<div class="d-flex justify-content-center">
  <div class="spinner-border spinner-border-custom" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>)}
      {!loading && newData && newData.length > 0 && <ByAlphabetsCard cardClass="d-0 m-0" marginZero="m-0" data={newData} totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>}
    </div>
  )
}

export default GirlsABC;

import React from 'react'
import notFound from "../Assets/errorPage.jpg";

function PageNotFound() {
  return (
    <div className='pageNotFound'>
      <img src={notFound} alt="#" className='error-img'/>
    </div>
  )
}

export default PageNotFound

import React from 'react'

const TopHeader = ({ setMobileSiderbar }) => {
  return (
    <div className='p-2 '>
      <div className='border-bottom p-2 d-flex justify-content-between align-items-center'>

        <div>
          <div className='d-block d-md-none' onClick={() => setMobileSiderbar(true)}>  menu</div>
        </div>
        <div>  icons</div>

      </div>






    </div>
  )
}

export default TopHeader
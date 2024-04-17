import { Col, Drawer, Row } from 'antd'
import React, { useState } from 'react'
import Siderbar from './Siderbar'
import TopHeader from './TopHeader'

const Layout = ({ children }) => {

  const [mobileSiderbar, setMobileSiderbar] = useState(false)

  return (
    <>
      <Row style={{ minHeight: "100vh" }}>

        <Col md={4} xs={0} className='sidebar'>
          <div className='logo'>
            <h2>Hadi Script</h2>
          </div>
          <Siderbar />
        </Col>


        <Col md={20} xs={24} className='rightside'>
          <TopHeader setMobileSiderbar={setMobileSiderbar} />

          {children}
        </Col>

      </Row>

      <div className='d-block d-md-none'>
        <Drawer title="Basic Drawer" placement='left' onClose={() => setMobileSiderbar(false)} open={mobileSiderbar}>
          <Siderbar />
        </Drawer>
      </div>
    </>
  )
}

export default Layout
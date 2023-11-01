import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Profile from '../Components/Profile'
import MyProjects from '../Components/MyProjects'

function Dashboard() {
  return (
    <>
      <Header insideDashboard/>
      <Row style={{marginTop:'100px'}} className='container-fluid'>
        <Col sm={12} md={8}>
          {/* my project  */}
          <h2>Welcome <span style={{color:'orange'}}>User</span></h2>
          <MyProjects/>
        </Col>
        <Col sm={12} md={4}>
          {/*  my profile */}
          <Profile/>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
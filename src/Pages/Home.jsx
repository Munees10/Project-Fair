import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../Assets/project-image.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
    const [loggedin,setLoggedin] = useState(false)
    useEffect(()=>{
        if (sessionStorage.getItem("token")) {
            setLoggedin(true)
        }else{
            setLoggedin(false)
        }
    },[])
  return (
    <>
    {/* landing page */}
        <div style={{width:'100%',height:'100vh',backgroundColor:'#90ee90'}} className='container-fluid rounded'>
            <Row className='align-items-center p-5'>
                <Col sm={12} md={6}>
                    <h1 style={{fontSize:'80px',color:'white'}}><i className='fa-brands fa-stack-overflow fa-bounce'></i>Project Fair</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla temporibus sunt tempora esse fugiat obcaecati repudiandae commodi soluta, minima repellendus consequuntur laudantium possimus. Et illo iste minus aliquam quod.</p>
                   
                   { loggedin? 
                   <Link to={'/dashboard'} className='btn btn-warning'>Manage Your Projects<i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>:

                    <Link to={'/login'} className='btn btn-warning'>start to explore <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>}

                </Col>
                <Col sm={12} md={6}>
                    <img style={{marginTop:'100px'}} className='w-100' src={titleImage} alt=""/>

                </Col>

            </Row> 

        </div>
    {/* all projects */}
    <div className="all-projects mt-5">
        <h1 className="text-center mb-5">Explore Our Projects</h1>
        <marquee scrollAmount={20}>
            <div className='d-flex justify-content-between'>
                <div className='ms-5' style={{width:'500px'}}>
                    <ProjectCard/>
                </div>
                <div className='ms-5' style={{width:'500px'}}>
                    <ProjectCard/>
                </div>
                <div className='ms-5' style={{width:'500px'}}>
                    <ProjectCard/>
                </div>
            </div>
        </marquee>
        <div className="text-center mt-5">
            <Link to={'/projects'}>
            View More Projects
            </Link>
        </div>
    </div>
    </>
  )
}

export default Home
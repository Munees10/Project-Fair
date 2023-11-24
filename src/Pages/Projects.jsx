import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectsAPI } from '../Services/allAPI'

function Projects() {
  const [searchKey,setSearchKey] = useState("")
  const [allProjects,setAllProjects] = useState([])
  const getAllProjects = async ()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json", "Authorization":`Bearer ${token}`
      }
      const result = await allProjectsAPI(searchKey,reqHeader)
      if(result.status===200){
        setAllProjects(result.data)
      }else{
        console.log(result);
      }
    }
  }

  useEffect(()=>{
    getAllProjects()
  },[searchKey])
  return (
    <>
      <Header/>
      <div style={{marginTop:'100px'}} className="projects">
        <h1 className='text-center mb-5'>All projects</h1>
        <div className="d-flex justify-content-center align-items-center w-100">
          <div className="d-flex border w-50">
            <input type="text" className='form-control' placeholder='search projects by technologies used' onChange={e=>setSearchKey(e.target.value)}/>
            <i style={{marginLeft:'-50px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </div>
        </div>
        <Row className='mt-5 contanier-fluid'>
          {allProjects?.length>0?allProjects?.map(project=>(
            <Col sm={12} md={6} lg={4}>
            <ProjectCard project={project}/>
          </Col>
          )):null
          }
        </Row>
      </div>
    </>
  )
}

export default Projects
import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectPic from '../Assets/programming.jpg'
import { BASE_URL } from '../Services/baseurl';



function ProjectCard({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
            {project &&
                <Card className='shadow mb-5 btn' onClick={handleShow}>
                <Card.Img variant="top" style={{height:'250px'}} src={project?`${BASE_URL}/uploads/${project?.projectImage}`:projectPic} />
                <Card.Body>
                    <Card.Title>{project?.title}</Card.Title>
                </Card.Body>
            </Card>
            }
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>project details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                        <img style={{height:'200px'}} src={project?`${BASE_URL}/uploads/${project?.projectImage}`:projectPic} className='img-fluid' alt="project image" />
                        </Col>
                        <Col md={6}>
                            <h2>{project?.title}</h2>
                            <p>Project Overview: <span className='fw-bolder text-primary' ></span>{project?.overview}</p>
                            <p>Language Used: <span className='fw-bolder text-info'>{project?.langauges}</span></p>

                            
                        </Col>
                    </Row>
                    <div className='mt-3'>
                                <a href={project?.github} target='_blank' className='me-3 btn'><i class="fa-brands fa-github fa-2x"></i></a>
                                <a href={project?.website} target='_blank' className='me-5 btn'><i class="fa-solid fa-link"></i></a>

                            </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default ProjectCard
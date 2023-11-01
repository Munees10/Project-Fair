import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectPic from '../Assets/programming.jpg'



function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
            <Card className='shadow mb-5 btn' onClick={handleShow}>
                <Card.Img variant="top" style={{width:'400px'}} src={projectPic} />
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                </Card.Body>
            </Card>
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                        <img style={{height:'200px',}} src={projectPic} className='img-fluid' alt="project image" />
                        </Col>
                        <Col md={6}>
                            <h2>Project Title</h2>
                            <p>Project Overview: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ad nulla natus iure praesentium dolorem eligendi, blanditiis, molestiae molestias rerum itaque aperiam fugit neque, exercitationem distinctio. Repudiandae sint quos quidem!</p>
                            <p>Language Used: <span className='fw-bold'>HTML,CSS,JS</span></p>

                            
                        </Col>
                    </Row>
                    <div className='mt-3'>
                                <a href="https://github.com/Munees10/Media-player" target='_blank' className='me-3 btn'><i class="fa-brands fa-github fa-2x"></i></a>
                                <a href="" target='_blank' className='me-5 btn'><i class="fa-solid fa-link"></i></a>

                            </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default ProjectCard
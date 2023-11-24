import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseurl'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../Services/allAPI';


function EditProject({ project }) {
    const [projectDetails, setProjectDetails] = useState({                                                                           
        title:project.title, langauges:project.langauges, overview:project.overview, github:project.github, website:project.website, projectImage:""
    })
    const [preview, setPreview] = useState("")
    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false);
        setProjectDetails({
            id:project._id, title:project.title, langauges: project.langauges, overview: project.overview, github: project.github, website: project.website, projectImage: ""
        })
        setPreview("")
    }
    const handleShow = () => setShow(true)
    // console.log(project);
    // console.log(projectDetails);

    useEffect(()=>{
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }

    },[projectDetails.projectImage])

    const handleUpdate =async ()=>{
        const {id,title,langauges,github,website,overview,projectImage} = projectDetails
        if (!title || !langauges || !overview || !github || !website) {
            toast.info("please fill the form completely!!!")
        }else{
            const reqBody = new FormData()
            reqBody.append("title",title)
            reqBody.append("langauges",langauges)
            reqBody.append("overview",overview)
            reqBody.append("github",github)
            reqBody.append("website",website)
            preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project.projectImage)
            const token = sessionStorage.getItem("token")
            if(preview){
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                //api call
                const result = await editProjectAPI(id,reqBody,reqHeader)
                if (result.status===200) {
                    handleClose()
                    //pass response to MyProjects
                }else{
                    console.log(result);
                    toast.error(result.response.data)
                }
            }else{
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                //api call
                const result = await editProjectAPI(id,reqBody,reqHeader)
                if (result.status===200) {
                    handleClose()
                    //pass response to MyProjects
                }else{
                    console.log(result);
                    toast.error(result.response.data)
                }
            }
        }
    }
    return (
        <>
            <button onClick={handleShow} className="btn"><i class="fa-regular fa-pen-to-square fa-2x"></i> </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered>

                <Modal.Header closeButton>
                    <Modal.Title>Edit Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>
                                <input type="file" style={{ display: 'none' }} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} />
                                <img className='img-fluid' src={preview?preview:`${BASE_URL}/uploads/${project.projectImage}`} alt="project-picture" />
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <div className='mb-3'><input type="text" className='form-control' placeholder='Project title' value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} /></div>
                            <div className='mb-3'><input type="text" className='form-control' placeholder='Languages used' value={projectDetails.langauges} onChange={e=>setProjectDetails({...projectDetails,langauges:e.target.value})} /></div>
                            <div className='mb-3'><input type="text" className='form-control' placeholder='Github Link' value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} /></div>
                            <div className='mb-3'><input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} /></div>
                            <div className='mb-3'><input type="text" className='form-control' placeholder='Project Overview' value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} /></div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        cancel
                    </Button>
                    <Button onClick={handleUpdate} variant="primary" >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        </>
    )
}

export default EditProject
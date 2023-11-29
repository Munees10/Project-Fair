import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tokenAuthorisationContext } from '../Contexts/TokenAuth';

function Auth({ register }) {
    const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        username:"", email:"", password:""
    })
    const isRegisterForm = register ? true : false

    const handleRegister = async (e)=>{
        e.preventDefault() 
        const {username,email,password} = userData
        if (!username || !email || !password) {
            toast.info("please fill the form completely!!")
        }else{
            const result  = await registerAPI(userData)
            console.log(result);
            if(result.status===200){
                toast.success(`${result.data.username}  has registered succefully!!! `)
                setUserData({
                    username:"",email:"",password:""
                })
                navigate('/login')
                
            }else{
                toast.warning(result.response.data)
                console.log(result);
            }
        }
    }
    const handleLogin = async (e)=>{
        e.preventDefault()
        const {email,password} = userData
        if ( !email || !password) {
            toast.info("please fill the form completely!!")
        }else{
            const result  = await loginAPI(userData)
            // console.log(result);
            if(result.status===200){
                // toast.success(`${result.data.username}  has registered succefully!!! `)
                sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token",result.data.token)
                setIsAuthorized(true)
                setUserData({
                    email:"",password:""
                })
                navigate('/')
                
            }else{
                toast.warning(result.response.data)
                console.log(result);
            }
        }
    }
    return (
        <div style={{ width: '100', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <div className='w-75 container'>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}><i className="fa-solid fa-arrow-left"></i>Back to Home</Link>
                <div className="card shadow p-5 bg-success">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="https://www.mgasys.com/img/loignimage2.jpg" alt="auth image" />
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center flex-column">
                                <h1><i className='fa-brands fa-stack-overflow fa-bounce'></i>Project Fair</h1>
                                <h5 className='fw-bolder mt-4 pb-3 text-light'>
                                    {
                                        isRegisterForm ? 'sign up to your account' : 'sign in to your account'
                                    }
                                </h5>
                                <Form className='text-light w-100'>
                                    {
                                        isRegisterForm &&
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Control type="text" placeholder="username" value={userData.username} onChange={e => setUserData({...userData,username:e.target.value })} />
                                        </Form.Group>
                                    }
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email ID" value={userData.email} onChange={e => setUserData({...userData, email: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicpaswd">
                                        <Form.Control type="password" placeholder="Enter password" value={userData.password} onChange={e => setUserData({...userData,password:e.target.value })} />
                                    </Form.Group>
                                    {
                                        isRegisterForm ?
                                            <div>
                                                <button onClick={handleRegister} className='btn btn-light mb-2'>Register</button>
                                                <p>already have an account? click here to login <Link to={'/login'}>Login</Link></p>
                                            </div> :
                                            <div>
                                                <button onClick={handleLogin} className='btn btn-light mb-2'>Login</button>
                                                <p>New User? click here to  <Link to={'/register'}>Register</Link></p>
                                            </div>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} theme="colored"/>
        </div>
    )
}

export default Auth
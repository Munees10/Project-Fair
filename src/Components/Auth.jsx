import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({ register }) {
    const isRegisterForm = register ? true : false
    return (
        <div style={{ width: '100', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <div className='w-75 container'>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link>
                <div className="card shadow p-5 bg-success">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="https://www.mgasys.com/img/loignimage2.jpg" alt="" />
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
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="username" />
                                        </Form.Group>
                                    }
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicpassword">
                                        <Form.Control type="password" placeholder="Enter password" />
                                    </Form.Group>
                                    {
                                        isRegisterForm ?
                                        <div>
                                            <button className='btn btn-light mb-2'>Register</button>
                                            <p>already have an account? click here to login <Link to={'/login'}>Login</Link></p>
                                        </div>:
                                        <div>
                                            <button className='btn btn-light mb-2'>Login</button>
                                            <p>New User? click here to  <Link to={'/register'}>Register</Link></p>

                                        </div>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
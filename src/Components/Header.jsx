import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({insideDashboard}) {
    return (
        <Navbar style={{ backgroundColor: '#90ee90'}} className="position-fixed top-0 w-100 ">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='fw-bolder fs-4'><i className="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</Link>
                </Navbar.Brand>
                { insideDashboard && <div style={{textDecoration:'none',color:'blue'}} className='btn btn-link ms-auto text-danger fw-bolder fs-5'>Logout
                    <i class="fa-solid fa-arrow-right-from-bracket fa-beat"></i>
                </div>} 
            </Container>
        </Navbar>
    )
}

export default Header
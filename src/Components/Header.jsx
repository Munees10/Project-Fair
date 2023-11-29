import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Contexts/TokenAuth'


function Header({insideDashboard}) {
    const navigate = useNavigate()
    const{isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)
    const handleLogout = ()=>{
        //remove all existing users
        sessionStorage.removeItem("existingUser")
        sessionStorage.removeItem("token")
        setIsAuthorized(false)
        //navigate to landing page
        navigate('/')
    }

    return (
        <Navbar style={{ backgroundColor: '#90ee90'}} className="position-fixed top-0 w-100 z-1">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='fw-bolder fs-4'><i className="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</Link>
                </Navbar.Brand>
                { insideDashboard && <button onClick={handleLogout} style={{textDecoration:'none',color:'blue'}} className='btn btn-link ms-auto text-danger fw-bolder fs-5'>Logout
                    <i class="fa-solid fa-arrow-right-from-bracket fa-beat"></i>
                </button>} 
            </Container>
        </Navbar>
    )
}

export default Header
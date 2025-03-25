import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/UserHeader.css'
import logo from '../images/logo1.png'

function UserHeader() {
    return (
        <div>
            <div className='user-header d-flex justify-content-center align-items-center shadow-sm'>
                <div>
                    <img src={logo} alt='logo' className='logo' />
                </div>
            </div>
        </div>
    )
}

export default UserHeader
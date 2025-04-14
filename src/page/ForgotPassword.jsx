import React from 'react'
import UserHeader from '../component/UserHeader'
import '../css/ForgotPassword.css'

function ForgotPassword() {
    return (
        <div>
            <UserHeader />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="text-center write-title">Reset Password</p>
                <div className='custom-box'>
                    <p className='mt-2 title'>Please enter the email address that is
                        associated <br></br> with your ShoeVibes account.</p>
                    <input type='text' placeholder='Email Address' className='email' />
                    <button type='submit' className='email-button'>Reset Password</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
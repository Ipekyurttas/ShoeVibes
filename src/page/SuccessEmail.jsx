import React from 'react'
import UserHeader from '../component/UserHeader'
import success from '../images/tick.png'
import '../css/Email.css'

function SuccessEmail() {
    return (
        <div>
            <UserHeader />
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={success} alt='success' className='tick' />
                <h2 className='success-title'>Reset Password Email Sent!</h2>
                <p className='success-write text-center'>If there is an account associated with the provided email address, then you will <br></br> receive an email with a link to reset your password.</p>
            </div>
        </div>
    )
}

export default SuccessEmail
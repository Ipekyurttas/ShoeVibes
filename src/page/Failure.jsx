import React from 'react'
import UserHeader from '../component/UserHeader'
import '../css/Email.css'
import failure from '../images/failed.png'
function Failure() {
    return (
        <div>
            <UserHeader />
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={failure} alt='failure' className='tick' />
                <h2 className='success-title'>Reset Password Email Not Sent!</h2>
                <p className='success-write text-center'>No account was found associated with the email address provided, please try again with a correct account.</p>
            </div>
        </div>
    )
}

export default Failure
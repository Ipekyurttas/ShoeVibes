import React, { useState } from 'react';
import UserHeader from '../component/UserHeader';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/ForgotPassword.css';

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:8080/auth/forgot-password', null, {
                params: { email }
            });

            if (response.status === 200) {
                console.log('Password reset request successful:', response.data);
                navigate('/success'); // Başarılı işlem sonrası yönlendirme
            }
        } catch (error) {
            console.error('Password reset request failed:', error.response?.data || error.message);
            navigate('/failure'); // Başarısız işlem sonrası yönlendirme
        }
    };

    return (
        <div>
            <UserHeader />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="text-center write-title">Reset Password</p>
                <div className="custom-box">
                    <p className="mt-2 title">
                        Please enter the email address that is associated <br /> with your ShoeVibes account.
                    </p>
                    <form onSubmit={handleResetPassword}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="email"
                            value={email}
                            onChange={handleInputChange}
                            required
                        />
                        <button type="submit" className="email-button">
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
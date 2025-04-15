import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserHeader from '../component/UserHeader';
import axios from 'axios';
import '../css/Email.css';

function NewPassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const emailFromUrl = queryParams.get('email');

        if (emailFromUrl) {
            setEmail(emailFromUrl);
        }
    }, [location]);

    const handleSetPassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.put(`http://localhost:8080/auth/set-password?email=${email}`, {
                newPassword
            });

            if (response.status === 200) {
                console.log('Password set successfully:', response.data);
                alert('Password set successfully!');
                navigate('/');
            }
        } catch (error) {
            console.error('Failed to set password:', error.response?.data || error.message);
            alert('Failed to set password: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <UserHeader />
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="write-newTitle">Reset Password</p>
                <div className="custom-container">
                    <p className="mt-2 newTitle">Enter the new password you want to create.</p>

                    <form onSubmit={handleSetPassword}>
                        <input
                            type="password"
                            placeholder="New Password"
                            className="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="New Password (Again)"
                            className="newPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="newPassword-button">
                            Create New Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewPassword;
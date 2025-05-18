import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import google from '../images/google.png';

function Form({ activeTab, setActiveTab }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleInput2Change = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/register', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200 || response.status === 201) {
                console.log('Signup Data:', formData);
                setTimeout(() => {
                    navigate('/profile');
                }, 1000);
            }
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/login', loginData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                const { token, role } = response.data;

                // Token ve rolü localStorage'a kaydet
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);

                console.log('Token:', token);
                console.log('Role:', role);

                toast.success('Entrance Successful. You are redirected to Home Page...');

                setTimeout(() => {
                    navigate('/profile');
                }, 2000);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-content">
                <div className="form-items">
                    <div
                        className={`form-item ${activeTab === 'signup' ? 'active' : ''}`}
                        onClick={() => setActiveTab('signup')}
                    >
                        <p className="font-weight-bold">Sign Up</p>
                    </div>
                    <div
                        className={`form-item ${activeTab === 'login' ? 'active' : ''}`}
                        onClick={() => setActiveTab('login')}
                    >
                        <p className="font-weight-bold">Log In</p>
                    </div>
                </div>

                <div className="form-content-body">
                    {activeTab === 'signup' && (
                        <form className="form" onSubmit={handleSignup}>
                            <p className="custom-font">Sign Up</p>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name*"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name*"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                className="form-control"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password*"
                                className="form-control"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>
                            <div className="or-container">
                                <div className="line"></div>
                                <span className="or-text">OR</span>
                                <div className="line"></div>
                            </div>
                            <button
                                type='button'
                                className='btn btn-google'
                                onClick={() => {
                                    setTimeout(() => navigate('/profilehome'), 1000);
                                }}
                            >
                                <img src={google} alt='google' className='google-logo' />
                                Sign Up with Google
                            </button>

                            <p className="switch-form-text">
                                Already have an account?{' '}
                                <span onClick={() => setActiveTab('login')} className="switch-form-link">
                                    Log In
                                </span>
                            </p>
                        </form>
                    )}

                    {activeTab === 'login' && (
                        <form className="form" onSubmit={handleLogin}>
                            <p className="custom-font">Log In</p>
                            <input
                                type="text"
                                name="email"
                                placeholder="Username*"
                                className="form-control"
                                value={loginData.email}
                                onChange={handleInput2Change}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password*"
                                className="form-control"
                                value={loginData.password}
                                onChange={handleInput2Change}
                                required
                            />
                            <p className="forgot-password-text">
                                <span
                                    className="forgot-password-link"
                                    onClick={() => navigate('/forgotpassword')}
                                >
                                    Forgot Password?
                                </span>
                            </p>
                            <button type="submit" className="btn btn-primary">
                                Log In
                            </button>
                            <div className="or-container">
                                <div className="line"></div>
                                <span className="or-text">OR</span>
                                <div className="line"></div>
                            </div>
                            <button
                                type='button'
                                className='btn btn-google'
                                onClick={() => {
                                    setTimeout(() => navigate('/profile'), 1000);
                                }}
                            >
                                <img src={google} alt='google' className='google-logo' />
                                Log In with Google
                            </button>

                            <p className="switch-form-text">
                                Don't have an account?{' '}
                                <span onClick={() => setActiveTab('signup')} className="switch-form-link">
                                    Sign Up
                                </span>
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Form;
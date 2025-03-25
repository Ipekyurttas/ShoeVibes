import React, { useState } from 'react';
import '../css/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import google from '../images/google.png';

function Form({ activeTab }) {

    return (
        <div className="form-container">
            <div className="form-content">
                <div className="form-items">

                    <div
                        className={`form-item ${activeTab === 'signup' ? 'active' : ''}`}
                        onClick={() => setActiveTab('signup')}
                    >
                        <p className='font-weight-bold'>Sign Up</p>
                    </div>
                    <div
                        className={`form-item ${activeTab === 'login' ? 'active' : ''}`}
                        onClick={() => setActiveTab('login')}
                    >
                        <p className='font-weight-bold'>Log In</p>
                    </div>
                </div>

                <div className="form-content-body">

                    {activeTab === 'signup' && (
                        <form className='form'>
                            <p className='custom-font'>Sign Up</p>
                            <input type='text' placeholder='First Name*' className='form-control' />
                            <input type='text' placeholder='Last Name*' className='form-control' />
                            <input type='text' placeholder='Email*' className='form-control' />
                            <input type='password' placeholder='Password*' className='form-control' />
                            <button type='submit' className='btn btn-primary'>Sign Up</button>
                            <div className="or-container">
                                <div className="line"></div>
                                <span className="or-text">OR</span>
                                <div className="line"></div>
                            </div>
                            <button type='button' className='btn btn-google'>
                                <img src={google} alt='google' className='google-logo' />
                                Sign Up with Google
                            </button>
                            <p className="switch-form-text">
                                Already have an account? <span onClick={() => setActiveTab('login')} className="switch-form-link">Log In</span>
                            </p>
                        </form>
                    )}


                    {activeTab === 'login' && (
                        <form className='form'>
                            <p className='custom-font'>Log In</p>
                            <input type='text' placeholder='Username*' className='form-control' />
                            <input type='password' placeholder='Password*' className='form-control' />
                            <p className="forgot-password-text">
                                <span className="forgot-password-link">Forgot Password?</span>
                            </p>
                            <button type='submit' className='btn btn-primary'>Log In</button>
                            <div className="or-container">
                                <div className="line"></div>
                                <span className="or-text">OR</span>
                                <div className="line"></div>
                            </div>
                            <button type='button' className='btn btn-google'>
                                <img src={google} alt='google' className='google-logo' />
                                Log In with Google
                            </button>
                            <p className="switch-form-text">
                                Don't have an account? <span onClick={() => setActiveTab('signup')} className="switch-form-link">Sign Up</span>
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Form;

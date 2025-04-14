import React, { useState, useEffect } from 'react';
import UserHeader from '../component/UserHeader';
import Form from '../component/Form';
import { useLocation } from 'react-router-dom';

function User() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('signup');
    console.log('Component rendered');
    console.log('Location state:', location.state);

    useEffect(() => {
        console.log('useEffect called');
        if (location.state && location.state.tab) {
            console.log('Setting activeTab:', location.state.tab);
            setActiveTab(location.state.tab);
        }
    }, [location.state]);

    return (
        <div>
            <UserHeader />
            <Form activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    );
}

export default User;
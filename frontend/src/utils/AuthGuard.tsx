import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IsLogin } from '../utils/UserInfo';

const AuthGuard = () => {
    const success = IsLogin();
    const navigate = useNavigate();
    React.useEffect(() => {
        !success && navigate('/sign-in');
    }, [success]);
    return (<></>)
}

export default AuthGuard;
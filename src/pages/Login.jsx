import './Login.scss'
import logo from '../assets/images/logo.png';

import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/')
    }

    return (
        <div className="login-container">
            <img className='img-logo' src={logo} alt="logo" />

            <div className="button-container">
                <CustomButton onClick={handleSignInClick}> Entrar </CustomButton>
            </div>
        </div>
    )
}

export default Login;
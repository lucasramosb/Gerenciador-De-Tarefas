import logo from '../assets/images/logo.png';
import CustomButton from './CustomButton';
import './SideBar.scss';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();

    const handleSingOutClick = () => {
        navigate('/');
    };

    return(
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="sign-out">
                <CustomButton onClick={handleSingOutClick}>
                    Sair
                </CustomButton>
            </div>
        </div>
    )
}

export default SideBar;
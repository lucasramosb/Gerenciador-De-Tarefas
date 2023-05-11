import logo from '../assets/images/logo.png';
import CustomButton from './CustomButton';
import './SideBar.scss';

const SideBar = () => {
    return(
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="sign-out">
                <CustomButton>
                    Sair
                </CustomButton>
            </div>
        </div>
    )
}

export default SideBar;
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/eDreams_logo_negative.svg"
import { HeaderContainer, LogoContainer } from "./styles";


const Header = () => {
    const navigate = useNavigate();
    const logoClick = () => { navigate("/") };
    
    return (
        <div>
            <HeaderContainer>
                <LogoContainer onClick={() => logoClick()}>
                    <Logo/>
                </LogoContainer>
            </HeaderContainer>
        </div>
    );
}

export default Header;
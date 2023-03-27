import { ButtonContainer } from "./styles";

const Button = ({text, click}) => (
    <ButtonContainer onClick={click}>{text}</ButtonContainer>
);

export default Button;
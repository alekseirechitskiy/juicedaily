import styled from 'styled-components';
import logoImage from '../../images/logo.svg';

const LogoLink = styled.a`
    display: inline-block;
`;

const LogoImage = styled.img`
    min-width: 131px;
    display: block;
`;

function Logo() {
    return (
        <LogoLink href="#">
            <LogoImage src={logoImage} alt="Logo" />
        </LogoLink>
    )
}

export default Logo;
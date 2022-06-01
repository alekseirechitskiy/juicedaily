import styled from 'styled-components';
import { closeMenu } from '../Functions/menuFunctions';


// === Styled components --- START

const MenuList = styled.ul`
    display: flex;
    align-items: center;
    
    @media (max-width: 921px){
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #fff;
        z-index: 999;
        flex-direction: column;
        justify-content: center;
        transform: translateY(-100%);
        transition: all .3s;
    }
`;

const MenuListItem = styled.li`
    margin-right: 70px;

    @media (max-width: 921px){
        margin: 20px 0;
    }

    &:nth-child(4),
    &:last-child{
        margin-right: 0;
    }
`;

const MenuItemLink = styled.a`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1.5px;
    color: #000000;
    text-transform: uppercase;
    text-decoration: none;

    @media (max-width: 921px){
        font-size: 24px;
        line-height: 32px;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    padding: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    display: none;
    top: 0;
    right: 0;
    background-color: rgba(78,154,169, .3);
    border: none;
    cursor: pointer;

    & span{
        display: block;
        width: 40%;
        height: 3px;
        background-color: rgb(78,154,169);
        border-radius: 5px;

        &:first-child{
            transform: rotate(45deg);
            margin-left: 18px;
        }

        &:last-child{
            transform: rotate(-45deg);
            margin-left: 18px;
            margin-top: -2px;
        }
    }

    @media (max-width: 921px){
        display: block;
    }
`;

// === Styled components --- END


function Menu() {
    return (
        <MenuList id="menuList">
            <MenuListItem>
                <MenuItemLink href="#">BROWSE</MenuItemLink>
            </MenuListItem>
            <MenuListItem>
                <MenuItemLink href="#">TRENDING</MenuItemLink>
            </MenuListItem>
            <MenuListItem>
                <MenuItemLink href="#">CONTRIBUTORS</MenuItemLink>
            </MenuListItem>
            <MenuListItem>
                <MenuItemLink href="#">COMMUNITY</MenuItemLink>
            </MenuListItem>
            <CloseButton onClick={closeMenu}>
                <span></span>
                <span></span>
            </CloseButton>
        </MenuList>
    )
}

export default Menu;
import React from 'react';
import styled from 'styled-components';
import SearchButton from './SearchButton';
import Logo from './Logo';
import Menu from './Menu';


function Header() {
    const HeaderBody = styled.header`
        width: 100%;
        height: 90px;
        padding-left: 50px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 921px){
            padding-left: 10px;
        }

        @media (max-width: 767px){
            height: 60px;
        }
    `;

    const MenuButton = styled.button`
        width: 90px;
        height: 90px;
        display: none;
        margin-left: auto;
        border: none;
        padding: 0;
        background-color: rgba(78,154,169, .3);
        cursor: pointer;

        & span{
            display: block;
            width: 60%;
            height: 3px;
            background-color: rgb(78,154,169);
            margin: 10px auto;
            border-radius: 5px;
            
            @media (max-width: 767px){
                margin: 7px auto;
            }
        }
        
        @media (max-width: 921px){
            display: block;
        }

        @media (max-width: 767px){
            display: block;
            width: 60px;
            height: 60px;
        }
    `;

    const openMenu = () => {
        document.querySelector('#menuList').style.transform = 'translateY(0)';
    }

    return (
        <HeaderBody>
            <Logo />
            <Menu />
            <MenuButton id="menuButton" onClick={openMenu}>
                <span></span>
                <span></span>
                <span></span>
            </MenuButton>
            <SearchButton />
        </HeaderBody>
    )
}

export default Header;
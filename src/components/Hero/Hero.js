import React from 'react';
import styled from 'styled-components';
import heroBg from '../../images/Hero.jpg';
import Header from '../Header/Header';
import HeroBanner from './HeroBanner';


// === Styled components --- START

const HeroSection = styled.section`
    height: calc(100vh - 90px);
    background-image: url(${heroBg});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px;

    @media (max-width: 767px){
        align-items: flex-start;
        justify-content: center;
        height: calc(100vh - 60px);
    }
`;

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 20%;

    @media (max-width: 1279px){
        margin-right: 10%;
    }

    @media (max-width: 921px){
        margin-right: 5%;
    }

    @media (max-width: 767px){
        margin-top: 60px;
        margin-right: 0;
    }
`;

const HeroTitle = styled.h1`
    max-width: 488px;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 85px;
    line-height: 95px;
    letter-spacing: -2px;
    color: #121212;
    margin: 25px 0;

    @media (max-width: 921px){
        font-size: 65px;
        line-height: 75px;
    }

    @media (max-width: 767px){
        font-size: 50px;
        line-height: 60px;
        max-width: 400px;
    }
`;

const HeroText = styled.p`
    max-width: 443px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: rgba(18, 18, 18, .7);

    @media (max-width: 767px){
        font-size: 14px;
        line-height: 22px;
        color: rgb(18, 18, 18);
    }
`;

// === Styled components --- END


function Hero() {
    return (
        <>
            <Header />
            <HeroSection>
                <HeroContent>
                    <HeroBanner />
                    <HeroTitle>
                        Simple and Tasty Juice Recipes
                    </HeroTitle>
                    <HeroText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </HeroText>
                </HeroContent>
            </HeroSection>
        </>
    );
}

export default Hero;
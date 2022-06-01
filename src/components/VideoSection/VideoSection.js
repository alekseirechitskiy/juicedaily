import React from 'react';
import styled from 'styled-components';
import itemBg from '../../images/card-bg-small.jpg';
import playImg from '../../images/play.svg';
import durationImg from '../../images/duration.png';

const Section = styled.section`
    width: 400px;
    height: 636px;
    padding: 50px 50px 0 50px;
    background-image: url(${itemBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    @media(max-width: 419px){
        width: 100%;
    }
`;

const SectionTitle = styled.h2`
    font-weight: 600;
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    color: #FFFFFF;
    @media (max-width: 530px){
        font-size: 32px;
        line-height: 45px;
    }
`;

const Player = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-top: auto;
    height: 55px;
    background-color: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(22px);
    padding: 0 22px;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 0.627027px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & div{
        z-index: 1;
        width: 100%;
        height: 3px;
        background-color: #fff;
        margin: 0 22px;
        position: relative;
        &::before{
            position: absolute;
            content: "";
            width: 11px;
            height: 11px;
            top: -4px;
            left: 40%;
            background-color: #fff;
            border-radius: 50%;
        }
        &::after{
            z-index: -1;
            position: absolute;
            content: "";
            width: 60%;
            height: 3px;
            top: 0;
            right: 0;
            background-color: rgba(18,18,18, .25);
        }
    }

    & img{
        /* flex-shrink: 1;
        margin-right: 22px;
        &:nth-child(2){
            margin-top: 9px;
        } */
    }
`;


function VideoSection() {
    return (
        <a href="https://www.youtube.com/watch?v=vjim_t6KD_c&ab_channel=DoAtHome" target="_blank" rel="noopener noreferrer" >
            <Section>
                <SectionTitle>
                    Simple Orange
                    Juice Recipe
                </SectionTitle>
                <Player>
                    <img src={playImg} alt="" />
                    <div></div>
                    <span>19:05</span>
                </Player>
            </Section>
        </a>
    )

}

export default VideoSection
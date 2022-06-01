import React from 'react';
import styled from 'styled-components';
import { findAuthorPortrait, findAuthorName } from '../Functions/searchFunctions';
import bgImage from '../../images/card-bg.jpg';

const MainPostSection = styled.section`
    padding: 50px;
    width: 842px;
    height: 578px;
    background-color: #F3F4F1;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 530px){
        padding: 30px;
    }
`;

const MainPostTitle = styled.h2`
    max-width: 370px;
    font-weight: 400;
    font-size: 42px;
    line-height: 55px;
    margin-bottom: 20px;

    @media (max-width: 530px){
        font-size: 32px;
        line-height: 45px;
    }
`;

const MainPostAuthor = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const AuthorImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
`;

const AuthorName = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.5px;
    color: #000000;
`;

const MainPostText = styled.p`
    max-width: 234px;
    font-size: 13px;
    line-height: 23px;
    letter-spacing: 0.5px;
    color: rgba(18, 18, 18, .7);
`;


function MainPost({ itemsList }) {
    const postNum = 2;
    return (
        <MainPostSection>
            <MainPostTitle>{itemsList[postNum].title}</MainPostTitle>
            <MainPostAuthor>
                <AuthorImage src={findAuthorPortrait(postNum)} />
                <AuthorName>{findAuthorName(postNum)}</AuthorName>
            </MainPostAuthor>
            <MainPostText>{itemsList[postNum].text}</MainPostText>
        </MainPostSection>
    )
}

export default MainPost
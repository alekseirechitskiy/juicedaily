import React from 'react';
import styled from 'styled-components';
import LatestDB from '../PostsDB';
import { findAuthorPortrait, findAuthorName } from '../Functions/searchFunctions';


// Styled components --- START

const CardList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    align-items: flex-start;
    background-color: #fff;
    @media(max-width: 530px){
        width: 100%;
    }
`;

const CardImage = styled.img`
    max-width: 100%;
    display: block;
    @media(max-width: 530px){
        width: 100%;
    }
`;

const CardContent = styled.div`
    padding: 40px;
    border-bottom: 1px solid rgba(0,0,0, .2);
`;

const CardInfo = styled.div`
    margin-bottom: 20px;
    color: rgba(18, 18, 18, .5);
    font-weight: 400;
    font-size: 13px;
    line-height: 12px; 
    letter-spacing: 0.5px;

    & span{
        color: #40B2C9;
        padding-right: 31px;
        letter-spacing: 1px;
        text-transform: uppercase;
        position: relative;

        &::after{
            position: absolute;
            content: "";
            width: 15px;
            height: 1px;
            top: 8px;
            right: 8px;
            background-color: rgba(18, 18, 18, 0.5);
        }
    }
`;

const CardTitle = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 12px;
`;

const CardText = styled.p`
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.5px;
    color: rgba(18,18,18, .7);
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 24px 40px;
`;

const AuthorsImage = styled.img`
    border-radius: 50%;
    width: 28px;
    height: auto;
    margin-right: 8px;
`;

const AuthorsName = styled.div`
    display: block;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.3px;
    color: #273240;
`;

const ArticleDate = styled.div`
    margin-left: auto;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.5px;
    color: rgba(44, 58, 75,.5);
`;

// Styled components --- END



function JuiceCard() {
    return (
        <Card>
            <CardImage src={LatestDB[3].img} />
            <CardContent>
                <CardInfo>
                    <span>
                        {LatestDB[3].base}
                    </span>
                    {LatestDB[3].minutesToRead} mins read
                </CardInfo>
                <CardTitle>
                    {LatestDB[3].title}
                </CardTitle>
                <CardText>
                    {LatestDB[3].text}
                </CardText>
            </CardContent>
            <Author>
                <AuthorsImage src={findAuthorPortrait(0)} />
                <AuthorsName>
                    {findAuthorName(0)}
                </AuthorsName>
                <ArticleDate>
                    {LatestDB[3].date}
                </ArticleDate>
            </Author>
        </Card>
    )
}

export default JuiceCard;
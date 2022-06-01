import React from 'react';
import styled from 'styled-components';
import itemImg from '../../images/popularArrow.svg';

const PopularSection = styled.section`
    padding: 50px;
    background-color: #fff;

    @media (max-width: 530px){
        padding: 30px;
    }
`;

const PopularTitle = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 54px;
    
`;

const List = styled.ul`
    max-width: 340px;
`;

const Item = styled.li`
    padding-top: 25px;
    padding-bottom: 43px;
    border-bottom: 1px solid rgba(0,0,0,.2);
    &:first-child{
        padding-top: 0;
    }
    &:last-child{
        border: none;
        padding-bottom: 0;
    }
    &:hover{
        & img{
            transform: translateX(50%);
        }
    }
    & img{
        transition: all .3s;
    }
`;

const ItemLink = styled.a`

`;

const ItemTextBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const ItemTitle = styled.h3`
    font-weight: 400;
    max-width: 295px;
    font-size: 28px;
    line-height: 38px;
    margin-right: 24px;
    @media (max-width: 530px){
        font-size: 20px;
        line-height: 30px;
    }
`;

const ItemText = styled.p`
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.5px;
    color: rgba(18,18,18,.3);
`;

const ItemImg = styled.img`
    display: block;
    margin-top: 10px;
    
`;


function Popular({ itemsList }) {
    return (
        <PopularSection>
            <PopularTitle>Popular</PopularTitle>
            <List>
                {itemsList.slice(2, 5).map(item => (
                    <Item key={item.id}>
                        <a href={item.link}>
                            <ItemTextBox>
                                <ItemTitle>{item.shortTitle}</ItemTitle>
                                <ItemImg src={itemImg} alt="" />
                            </ItemTextBox>
                            <ItemText>{item.numbersOfVideo} videos</ItemText>
                        </a>
                    </Item>

                ))}
            </List>
        </PopularSection>
    )
}

export default Popular
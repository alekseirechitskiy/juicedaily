import React from 'react';
import styled from 'styled-components';
import Dotdotdot from 'react-dotdotdot';

const TrendingSection = styled.section`
    padding: 50px 20px;
    width: 100%;
    background-color: #fff;
`;

const TrendingTitle = styled.h2`
    margin-bottom: 32px;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
`;

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 1149px){
        flex-wrap:wrap;
        justify-content: flex-start;
        
    }
`;

const ListItem = styled.li`
    display: flex;
    max-width: 340px;
    height: 100px;
    & div{
        height: 100px;
        /* overflow: hidden; */
    }
`;

const ItemImageBox = styled.div`
    margin-right: 20px;
    display: block;
    min-width: 144px;
    /* height: 100px; */
    overflow: hidden;
    & img{
        object-fit: cover;
        display: block;
        width: 144px;
        height: 100px;
        /* height: auto; */
    }
`;

const ItemTitle = styled.h4`
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
    margin-bottom: 8px;
`;

const ItemText = styled.p`
    height: 40px;
    overflow: hidden;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: rgba(18,18,18, .5);
`;


function Trending({ itemsList }) {
    return (
        <TrendingSection>
            <TrendingTitle>Trending</TrendingTitle>
            <List>
                {itemsList.slice(1, 4).map(item => (
                    <ListItem key={item.id}>
                        <ItemImageBox>
                            <img src={item.img} />
                        </ItemImageBox>
                        <div>
                            <ItemTitle>{item.shortTitle}</ItemTitle>
                            <ItemText>
                                {item.shortText}
                            </ItemText>
                        </div>
                    </ListItem>
                ))}
            </List>
        </TrendingSection>
    )
}

export default Trending;
import React from 'react';
import styled from 'styled-components';
// import LatestCard from './LatestCard';
// import LatestDB from '../PostsDB';


// Styled components --- START

const List = styled.ul`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 40px;

    @media(max-width: 991px){
        gap: 15px;
    }

    @media(max-width: 767px){
        gap: 10px;
    }

    @media(max-width: 529px){
        flex-direction: column;
        gap: 40px;

    }
`;

const LatestListItem = styled.li`
    flex: 0 1 360px;
    cursor: pointer;
    height: 352px;
    
    @media(max-width: 767px){
        flex: 1 1 49%;
    }
`;

const ItemImgBox = styled.div`
    width: 360px;
    height: 240px;
    display: block;
    overflow: hidden;

    @media(max-width: 529px){
        width: 100%;
        height: auto;
    }

    & img{
        width: 100%;
        object-fit: cover;
    }
`;


const ItemInfo = styled.div`
    margin: 24px 0 16px;
    color: rgba(18, 18, 18, .5);
    font-weight: 400;
    font-size: 13px;
    line-height: 12px; 
    letter-spacing: 0.5px;

    & span{
        color: #F5556E;
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

const ItemText = styled.p`
    max-width: 320px;
    font-size: 20px;
    line-height: 30px;

    @media(max-width: 991px){
        font-size: 16px;
        line-height: 26px;
    }
`;

// Styled components --- END


function LatestList({ itemList }) {
    return (
        <List>
            {itemList.slice(1, 4).map(item => (
                <LatestListItem key={item.id}>
                    <a href={item.link}>
                        <ItemImgBox>
                            <img src={item.img} alt="cover" />
                        </ItemImgBox>
                        <ItemInfo>
                            <span>
                                {item.base}
                            </span>
                            {item.minutesToRead} mins read
                        </ItemInfo>
                        <ItemText>
                            {item.title}
                        </ItemText>
                    </a>
                </LatestListItem>
            ))}
        </List>
    );
}

export default LatestList
import React from 'react';
import styled from 'styled-components';

const ContributorsSection = styled.div`
    padding: 40px;
    background-color: #fff;
    width: 400px;
`;

const ContributorsTitle = styled.h3`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #0F1935;
    margin-bottom: 38px;
`;

const List = styled.ul`

`;

const ListItem = styled.li`
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    &:last-child{
        margin-bottom: 0;
    }
`;

const Portrait = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
`;

const Name = styled.h4`
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 0.3px;
    color: #273240;

`;

const Articles = styled.p`
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.5px;
    color: rgba(44, 58, 75, .5);

`;


function Contributors({ itemsList }) {

    // const Arr = Object.keys(itemsList);
    // console.log(Arr);

    return (
        <ContributorsSection>
            <ContributorsTitle>Top Contributors</ContributorsTitle>
            <List>
                {Object.keys(itemsList)
                    .map(i => (
                        <ListItem key={itemsList[i].id}>
                            <Portrait src={itemsList[i].portrait} />
                            <div>
                                <Name>{itemsList[i].name}</Name>
                                <Articles>{itemsList[i].numberOfPosts} articles</Articles>
                            </div>
                        </ListItem>
                    ))
                }
            </List>
        </ContributorsSection>
    )

}

export default Contributors;
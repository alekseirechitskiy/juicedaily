import React from 'react';
import styled from 'styled-components';


// Styled components --- START

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`;

const CardImage = styled.img`
    max-width: 100%;
    display: block;
`;

const CardInfo = styled.div`
    margin: 24px 0 16px;
`;

const CardText = styled.p`
    font-size: 20px;
    line-height: 30px;
`;

// Styled components --- END


function LatestCard({ itemList }) {
    return


    // <Card>
    //     <CardImage src={itemList[2].imgLink} alt="image" />
    //     <CardInfo />
    //     <CardText>
    //         {itemList[2].text}
    //     </CardText>
    // </Card>


}

export default LatestCard;
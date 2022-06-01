import React from 'react';
import styled from 'styled-components';
import LatestList from './LatestList';
import LatestDB from '../PostsDB';


// === Styled components --- START

const LatestSection = styled.section`
    padding: 80px 0;

    @media(max-width: 767px){
        padding: 40px 0;
    }
`;

const LatestTitle = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #0F1935;
    margin-bottom: 32px;
`;

// === Styled components --- END


function Latest() {
    return (
        <LatestSection>
            <div className="container">
                <LatestTitle>
                    Latest
                </LatestTitle>
                <LatestList itemList={LatestDB} />
            </div>
        </LatestSection>
    )
}

export default Latest
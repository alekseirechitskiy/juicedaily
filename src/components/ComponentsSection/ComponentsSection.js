import React from 'react';
import styled from 'styled-components';
import AuthorsDB from '../AuthorsDB';
import PostsDB from '../PostsDB';
import JuiceCard from '../JuceCard/JuiceCard';
import Contributors from '../Contributors/Contibutors';
import MainPost from '../MainPost/MainPost';
import Trending from '../Trending/Trending';
import Popular from '../Popular/Popular';
import VideoSection from '../VideoSection/VideoSection';


const Components = styled.section`
    padding: 80px 0;
    background-color: #E2DFD7;
`;

const ComponentsTitle = styled.h2`
    margin-bottom: 20px;
`;

const ComponentsZone = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
`;


function ComponentsSection() {
    return (
        <Components>
            <div className="container">
                <ComponentsTitle>
                    Components
                </ComponentsTitle>
                <ComponentsZone>
                    <JuiceCard />
                    <MainPost itemsList={PostsDB} />
                    <Contributors itemsList={AuthorsDB} />
                    <Trending itemsList={PostsDB} />
                    <Popular itemsList={PostsDB} />
                    <VideoSection />
                </ComponentsZone>
            </div>
        </Components>
    )
}


export default ComponentsSection;
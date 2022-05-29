import styled from 'styled-components';
import bannerArrow from '../../images/bannerArrow.svg';

function HeroBanner() {
    const Banner = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        font-family: 'Poppins';
        width: 406px;
        background-color: rgba(78,154,169, .15);
        color: #4E9AA9;
        padding: 10px 20px 10px 10px;
        cursor: pointer;
        transition: all .2s;

        @media (max-width: 767px){
            width: 100%;
            max-width: 400px;
            background-color: rgba(78,154,169, .3);
        }
        
        &:hover{
            background-color: rgba(78,154,169, .3);
        }
    `;

    const BannerMarker = styled.div`
        max-width:93px;
        display: inline-block;
        background-color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 9px;
        line-height: 9px;
        letter-spacing: 1px;
        padding: 9px 15px 8px;

        @media (max-width: 767px){
            max-width: 65px;
        }
    `;

    const BannerText = styled.p`
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.5px;
        margin: 0 auto;
        @media (max-width: 767px){
            margin: 0 25px;
        }
    `;

    const BannerImage = styled.img`
        display: block;
        max-width: 100%;
    `;

    return (
        <Banner href="#">
            <BannerMarker>
                NEW RECIPE
            </BannerMarker>
            <BannerText>
                Delicious fruit juice combinations
            </BannerText>
            <BannerImage src={bannerArrow} alt="arrow" />
        </Banner>
    )
}

export default HeroBanner;
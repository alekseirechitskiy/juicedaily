import styled from 'styled-components';
import searchIcon from '../../images/search.svg';

const SearchButton = styled.button`
        width: 90px;
        height: 90px;
        background-color: #ff553c;
        border: none;
        background-image: url(${searchIcon});
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;

        @media (max-width: 767px){
            width: 60px;
            height: 60px;
        }
    `;

export default SearchButton;
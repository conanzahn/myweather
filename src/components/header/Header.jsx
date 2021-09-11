// Header component includes Logo and Title
import React from 'react';
import styled from 'styled-components';
import {TiWeatherWindyCloudy} from 'react-icons/ti';

const Container = styled.div`
    margin-top: 3%;
    /* display:flex;
    flex-direction: column;
    align-items: center; */
`;

const Appicon = styled.div`
    color: #5cac8e;
`;


const Logo = styled.div`
    font-size: 25px;
    font-family: 'Courgette', cursive;
`;



const Header = ()=> (
    <Container>
        <Appicon><TiWeatherWindyCloudy size='35px'/></Appicon>
        <Logo>My Weather</Logo>
    </Container>
)
export default Header; 
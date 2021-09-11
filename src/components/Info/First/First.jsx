// display for user first open this website
// 'Please search weather by a city name'

import styled from "styled-components";
import {FaSmileWink} from 'react-icons/fa';

const Container = styled.div`
    border-radius: 30px;
    background: black;
    opacity: 0.5;
    /* border: 1px solid; */
    margin: 10% 10% 10%;
    padding: 20px 0 20px;
`;

const Text = styled.div`
    color: white;
    font-size: 20px;
`;

const Icon = styled.div`
    margin-top: 2%;
    color: #ffec81;
`;

const B = styled.b`
    color: #47af89;
`;


const First = () => (
    <Container>
        <Text>Welcome to this Weather App!</Text>
        <Icon>
            <FaSmileWink size='35px'/>
        </Icon>
        <Text>Please input a <B>cityname</B> to <B>seach</B> weather infomation.</Text>
        
    </Container>
)

export default First;
// display for Error Message
// 'Please try a correct cityname'

import styled from "styled-components";
import {HiEmojiSad} from 'react-icons/hi';

const Container = styled.div`
    border-radius: 30px;
    background: #d3d3d3;
    opacity: 0.6;
    /* border: 1px solid; */
    margin: 10% 10% 10%;
    padding: 20px 0 20px;
`;

const Text = styled.div`
    color: red;
    font-size: 20px;
`;

const Icon = styled.div`
    margin-top: 2%;
    color: #fde974;
`;

const B = styled.b`
    /* color: #47af89; */
`;


const Error = () => (
    <Container>
        <Text><B>Sorry, request failed!</B></Text>
        <Icon>
            <HiEmojiSad size='35px'/>
        </Icon>
        <Text>Please input a <B>correct cityname</B> or <B>try it again</B>.</Text>
        
    </Container>
)

export default Error;
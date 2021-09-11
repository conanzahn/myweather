// display for Error Message
// 'Please try a correct cityname'

import styled from "styled-components";
import {VscLoading} from 'react-icons/vsc';

const Container = styled.div`
    margin: 10% 10% 10%;
    padding: 20px 0 20px;
`;

const Text = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;
    letter-spacing:0.15em;
`;

const Icon = styled.div`
    margin-top: 2%;
    color: white;
`;

const Load = () => (
    <Container>
        <Icon><VscLoading size='60px'/></Icon>
        <Text>Loading...</Text>
    </Container>
)

export default Load;
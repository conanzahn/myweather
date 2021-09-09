import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'
import Contact from '../../data/contact/Contact';

const Container = styled.div`
    border-top: 1px solid hsla(0,0%,62.7%,.3);
    margin:20px 10px 1px;
`;

const Ibox = styled.div`
    background: #2b2b2b;
    opacity:0.75;
    border-radius: 50% 20% / 10% 40%;
    /* margin-top: 0.1px; */
`;

const Icons = styled.ul`
    /* display: flex; */
    padding-top: 1%;
`;

const Item = styled.li`
    display: inline;
    margin: 0 6px 0;
`;

const Href = styled.a`
    color: white;
`;


const Cpright = styled.div`
    color: #aaa;
    font-family: "Raleway",Helvetica,sans-serif;
    font-size: .5em;
    font-weight: bold;
    letter-spacing: .25em;
    text-transform: uppercase;
    margin-top: 1%;
    padding-bottom: 1%;
`;

const coffee = <FontAwesomeIcon icon={faCoffee} color='#552c2cc5'/>
const love = <FontAwesomeIcon icon={faHeart} color='red'/>

const footer = () => (
    <Container>
        <Ibox>
            <Icons>
                {Contact.map((s) => (
                    <Item key = {s.label}>
                        <Href href= {s.label}>
                            {s.icon}
                        </Href>
                    </Item>
                ))}
            </Icons>

            <Cpright>
                © Copyright 2021 | Made with {love} and {coffee} by Haonan Zhang.
            </Cpright>
        </Ibox>

        
    </Container>
)
export default footer;
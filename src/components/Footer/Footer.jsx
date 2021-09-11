// Footer contain contact icons and copyright
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'
import Contact from '../../data/contact/Contact';

const Container = styled.div`
    border-top: 1px solid hsla(0,0%,82.7%,.3);
    margin:5% 5% 1%;
`;

const Ibox = styled.div`
    background: #000000;
    opacity:0.8;
    border-radius: 50% 20% / 10% 40%;
    margin-top: 1%;
    padding: 10px 5px 10px;
`;

const Icons = styled.div`
    padding-top: 1%;
`;

const Item = styled.div`
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

const Footer = () => (
    <Container>
        <Ibox>
            <Icons>
                {Contact.map((s) => (
                    <Item key = {s.label}>
                        <Href href= {s.link}>
                            {s.icon}
                        </Href>
                    </Item>
                ))}
            </Icons>

            <Cpright>
                &copy; Copyright 2021 | Made with {love} and {coffee} by Haonan Zhang.
            </Cpright>
        </Ibox>

        
    </Container>
)
export default Footer;
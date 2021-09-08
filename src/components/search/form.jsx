import React from 'react';
import styled from 'styled-components';
import {BiSearchAlt} from 'react-icons/bi';
// import axios from 'axios';

const Inputbox = styled.div`
    /* border: 2px solid #DDD; */
    width: 100%;
    /* margin-left: 37%; */
    border-radius:15px;
    padding: 3px 5px 3px;
    display: flex;
    background: white;
`;

const Inputimg = styled.div`
    margin: 5px 5px 0;
    /* margin-left: 5px; */
    color: #555454;
`;

const Input = styled.input`
    border: none;
    background: none;
    /* display: inline-block; */
    padding:9px 10px;
    font-size:15px;
    :focus-visible{
        outline:0;
    }
`;

const Searchform = ()=> (
    <form>
        {/* <label for="city">Please input a city</label> */}
        <Inputbox>
            <Inputimg>
                <BiSearchAlt size='25px' />
            </Inputimg>
            <Input type="text" id="city" name="city" placeholder="Sydney"/>
        </Inputbox>
    </form>
)

export default Searchform; 
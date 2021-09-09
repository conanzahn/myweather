import React from 'react';
import styled from 'styled-components';
import Searchform from './form';
import Button from '../button';

const Serachbox = styled.div`
    border: none;
    /* width: 100%; */
    margin-top: 5%;
    margin-left: 29%;
    display: flex;
`;

const Searchbar = styled.div`

`;

const Searchbtn = styled.div`
    margin-left: 8%;
    margin-top: 0.6%;
`;

const Search = ()=> (
    <Serachbox>
        <Searchbar>
            <Searchform />
        </Searchbar>
        {/* <Searchbtn>
            <Button size='small' variant='search' type='submit'> Search </Button>
        </Searchbtn> */}
    </Serachbox>
)
export default Search; 
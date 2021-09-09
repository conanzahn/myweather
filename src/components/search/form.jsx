import React from 'react';
import styled from 'styled-components';
import {BiSearchAlt} from 'react-icons/bi';
import Button from '../button';
import { render } from '@testing-library/react';
// import axios from 'axios';

const Box = styled.div`
    display: flex;
`;

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

const Searchbtn = styled.div`
    margin-left: 8%;
    margin-top: 1%;
`;

class Searchform extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            search:'',
            isSubmit:''
        };
        
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchChange=(event)=> {
        this.setState({search: event.target.value});
    }

    handleSubmit (event){
        event.preventDefault();
        this.setState({isSubmit:true})
    }

    render(){
        return(
            <Box>
                <form onSubmit={this.handleSubmit}>
                    {/* <label for="city">Please input a city</label> */}
                    <Inputbox>
                        <Inputimg>
                            <BiSearchAlt size='25px' />
                        </Inputimg>
                        <Input type="text" id="city" name="city" placeholder="Sydney"
                        onChange={this.handleSearchChange}/>
                    </Inputbox>
                </form>
                <Searchbtn>
                    <Button size='small' variant='search' type='submit'> Search </Button>
                </Searchbtn>
            </Box>
        );
    }
    
}

export default Searchform; 
// Search component for user input ketwords, send request to Api
import React from 'react';
import styled from 'styled-components';
import {BiSearchAlt} from 'react-icons/bi';
import Button from '../button';
import axios from 'axios';

const Serachbox = styled.div`
    border: none;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    outline: 0;
`;

const Searchbar = styled.div`
    outline: 0;
`;

const Box = styled.div`
    display: flex;
    outline:0;
`;

const Inputbox = styled.div`
    border-radius:15px;
    padding: 3px 5px 3px;
    display: flex;
    background: white;
`;

const Inputimg = styled.div`
    margin: 5px 5px 0;
    color: #555454;
`;

const Input = styled.input`
    border: none;
    background: none;
    padding:9px 10px;
    font-size:15px;
    :focus-visible{
        outline:0;
    }
`;

const Searchbtn = styled.div`
    margin-left: 5%;
    margin-top: 0.5%;
`;


class Search extends React.Component{

    search = ()=>{
        //Get user input
		const {keyWordElement:{value:keyWord}} = this
        console.log('keyword', this.keyWordElement)
		//Notify App update status before sending request
		this.props.updateAppState({isFirst:false,isLoading:true})
		//send request
		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${keyWord}&appid=${'06097b28b073d46a2f450fe6f7112b58'}&units=${'metric'}`).then(
			response => {
				//App update status after successful request
				this.props.updateAppState({isLoading:false,result:response.data})
                
			},
			error => {
				//App update status after request fails
				this.props.updateAppState({isLoading:false,err:error.message})
			}
		)
    }

    render(){
        return(
            <Serachbox >
                <Searchbar>
                <Box>
                    <Inputbox>
                        <Inputimg>
                            <BiSearchAlt size='25px' />
                        </Inputimg>
                        <Input ref={c => this.keyWordElement = c}
                        type="text" id="city" name="city" placeholder="Sydney"
                        />
                    </Inputbox>
                </Box>
                </Searchbar>
                <Searchbtn>
                    <Button onClick = {this.search}  size='small' variant='search'> Search </Button>
                </Searchbtn>
            </Serachbox>
        )
    }
}

export default Search; 
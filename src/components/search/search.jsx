import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import Weather from '../weather';
import {BiSearchAlt} from 'react-icons/bi';
import Button from '../button';
import {
    Redirect
} from "react-router-dom";
import axios from 'axios';

const Serachbox = styled.div`
    border: none;
    /* width: 100%; */
    margin-top: 5%;
    margin-left: 29%;
    display: flex;
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
    margin-top: 0.5%;
    /* display: inline-block; */
`;


class Search extends React.Component{

    search = ()=>{
        //获取用户的输入(连续解构赋值+重命名)
		const {keyWordElement:{value:keyWord}} = this
        console.log('keyword', this.keyWordElement)
		//发送请求前通知App更新状态
		this.props.updateAppState({isFirst:false,isLoading:true})
		//发送网络请求
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${keyWord}&appid=${'06097b28b073d46a2f450fe6f7112b58'}&units=${'metric'}`).then(
			response => {
				//请求成功后通知App更新状态
                
				this.props.updateAppState({isLoading:false,result:response.data})
                
			},
			error => {
				//请求失败后通知App更新状态
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
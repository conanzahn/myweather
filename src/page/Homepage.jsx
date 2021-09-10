import React from "react";
import Header from '../components/header';
import Search from '../components/search';
import Weather from '../components/weather';
import Footer from '../components/Footer';


class Homepage extends React.Component{

    state = {
        result:{},
        isFirst:true, //是否为第一次打开页面
        isLoading:false,//标识是否处于加载中
        err:'',//存储请求相关的错误信息
    }

    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }

    render() {
        console.log('homapage')
        return (
            <div>
                <Header />
                <Search updateAppState={this.updateAppState}/>
                <Weather {...this.state}/>
                <Footer />
            </div>
        )
    }
}

export default Homepage; 
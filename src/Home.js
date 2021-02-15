import React, { Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props);
    this.state = {
        data : ''
    }
    }
    callApi = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                data:json.title
            })
        });
    }
    //api 호출할때 사용
    componentDidMount(){
        this.callApi();
    }

    render(){
        return(
            <div>
                <h3>
                    {this.state.data?this.state.data:'데이터를 불러오는 중입니다.'}
                </h3>
            </div>
        )
    }
}

export default Home;
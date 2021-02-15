import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Board extends Component{
    constructor(props){
        super(props);
        this.state ={
            date : new Date()
        };
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }

    //리소스의 낭비를 줄이기 위해
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    //내부적으로 Date의 상태값을 바꾼다 
    componentDidMount(){
        this.timerId = setInterval(() => this.tick(),1000)
    }
    render(){
        return(
            <div id="root">
                현재 시각은 [{this.state.date.toLocaleTimeString()}]                
            </div>
        )
    }
}



export default Board;
import React, { Component } from 'react';


class EventHandling extends Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        }
        this.handleCLick = this.handleCLick.bind(this)
    }
    handleCLick = () => {
       this.setState(state =>({
          isToggleOn: !this.state.isToggleOn 
       }))
    }
    render(){
        return(
            <button onClick={this.handleCLick}>{this.state.isToggleOn?'On':'OFF'}버튼</button>
        )
    }
}
export default EventHandling;
import React, {Component} from 'react';
require("../../../css/main.css");
export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
    componentDidMount(){
        this.timerID = setInterval(
            ()=>this.tick(),
            1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return (
            <div>
                <h1>hello world</h1>
                <h2>Time now: {this.state.date.toLocaleTimeString()}</h2>
                <div className="leftfix"></div>
                <div className="clear"></div>
                <div className="rightfloat">
                    <div className='textarea' contentEditable="true"></div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}
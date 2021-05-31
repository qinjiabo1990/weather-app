import React, {Component} from 'react';
import styled from 'styled-components';

const TimeSize = styled.div`
    font-size: 18px;
`

class Time extends Component {
    constructor(props){
        super(props)
        this.state={
            currentTime: new Date().toLocaleTimeString(),
        }
    }

    handleCurrentTime = () => {
        this.setState({
            currentTime: new Date().toLocaleTimeString(),
        })
    }

    componentDidMount(){
        this.time = setInterval(()=>this.handleCurrentTime(), 1000)
    }
    
    componentWillUnmount(){
        clearInterval(this.time);
    }

    render(){
        return(
            <>
                <TimeSize>
                    {this.state.currentTime}
                </TimeSize>
            </>
            
        )
    }
}

export default Time;
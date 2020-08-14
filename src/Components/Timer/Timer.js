import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { currentTime } = this.state;
        return (
            <h1> Hello Friends {currentTime}</h1>
        )
    }
}

export default Timer;
import React, { Component } from "react";
import axios from 'axios';

export default class Head extends Component {
    // DynamoDB ----> Lambda ---- > API Gateway ----> JS
    constructor() {
        super();
        //Set default message
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        //delete axios.defaults.headers.common['X-Requested-With'];
        axios({
            method: 'get',
            mode: 'no-cors',
            url: 'https://1bwhrmga8d.execute-api.us-west-1.amazonaws.com/count/prod'
            //url: 'https://et3wb2n1el.execute-api.us-west-1.amazonaws.com/Prod/count'
            })
            .then(response => {
                this.setState({ item: response.data })
                console.table(response.data)
            })
            .catch(err => console.log(err))
        };
    render() {
        return (
            <header id="header">
                <div id="head" class="parallax" parallax-speed="2" style={{ backgroundPosition: '50% 0px' }}>
                    <div class="top_left_cont zoomIn wow animated" id="logo">
                        <p>views: {this.state.item}</p>
                        <img class="img-circle" src="img/head-2.jpg" alt="" />
                        <h2>Bryant Conti <br /><strong>Web Developer</strong></h2>
                        {/* <a href="/assets/Bryant-Conti-Resume.pdf" class="read_more2" download>Download resume</a> */}     
                    </div>
                </div>
            </header>
        )
    }
}

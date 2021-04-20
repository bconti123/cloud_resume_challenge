import React, { Component } from "react";

// DynamoDB ----> Lambda ---- > API Gateway ----> JS

function UpdateCount() {
    
    fetch('https://fc3srfr1df.execute-api.us-west-1.amazonaws.com/prod/count', {
        mode: "no-cors",
        method: 'OPTION'
    })    
    .then(response => {
        if (
            // check if status code is 200
            response.ok
        ) 
        {
            return response.json()
        }
        else {
            throw new Error('something went wrong');
        }
    })
    .then(
        data => document.getElementById('count').innerText = 'foo')
    .catch(error => console.error(error))
}
UpdateCount();

export default class Head extends Component {
    render() {
        return (
            <header id="header">
                <div id="head" class="parallax" parallax-speed="2" style={{ backgroundPosition: '50% 0px' }}>
                    <div class="top_left_cont zoomIn wow animated" id="logo">
                        <p>views:<span id="count"></span></p>
                        <img class="img-circle" src="img/head-2.jpg" alt="" />
                        <h2>Bryant Conti <br /><strong>Web Developer</strong></h2>
                        {/* <a href="/assets/Bryant-Conti-Resume.pdf" class="read_more2" download>Download resume</a> */}     
                    </div>
                </div>
            </header>
        )
    }
}

import React, { Component } from "react";


export default class Nav extends Component {
    render() {
        return (
            <header id="header_wrapper">
                <div class="container">
                    <div class="header_box">

                        <nav class="navbar navbar-inverse" role="navigation">
                            <div class="navbar-header">
                                <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                            </div>
                            <div id="main-nav" class="collapse navbar-collapse navStyle">
                                <ul class="nav navbar-nav" id="mainNav">
                                    <li class="active"><a href="#header" class="scroll-link">Home</a></li>
                                    <li><a href="#aboutUs" class="scroll-link">About Me</a></li>
                                    <li><a href="#techSkills" class="scroll-link">Tecnnical Skills</a></li> 
                                    {/* <li><a href="#Portfolio" class="scroll-link">Portfolio</a></li> */}
                                    <li><a href="#experience" class="scroll-link">Experience</a></li>
                                    <li><a href="#contact" class="scroll-link">Contact</a></li>
                                    <li><a href="https://bconti123.github.io/">Blog</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}
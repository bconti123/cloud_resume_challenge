import React, { Component } from "react";


export default class Skills extends Component {
    render() {
        return (
            <section id="service">
                <div class="container">
                    <h2>My Skills</h2>
                    <h6>Listing skills this below.</h6>
                    <div class="service_wrapper">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="service_icon delay-03s animated wow  zoomIn"> <span><i class="fa fa-tree"></i></span> </div>
                                <div class="service_block">

                                    <h3 class="animated fadeInUp wow">Technology Support</h3>
                                    <p class="animated fadeInDown wow">Assisting 30+ technical and 
                                    non-technical people to solve their technical problems and fixed issues.
                                    Knowledge with Windows and Mac enivorment. </p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="service_icon icon2  delay-03s animated wow zoomIn"> <span><i class="fa fa-crosshairs"></i></span> </div>
                                <div class="service_block">
                                    <h3 class="animated fadeInUp wow">Full-Stack</h3>
                                    <p class="animated fadeInDown wow">Create a website with HTML/CSS/JavaScript, React.js, Vue.js, 
                                    and other framework. Deploy backend and frontend in cloud platform (AWS, GCP, or Azure).  </p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="service_icon icon3  delay-03s animated wow zoomIn"> <span><i class="fa fa-building-o "></i></span> </div>
                                <div class="service_block">

                                    <h3 class="animated fadeInUp wow">Cloud Infrastructure</h3>
                                    <p class="animated fadeInDown wow">Working on infrastructure with Terraform 
                                    as system design to setting up cloud infrastructure leading to make flexiable system well.  </p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="service_icon icon3  delay-03s animated wow zoomIn"> <span><i class="bi bi-cloud"></i></span> </div>
                                
                                <div class="service_block">

                                    <h3 class="animated fadeInUp wow">Web Development</h3>
                                    <p class="animated fadeInDown wow">Knowledge with Wix, Wordpress, on my own code, and other design framework. </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
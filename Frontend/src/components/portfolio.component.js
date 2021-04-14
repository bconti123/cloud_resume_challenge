import React, { Component } from "react";


export default class Portfolio extends Component {
    render() {
        return (
        <section id="Portfolio" class="content">
          
          <div class="container portfolio_title">
            <div class="section-title">
              <h2>Portfolio</h2>
              <h6>Check my technical and programming projects here!</h6>
            </div>
          </div>

          <div class="portfolio-top"></div>

          <div class="portfolio">
            <div id="filters" class="sixteen columns">
              <ul class="clearfix">
                <li><a id="all" href="/#" data-filter="*" class="active">
                  <h5>All</h5>
                </a></li>
                <li><a href="/#" data-filter=".dev">
                  <h5>Web Development</h5>
                </a></li>
                <li><a href="/#" data-filter=".prog">
                  <h5>Programming</h5>
                </a></li>
                <li><a href="/#" data-filter=".aws">
                  <h5>AWS</h5>
                </a></li>
              </ul>
            </div>
          </div>



          <div class="isotope fadeInLeft animated wow grid" style={{ position: 'relative' , overflow: 'hidden' , height: '480px'}} id="portfolio_wrapper">

            <figure style={{position: 'absolute', left: '0px', top: '0px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', width: '337px', opacity: '1'}} class="portfolio-item one-four   dev isotope-item effect-oscar">
              <div class="portfolio_img">
                <img src="img/Hapastein-2.png" alt="Portfolio 1" />
              </div>
                <figcaption>
                  <div>
                    <a href={"img/Hapastein-2.png"} class="fancybox">
                      <h3><span></span></h3>
                      <p>Web Developer Internship Project 2013</p>
                    </a>
                  </div>
                </figcaption>
            </figure>

            <figure style={{ position: 'absolute', left: '0px', top: '0px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', width: '337px', opacity: '1' }} class="portfolio-item one-four   dev isotope-item effect-oscar">
              <div class="portfolio_img">
                <img src="img/ACT-Capstone.png" alt="Portfolio 1" />
              </div>
              <figcaption>
                <div>
                  <a href={"img/ACT-Capstone.png"} class="fancybox">
                    <h3><span></span></h3>
                    <p>Web Developer ACT Capstone Project 2013</p>
                  </a>
                </div>
              </figcaption>
            </figure>

          </div>
        </section> 
        )
    }
}
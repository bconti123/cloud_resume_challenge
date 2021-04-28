import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
            <footer class="footer_wrapper" id="contact">
                <div class="container">
                    <section class="page_section contact" id="contact">
                        <div class="contact_section">
                            <h2>Contact Us</h2>
                            <h6>Free feel to ask me.</h6>

                        </div>
                        <div class="row">
                            <div class="col-lg-4 wow fadeInLeft">
                                <div class="contact_info">
                                    <div class="detail">
                                        <h4>call us</h4>
                                        <p>+1 (650) 268-5046</p>
                                    </div>
                                    <div class="detail">
                                        <h4>Email us</h4>
                                        <p>bconti00@gmail.com</p>
                                    </div>
                                </div>



                                <ul class="social_links">
                                    <li class="linkedin animated bounceIn wow delay-02s"><a href="https://www.linkedin.com/in/bryant-conti/" target="_blank" rel="noopener noreferrer" ><i class="fa fa-linkedin"></i></a></li>
                                    <li class="github animated bounceIn wow delay-03s"><a href="https://github.com/bconti123" target="_blank" rel="noopener noreferrer" ><i class="fa fa-github"></i></a></li>
                                </ul>
                            </div> 
                            


                            {/*            
                            <div class="col-lg-8 wow fadeInLeft delay-06s">
                            <div class="form">
                                <input 
                                    class="input-text" 
                                    type="text" 
                                    name="name" 
                                    onFocus="if(this.value==this.defaultValue)this.value='';" 
                                    onBlur="if(this.value=='')this.value=this.defaultValue;"
                                    placeholder="Your Name *"
                                />
                                <input 
                                    class="input-text" 
                                    type="text" 
                                    name="email"
                                    placeholder="Your Email *" 
                                    onFocus="if(this.value==this.defaultValue)this.value='';" 
                                    onBlur="if(this.value=='')this.value=this.defaultValue;" 
                                />
                                <textarea class="input-text text-area" cols="0" rows="0" name="message" onFocus="if(this.value==this.defaultValue)this.value='';" onBlur="if(this.value=='')this.value=this.defaultValue;" placeholder="Message *"></textarea>
                                <button class="input-btn" type="submit" value="send message" OnChange="">send message</button>
                                
                            </div>
                            </div>  */}
                
                        </div>
                    </section>

                </div>
                <div class="container">
                    <div class="footer_bottom"><span>© 2020 Bryant Conti </span> </div>
                </div>
            </footer> 
        )
    }
}
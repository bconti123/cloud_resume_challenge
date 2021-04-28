import React, { Component } from "react";


export default class Tech extends Component {
    render() {
        return (
            <section id="techSkills">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-6">
                            <h2>Technical Skills</h2>
                            <p>
                                <b>Operating Systems:</b> Windows 10, Mac OS, Linux (Ubuntu, Febora, Red Hat, Kali), Windows Server 2012/2016/2019 <br />
                                <b>Frontend Frameworks:</b> React, Vue, Angular (Familiar) <br />
                                <b>DevOps Tools:</b> Slack, Trello, Git, Jira, Ansible <br />
                                <b>CI/CD Tools (Familiar) :</b> GitHub, CodeCommit, CodeBuild, CodeDeploy, and CodePineline <br />
                                <b>Applications:</b> Microsoft Office, G Studio, Zoom, Oracle VM Virtualbox, Adobe Creative Stuite, Docker, Github <br />
                                <b>Networking:</b> Hubs, Switches, Routers, Ethernet cable, SSH, FTP, TCP/IP, DNS, DHCP, Active Directory <br />
                                <b>Security:</b> Firewall, Anti-virus softwares, Anti-spyware softwares <br />
                                <b>Databases:</b> MySQL <br />
                            </p>
                           



                        </div>

                        <div class="col-sm-6 col-md-6">

                            <div class="progress">
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
                                    <span class="sr-only">100%</span>
                                </div>
                                <span class="progress-type">HTML / HTML5</span>
                                <span class="progress-completed" style={{ color: 'white' }}>100%</span>
                            </div>

                            <div class="progress">
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
                                    <span class="sr-only">100%</span>
                                </div>
                                <span class="progress-type">CSS / CSS3</span>
                                <span class="progress-completed" style={{ color: 'white' }}>100%</span>
                            </div>

                            <div class="progress">
                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                                    <span class="sr-only">90%</span>
                                </div>
                                <span class="progress-type">JavaScript / jQuery</span>
                                <span class="progress-completed">90%</span>
                            </div>

                            <div class="progress">
                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                                    <span class="sr-only">90%</span>
                                </div>
                                <span class="progress-type">Python</span>
                                <span class="progress-completed">90%</span>
                            </div>

                            <div class="progress">
                                <div class="progress-bar progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                                    <span class="sr-only">80%</span>
                                </div>
                                <span class="progress-type">Java</span>
                                <span class="progress-completed">80%</span>
                            </div>
                        </div>
                    </div>
                    {/* <p style={{ textAlign: "center" }}>Statement<br />
              <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
              <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
              <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
              <img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white" alt="Python" />
              <img src="https://img.shields.io/badge/java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white" alt="Java" />
              <img src="https://img.shields.io/badge/php-%23777BB4.svg?&style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
              <img src="https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
              <img src="https://img.shields.io/badge/go-%2300ADD8.svg?&style=for-the-badge&logo=go&logoColor=white" alt="Go" />
              <img src="https://img.shields.io/badge/ruby-%23CC342D.svg?&style=for-the-badge&logo=ruby&logoColor=white" alt="Ruby" />
              <img src="https://img.shields.io/badge/perl-%2339457E.svg?&style=for-the-badge&logo=perl&logoColor=white" alt="Perl" />
              <img src="https://img.shields.io/badge/shell_script%20-%23121011.svg?&style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Shell Script" />
            </p> */}
                </div>
            </section>
        )
    }
}
import React from 'react'
import { Helmet } from 'react-helmet'

import mechanical from '../images/2022-images/hardware.jpg'
import electrical from '../images/2022-images/electrical.jpg'
import software from '../images/2022-images/programming.jpg'
import operations from '../images/2022-images/operations.jpg'
import design from '../images/2023-images/design.jpg'

import battle from '../images/2022-images/battle.jpg'

export default function About() {
  return (
        <>
            <Helmet>
                <title>About | Cyberlions</title>
            </Helmet>

            {/* about-container AKA the about's parent, is neccessary to center the about div which has all the content in it */}
            <div className="about-container">
                <div className="about">
                    <div className="about-hero">
                        <h3>Why Even Have CyberLions?</h3>
                        <h1>CyberLions Give Highschoolers Real Life Experience</h1>
                        <p>Our Robotics team is challenged under strict rules and limited time and resources to raise funding, design a team brand, and work together to build competition-ready robots.  </p>
                    </div>

                    <div className="about-images">
                        <img id="mechanical" alt="mechanical" src={mechanical} />
                        <img id="design" alt="design" src={design} />
                        <img id="electrical" alt="electrical" src={electrical} />
                        <img id="software" alt="software" src={software} />
                        <img id="operations" alt="operations" src={operations} />
                    </div>

                    <main className="about-subteams-container">
                        <div className="about-subteams-container-hero">
                            <h1>Our Subteams</h1>
                            <h2>Being Part of The CyberLions Means You're Part of a Major Role</h2>
                        </div>

                        <div className="about-subteams">
                            <article id="about-mechanical">
                                <h1>Mechanical Team</h1>
                                <p>Use machinery and power-tools to fabricate prototypes for robot’s subsystems. You’re expected to organize and understand the mechanics of the robot and assembly.</p>
                            </article>

                            <article id="about-design">
                                <h1>Design Team</h1>
                                <p>Learn design skills and rapid prototyping techniques through CAD and 3D printing. You're planning, designing, and experimenting with different designs to come up with a working robot.</p>
                            </article>

                            <article id="about-electrical">
                                <h1>Electrical Team</h1>
                                <p>Design and manage the robot's electrical board and distribution. You're going to be using wiring and connection techniques to make sure all electrical components are hooked up for the mechanisms to work properly.</p>
                            </article>

                            <article id="about-operations">
                                <h1>Operations/Management Team</h1>
                                <p>Market the team for sponsorships and plan and coordinate club events. You're in charge of overseeing the club budget and FRC inventory, working closely with club advisors and IPT leads.</p>
                            </article>

                            <article id="about-software">
                                <h1>Programming Team</h1>
                                <p> Develop and integrate Java algorithms that satisfy the requirements of a functionable shooter, intake system, drivetrain and limelight. You'll operate on Github and Visual Studio Code to make the robot function.</p>
                            </article>
                        </div>
                    </main>

                    <div className="about-shameless-plug">
                        <img id="battle" alt="battle" src={battle} />


                        <h1>Help Us Keep Going</h1>
                        <section className="about-shameless-plug-text">
                            <p>Your sponsorship will help our members learn the skills and have the material to design and manufacture a competition-ready robot.</p>

                            <a className="about-shameless-plug-button" href="/support-us">Learn More</a>
                        </section>                        
                    </div>
                </div>
            </div>
        </>
    )
}

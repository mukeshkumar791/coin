import React from "react";
import aboutpng from '../img/about.png'
import work from '../img/work-process.png'
import right from '../img/right.png'
import feature from '../img/feature-1.png'
import feature1 from '../img/feature-2.png'
import feature2 from '../img/feature-3.png'
import feature3 from '../img/feature-4.png'
import feature4 from '../img/feature-5.png'
import feature5 from '../img/feature-6.png'
import team1 from '../img/team-1.jpg'
import team2 from '../img/team-2.jpg'
import team3 from '../img/team-3.jpg'
import team4 from '../img/team-4.jpg'
import './Main.css'
function Mainpage() {
    return (
        <>
            <section className="sect">
                <div className="container">
                    <div className="invest-part">
                        <div className="invest-text">
                            <h1 className="invest-heading">Invest In <span className="crypto">  Cryptocoin </span><br />
                                Way To Trade</h1>
                            <p className="sed-ut">

                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem br
                                accusantium doloremque <br /> laudantium, totam rem</p>
                            <button className="BTN-MORE">LEARN MORE</button>
                        </div>
                        <div>
                            <img className="about" src={aboutpng} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="sect">
                <div className="container">
                    <div>
                        <div className="what-is">
                            <h5 className="h5"> what is cryptcon </h5>
                            <h4 className="h4"> How it Works </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                        </div>
                        <div className="worls-and-text">
                            <div>
                                <img className="works" src={work} alt="" />
                            </div>
                            <div>
                                <h4>We’ve built a platform to buy
                                    and sell shares.</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                </p>
                                <ul className="list">
                                    <div className="right-lorem">
                                        <div><img className="rightpng" src={right} alt="" /></div>
                                        <div> <li>Lorem Ipsum is simply dummy text of the printing and typesetting   </li>
                                        </div></div>
                                    <div className="right-lorem">
                                        <div><img className="rightpng" src={right} alt="" /></div>
                                        <div> <li>Lorem Ipsum is simply dummy text of the printing and typesetting   </li>
                                        </div></div>
                                    <div className="right-lorem">
                                        <div><img className="rightpng" src={right} alt="" /></div>
                                        <div> <li>Lorem Ipsum is simply dummy text of the printing and typesetting   </li>
                                        </div></div>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="what-is">
                        <h5 className="h5">  cryptcon Feature  </h5>
                        <h4 className="h4"> Best Features </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                            incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                    </div>
                    <div>
                        <div className="all-cards-item">
                            <div className="carrds-items">
                                <img src={feature} alt="" />
                                <h3> Safe & Secure </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.

                                </p>
                            </div>
                            <div className="carrds-items">
                                <img src={feature1} alt="" />

                                <h3>  Early Bonus  </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.

                                </p>
                            </div>
                            <div className="carrds-items">
                                <img src={feature2} alt="" />
                                <h3> Univarsal Access  </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.

                                </p>
                            </div>
                        </div>
                        <div className="all-cards-item">
                            <div className="carrds-items">
                                <img src={feature3} alt="" />
                                <h3>  Secure Storage </h3>


                                <p>Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.

                                </p>
                            </div>
                            <div className="carrds-items">
                                <img src={feature4} alt="" />
                                <h3>  Low Cost  </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.

                                </p>
                            </div>
                            <div className="carrds-items">
                                <img src={feature5} alt="" />
                                <h3>  Several Profit  </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.

                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div className="container">
                    <div>
                        <div className="what-is">
                            <h5 className="h5">MEET THE TEAM</h5>
                            <h4 className="h4"> Our Team </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                        </div>
                        <div className="card-father">
                            <div>
                            <div className="card-team-body">
                                <div className="card-part">
                                    <div >
                                        <img className="team-img" src={team1} alt="" />
                                    </div>
                                    <div>
                                        <h5>John Doe</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-team-body">
                                <div className="card-part">
                                    <div >
                                        <img className="team-img" src={team2} alt="" />
                                    </div>
                                    <div>
                                        <h5>John Doe</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <div className="card-team-body">
                                <div className="card-part">
                                    <div >
                                        <img className="team-img" src={team3} alt="" />
                                    </div>
                                    <div>
                                        <h5>John Doe</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-team-body">
                                <div className="card-part">
                                    <div >
                                        <img className="team-img" src={team4} alt="" />
                                    </div>
                                    <div>
                                        <h5>John Doe</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>

    );
};
export default Mainpage;
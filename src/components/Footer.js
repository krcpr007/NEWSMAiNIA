import {
    // BrowserRouter as Router,
    Link,
} from "react-router-dom";
import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Footer extends Component {
    static propTypes = {


    }

    render() {
        return (
            
            <footer className="page-footer text-light font-small unique-color-dark bg-dark">
                <div className="footer-curve bg-light" >
                    <div className="bg-primary py-4 "></div>
                </div>
                
                <div className="container text-center text-md-left ">

                    
                    <div className="row mt-3">

                       
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                           
                            <h5 className=" font-weight-bold">NEWS MAiNIA</h5>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "100px" }} />
                            <p>NEWS MAiNIA Best website made by React library. Where You can find any time of latest News </p>

                        </div>
                        
                        <div id="links" className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        
                            <h6 className="text-uppercase font-weight-bold">NEWS</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <Link style={{textDecoration:"none"}} to="/sports">Sports</Link >
                            </p>
                            <p>
                                <Link style={{textDecoration:"none"}} to="/science">Science</Link >
                            </p>
                            <p>
                                <Link style={{textDecoration:"none"}} to="/technology">Technology</Link >
                            </p>
                            <p>
                                <Link style={{textDecoration:"none"}} to="/entertainment">Entertainment</Link >
                            </p>


                        </div>
                        
                        <div id="links" className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

           
                            <h6 className="text-uppercase font-weight-bold">Top Headlines</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <Link style={{textDecoration:"none"}} to="/health">Covid-19</Link>
                            </p>
                            <p>
                                <Link style={{textDecoration:"none"}} to="/business">Business</Link>
                            </p>
                            <p>
                                <Link style={{textDecoration:"none"}} to="/!">Search</Link>
                            </p>
                            <p>
                                <Link style={{textDecoration:"none"}} to="/">Search keyword </Link>
                            </p>

                        </div>
                       
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                         
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <i className="fas fa-home mr-3"></i> Rajan Kumar<br/>Nit Patna</p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i> rajankk.ug20.cse@nitp.ac.in</p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> +91 8539863544</p>
                            

                        </div>
                        

                    </div>
                    

                </div>
                
                <hr />
                <div id="links" className="footer-copyright text-center mb-0">© 2021 Copyright:
                    <a style={{textDecoration:"none"}} href="https://www.Linkedin.com/in/rajan-kumar-33a3511bb/" target="_blank" rel="noreferrer" title="LinkedIn Profile"> Rajan</a>

                </div>
                

            </footer>
        )
    }
}



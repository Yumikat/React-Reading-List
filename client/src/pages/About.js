import React, {  Component } from "react";
import { withRouter } from "react-router-dom";
import "../css/styles.css";
import API from "../utils/API";


function About() {
    
        return (
            <>
            <div className="m-8 px-16 py-6">
                <h1 className="text-blue-light px-4 py-4">What is dev X-Tension??</h1>
               <p className="text-black px-8 py-2">
                   dev X-Tension is a blog site for students of coding bootcamps. It is a place where you can learn,
                   share your knowledge with others, rant about struggles you're having, and share the successes you've achieved
                   as well as tips and tricks you've learned along the way.  And obviously, share dad jokes (because you can't
                   get enough of those).
                   
               </p>
                
                <h1 className="text-blue-light px-4 pt-10">Who we are </h1>
                    <div className="container px-8 py-6">
                        <h3 className="text-green-light py-2">Pidchaya Prindavong</h3>
                        <p className="text-black py-4">
                            Pidchaya is . . .
                        </p>
                    </div>

                    <div className="container  px-8 py-6">
                        <h3 className="text-green-light py-2">Nikki Petersen</h3>
                        <p className="text-black py-4">
                            Nikki is . . . a mom first and foremost. That means she is a baker of sweet things and has exemplary
                            skills in "making sh*t up as I go." She likes to build things, and create. Nikki worked primarily on
                            the front end of dev X-Tension and is fairly happy with how it turned out.
                        </p>
                    </div>

            </div>
            </>
        );
}

export default withRouter(About);



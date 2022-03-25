import React from "react";

import Navbar from  './Navbar'

import "./Help.css"

const Help = () =>{

    return(
        <>
        <div>
            <h1 className="help-title">Help Page</h1>
        </div>
        <div className="help-section">
            <div>
            <img className="page-img" src="./images/main_page.png"/>
            </div>
            <div className="page-desc">
                <ul>
                    <li>At the Main Page, you will find 6 sections (Games, Quizzes, Profile, Parent Help, Donate and Settings) </li>
                    <li> Click on the following section</li>
                    <li> Follow the instructions on the following section </li>
                </ul>
            </div>
            <div className="header-div">
                <img className="header-img" src="./images/nav_bar.png"/>
            </div>
            <div className="header-desc">
                <ul>
                    <li> At the Header, you will find 4 choices (Home, About, Help and Log Out) </li>
                    <li> Home will lead you to the main page </li>
                    <li> About will lead you to the about page</li>
                    <li> Help will lead you to the help age (the current Page you are in right now)</li>
                    <li> Log out will log you out of the app</li>
                </ul>
            </div>
        </div>
        </>

    )

}

export default Help
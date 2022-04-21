import React from "react";
import Navbar from  './Navbar'

import './Home.css'

const Page = (props) => {
    return(
        <> 
         <div className="nav-point">
             <img src={props.image} onClick={props.func} />
             <p> {props.name}</p>
         </div>
        </>
    )
}

const Home = () =>{
    function navGame(){
        window.location.href ="/game"
    }

    function navParent(){
        window.location.href ="/parent"
    }

    return(
            <>
    
            <div className="home-title">
                <h2> Select Any of The Following Images</h2>
            </div>
            <div className="main-section">
    
                <div>
                    <Page image="./images/game.png" name="Games" func={navGame} />
                </div>
                <div>
                     <Page image="./images/quiz.png" name="Quizzes" />
                </div>
                <div>
                     <Page image="./images/user_info.png" name="Profile" />
                </div>
                <div>
                     <Page image="./images/parents.jpeg" name="Parent Help" func={navParent} />
                </div>
                <div>
                     <Page image="./images/donation.png" name="Donate" />
                </div>
                <div>
                     <Page image="./images/settings.png" name="Settings" />
                </div>
            </div>
            </>

    )

    
}

export default Home;
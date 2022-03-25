import React from "react";

import "./About.css"


const About = () =>{

    return(
        <>
        <h1 className="about-title"> About Page</h1>

        <div className="about-div">
            <p className="about-info">
            AMA is an online learning platform teaching math to kids who are between the ages of 8 and 13. AMA is primarly targeted for kids who deal with dyscalculia but it can be used by any kid. Math is consider to be the hardest subject most kids struggle with the most. 
            AMA tends to teach kids math by using fun games as a form of teaching. Games are entertaining for children and will help them be interested and retain what they learned. AMA is free to use.
            </p>
            <p>For more information on Dyscalculia <a href="https://www.additudemag.com/what-is-dyscalculia-overview-and-symptom-breakdown/"> Click Here</a></p>
        </div>
        </>
        
        
    )
}  

export default About
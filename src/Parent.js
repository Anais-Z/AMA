import React from "react";

import './Parent.css'

const Advice = (props) => {
    return(
        <> 
         <div>
             <h2 className="h2-parent"> {props.title}</h2>
             <p className="desc"> {props.description}</p>
         </div>
        </>
    )
}

const Parent = () =>{

    return(
        <>
        <h1 className="h1-parent"> Parent Help Page</h1>

        <div className="parent-help-section">
        <Advice 
         title="1. Have an award system"
         description="Award your child whenever they learned something new successfully and did well on a quiz. Rewarding them will motivate them to continue learning and participating." />

        <Advice  
        title="2. Track their progress"
        description="Make sure to track your child’s progress, whether it’s in what they learned, what they need to learn and what they are struggling with. Tracking their progress is a good way to find out which topic they need to spend more time learning and which areas they succeed in."/>

        <Advice  
        title="3. Focus on 1 topic at a time"
        description="Children with disabilities don’t have the retention rate as gifted children especially when it comes to maths. You don’t want to overload them with too much math therefore it should be important they take their time to process and understand one topic at their own pace. We highly suggest that they should focus on 1 topic for about 1 week."/>

        </div>
        </>
        
    )
} 


export default Parent 
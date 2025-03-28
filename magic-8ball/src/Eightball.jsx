import React, {useState} from "react";
import "./Eightball.css"


function Eightball({answers}) {
    const [color, setColor] = useState("black");
    const [message, setMessage] = useState("Think of a Question");

    function handleClick() {
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
        setColor(randomAnswer.color);
        setMessage(randomAnswer.msg);
    }

    return (
        <div
            className="eight-ball"
            onClick={handleClick}
            style={{backgroundColor: color}}
        >
            <p className="eight-ball-message"> {message} </p>
        </div>
    )
}

export default Eightball;
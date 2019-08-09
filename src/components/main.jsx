import React from 'react';
import js from "./images/quiz.png";
import "./main.css"


export default function Main() {
    return (
        <section className="mainbox">
            <div className="leftbox">
                <h1>1</h1>
                <div className="image">
                    <img src={js} alt="imagename" />
                </div>
            </div>
            <div className="rightbox">
                <div className="questionbox">
                <p className="question"><strong>Question:</strong> question will displayed here?</p>
                <button type="button" className="btn btn-warning m-2">answer 1</button><br/>
                <button type="button" className="btn btn-warning m-2">answer 2</button><br/>
                <button type="button" className="btn btn-warning m-2">answer 3</button><br/>
                <button type="button" className="btn btn-warning m-2">answer 4</button><br/>
                </div>
            </div>
        </section>
    )
}

import React, { Component } from 'react'
import "../App.css"
import Box from "./Box"
import elephant from "../elephant.jpeg" 
import elephant1 from "../elephant-1.jpeg" 
import elephant2 from "../elephant-2.jpeg" 
import elephant3 from "../elephant-3.jpeg" 

export class Body extends Component {
    render() {
        return (
            <div className="body-div">
                <img src={elephant} alt="Elephant"/>
                <p>Elephants, are strong but gorgeous, calm but dangerous.</p>
                <div className="box">
                    <Box name="square-1" src={elephant1}/>
                    <Box name="square-2" src={elephant2}/>
                    <Box name="square-3" src={elephant3}/>
                </div>
            </div>
        )
    }
}

export default Body

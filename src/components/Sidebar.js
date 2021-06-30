import React, { Component } from 'react'
import "../App.css"
import {v4 as uuidv4} from "uuid"

export class Sidebar extends Component {
    state = {
        // colors:[
        //     {
        //         id:uuidv4(),
        //         color: "turquoise",
        //     },
        //     {
        //         id:uuidv4(),
        //         color: "white",
        //     },
        //     {
        //         id:uuidv4(),
        //         color: "grey",
        //     }
        // ],
        color:"Torquoise",
        changeToTorquoise:true,
        changeToWhite:false,
        changeToGrey:false
    }

    changeColor = (event)=>{
        if(event.target.innerText === "Torquoise"){
            this.setState({
                changeToTorquoise:true,
                changeToWhite:false,
                changeToGrey:false,
            })
        }
        if(event.target.innerText === "White"){
            this.setState({
                changeToTorquoise:false,
                changeToWhite:true,
                changeToGrey:false,
            })
        }
        if(event.target.innerText === "Grey"){
            this.setState({
                changeToTorquoise:false,
                changeToWhite:false,
                changeToGrey:true,
            })
        }
    }
    render() {
        return (
            <div className={`
                ${this.state.changeToTorquoise && "sidebar-div"} 
                ${this.state.changeToWhite && "background-white"} 
                ${this.state.changeToGrey && "background-Grey"}`}>
                <ul >
                <li onClick={this.changeColor}
                    >Torquoise</li>
                <li onClick={this.changeColor}>White</li>
                <li onClick={this.changeColor}>Grey</li>

                </ul>
            </div>
        )
    }
}

export default Sidebar

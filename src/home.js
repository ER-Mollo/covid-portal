import React, {useState, useEffect} from "react";
import Employee from "./components/employee";
import {Display} from "./components/display";
import './css/home.css'

function Home(props){
    return(
        <div className="container">
            <Employee add = {props.add}/>
            <Display list={props.list}/>
            
        </div>
    )
}

export default Home;
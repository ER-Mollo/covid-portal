import React from "react";


import '../css/display.css'


function Display(props){
    return(
        <div className="display">
            <div>

           
            <h1 className="header">Employee List</h1>
            
                <table border="1" className="table">
                    <tr >
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {props.list.map((items) => (
                    <tr>
                        <td>{items.firstname}</td>
                        <td>{items.lastname}</td>
                        <td>{items.email}</td>
                        <td>Action</td>
                    </tr>))}
                </table>
                </div>
        </div>  
)}

export {Display};
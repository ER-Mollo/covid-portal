import React from "react";
import '../css/add.css'

const AddEmployee = ({addEmployees, setName, setSurname,setEmail}) =>{
    return(
        
        <div className="employee">
            <h1 className="header">ADD EMPLOYEE</h1>
            <div className="control">
                <label htmlFor="name">Name: </label><br></br>
                <input placeholder="name..." id="name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="control">
                <label htmlFor="surname">Surname: </label><br></br>
                <input placeholder="surname..." id="surname" onChange={(e)=>setSurname(e.target.value)}/>
            </div>
            <div className="control">
                <label htmlFor="email">Email-Address: </label><br></br>
                <input placeholder="email..." id="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <button onClick={addEmployees}>Add Employee</button>
        </div>
    )
}

export  default AddEmployee;
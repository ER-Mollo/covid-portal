
import React , {useState} from "react";


import '../css/employee.css'
import {db} from '../config/firebase'

import {addDoc, collection} from 'firebase/firestore';




function Employee(props){

    const[firstname, setFirst] = useState('');
    const[lastname, setLast] = useState('');
    const[email, setEmail] = useState('');

    const add = (()=>{
        const collectionRef = collection(db,"employee");
        const employee = {
            firstname:firstname ,
            lastname:lastname ,
            email: email,
        };

        addDoc(collectionRef, employee).then(()=>{

            alert("Added successfully");

        }).catch((err)=>{
            console.log(err);
        })
        props.add(firstname, lastname, email);
    })

    

    return(
        <div className="employee ">
            <div className="employeeForm">
                <h5 className="header">New Employee</h5>
                <p>First Name</p>
                <input type="text" onChange={(e)=>setFirst(e.target.value)}/>
                <p>Last Name</p>
                <input type="text" onChange={(e)=>setLast(e.target.value)}/>
                <p>Email Address</p>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/><br></br>
                <button onClick={add}>Add Employee</button>
            </div>
        </div>
        
    )
}

export default Employee;
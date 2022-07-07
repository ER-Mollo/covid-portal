import React from "react";
import '../css/list.css'




const List = ({employees, deleteEmployee, updateEmployee}) =>{
    return(
        <div className="display">
            <div>

           
            <h1 className="header">EMPLOYEES LIST</h1>
            
                <table className="table">
                    <thead>
                        <tr >
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(employee=>(
                            (
                                <tr key={employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.surname}</td>
                                    <td>{employee.email}</td>
                                    <td><link onClick={()=>updateEmployee(employee.id)}>Update</link><button onClick={()=>deleteEmployee(employee.id)}>Delete</button></td>
                                </tr>
                            )
                        ))
                    }
                    </tbody>
                </table>
                </div>
        </div>  
)}

export default List;
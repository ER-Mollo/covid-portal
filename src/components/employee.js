import '../css/employee.css'
function Employee(){
    return(
        <div className="employee ">
            <div className="employeeForm">
                <h5 className="header">New Employee</h5>
                <p>First Name</p>
                <input type="text"/>
                <p>Last Name</p>
                <input type="text"/>
                <p>Email Address</p>
                <input type="text"/><br></br>
                <button>Add Employee</button>
            </div>
            <div className="employeeList">
            <h5 className="header">Employee List</h5>
            </div>
        </div>
        
    )
}

export default Employee;
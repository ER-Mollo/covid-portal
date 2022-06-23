import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './home'
import Employee from './components/employee' 
import Display from './components/display'

function App() {

  const[employees, setEmployees] = useState ([]);

  useEffect(()=>{
    
  })


  const addEmployee = ((firstname, lastname, email) => {

    setEmployees((items) => [...items, {
      firstname: firstname,
      lastname: lastname,
      email: email
    }])
  })

  return (
    <div className="App">
      <div className='portal'>
     
         <Home list={employees} add = {addEmployee}/>
      </div>

      
    </div>
  );
}

export default App;

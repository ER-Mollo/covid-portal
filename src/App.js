import React,{ useState, useEffect} from 'react';
import './App.css';
import AddEmployee from './componenet/addEmployee';
import List from './componenet/listEmployee';
import {db} from './config/firebase';
import {collection, getDocs, addDoc, doc, deleteDoc, updateDoc} from 'firebase/firestore';


function App() {

  const[firstname, setFirst] = useState('');
  const[lastname, setLast] = useState('');
  const[email, setEmail] = useState('');

  const[employees, setEmployees] = useState([]);

  const employeesRef =collection(db,"employee")

  const getEmployees = async()=>{
    let data = await getDocs(employeesRef);
    setEmployees(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
  }

  const addEmployees = async()=>{
    console.log(email);
   await addDoc(employeesRef, {name:firstname, surname:lastname, email:email})
   getEmployees();
  }
  const deleteEmployee = async(id)=>{
    let employee = await doc(employeesRef,id);
    await deleteDoc(employee);
    getEmployees();
  }
  const updateEmployees = async(id)=>{
    let employee = await doc(employeesRef,id);
    await updateDoc(employee,{name:firstname, surname:lastname, email:email});
    getEmployees();
   }

  useEffect(()=>{
     getEmployees()
  }, [])
  return (
    <div className='main'>
      <h1 className='text'>EMPLOYEE APP</h1>
    <div className="App">
      <AddEmployee className="add" setName={setFirst} setSurname={setLast} setEmail={setEmail}  addEmployees={addEmployees}/>
      <List className="list" employees={employees} deleteEmployee={deleteEmployee} updateEmployee={updateEmployees}/>
      
    </div>
    </div>
  );
}

export default App;

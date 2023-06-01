import { useState } from 'react';
import React from 'react';
import './App.css';
import{ BrowserRouter, Route,Routes} from "react-router-dom";


import Dashboard from './components/pages/Dashboard.js';
import About from './components/pages/About.js';
import Sidebar from './components/dashboard/Sidebar'
import ExpenseList from './components/expenses/ExpenseList';
import NewExpenses from './components/newexpenses/NewExpenses';

const App=()=> {

  const [expenses,setExpenses]=useState('');
   
 
       const addExpenseHandler=(expense)=>{
 
         setExpenses((prevExpenses)=>{
           return [expense,...prevExpenses];
         });
 
       };

  return (
   
    
    <BrowserRouter>
    <Sidebar>

   
  
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/add/expenses" element={<NewExpenses/>}/>
      <Route path="/view/expense" element={<ExpenseList  /> }/>
    
      
      
    
    </Routes>
    </Sidebar>
    </BrowserRouter>
   
    
  
);

    
  


    
     
      
    
   
}

export default App;
                      
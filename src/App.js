import { useState } from 'react';
import React from 'react';
import './App.css';
import{ BrowserRouter, Route,Routes} from "react-router-dom";

import NewExpense from './components/newexpenses/NewExpenses';
import Expenses from './components/expenses/ExpenseList';
import Dashboard from './components/pages/Dashboard.js';
import About from './components/pages/About.js';
import Sidebar from './components/dashboard/Sidebar'
const App=()=> {

  const [expenses,setExpenses]=useState('');
   
 
       const addExpenseHandler=(expense)=>{
 
         setExpenses((prevExpenses)=>{
           return [expense,...prevExpenses];
         });
 
       };

  return (
    
  <div>
    
<NewExpense onAddExpense= {addExpenseHandler}/>
  <Expenses items={expenses}/>

  </div>
    
  
);

    
     
      
    
   
}

export default App;
                      
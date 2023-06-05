import React,{useState} from "react";

import NewExpenses from "../newexpenses/NewExpenses";
import Sidebar from "../dashboard/Sidebar";
import ExpenseList from "../expenses/ExpenseList";
import { useState } from "react";




const AddExpense=(props)=>{
   
   const [expenses,setExpenses]=useState('');
   
 
   const addExpenseHandler=(expense)=>{

     setExpenses((prevExpenses)=>{
       return [expense,...prevExpenses];
     });
     

   };
   <div>
<Sidebar/>


   <NewExpenses onAddExpense= {addExpenseHandler}/>
   <ExpenseList items={expenses} />
   
   
   </div>
}
   export default AddExpense;
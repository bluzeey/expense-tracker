import React,{useReducer,createContext} from 'react'
import contextReducer from './contextReducer'
const initialState=JSON.parse(localStorage.getItem('transactions'))||[{"amount":50,"category":"Bills","type":"Expense","date":"2021-10-26","id":"c54563cc-847e-4f10-aed0-9c06d4ed0eb2"},{"amount":100,"category":"Salary","type":"Income","date":"2021-10-25","id":"6bbb3919-f539-4c0c-8fb4-3801285ee86f"}];
export const ExpenseTrackerContext=createContext(initialState)

export const Provider=({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState)
    
    const deleteTransaction=(id)=>{
         dispatch({type:'DELETE_TRANSACTION',payload:id})
    }
    const addTransaction=(transaction)=>{
        dispatch({type:'ADD_TRANSACTION',payload:transaction})
    }
    const balance=transactions.reduce((acc,currVal)=>{
        return (currVal.type==='Expense'? acc-currVal.amount:acc+currVal.amount)
    },0);
    return(
        <ExpenseTrackerContext.Provider value={{deleteTransaction,addTransaction,transactions,balance}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
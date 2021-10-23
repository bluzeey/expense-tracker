const contextReducer=(state,action)=>{
     switch(action.type){
        case 'ADD_TRANSACTION':
            return [action.payload,...state]

            localStorage.setItem('transactions',JSON.stringify())
        
        case 'DELETE_TRANSACTION':
            return state.filter((t)=>t.id!==action.payload)
        
        default:
            return state
     }
}

export default contextReducer;
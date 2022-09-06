import * as actionType from '../actions/actionTypes'

const CounterReducer=(state=100,action)=>{
    
    let newState

    switch (action.type) {
        case actionType.INCREMENT:
            return newState=state+action.payload
            
        case actionType.DECREMENT:
            return newState=state+action.payload
    
        default:
           return state
    }
}
export default CounterReducer
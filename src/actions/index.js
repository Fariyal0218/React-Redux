import * as actionType from './actionTypes'

export const addValue=()=>({
    'type':actionType.INCREMENT,
    'payload':1
   }
)

export const reduceValue=()=>({
    'type':actionType.DECREMENT,
    'payload':-1
    }
)


import * as actionType from './actionType'
let id=0
export default function reducer(state=[],action){
    switch(action.type){
        case actionType.ADD_TASK:
            return [
                ...state,
                {
                    id:++id,
                    task:action.payload.task, 
                    completed:false
                }
            ]
        case actionType.REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id)

        case actionType.COMPLETE_TASK:
            const update=(item)=>{
                return item.id===action.payload.id ?{...item,completed:true}:item
            }
            return state.map(update)
        default:
            return state
    }
    // OR
    // if(action.type === 'ADD_TASK'){
    //     return [
    //         ...state,
    //         {
    //             id:++id,
    //             task:action.payload.task, 
    //             completed:false
    //         }
    //     ]
    // }
    // else if(action.type === 'REMOVE_TASK'){
    //     return state.filter(task => task.id !== action.payload.id)
    // }
    // return state
}
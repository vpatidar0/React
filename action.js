import * as actionType from './actionType'
export const addTask =(task)=>{
    return {type:actionType.ADD_TASK,payload:{task:task}}
}

export const removeTask=(id)=>{
   return {type:actionType.REMOVE_TASK,payload:{id:id}}
}

export const completedTask=(id)=>{
    return {type:actionType.COMPLETE_TASK,payload:{id:id}}
}
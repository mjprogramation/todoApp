import { DateNow } from "../util/DateHandler.js"
import { uniqId } from "../util/UniqId.js"

export function TodoReducer (state, action) {

    switch (action.type){

        case "ADDTODO":
            return addToDo(state, action.data)
        case "DELETETODO":
            return deleteTodo(state, action.id, action.slug)
        case "MOVETODO":
            return moveToDo(state, action.from, action.task)
        case "MOVEINPROGRESS":
            return moveInProgress(state,action.from, action.task)
        case "MOVECOMPLETED":
            return moveCompleted(state, action.from, action.task)
        default:
            return stat



    }



}

const addToDo =  (state, newEntry) =>{

    let updatedState = {...state}

    updatedState.todo.push({...newEntry, id: uniqId(), time : DateNow()})

    saveToLocalStorage(updatedState)

    return updatedState

}

const deleteTodo = (state, id, from) => {

    let updatedState = {
        ...state,
        
    }

    updatedState[from] = updatedState[from].filter(task => task.id !== id)

    saveToLocalStorage(updatedState)

    return updatedState
}

const moveToDo = (state, from, task ) => {

    let updatedState = {...state}

    updatedState[from] = updatedState[from].filter(tasks=> tasks.id !== task.id)

    updatedState.todo.push(task)

    saveToLocalStorage(updatedState)

    return updatedState

}

const moveInProgress = (state, from, task) =>{

    let updatedState = {...state}

    updatedState[from] = updatedState[from].filter(tasks=> tasks.id !== task.id)

    updatedState.inprogress.push(task)

    saveToLocalStorage(updatedState)

    return updatedState

}

const moveCompleted = (state,from,task) => {

    let updatedState = {...state}

    updatedState[from] = updatedState[from].filter(tasks=> tasks.id !== task.id)

    updatedState.completed.push(task)

    saveToLocalStorage(updatedState)

    return updatedState

}



const saveToLocalStorage = (data) => {

    localStorage.setItem('TODOLIST', JSON.stringify(data))

}
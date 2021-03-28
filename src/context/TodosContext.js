import React, { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';
import { uniqId } from '../util/UniqId.js';

const tags = [
    {
        id : 1,
        title : 'Design',
        color : 'green'
    },
    {
        id: 2,
        title: "Development",
        color: 'red'
    },
    {
        id: 3,
        title: 'Managment',
        color : 'black'
    },
    {
        id:4,
        title: 'Marketing',
        color: 'yellow'
    },
    {
        id:5,
        title: 'Human Resources',
        color: 'blue'
    }
]
export const TodoContext = React.createContext({
    tags : tags,
    state: []
})

export function TodosProvider(props) {

    //initilizing reducer

    const [state, dispatch] = useReducer(TodoReducer, initialState())


    return (
        <TodoContext.Provider value={{
            tags: tags,
            state: [state,dispatch]
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export function initialState () {

    let savedStorage = localStorage.getItem('TODOLIST')
    
    const emptyData = {
        todo : [
            {
                tag : 1,
                body: `We need 2 concept to be designed for the software page
                first take a lok at the attachment and make somthing closer`,
                time: 'Thursday 7 mar',
                
            }
        ],
        inprogress : [
            
        ],
        completed : [
            {
                tag : 2,
                body: `We need 2 concept to be designed for the software page
                first take a lok at the attachment and make somthing closer`,
                time: 'Thursday 7 mar',
                id: uniqId()
            },
            {
                tag : 3,
                body: `We need 2 concept to be designed for the software page
                first take a lok at the attachment and make somthing closer`,
                time: 'Thursday 7 mar',
                id: uniqId()
            },
            {
                tag : 3,
                body: `We need 2 concept to be designed for the software page
                first take a lok at the attachment and make somthing closer`,
                time: 'Thursday 7 mar',
                id: uniqId()
            },
            {
                tag : 1,
                body: `We need 2 concept to be designed for the software page
                first take a lok at the attachment and make somthing closer`,
                time: 'Thursday 7 mar',
                id: uniqId()
            }
        ]
    }
    return savedStorage !== null ? JSON.parse(savedStorage): emptyData
}


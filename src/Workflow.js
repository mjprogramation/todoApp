import React from 'react';
import TodoCol from './comp/TodoCol';
import { TodoContext } from './context/TodosContext';

function Workflow() {

    

    const [data, dispatch] = React.useContext(TodoContext).state
    

    return (
        <div className="container d-flex flex-row flex-wrap justify-content-center" style={{
            
        }}>

            <div className="col-6 col-md-4 p-2 " style={{
                minHeight: '100vh'
            }}>
                <TodoCol title='To do' data={data.todo} slug="todo" />
            </div>
            <div className="col-6 col-md-4 p-2">
                 <TodoCol title="In progress" data={data.inprogress} slug="inprogress"/>
            </div>
            <div className="col-6 col-md-4 p-2">
                 <TodoCol title="Completed" data={data.completed} slug="completed" />
            </div>


        </div>
    );
}

export default Workflow;
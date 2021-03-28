import React from 'react';
import AddButton from './AddButton';
import SingleTodo from './SingleTodo';

function TodoCol({title, data, slug}) {

    const newData = [...data]
    newData.reverse()
    return (
        <div className="col-12 rounded-top h-100" style={{
            background: 'rgba(143,188,143,0.1)'
        }}>
            

            <div className="p-2 d-flex justify-content-between">
                <span className="small">
                    {title}
                </span>
                <span className="badge text-success" style={{
                     background: 'rgba(143,188,143,0.2)'
                }}>
                    {data.length}
                </span>
            </div>
            <div className="p-2">
                <AddButton/>
            </div>
            {
            
                data.length > 0 
                ? <div className="p-2">
                {
                    newData.map((task, i)=>
                        <SingleTodo key={i} task={task} slug={slug}/>
                    )
                }
                
                </div>

                : <div className="p-2 d-flex justify-content-center">
                        Nothing {title.toLowerCase()}!
                  </div>

        }
            
        </div>
    );
}

export default TodoCol;
import React from 'react';
import { BsCircle } from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';
import {CgOptions} from 'react-icons/cg';
import { TodoContext } from '../context/TodosContext';

function SingleTodo({task, slug}) {


    const steps = [
        {
            slug: "todo",
            title: "to do",
            dispatch: ()=> dispatch({
                type: 'MOVETODO',
                from : slug,
                task :task
            }),
            title : "Move to To do list"
        },
        {
            slug: 'inprogress',
            title: 'in progress',
            dispatch: ()=> dispatch({
                type: 'MOVEINPROGRESS',
                from : slug,
                task :task
            }),
            title: "Move to in progress"
        },
        {
            slug: 'completed',
            title: 'completed',
            dispatch: ()=> dispatch({
                type: 'MOVECOMPLETED',
                from : slug,
                task :task
            }),
            title: "Move to completed"
        }
    ].filter(step=> step.slug !== slug)

    
    const [options, setOptions] = React.useState(false)

    const tags = React.useContext(TodoContext).tags

    const [state, dispatch] = React.useContext(TodoContext).state

    const tag = tags.filter((t)=> t.id === Number(task.tag) )[0]

    

    const toggleOptions = () => {
       
        setOptions(!options)
    }

    const forceClose = () => {
        setOptions(false)
    }


    React.useEffect(()=>{
        forceClose()
    }, [state])

    

    return (
        <div className="p-2 bg-white shadow-sm rounded-3 col-12 mb-2">
            <div className="d-flex justify-content-between mb-2 small">
                <span >
                <BsCircle size={5}  style={{
                    marginRight: 5,
                    color: tag.color
                }}/>
                    {tag.title}
                </span>
                <span>
                    <ImAttachment/>
                </span>
            </div>
            
            <div className="small text-muted p-2">
               {task.body}
            </div>
            <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="small">
                    <small dangerouslySetInnerHTML={{__html: task.time}}>
                    
                    </small>
                </div>
               <span className="position-relative">
                    <span onClick={toggleOptions} className="btn text-success">
                         <CgOptions/>
                    </span>
                    {options &&
                        <ul className="position-absolute  dropdown-menu show small" style={{
                            left: "-300%",
                            top:30
                        }}>
                            {
                                steps.map(st =>
                                    <li key={st.slug}>
                                        <span className="btn dropdown-item small" onClick={st.dispatch}>
                                            {st.title}
                                        </span>
                                    </li>
                                    )
                            }
                            <li><span className="btn dropdown-item small" onClick={()=>dispatch({
                                type: 'DELETETODO',
                                id: task.id,
                                slug : slug
                            })} >Delete</span></li>
                        </ul>
                    }
               </span>

            </div>
        </div>
    );
}

export default SingleTodo;
import React from 'react';
import { ImAttachment } from 'react-icons/im';
import { IoIosClose } from 'react-icons/io';
import { TodoContext } from '../context/TodosContext';
import { DateNow } from '../util/DateHandler';

function AddButton(props) {

    const initial = {
        tag: 1,
        body: ''
    }
    const [modal, setModal] = React.useState(false)

    const [todo,setTodo] = React.useState(initial)

    const onchange = ({target})=> {

        setTodo({
            ...todo,
            [target.name] : target.value
        })

    } 

    const tags = React.useContext(TodoContext).tags

    const [state,dispatch] = React.useContext(TodoContext).state

    const close = () => setModal(false)

    const open = () => setModal(true)
    React.useEffect(()=>{
        close()
        setTodo(initial)
    },[state])
   
     
    return (
        <>
        {modal && <div className="position-fixed d-flex justify-content-center align-items-center" style={{
            height:'100vh',
            width: "100vw",
            background: 'rgba(0,0,0,0.3)',
            top: 0,
            right:0,
            zIndex:100
        }}>
            <div className="col-11 col-md-4 bg-white rounded-3">
                <div className="d-flex justify-content-between align-items-center shadow-sm mb-3 p-2">
                    <span className=" text-muted">
                        Add to do
                    </span>
                    <span className="btn" onClick={close}>
                        <IoIosClose size={20} />
                    </span>
                </div>
                <div className="p-2">
                    <div className="form-floating mb-3">
                        <select
                            onChange={onchange}
                            value={todo.tag}
                            name='tag'
                            className="form-select ">
                            {
                                tags.map(tag =>
                                        <option value={tag.id} key={tag.id}>
                                            {tag.title}
                                        </option>
                                    )
                            }
                        </select>
                        <label >Tags</label>
                    </div>
                    <div className="form-floating">
                        <textarea 
                            onChange={onchange}
                            value={todo.body}
                            name='body'
                            className="form-control form-control-lg" 
                            style={{
                                height: 100
                            }}
                            placeholder="We need to..." >

                        </textarea>
                        <label>What need to be done</label>
                    </div>
                    <span className="btn btn-light disabled mt-3">
                        Attachement <ImAttachment style={{marginRight:3}} />
                       
                    </span>
                    <div className="col-12 small text-muted">
                        *Attachments are not yet supported from this version
                    </div>
                    <div className="col-12 d-flex justify-content-end mt-3">
                    <span
                        onClick={()=>dispatch({
                            type: "ADDTODO",
                            data : todo
                        })} 
                        className="btn  text-success w-100" style={{
                        background: 'rgba(143,188,143,0.2)'
                    }}>
                        + Add to do
                    </span>
                    </div>
                    </div>
                </div>
        </div>}
        <span className="btn  text-success w-100" onClick={open} style={{
            background: 'rgba(143,188,143,0.2)'
        }}>
            +
        </span>
        </>
    );
}

export default AddButton
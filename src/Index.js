import React from 'react';
import {render} from "react-dom"
import Body from './Body';
import SideBar from './comp/SideBar';




function Index() {

    const [side, setSide] = React.useState(false)

    const open = () => setSide(true)

    const close = () => setSide(false)

    return (
        <div className="d-flex flex-wrap">
            <SideBar close={close} side={side}/>
            <Body open={open}/>
        </div>
    );
}

render(
    <Index/>,
    document.querySelector('#app')
)
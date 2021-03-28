import React from 'react';
import Crumb from './comp/Crumb';
import Footer from './comp/Footer';
import Header from './comp/Header';
import { TodosProvider } from './context/TodosContext';
import Workflow from './Workflow';

function Body(props) {
    return (
        <div className="col-12 col-md-10 offset-md-2">
            <Header open={props.open}/>
            <Crumb/>
            <TodosProvider>
                <Workflow/>
            </TodosProvider>
            <Footer/>
        </div>
    );
}

export default Body;
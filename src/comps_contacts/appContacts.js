import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Add from './add‏';
import Show from './show';
import Count from './count';
import Nav from './nav';
import HomePage from './homePage';

function AppContacts(props)
{
    let [count,setCount] = useState(0);

    return(
        <div>
            <Router>
                <Nav/>
                <Route exact path={"/"} component = {HomePage}/>
                <Route exact path={"/add"} component={Add}/>
                <Route exact path={"/count"} render={()=>{return(<Count count={count}/>)}}/>
                <Route exact path={"/show"} render={()=>{return(<Show setCount={setCount}/>)}}/>
            </Router>
        </div> 
    )
}

export default AppContacts
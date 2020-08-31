import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props)
{
    return(
        <nav className="bg bg-dark py-3">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <NavLink to="/add" className="btn btn-outline-success">Add</NavLink>
                    <NavLink to="/show" className="btn btn-outline-success">Show</NavLink>
                    <NavLink to="/count" className="btn btn-outline-success">Count</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default  Nav
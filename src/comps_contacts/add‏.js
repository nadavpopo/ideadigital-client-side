import React, { useRef } from 'react';
import {useHistory} from "react-router-dom";

function Add(props)
{
    let history = useHistory();

    let first_name = useRef();
    let last_name = useRef();
    let email = useRef();
    let area_code = useRef();
    let phone = useRef();
   
    const addContact = () =>
    {
        // let url = "http://localhost:3000/users/add";
        let url = "https://ideodigital-server.herokuapp.com/users/add";
        
        let bodyData =
        {
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            email: email.current.value,
            area_code: area_code.current.value,
            phone: phone.current.value,
        }

        fetch(url,
        {
            method:"POST",
            body:JSON.stringify(bodyData),
            headers: { 'content-type': "application/json"}
        })
        .then(resp => resp.json())
        .then(data =>
        { 
            console.log(data);
            if(data.message)
            {
                document.getElementById("id_error").innerHTML = "Error: " + data.message;
            }
            else
            {
                alert("Contact added!");
                history.push("/show");
            }
        })
    }

    const clear = () =>
    {
        first_name.current.value = "";
        last_name.current.value = "";
        email.current.value = "";
        area_code.current.value = "Area code";
        phone.current.value = ""; 
        document.getElementById("id_error").innerHTML = "";  
    }

    return(
        <div className="center">
            <div className="col-5">
                <div className="my-4 text-center">
                    <h3 className="">Add a contact</h3>
                </div>
                <div className="row mt-3">
                    <div className="col-4 pt-1">
                        <h5>First name:</h5>
                    </div>
                    <div className="col-8">
                        <input ref={first_name} type="text" className="form-control" placeholder="Please enter your first name"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4 pt-1">
                        <h5>Last name:</h5>
                    </div>
                    <div className="col-8">
                        <input ref={last_name} type="text" className="form-control" placeholder="Please enter your last name"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4 pt-1">
                        <h5>Email:</h5>
                    </div>
                    <div className="col-8">
                        <input ref={email} type="text" className="form-control" placeholder="Please enter your email"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4 pt-1">
                        <h5>Phone:</h5>
                    </div>
                    <div className="col-3">
                        <select ref={area_code} className="form-control form-control">
                            <option>Area code</option>
                            <option>+972</option>
                            <option>+973</option>
                            <option>+974</option>
                            <option>+975</option>
                        </select>
                    </div>
                    <div className="col-5">
                        <input ref={phone} type="text" className="form-control" placeholder="Please enter your phone"/>
                    </div>
                </div>
                <h5 id="id_error" className="text-danger mt-4"></h5>
                <div className="my-4 text-center">
                    <button className="btn btn-outline-dark mr-5" onClick={addContact}>Add</button>
                    <button className="btn btn-outline-danger" onClick={clear}>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default  Add
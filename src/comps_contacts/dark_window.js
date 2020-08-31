import React, { useRef, useEffect }  from 'react';

function DarkWindow(props)
{
    let item = props.windowData;
    
    let first_name = useRef();
    let last_name = useRef();
    let email = useRef();
    let area_code = useRef();
    let phone = useRef();

    useEffect(()=>
    {
        first_name.current.value = item.first_name;
        last_name.current.value = item.last_name;
        email.current.value = item.email;
        area_code.current.value = item.area_code;
        phone.current.value = item.phone;
        document.getElementById("id_error").innerHTML = "";
        
    },[item])

    const edit = (_id) =>
    {
        // let url = "http://localhost:3000/users/edit";
        let url = "https://ideodigital-server.herokuapp.com/users/edit";
        
        let bodyData =
        {
            id: _id,
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
            if(data.message)
            {
                document.getElementById("id_error").innerHTML = "Error: " + data.message;
            }
            else
            {
                props.setContactsData(data);
                props.setWindowClass("d-none");
            }
        })
    }
    
    return(
        <div>
            <div className="dark_inside p-2 rounded col">
                <div className="col">
                    <h5 className="display-4">Edit contact</h5>
                    <div className="row mt-5">
                        <div className="col-3">
                            <h5 className="text-left">First name</h5>
                        </div>
                        <div className="col-9">
                            <input ref={first_name} type="text" className="form-control" defaultValue={item.first_name}/> 
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3">
                            <h5 className="text-left">Last name</h5>
                        </div>
                        <div className="col-9">
                            <input ref={last_name} type="text" className="form-control" defaultValue={item.last_name}/> 
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3">
                            <h5 className="text-left">Email</h5>
                        </div>
                        <div className="col-9">
                            <input ref={email} type="text" className="form-control" defaultValue={item.email}/> 
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3">
                            <h5 className="text-left">Phone</h5>
                        </div>
                        <div className="col-3">
                            <select ref={area_code} className="form-control">
                                <option value={item.area_code}>{item.area_code}</option>
                                <option value="+972">+972</option>
                                <option value="+973">+973</option>
                                <option value="+974">+974</option>
                                <option value="+975">+975</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <input ref={phone} type="text" className="form-control" defaultValue={item.phone}/> 
                        </div>
                    </div>
                    <div className="text-left">
                        <h5 id="id_error" className="text-danger mt-4"></h5>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button className="btn btn-outline-success mr-4" onClick={()=>{edit(item._id)}}>Edit</button> 
                        <button className="btn btn-outline-danger mr-4" onClick={()=>{props.setWindowClass("d-none")}}>Close</button> 
                    </div>  
                </div>                 
            </div>
        </div>
   )
}

export default DarkWindow


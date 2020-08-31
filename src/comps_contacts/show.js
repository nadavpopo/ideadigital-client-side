import React, { useEffect, useState } from 'react';
import DarkWindow from './dark_window';
import { doApiGet } from '../services/apiService';
import Table from './table';
function Show(props)
{
    let [contactsData,setContactsData] = useState([]);
    let [windowData,setWindowData] = useState({});
    let [windowId,setWindowId] = useState("");
    let [windowClass,setWindowClass] = useState("d-none");

    useEffect(() =>
    {
        // let url = "http://localhost:3000/users"; 
        let url = "https://ideodigital-server.herokuapp.com/users"; 

        doApiGet(url)
        .then(data =>
        {
            setContactsData(data);
            props.setCount(data.length);
        })

    },[contactsData])

    useEffect(() =>
    {
      document.getElementById("id_dark").className = windowClass;
    },[windowClass])

    useEffect(() =>
    {
        // let url = "http://localhost:3000/users/single/" + windowId; 
        let url = "https://ideodigital-server.herokuapp.com/users/single/" + windowId; 

        doApiGet(url)
        .then(data =>
        {
            setWindowData(data);
        })

        // אפשרות לפילטור בצד לקוח תלוי בשיקולי אבטחה ועומס על השרת
        // let singelContact = contactsData.filter(item => item._id === windowId);
        // singelContact =  singelContact[0];
        // setWindowData(singelContact);

    },[windowId])

    return(
        <div className="container-fliud center">
            <div id="id_dark" className="d-none">
                <DarkWindow setWindowClass={setWindowClass} windowData={windowData} setContactsData={setContactsData}/>
            </div>
           <Table setWindowId={setWindowId} setWindowClass={setWindowClass} contactsData={contactsData} setContactsData={setContactsData}/>
        </div> 
    )
}

export default  Show
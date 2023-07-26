import React, { useState, useEffect } from "react";
import axios from 'axios'
import './Table.css';

function Table() {
    const [data, setData] = useState([])
    

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(r =>setData(r.data))
        .catch(error =>setData(error.data));

    }, [])

    return(
        <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                 data.map((item) => 
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                    </tr>

                 )
                }
            </tbody>
        </table>
        </div>




    );





}


export default Table;

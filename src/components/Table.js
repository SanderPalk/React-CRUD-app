import "../styles/App.css"
import React, { useState, useEffect } from "react";
import Create from "./Create";

function Table() {
    const [data, getData] = useState([])
    const url = 'http://localhost:5000/cities';

    useEffect( () => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch(url)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })
    }

    return (
        <div className="Table">
            <h1>Visited city list</h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>City name</th>
                    <th>Country</th>
                    <th>Date visited</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.country}</td>
                        <td>{item.date}</td>
                    </tr>
                ))}
            </table>
            <Create>
            </Create>
        </div>
    )
}

export default Table
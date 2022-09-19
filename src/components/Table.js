import React from "react"
import Form from "./Form"

const Table = ({cities, postCity, updateCity, deleteCity}) => {
    const showUpdateCity = id => {
        const form = document.getElementsByClassName(`show-form-${id}`)
        form[0].classList.toggle("hide-form")
    }

    const Row = ({ city }) => {
        return (
            <>
                <div className='row'>
                    <div>{city.name}</div>
                    <div>{city.country}</div>
                    <div>{city.date}</div>
                    <div className='buttons'>
                        <button onClick={() => showUpdateCity(city.id)}>Update</button>
                        <button onClick={() => deleteCity(city.id)}>Delete</button>
                    </div>
                </div>
                <div className={`hide-form show-form-${city.id}`}>
                    <Form userData={city} postUser={postCity} updateUser={updateCity} />
                </div>
            </>
        )
    }

    return (
        <div className='table'>
            <div className='titles'>
                <div>Name</div>
                <div>Country</div>
                <div>Date</div>
                <div>Actions</div>
            </div>
            <div className='rows'>
                {cities && cities.map(u => <Row city={u} key={u.id} />)}
            </div>
        </div>
    )
}

export default Table
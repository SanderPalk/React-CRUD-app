import React, { useState } from "react"

const Form = ({ cityData = {}, postCity, updateCity }) => {
    const [city, setCity] = useState({
        name: cityData.name ?? "",
        country: cityData.country ?? "",
        date: cityData.date ?? "",
    })

    const handleValue = e => {
        setCity({ ...city, [e.target.name]: e.target.value })
    }

    const submitCity = e => {
        e.preventDefault()

        if (cityData.id) {
            updateCity(cityData.id, city)
        } else {
            postCity(city)
        }
    }

    return (
        <form onSubmit={submitCity} className='row'>
            <input
                type='text'
                name='name'
                value={city.name}
                placeholder='Name'
                onChange={e => handleValue(e)}
            />
            <input
                type='text'
                name='country'
                value={city.country}
                placeholder='Country'
                onChange={e => handleValue(e)}
            />
            <input
                type='date'
                name='date'
                value={city.date}
                onChange={e => handleValue(e)}
            />
            <input
                className='btn-submit'
                type='submit'
                value={`${!cityData.id ? "Add new city" : "Save city"}`}
            />
        </form>
    )
}

export default Form
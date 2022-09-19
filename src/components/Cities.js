import React, { useState, useEffect } from "react"
import Form from "./Form"
import Table from "./Table"

import { httpHelper } from "../helpers/httpHelper"

const City = () => {
    const [cities, setCity] = useState(null)

    const url = "http://localhost:5000/cities"
    const api = httpHelper()

    useEffect(() => {
        getCities()
    }, [])

    const postCities = city => {
        api
            .post(`${url}`, { body: city })
            .then(res => getCities())
            .catch(err => console.log(err))
    }

    const updateCity = (id, city) => {
        api
            .put(`${url}/${id}`, { body: city })
            .then(res => getCities())
            .catch(err => console.log(err))
    }

    const deleteCity = id => {
        api
            .del(`${url}/${id}`, {})
            .then(res => getCities())
            .catch(err => console.log(err))
    }

    const getCities = () => {
        api
            .get(`${url}`)
            .then(res => {
                setCity(res)
            })
            .catch(err => console.log(err))
    }

    if (!cities) return null

    return (
        <>
            <h3>New City</h3>
            <Form postCity={postCities} />
            <div className='all-cities'>
                <h3>All cities</h3>
                <Table
                    cities={cities}
                    setCities={setCity}
                    postCity={postCities}
                    updatCity={updateCity}
                    deleteCity={deleteCity}
                />
            </div>
        </>
    )
}

export default City
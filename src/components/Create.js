import {useState} from "react";

const Create = () => {
    const url = "http://localhost:5000/cities"
    const [name, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const city = { name, country, date };

        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(city)
        }).then(() => {
            console.log("New city added");
            window.alert("New city added!")
        })
    }

    return (
        <div className="Create">
            <h2>Add a new city</h2>
            <form onSubmit={handleSubmit}>
                <label>City name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setCity(e.target.value)}
                /><br/>
                <label>Country name:</label>
                <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                /><br/>
                <label>Date:</label>
                <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                /><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Create


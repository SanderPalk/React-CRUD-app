import React, { useEffect, useState } from "react";
import {AddPicture} from "./components/AddPicture";
import {Picture} from "./components/Home";

export default function App() {
    const [photos, setPhotos] = useState([]);

    const api = "https://jsonplaceholder.typicode.com/photos/"

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch(api + "?_limit=10")
            .then((response) => response.json())
            .then((data) => setPhotos(data))
            .catch((error) => console.log(error));
    };

    const onAdd = async (title, url) => {
        await fetch( api, {
            method: "POST",
            body: JSON.stringify({
                title: title,
                url: url,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (response.status !== 201) {
                    return;
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                setPhotos((comments) => [...comments, data]);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="App">
            <h1>Photos</h1>
            <AddPicture onAdd={onAdd}/>
            <div className="form_body">
                {photos.map((photo) => (
                    <Picture
                        id={photo.id}
                        key={photo.id}
                        title={photo.title}
                        url={photo.url}
                    />
                ))}
            </div>
        </div>
    );
}
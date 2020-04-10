import React, { Component, useState, useEffect } from "react";
import Client from '../api/client'
import { Link } from "react-router-dom";

function Project({ location }) {
    const [data, setData] = useState([]);
    
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const url = `http://laravel-react-bootstrap.test/api/projects/${location.state.id}/note`;
    useEffect(() => {
        try {
            setIsLoading(true);
            setIsError(false);

            fetch(url)
                .then((resp) => resp.json())
                .then(function (data) {
                    console.log(data.data)
                    setData(data.data)
                })

            setIsError(false);
        } catch (err) {
            console.error(err);
            setIsError(true);
        }
        setIsLoading(false);
    }, [url]);

    return (
        <div>
            <h1>Project Details</h1>

            <h3>{location.state.title}</h3>
            <p>{location.state.description}</p>

            <h1>Project Notes</h1>
            {data.map(note => (
                <ul key={note.id}>
                    <li>{note.body} - {note.created_at}</li>

                </ul>
            ))}
        </div>
    )

}

export default Project;

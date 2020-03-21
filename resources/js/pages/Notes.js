import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Http from "../Http";

function Notes({id}) {
    const [noteData, setNoteDta] = useState([]);
    const url = `http://laravel-react-bootstrap.test/api/project/${id}/note`;

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        try {
            setIsLoading(true);
            setIsError(false);

            Http.get(`${url}`)
                .then(response => {

                    const { data } = response.data
                    setNoteDta(data)
                })
            setIsError(false);
        } catch (err) {
            console.error(err);
            setIsError(true);
        }
        setIsLoading(false);
    }, [url]);
    console.log('data', noteData)

    return (
        <div>
            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                    <>
                        <h1>Notes</h1>
                        <ul>
                            {noteData.map(note => (
                                <li key={note.id}>
                                    <p>{note.body}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                    
                )}

        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user
});

export default connect(mapStateToProps)(Notes);

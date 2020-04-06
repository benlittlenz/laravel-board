import React, { Component, useState, useEffect } from "react";
import Client from '../api/client'
import { Link } from "react-router-dom";


function EditProject({ location }) {


    return (
        <div>
            <h1>{location.state.title}</h1>
            <p>{location.state.description}</p>
        </div>
    )

}

export default EditProject;

import React, { useState } from "react";
import { connect } from "react-redux";


function Project(props) {
    const [state, setState] = useState([])
    const { id, title, description, createdAt, updatedAt } = props.location.state
    console.log(title)
    //setState(props.location.state)
    console.log(props.location.state)
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user
});

export default connect(mapStateToProps)(Project);

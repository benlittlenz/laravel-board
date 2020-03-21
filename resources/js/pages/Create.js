import React from 'react';
import { connect } from "react-redux";
import Http from "../Http";
import { useForm } from 'react-hook-form';

function Create() {
    const url = 'http://laravel-react-bootstrap.test/api/project';

    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = ({title, description}) => {
        addProject(title, description)
    };

    async function addProject(title, description) {
        const sendProject = Http.post(url, { title, description })

        const { data } = await sendProject
        console.log(data)

        const newItem = {
            id: data.id,
            title,
            description
        }
        console.log(newItem)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="title" ref={register({ required: true })} />
            {errors.title && 'Title is required.'}

            <input name="description" ref={register({ required: true })} />
            {errors.age && 'Description is required.'}

            <input type="submit" />
        </form>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user
});

export default connect(mapStateToProps)(Create);
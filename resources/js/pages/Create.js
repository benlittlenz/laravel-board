import React, { Component } from "react";
import { connect } from "react-redux";
import Http from "../Http";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        // Initial state.
        this.state = {
            project: null,
            todo: null,
            error: false,
            data: [],
            projectData: []
        };

        // API endpoint.
        this.api = "/api/project";
    }


    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { todo } = this.state;
        this.addTodo(todo);
    };

    addTodo = todo => {
        console.log(todo)
        Http.post(this.api, { title: todo, description: 'gfggfddgf'})
            .then(({ data }) => {
                console.log(data)
            })
        }


    render() {
        const { data, error } = this.state;
        return (
            <div className="container py-5">
                <div className="add-todos mb-5">
                    <h1 className="text-center mb-4">Add a To Do</h1>
                    <form
                        method="post"
                        onSubmit={this.handleSubmit}
                        ref={el => {
                            this.todoForm = el;
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="addTodo">Add a New To Do</label>
                            <div className="d-flex">
                                <input
                                    id="addTodo"
                                    name="todo"
                                    className="form-control mr-3"
                                    placeholder="Build a To Do app..."
                                    onChange={this.handleChange}
                                />
                                <button type="submit" className="btn btn-primary">
                                    Add
                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {error && (
                    <div className="alert alert-warning" role="alert">
                        {error}
                    </div>
                )}

                <div className="todos">
                    <h1 className="text-center mb-4">Open To Dos</h1>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>To Do</th>
                                <th>Action</th>
                            </tr>
                            {data.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.value}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={this.closeTodo}
                                            data-key={todo.id}
                                        >
                                            Close
                    </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user
});

export default connect(mapStateToProps)(Dashboard);

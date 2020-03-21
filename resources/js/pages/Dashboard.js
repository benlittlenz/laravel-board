import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Http from "../Http";

function Dashboard() {
  const [projectData, setprojectData] = useState([]);
  const url = 'http://laravel-react-bootstrap.test/api/project';

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
     try {
       setIsLoading(true);
       setIsError(false);
       
       Http.get(`${url}`)
         .then(response => {
           
           const { data } = response.data
           setprojectData(data)
         })
       setIsError(false);
     } catch(err) {
       console.error(err);
       setIsError(true);
     }
    setIsLoading(false);
  }, [url]);
  console.log(projectData)

  return (
    <div>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <ul>
            ghfghghffgh
            {projectData.map(project => (
              
              <li key={project.id}>
                <Link to={{
                  pathname: '/project',
                  state: {
                    id: project.id,
                    title: project.title,
                    description: project.description,
                    createdAt: project.created_at,
                    updatedAt: project.updated_at,
                  }

                }}>
                  <h3>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
              </li>
              
            ))}
          </ul>
      )}
      
    </div>
  )

}

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);

//     // Initial state.
//     this.state = {
//       project: null,
//       error: false,
//       data: [],
//       projectData: []
//     };

//     // API endpoint.
//     this.api = "/api/project";
//   }

//   componentDidMount() {
//     Http.get(`${this.api}`)
//       .then(response => {
//         const { data } = response.data
//         console.log(data)
//       })
//   }

//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user
});

export default connect(mapStateToProps)(Dashboard);

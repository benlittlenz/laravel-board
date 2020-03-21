import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import Http from "../Http";

function Dashboard() {
  const [projectData, setprojectData] = useState({ hits: [] });
  const url = 'http://laravel-react-bootstrap.test/api/project';

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
     try {
       Http.get(`${url}`)
         .then(response => {
           setIsLoading(true);
           const { data } = response.data
           setprojectData(data)
         })
       setIsError(false);
     } catch(err) {
       console.error(err);
       setIsError(true);
     }
    setIsLoading(false);
  }, []);
  console.log(projectData)

  return (
    <div> gdfgdgfgf </div>
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

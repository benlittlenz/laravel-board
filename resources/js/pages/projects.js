import React, { Component, useState, useEffect } from "react";
import Client from '../api/client'
import { Link } from "react-router-dom";


function Projects() {
  const [projectData, setprojectData] = useState([]);
  const url = 'http://laravel-react-bootstrap.test/api/projects';



  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    try {
      setIsLoading(true);
      setIsError(false);

      fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
          setprojectData(data.data)
        })

      setIsError(false);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
    setIsLoading(false);
  }, [url]);
  console.log('hey', projectData)

  return (
    <div className="container p-2 mx-auto flex flex-col">
      jhgjhghgjhg
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <div >
            <div class="flex flex-col">
              <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                  <table class="min-w-full table-fixed">
                    <thead>
                      <tr>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Title
              </th>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Description
              </th>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Status
              </th>

                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                      </tr>
                    </thead>
                    {projectData.map(project => (
                      <tbody class="bg-white">
                        <tr>
                          <td class="px-6 py-4 border-b border-gray-200 w-2/6">
                            <div class="flex items-center">
                              <div class="ml-4">
                                <div class="text-sm leading-5 font-medium text-gray-900 break-all">
                                  <Link
                                    to={{ 
                                      pathname: `/project/${project.id}`, 
                                      state: {
                                        id: project.id,
                                        title: project.title,
                                        description: project.description,
                                        createdAt: project.created_at,
                                        updatedAt: project.updated_at,
                                     },
                                      query: { id: project.id } }}
                                    //to={`/projects/${project.id}`}
                                  // to={{
                                  //   pathname: `/project/${project.id}`,
                                  //   state: {
                                  //     id: project.id,
                                  //     title: project.title,
                                  //     description: project.description,
                                  //     createdAt: project.created_at,
                                  //     updatedAt: project.updated_at,
                                  //   }

                                  // }}
                                  >
                                    <p key={project.id} class="break-words">
                                      {project.title}
                                    </p>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 border-b border-gray-200 w-5/6">
                            <div class="w-full text-sm leading-5 text-gray-900 break-words">
                              <p class="break-words">
                                {project.description}
                              </p>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-1/6">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                </span>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <a
                              href="#"
                              class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                            >Edit</a>
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <a
                              href="#"
                              class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                            >Details</a>
                          </td>
                        </tr>
                      </tbody>
                    ))}

                  </table>
                </div>
              </div>
            </div>

          </div>
        )}


    </div>
  )

}

export default Projects;

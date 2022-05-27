import React, { useEffect, useState } from "react";
import { listAllProblems } from "../../api";

function ProblemsList() {

    const [problems, setProblems] = useState([])

    useEffect(() => {
        listAllProblems().then(res => {
            setProblems(res.data)
        }).catch(error => console.log(error))
    }, [])

    return (
        <table className='table'>
            <thead className="table-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Input</th>
                    <th scope="col">expectedOutput</th>
                    <th scope="col">courses</th>
                    <th scope="col">modules</th>
                </tr>
            </thead>
            <tbody>
                {
                    problems.map(problem => {
                        return (
                        <tr className="table-light">
                            <th scope="row">{problem.name}</th>
                            <td>{problem.description}</td>
                            <td>{problem.input}</td>
                            <td>{problem.expectedOutput}</td>
                            <td>{problem.courses.map( course => { return `${course.name} `})}</td>
                            <td>{problem.modules.map( module => { return `${module.name} `})}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
            { }
        </table>
    )
}

export default ProblemsList
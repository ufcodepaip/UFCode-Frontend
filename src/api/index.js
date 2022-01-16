import axios from 'axios'

export function listCourses() {
    return (
        axios({
            method: "GET",
            url: "https://ufc-code.herokuapp.com/api/course",
            headers: {
                "token": ""
            }
        })
    )
}
export function listModules() {
    return (
        axios({
            method: "GET",
            url: "https://ufc-code.herokuapp.com/api/module",
            headers: {
                "token": ""
            }
        })
    )
}

export function listProblems(_course, _module) {
    return (
        axios({
            method: "GET",
            url: `https://ufc-code.herokuapp.com/api/problem/${_course}/${_module}`,
            headers: {
                "token": ""
            }
        })
    )
}

export function submission(data){
    return (
        axios({
            method: "POST",
            url: "https://ufc-code.herokuapp.com/api/submission",
            data: data,
            headers: {
                "token": ""
            }
        })
    )
}
import axios from 'axios'

export function listCourses(){
    return(
        axios({
            method: "GET",
            url: "https://ufc-code.herokuapp.com/api/course",
            headers:{
                "token": ""
            }
        })
    )
}
import axios from 'axios'

export function listModules(){
    return(
        axios({
            method: "GET",
            url: "https://ufc-code.herokuapp.com/api/module",
            headers:{
                "token": ""
            }
        })
    )
}
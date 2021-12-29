import axios from 'axios'

export function listModules(){
    return(
        axios({
            method: "GET",
            url: "http://xxx",
            headers:{
                "token": ""
            }
        })
    )
}
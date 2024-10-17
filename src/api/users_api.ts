import axios, { AxiosRequestConfig } from "axios"

const BASE_URL = "http://localhost:8080/users"



function createUser(data:FormData){
  const config : AxiosRequestConfig<any> = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  console.log("OPA")
  axios.post(BASE_URL, data, config)
    .then((res) => console.log(res))
    .then((err) => console.log(err))
}

export {createUser}
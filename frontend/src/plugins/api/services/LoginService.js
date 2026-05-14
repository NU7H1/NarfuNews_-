import {API_BASE_URL, fetchData} from "@/src/plugins/api/apiConfig.js";
import axios from 'axios'
class LoginService {
    constructor() {
    }
    async authorizationUser(email, password) {
       console.log( "email, password ", email, password)
  return axios.get("http://localhost:3011/api/login/auth?email=zaharov@savely.ru&password=zahar")
    }
}

const service = new LoginService(API_BASE_URL);

export default service;
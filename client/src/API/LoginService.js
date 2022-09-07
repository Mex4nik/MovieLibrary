import axios from "axios";

export default class LoginService {
    static async login(body) {
        const response = await axios.post(`http://localhost:5000/login`, body);
        return response.data;
    }
}
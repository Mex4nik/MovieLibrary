import axios from "axios";

export default class LoginService {
    static async login() {
        const response = await axios.post(`http://localhost:5000/login`);
        return response.data;
    }
}
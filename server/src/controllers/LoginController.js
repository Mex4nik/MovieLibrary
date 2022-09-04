import LoginService from "../services/LoginService.js";

class LoginController {
    async login(req, res) {
        try {
            const login = LoginService.login();
            res.json(login)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

export default new LoginController();
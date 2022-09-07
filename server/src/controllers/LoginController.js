import LoginService from "../services/LoginService.js";

class LoginController {
	async login(req, res) {
		try {
			const login = await LoginService.login(req.body);
			res.json(login);
		} catch (error) {
            res.status(500).json({message: error.message})
		}
	}
}

export default new LoginController();

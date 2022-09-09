import UserService from "../services/UserService.js"

class UserController {
    async create(req, res) {
        try {
            const user = await UserService.create(req.body)
            res.json(user)
        } catch (error) {
            res.status(500).json({message: error.errors[0].message})
        }
    }

    async getOne(req, res) {
        try {
            const user = await UserService.getOne(req.params.id)
            return res.json(user)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async getAll(req, res) {
        try {
            const users = await UserService.getAll(req.query);
            return res.json(users)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

export default new UserController();
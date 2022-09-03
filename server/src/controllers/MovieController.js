import MovieService from "../services/MovieService.js"

class MovieController {
    async create(req, res) {
        try {
            const movie = await MovieService.create(req.body)
            res.json(movie)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getOne(req, res) {
        try {
            const movie = await MovieService.getOne(req.params.id)
            return res.json(movie)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    getAll(req, res) {
        res.send('getAll')
    }

    delete(req, res) {
        res.send('delete')
    }
}

export default new MovieController();
import MovieService from "../services/MovieService.js"

class MovieController {
    async create(req, res) {
        try {
            const movie = await MovieService.create(req.body)
            res.json(movie)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async getOne(req, res) {
        try {
            const movie = await MovieService.getOne(req.params.id)
            return res.json(movie)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async getAll(req, res) {
        try {
            const movies = await MovieService.getAll(req.query);
            return res.json(movies)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async update(req, res) {
        try {
            const movie = await MovieService.update(req.body);
            return res.json(movie)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async delete(req, res) {
        try {
            await MovieService.delete(req.params.id);
            return res.json({
                message: 'Movie was removed successfully'
            })
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

export default new MovieController();
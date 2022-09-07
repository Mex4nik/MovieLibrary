import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

export const accessTokenSecret = 'youraccesstokensecret';

class LoginService {
    async login(body) {
        const { username, password } = body;
        if (!(username && password)) {
            throw new Error('username and password are mandatory fields and shoud not be empty')
        }

        const user = await User.findOne({ where: { username: username, password: password } });

        if (user) {
            const accessToken = jwt.sign({ username: user.dataValues.username,  password: user.dataValues.password }, accessTokenSecret);
            return { accessToken };
        } else {
            throw new Error('Username or password incorrect')
        }
    }
}

export default new LoginService() 
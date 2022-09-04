import jwt from 'jsonwebtoken';

export const accessTokenSecret = 'youraccesstokensecret';

class LoginService {

    login() {
        const accessToken = jwt.sign({ user: 'User' }, accessTokenSecret);
        return { accessToken };
    }
}

export default new LoginService()
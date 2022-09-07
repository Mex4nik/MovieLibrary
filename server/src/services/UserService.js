import User from "../models/UserModel.js";

class UserService {
	async create(user) {
		if (!user.email) throw new Error("Email is empty")
		if (!user.username) throw new Error("Username is empty")
		if (!user.password) throw new Error("Password is empty")
		if (!user.confirmPassword) throw new Error("Confirm password is empty")
		if (user.password !== user.confirmPassword) throw new Error("Password and Confirm password should be the same")

		const createdUser = await User.create(user);	
		return createdUser;
	}

	async getOne(id) {
		if (!id) throw new Error("Id is not specified");
		const user = await User.findOne({ where: { id } });
		return user;
	}

	async getAll() {
		const users = await User.findAll();
		return users;
	}
}

export default new UserService();

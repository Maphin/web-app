import userService from '../services/userService.js';
import config from '../config.js';

const UserController = {};

UserController.register = async (req, res) => {
    try {
        const { userData, token } = await userService.register(req.body);

        res.json({
            ...userData,
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to register',
        });
    }
}

export default UserController;
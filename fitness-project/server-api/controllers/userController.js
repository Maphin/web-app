import userService from '../services/userService.js';
import config from '../config.js';

const UserController = {};

UserController.register = async (req, res) => {
    try {
        const { error, userData, token } = await userService.register(req.body);

        if (error) {
            return res.status(400).json({
                message: 'User with such email already exists'
            })
        } else {
            res.json({
                ...userData,
                token,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to register',
        });
    }
}

UserController.login = async (req, res) => {
    try {
        const { error, userData, token } = await userService.login(req.body);

        if (error) {
            return res.status(400).json({
                message: 'Wrong login or password',
            });
        } else {
            res.json({
                ...userData,
                token,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to login',
        });
    }
};

export default UserController;
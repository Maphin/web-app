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

UserController.getMe = async (req, res) => {
    try {
        const { error, userData } = await userService.getUserById(req.userId);

        if (error) {
            return res.status(404).json({
                message: 'User is not found',
            });
        } else {
            res.json(userData);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'No access',
        });
    }
};

UserController.getAll = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) - 1 || 0;
        const pageSize = parseInt(req.query.pageSize, 10) || config.DEFAULT_PAGE_SIZE;
        const users = await userService.getAll(page, pageSize);
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to retrieve users',
        });
    }
};


export default UserController;
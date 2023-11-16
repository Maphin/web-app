import express from 'express';
import UserController from '../controllers/userController.js';
import { handleValidationErrors, checkAuth, checkIsCoach, registerValidation, loginValidation } from '../utils/index.js';

const router = express.Router();

router.post('/auth/login', loginValidation, handleValidationErrors,  UserController.login);
router.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
router.get('/auth/me', checkAuth, UserController.getMe);
router.get('/users', checkAuth, checkIsCoach, UserController.getAll);

export default router;
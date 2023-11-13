import express from 'express';
import UserController from '../controllers/userController.js';
import { handleValidationErrors, checkAuth, checkIsCoach, registerValidation, loginValidation } from '../utils/index.js';

const router = express.Router();

router.post('/auth/login', UserController.login);
router.post('/auth/register', UserController.register);

export default router;
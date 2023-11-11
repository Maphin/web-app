import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Invalid mail format').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({
        min: 8,
        max: 20
    }),
];

export const registerValidation = [
    body('email', 'Invalid mail format').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({
        min: 8,
        max: 20
    }),
    body('firstName', 'Enter your First name').isLength({ min: 3 }),
    body('lastName', 'Enter your Last name').isLength({ min: 3 }),
];
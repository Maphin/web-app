import express from 'express';
import OrderController from '../controllers/orderController.js';
import { handleValidationErrors, checkAuth, checkIsCoach } from '../utils/index.js';

const router = express.Router();

router.get('/orders', checkAuth, OrderController.getAll);
router.get('/orders/:id', checkAuth, OrderController.getOne);
router.post('/orders', checkAuth, handleValidationErrors, OrderController.create);
router.delete('/orders/:id', checkAuth, checkIsCoach, OrderController.delete);
router.patch(
    '/orders/:id',
    checkAuth,
    checkIsCoach,
    handleValidationErrors,
    OrderController.update
);

export default router;
import express from 'express';
import SubscriptionController from '../controllers/subscriptionController.js';
import { handleValidationErrors, checkAuth, checkIsCoach, subscriptionCreateValidation } from '../utils/index.js';

const router = express.Router();

router.get('/subscriptions', SubscriptionController.getAll);
router.get('/subscriptions/:id', SubscriptionController.getOne);
router.post('/subscriptions', checkAuth, checkIsCoach, subscriptionCreateValidation, handleValidationErrors, SubscriptionController.create);
router.delete('/subscriptions/:id', SubscriptionController.delete);
router.patch('/subscriptions/:id', checkAuth, checkIsCoach, subscriptionCreateValidation, handleValidationErrors, SubscriptionController.update);

export default router;
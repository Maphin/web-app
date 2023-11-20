import express from 'express';
import VisitController from '../controllers/visitController.js';
import { handleValidationErrors, checkAuth, checkIsCoach } from '../utils/index.js';

const router = express.Router();

router.get('/visits', VisitController.getAll);
router.get('/visits/:id', VisitController.getOne);
router.post('/visits', checkAuth, checkIsCoach, handleValidationErrors, VisitController.create);
router.delete('/visits/:id', VisitController.delete);
// router.patch('/subscriptions/:id', checkAuth, checkIsCoach, subscriptionCreateValidation, handleValidationErrors, SubscriptionController.update);

export default router;
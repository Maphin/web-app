import subscriptionService from "../services/subscriptionService.js";
import config from "../config.js";

const SubscriptionController = {};

SubscriptionController.getAll = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) - 1 || 0;
        const pageSize = parseInt(req.query.pageSize, 10) || config.DEFAULT_PAGE_SIZE;
        const subscriptions = await subscriptionService.getAll(page, pageSize);
        res.json(subscriptions);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to retrieve subscriptions',
        });
    }
};

SubscriptionController.getOne = async (req, res) => {
    try {
        const subscription = await subscriptionService.getOne(req.params.id);
        res.json(subscription);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to retrieve subscription',
        });
    }
};

SubscriptionController.create = async (req, res) => {
    try {
        const subscription = await subscriptionService.create(req.body);
        res.json(subscription);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Failed to create a subscription"
        });
    }
};

SubscriptionController.delete = async (req, res) => {
    try {
        await subscriptionService.delete(req.params.id)
            .then(() => {
                res.json({
                    success: true,
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(404).json({
                    message: 'Subscription not found',
                });
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to receive Subscriptions',
        });
    }
};

SubscriptionController.update = async (req, res) => {
    try {
        await subscriptionService.update( req.body, req.params.id);
        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to update subscription',
        });
    }
};

export default SubscriptionController;
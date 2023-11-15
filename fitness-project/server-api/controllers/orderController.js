import orderService from "../services/orderService.js";
import config from "../config.js";

const OrderController = {};

OrderController.getAll = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) - 1 || 0;
        const pageSize = parseInt(req.query.pageSize, 10) || config.DEFAULT_PAGE_SIZE;
        const user = req.query.user;
        const options = { page, pageSize, user, authUserId: req.userId, isCoach: req.isCoach };
        const orders = await orderService.getAll(options);
        res.json(orders);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to retrieve orders',
        });
    }
};

OrderController.getOne = async (req, res) => {
    try {
        const order = await orderService.getOne(req.params.id);
        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to retrieve the order',
        });
    }
};

OrderController.create = async (req, res) => {
    try {
        const order = await orderService.create(req.body, req.userId);
        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to create order',
        });
    }
};

OrderController.delete = async (req, res) => {
    try {
        await orderService
            .delete(req.params.id)
            .then(() => {
                res.json({
                    success: true,
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(404).json({
                    message: 'Order not found',
                });
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to receive orders',
        });
    }
};

OrderController.update = async (req, res) => {
    try {
        await orderService.update(req.body, req.params.id);
        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to update order',
        });
    }
};

export default OrderController;
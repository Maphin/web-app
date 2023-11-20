import config from '../config.js';
import visitService from '../services/visitService.js';

const VisitController = {};

VisitController.getAll = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) - 1 || 0;
        const pageSize = parseInt(req.query.pageSize, 10) || config.DEFAULT_PAGE_SIZE;
        const visits = await visitService.getAll(page, pageSize);
        res.json(visits);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to retrieve visits',
        });
    }
};

VisitController.getOne = async (req, res) => {
    try {
        const visit = await visitService.getOne(req.params.id);
        res.json(visit);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to retrieve a visit',
        });
    }
};

VisitController.create = async (req, res) => {
    try {
        const visit = await visitService.create(req.userId);
        res.json(visit);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to create a visit',
        });
    }
};

VisitController.delete = async (req, res) => {
    try {
        await visitService
            .delete(req.params.id)
            .then(() => {
                res.json({
                    success: true,
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(404).json({
                    message: 'Visit not found',
                });
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to receive visits',
        });
    }
};

export default VisitController;
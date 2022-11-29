import Project from '../models/Project.js';
import mongoose from 'mongoose';
import moment from 'moment';


const createProject = async (req, res) => {
    const { language, name } = req.body;

    if (!language || !name) {
        return ("input required");
    }
    req.body.createdBy = req.user.userId;
    const project = await Project.create(req.body);
    res.status(StatusCodes.CREATED).json({ project });
};

import Project from '../models/projects';
import { StatusCodes } from 'http-status-codes';
import {
    BadRequestError, 
    NotFoundError, 
    UnAuthenticatedError, 
} from '../errors/index.js';
import checkPermissions from '../util/checkPermissions.js';
import mongoose from 'mongoose';
import moment from 'moment';
const createProject = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const project = await Project.create(req.body);
    res.status(StatusCodes.CREATED).json({ project });
};

const getAllProjects = async (req, res) => {
    const { status, codingLanguage, sort, search } = re.query; 

    const queryObject = {
        createdBy: req.user.userId,
    };

    if (status && status !== 'all') {
        queryObject.status = status;
    }

    if (codingLanguage && codingLanguage !== 'all') {
        queryObject.codingLanguage = codingLanguage;
    }

    if (search) {
        queryObject.projectName = { $regex: search, $options: 'i'};
    }

    let result = Project.find(queryObject);

    if (sort === 'latest') {
        result = result.sort('-createdAt');
    }

    if (sort === 'oldest') {
        result =  result.sort('createdAt');
    }

    if (sort === 'a-z') {
        result = result.sort('projectName');
    }

    if (sort === 'z-a') {
        result = result.sort('-projectName');
    }

const page = Number(req.query.page) || 1; 
const limit = Number(req.query.limit) || 10;
const skip = (page - 1) * limit; 

result = result.skip(skip).limit(limit);

const projects = await result; 

const totalProjects = await Project.countDocuments(queryObject);
const numOfPages = Math.ceil(totalProjects / limit);

res.status(StatusCodes.OK).json({ projects, totalProjects, numOfPages });

};

const updateProject = async (req, res) => {
    const { id: projectId } = req.params;
    const { company, projectName } = req.body;

    if (!projectName || !company) {
        throw new BadRequestError('Please provide all values.');
    }
    const project = await Project.findOne({ _id: projectId });
    
    if (!project) {
        throw new NotFoundError(`No project with id: ${projectId}`)
    }

    checkPermissions(req.user, project.createdBy);

    const updatedProject = await Project.findOneAndUpdate({ _id: projectId }, req.body, {
        new: true, 
        runValidators: true,
    })
};

const deleteProject = async (req, res) => {
    const { id: projectId } = req.params;

    const project = await Project.findOne({ _id: projectId });

    if (!project) {
        throw new NotFoundError(`No project with id: ${projectId}`)
    }

    checkPermissions(req.user, project.createdBy);

    await project.remove();

    res.status(StatusCodes.OK).json({ msg: 'Success!! Project Removed.'})
}

const showStats = async (req, res) => {
    let stats = await Project.aggregate([
        { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId)}},
        { $group: { id: '$status', count: { $sum: 1}}},
    ]);
    stats = stats.reduce((acc, curr) => {
        const { _id: title, count } = curr;
        acc[title] = count;
        return acc; 
    }, {});

    const defaultStats = {
        todo: stats.todo || 0,
        inprogress: stats.inprogress || 0, 
        finished: stats.finished || 0,
    };

    let monthlyApplications = await Project.aggregate([
        { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId)}},
        { $group: {
            _id: { year: { $year: '$createdAt'}, month: { $month: '$createdAt'}},
            count: { $sum: 1}, 
        },
    },
    { $sort: { '_id.year': -1, '_id.month': -1}},
    { $limit: 6},        
    ]);
    monthlyApplications = monthlyApplications
    .map((item) => {
        const {
            _id: { year, month }, 
            count, 
        } = item; 
        const date = moment ()
        .month(month -1)
        .year(year)
        .format('MMM Y');
        return {date, count};
    })
    .reverse();

    res.status(StatusCodes.OK).json({defaultStats, monthlyApplications});
};

export { createProject, deleteProject, getAllProjects, updateProject, showStats };
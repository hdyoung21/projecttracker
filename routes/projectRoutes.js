import express from 'express'; 
const router = express.Router(); 

import {
    createProject, 
    deleteProject,
    getAllProjects,
    updateProject,
    showStats,
}  from '../controllers/projectControllers';

import testUser from '../middleware/testUser';

router.route('/').post(testUser, createProject).get(getAllProjects);
router.route('/stats').get(showStats);
router.route('/:id').delete(testUser, deleteProject).patch(testUser, updateProject);

export default router; 
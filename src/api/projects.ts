import express from 'express';
import { ProjectService } from '../services/project-service';

const Projects = express.Router();
Projects.get('/:projectId', async(req, res) => {
    const result = await ProjectService.isOnSchedule(req.params.projectId);
    return res.json({
        projectId: req.params.projectId,
        result
    });
})

export default Projects;
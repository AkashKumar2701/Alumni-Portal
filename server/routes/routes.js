import express from 'express';

import { homepage, facultySignup, facultyLogin } from '../controllers/appControllers.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/', homepage)
router.post('/faculty/signup', facultySignup)
router.post('/faculty/login', facultyLogin)
// router.post('/alumni/login', alum)

export default router;
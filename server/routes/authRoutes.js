import express from 'express';

import { homepage, signup, login } from '../controllers/users.js';

const router = express.Router();

router.get('/', homepage)
router.get('/signup', signup)
router.get('/login', login)


export default router;
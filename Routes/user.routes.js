import express from 'express';
import { createUser, updateUser } from '../Controller/user.controller.js';

const router = express.Router();

router.post("/create", createUser)
router.post("/update/:id", updateUser)

export default router;


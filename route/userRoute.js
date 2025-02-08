import express from 'express';
import { fetch, create, update, deleteuser } from '../controller/userController.js';

const router = express.Router();

router.post('/create',create)
router.get('/getAll',fetch)
router.put('/update/:id',update)
router.delete('/deletedUser/:id',deleteuser)

export default router;
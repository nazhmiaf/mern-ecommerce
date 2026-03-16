import express from 'express'
import Category from '../models/categoryModel.js';
import { adminMiddleware, authMiddleware } from '../middlewares/authMiddleware.js';
import { createCategory, deleteCategory, getCategories } from '../controller/categoryController.js';

const router = express.Router()

router.post('/',authMiddleware, adminMiddleware, createCategory);
router.get('/', getCategories);
router.delete('/:id', authMiddleware,adminMiddleware, deleteCategory);

export default router;
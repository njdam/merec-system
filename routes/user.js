import express from 'express';
import { getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

// Admin routes to manage users
router.route('/')
    .get(protect, admin, getUsers) // Get all users
    .post(protect, admin, updateUser); // Update user

router.route('/:id')
    .get(protect, admin, getUserById) // Get a user by ID
    .put(protect, admin, updateUser) // Update a user by ID
    .delete(protect, admin, deleteUser); // Delete a user by ID

export default router;

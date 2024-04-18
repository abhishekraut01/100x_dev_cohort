const express = require('express');
const router = express.Router();
const {handleGetAllUser , handlegetUserById,handleUpdateById,handleDeleteById ,handleCreateNewUser} = require('../controllers/user')

// Route to get all users as JSON // Route for adding a new user
router.route('/')
.get(handleGetAllUser)
.post(handleCreateNewUser)


// Route for getting, updating, and deleting a user by ID
router.route('/:id')
    .get(handlegetUserById)
    .patch(handleUpdateById)
    .delete(handleDeleteById);


    

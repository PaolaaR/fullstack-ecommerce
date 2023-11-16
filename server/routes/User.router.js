const express = require('express'),
router = express.Router(),
{
    signUp,
    getUsers,
    updateUser,
    deleteUser
} = require('../controllers/User.controller')

router.post('/', signUp)
router.get('/', getUsers)
router.put('/', updateUser)
router.delete('/', deleteUser)

module.exports = router;

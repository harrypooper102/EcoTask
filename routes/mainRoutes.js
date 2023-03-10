const express = require('express');
const mainController = require('../controllers/mainController');
const accountController = require('../controllers/accountController');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/', mainController.index);
router.get('/account', mainController.account);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/tasks', mainController.tasks);
router.get('/investments', mainController.investments);
router.get('/drop', mainController.drop);
router.get('/create', taskController.createAll);
router.get('/logout', accountController.logout);
router.get('/myTasks', taskController.myTasks)
router.post('/success', accountController.process);
router.post('/', accountController.authenticate);
router.post('/addTask', taskController.addTask);

module.exports = router;
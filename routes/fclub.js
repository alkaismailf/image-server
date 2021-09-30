const express = require('express'); // import express
const router = express.Router();
const fclubController = require('../controllers/fclubController'); // import controller
// const multer = require('multer');
// const upload = multer();

// Routers
router.get('/fclub', fclubController.getAllClub);
router.post('/fclub', fclubController.uploadImg, fclubController.newClub);
router.delete('/fclub', fclubController.deleteAllClub);

router.get('/fclub/:name', fclubController.getOneClub);
router.post('/fclub/:name', fclubController.newComment);
router.delete('/fclub/:name', fclubController.deleteOneClub);

module.exports = router; // export untuk dipakai di server.js

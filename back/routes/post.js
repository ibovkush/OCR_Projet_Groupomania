const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middlware/auth');
const multer = require('../middlware/multer-config');


router.get('/', postCtrl.get);
router.post('/', multer, postCtrl.save);
router.get('/:id', postCtrl.getOne);
router.put('/:id', multer, postCtrl.modifyPost);
router.delete('/:id', postCtrl.deletePost);
router.post('/:id/like', postCtrl.likePost)





module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controller/ctl');

// ...existing code...

router.post('/addBlog', controller.addBlog);
router.get('/dashboard', controller.getBlogs);
router.post('/deleteBlog/:id', controller.deleteBlog);
router.post('/updateBlog/:id', controller.updateBlog);

module.exports = router;

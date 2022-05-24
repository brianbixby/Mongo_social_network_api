"use strict";

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('ask and the universe shall provide'));

module.exports = router;
const { seedUser } = require('../controllers/seed.controller');

const seedRouter = require('express').Router();

seedRouter.get("/users",seedUser)

module.exports = seedRouter;
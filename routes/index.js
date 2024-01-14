import express from "express";

const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    return res.json({ message: 'Hello, World' })
  });

export { router };
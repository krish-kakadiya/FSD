// routes/home.js
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to our site");
});

router.get("/home",(req,res)=>{
    res.send("Welcome to Home Page");
})

export default router;

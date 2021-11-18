const express = require('express')
const router = express.Router()

const axios = require('axios')

router.post('/postdata', async (req, res, next) => {
  try {
    console.log(req.body)
    res.send('Hello ESP32 World!' + Math.floor(Date.now() / 1000))
  } catch (err) {
    res.status(400).json({ ok: false, statusText: err?.message || "Unknown Error"})
  }
})

module.exports = router
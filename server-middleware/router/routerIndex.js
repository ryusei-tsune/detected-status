import knex from '../database/main'
const express = require('express')
const router = express.Router()

const axios = require('axios')

router.post('/measuredData', async (req, res, next) => {
  try {
    await knex('measure_data').insert([{
      device_id: req.body.MAC,
      temperature: req.body.temperature_value,
      humidity: req.body.humidity_value,
      brightness_level: req.body.bright_value,
    }])
    //res.send('Hello ESP32 World!' + Math.floor(Date.now() / 1000))
    res.status(200).end()
  } catch (err) {
    res.status(400).json({ ok: false, statusText: err?.message || "Unknown Error" })
  }
})

router.get('/devices', async (req, res, next) => {
  try {
    const name = await knex('devices').select('*');
    res.status(200).json({ ok: true, statusText: 'ok.', body: name })
  } catch (err) {
    res.status(400).json({ ok: false, statusText: err?.message || "Unknown Error" })
  }
})

// router.get('/devices/:deviceId', async (req, res, next) => {
//   try {
//     const data = await knex('measure_data').select('*').where('device_id', req.params.deviceId);
//     console.log(data)
//     console.log(req.params.deviceId);
//     res.status(200).json({ ok: true, statusText: 'ok.', body: name })
//   } catch (err) {
//     res.status(400).json({ ok: false, statusText: err?.message || "Unknown Error" })
//   }
// })

router.get('/devices/:deviceId/measured-data', async (req, res, next) => {
  try {
    const data = await knex('measure_data').select('*').where('device_id', req.params.deviceId);
    const name = await knex('devices').select('*').where('id', req.params.deviceId)
    res.status(200).json({ ok: true, statusText: 'ok.', body: data, name: name })
  } catch (err) {
    res.status(400).json({ ok: false, statusText: err?.message || "Unknown Error" })
  }
})

router.get('/devices/:deviceId/measured-data/span/:startDate(\\d{4}-\\d{2}-\\d{2})/:endDate', async (req, res, next) => {
  try {
    // const name = await knex('devices').select('*');
    console.log("params", req.params);
    console.log("query", req.query);
    res.status(200).json({ ok: true, statusText: 'ok.', body: null })
  } catch (err) {
    res.status(400).json({ ok: false, statusText: err?.message || "Unknown Error" })
  }
})

module.exports = router
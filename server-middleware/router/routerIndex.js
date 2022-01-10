import knex from '../database/main'
import express from 'express'
const router = express.Router()
import dayjs from 'dayjs'

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

router.post('/deviceName', async(req, res, next) => {
  try {
    await knex('devices').where('id', '=', req.body.MAC).update({name: req.body.Name, update_at: knex.fn.now()})
    res.status(200).end()
  } catch (err) {
    res.status(400).end()
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
console.log(dayjs.tz('2021-07-03 00:00:00', 'America/New_York').format())

router.get('/devices/:deviceId/measured-data/span/:startDate(\\d{4}-\\d{2}-\\d{2})/:endDate(\\d{4}-\\d{2}-\\d{2})', async (req, res, next) => {
  try {
    const tz = req.query.tz || 'utc'
    const startDate = dayjs.tz(`${req.params.startDate} 00:00:00`, tz)
    const endDate = dayjs.tz(`${req.params.endDate} 00:00:00`, tz)
    const data = await knex('measure_data').select('*').where('device_id', req.params.deviceId).andWhere('created_at', '>', startDate.toDate()).andWhere('created_at', '<', endDate.toDate());
    const name = await knex('devices').select('*').where('id', req.params.deviceId)
    // const name = await knex('devices').select('*');
    console.log("params", req.params);
    console.log("query", req.query);
    res.status(200).json({ ok: true, statusText: 'ok.', body: data, name: name })
  } catch (err) {
    res.status(400).json({ ok: false, statusText: err?.message || "Unknown Error" })
  }
})

module.exports = router
const { createServer } = require('http')
const cors = require('cors')
const app = require('express')()
const morgan = require('morgan')

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 7000

app.use(morgan('tiny'))
app.use(cors())

const runServer = _rec => {
    app.get('/', (_, res) => {
        res.status(200).json(_rec.servable()).end()
    })

    createServer(app).listen(port, host, _ => {
        console.log(`🔥 Listening at http://${host}:${port}`)
    })
}

module.exports = { runServer }

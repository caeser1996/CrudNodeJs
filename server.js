const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
dotenv.config({ path: './config/config.env' })

//Route files
const boocamps = require('./routes/bootcamp')
// Custom middleware
const { logger } = require('./middlewares/logger')

const {connectDb} = require('./config/db')

// Connect to database
connectDb()

const app = express()

// Mount Rounter
app.use(logger)

//Body Parse
app.use(express.json())

// Morgan logger
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps', boocamps)

const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.json({ data: "Hello world" }, 500)
})


const server = app.listen(PORT, console.log(`Server running in ${process.env.PORT}`))
// Handle Unhandled Promise Rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Unhandled Rejection:${err.message}`);
    // close server exit process
    server.close(()=>process.exit(1))
})
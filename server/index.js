const express = require('express')
const mongoose = require('mongoose')
const todosRoutes = require('./routes/todosRoutes')
const cors = require('cors')

require('dotenv').config()

const app = express()

app.use(cors())

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use('/api/todos', todosRoutes)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT)
        app.listen(PORT, () => console.log(`Server started on port - ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
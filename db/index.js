const mongoose = require('mongoose')

mongoose
    .connect("mongodb+srv://bhavika0361be21:bY57htFS1ZqAImVE@cluster0.sexbxbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(console.log("Db connected"))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
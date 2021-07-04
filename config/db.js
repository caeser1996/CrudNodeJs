const mongoose = require('mongoose')

module.exports.connectDb = async () => {
    const conn = await mongoose.connect(process.env.MongoDbUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology:true
    })
    console.log(`Connected to mongo Db ${conn.connection.host}`)

}

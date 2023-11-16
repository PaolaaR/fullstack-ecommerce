const mongoose = require("mongoose")


const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "mugs-ecommerce"
        })

        console.log("Database connected")

    } catch (error) {
        console.log(error)
        process.exit(1) // DETIENE LA APP POR COMPLETO

    }

}

module.exports = connectDB
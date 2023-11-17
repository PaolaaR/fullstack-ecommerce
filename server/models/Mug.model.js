// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const mugSchema = mongoose.Schema({
        name: {
            type: String, 
            required: true
            },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

// 3. MODELO
const Mug = mongoose.model('Mug', mugSchema)

// 4. EXPORTACIÓN
module.exports = Mug
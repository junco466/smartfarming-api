const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let dataSchema = new Schema(

    {

        sensor: {
            flujo: Number,
            co2: Number,
            huemdad: Number,
            temperatura: Number,
        },
        time : {

            fecha: String,
            hora: String,

        },

    },

    {
        collection : "farmData"
    }

);

module.exports = mongoose.model('farmData', dataSchema)

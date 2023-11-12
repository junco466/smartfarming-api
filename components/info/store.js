const presionModel = require('./model');

function getAllData(){
    return presionModel.find()
}

function getFlujo(){
    return presionModel.find({},"sensor.flujo time.fecha time.hora")
}

function getCo2(){
    return presionModel.find({},"sensor.co2 time.fecha time.hora")
}

function getHuemdad(){
    return presionModel.find({},"sensor.huemdad time.fecha time.hora")
}

function getTemp(){
    return presionModel.find({},"sensor.temperatura time.fecha time.hora")
}

function addData(data){
    let newData = new presionModel(data)
    return newData.save();
}

module.exports = {
    list: getAllData,
    add: addData,
    flujo: getFlujo,
    co2: getCo2,
    huemdad: getHuemdad,
    temp: getTemp
}

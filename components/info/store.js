const farmModel = require('./model');

function getAllData(){
    return farmModel.find()
}

function getFlujo(){
    return farmModel.find({},"sensor.flujo time.fecha time.hora")
}

function getCo2(){
    return farmModel.find({},"sensor.co2 time.fecha time.hora")
}

function getHuemdad(){
    return farmModel.find({},"sensor.huemdad time.fecha time.hora")
}

function getTemp(){
    return farmModel.find({},"sensor.temperatura time.fecha time.hora")
}

function addData(data){
    let newData = new farmModel(data)
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

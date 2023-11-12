const store = require('./store');

function getAllData(){
    return store.list();
}

async function getFlujo(){
    let data = await store.flujo();

    console.log(data);
    return data;
}

async function getHuemdad(){
    let data = await store.huemdad();

    console.log(data);
    return data;
}

async function getCo2(){
    let data = await store.co2();

    console.log(data);
    return data;
}

async function getTemp(){
    let data = await store.temp();

    console.log(data);
    return data;
}

async function addData(data){
    if(!data){
        return Promise.reject('invalid data insertion');
    }

    const newData = {
        "sensor.flujo": data.flujo,
        "sensor.co2" : data.co2,
        "sensor.huemdad" : data.huemdad,
        "sensor.temperatura" : data.temperatura,
        "time.fecha" : data.fecha,
        "time.hora" : data.hora,
    }

    return store.add(newData);
}

module.exports = {
    getAllData,
    addData,
    getFlujo,
    getHuemdad,
    getCo2,
    getTemp
}

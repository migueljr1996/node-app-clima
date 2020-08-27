const axios = require('axios');

const getLugar = async(direccion) => {
    const encode = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encode}&appid=c45ce59f94e9409282d8fe5b4f830f80&units=metric`,
    })

    const resp = await instance.get();
    if (!resp.data) {
        throw new Error(`No hay resultados para ${direccion}`)

    }
    const weather = resp.data.weather;
    const location = resp.data.sys.country
    const latitud = resp.data.coord.lat
    const longitud = resp.data.coord.lon
    const temperatura = resp.data.main.temp

    return {
        location,
        latitud,
        longitud,
        temperatura
    }
}

module.exports = {
    getLugar
}
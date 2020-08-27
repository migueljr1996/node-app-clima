const axios = require('axios');
const lugar = require('./lugar/lugar')

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad',
        demand: true
    }
}).argv;

lugar.getLugar(argv.direccion).then(console.log).catch(error => console.log(`Ocurrio un error al obtener la temperatura de ${argv.direccion}`));
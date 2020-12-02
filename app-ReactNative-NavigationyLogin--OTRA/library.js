const axios = require("axios");

function obtenerInfoPais(nombrePais){
    return axios.get("https://restcountries.eu/rest/v2/name/" + nombrePais);
}

module.exports = obtenerInfoPais;
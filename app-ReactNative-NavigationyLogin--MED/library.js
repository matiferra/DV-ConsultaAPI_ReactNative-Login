const axios = require("axios");

function obtenerInfoMedicamento(nroRegistroMedicamento){
    return axios.get("https://cimavet.aemps.es/cimavet/rest/medicamento?nregistro=" + nroRegistroMedicamento);
    //return axios.get('https://restcountries.eu/rest/v2/name/' + nroRegistroMedicamento);
}

module.exports = obtenerInfoMedicamento;
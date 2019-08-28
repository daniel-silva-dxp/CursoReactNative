const moment = require('moment');


moment.locale('pt-br');
let date = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("dia").innerHTML = `A data e hora atual é: ${date}`
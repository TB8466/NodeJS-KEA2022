const { response } = require("express");

const weatherAPI = "http://api.weatherstack.com/current?access_key=361bbf753b816d01b117fffca0e5ed2b&query=Copenhagen";

const promise = fetch(weatherAPI).then(response => response.json).then(console.log(response));


var express = require('express');
var router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/* GET users listing. */
function chiamataAServizio() {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {

    if (this.readyState === this.DONE) {


      var responseJson = JSON.parse(this.responseText);
      console.log(responseJson.current.temp_c);


      res.send(this.responseText);

    
    }
  });
  
  xhr.open("GET", "https://weatherapi-com.p.rapidapi.com/forecast.json?q="+ valore.value);
  xhr.setRequestHeader("x-rapidapi-key", "ef89091173mshc17df7ae57d8719p1feafcjsn44692889a230");
  xhr.setRequestHeader("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");
  
  xhr.send(data);

}

module.exports = router;

//--------------------------------------
//Mia parte 
//var valore = document.getElementById('invioDati');
///xhr.open("GET", "https://weatherapi-com.p.rapidapi.com/forecast.json?q=+valore.value");

//--------------------------------------
    
//var resultDiv = document.getElementById('resultDiv'); //un div che devo aver creato nella pagina html

/*          
var labelContagiati = document.createElement('label');
labelContagiati.innerHTML = 'Contagiati: ';
labelContagiati.style.fontWeight = 'bold';
var contagiati = document.createElement('h'); //h è un testo
contagiati.innerHTML = country.Active_Cases_text;

resultDiv.appendChild(labelCountryName);
resultDiv.appendChild(countryName);*/
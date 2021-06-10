function chiamataServizio()
{
    const data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            if(this.status==200){
        //    console.log(this.responseText);
            var responseJson = JSON.parse(this.responseText);
 
           

            var latitudine = responseJson.location.lat;
            console.log(latitudine);
            
            var Longitudine = responseJson.location.lon;
            console.log(Longitudine);

            initMap(latitudine,Longitudine);

         
  
            //Temperatura
            var padre = document.getElementById("tmpID");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            var temperatura = document.createElement("text");
            temperatura.innerHTML=responseJson.current.temp_c+"&deg";
            padre.appendChild(temperatura);

            //ICONA
            padre = document.getElementById("icona");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            var image = document.createElement("img");
            image.id = "immagine";
            image.className = "class";
            image.src = responseJson.current.condition.icon;            
            padre.appendChild(image);
            

            //Città
            padre = document.getElementById("nomeC");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            var city = document.createElement("text");
            city.innerHTML=responseJson.location.name;
            padre.appendChild(city);

            
        
            //Precipitazioni
            padre = document.getElementById("pioggiaID");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            var pioggia = document.createElement("text");
            pioggia.innerHTML=responseJson.current.precip_mm;
            padre.appendChild(pioggia);
                
    
            //Vento
            padre = document.getElementById("ventoID");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            var vento = document.createElement("text");
            vento.innerHTML=responseJson.current.wind_kph;
            padre.appendChild(vento);

            //Condizioni 0
            padre = document.getElementById("condizioniID");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            var cond = document.createElement("text");
            cond.innerHTML=responseJson.current.condition.text;
            padre.appendChild(cond);

            //umidità
            padre = document.getElementById("UmiditaID");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            var umidi = document.createElement("text");
            umidi.innerHTML=responseJson.current.humidity;
            padre.appendChild(umidi);
         
             //UV
             padre = document.getElementById("uvID");
             if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
             var uv = document.createElement("text");
             uv.innerHTML=responseJson.current.uv;
             padre.appendChild(uv);
          
            //temperatura max
            padre = document.getElementById("maxiID");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            var max = document.createElement("text");
            max.innerHTML=responseJson.forecast.forecastday[0].day.maxtemp_c;;
            padre.appendChild(max);
            //temperatura min
            padre = document.getElementById("miniID");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            var min = document.createElement("text");
            min.innerHTML=responseJson.forecast.forecastday[0].day.mintemp_c;;
            padre.appendChild(min);
            //temperatura avg
            padre = document.getElementById("avgiID");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            var avg = document.createElement("text");
            avg.innerHTML=responseJson.forecast.forecastday[0].day.avgtemp_c;
            padre.appendChild(avg);
            //Ultimo aggiornamento
            padre = document.getElementById("aggiornamentoID");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            var agg = document.createElement("text");
            agg.innerHTML=responseJson.current.last_updated;
            padre.appendChild(agg);

            //Condizioni 1 --------------------------------------------------------

             //temperatura max
             padre = document.getElementById("maxiID1");
             if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
             max = document.createElement("text");
             max.innerHTML=responseJson.forecast.forecastday[1].day.maxtemp_c;;
             padre.appendChild(max);
             //temperatura min
             padre = document.getElementById("miniID1");
             if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
             min = document.createElement("text");
             min.innerHTML=responseJson.forecast.forecastday[1].day.mintemp_c;;
             padre.appendChild(min);
            
             //Precipitazioni
            padre = document.getElementById("prec1");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            pioggia = document.createElement("text");
            pioggia.innerHTML=responseJson.forecast.forecastday[1].day.totalprecip_mm;
            padre.appendChild(pioggia);

             //Condizioni 0
             padre = document.getElementById("condiz1");
             if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
             cond = document.createElement("text");
             cond.innerHTML=responseJson.forecast.forecastday[1].day.condition.text;
             padre.appendChild(cond);

            //ICONA
            padre = document.getElementById("ico1");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            image = document.createElement("img");
            image.id = "immagine";
            image.className = "class";
            image.src = responseJson.forecast.forecastday[1].day.condition.icon;            
            padre.appendChild(image);

            //Codizioni 2 -------------------------------------------------------------------------
                  
            //temperatura max
            padre = document.getElementById("maxiID2");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            max = document.createElement("text");
            max.innerHTML=responseJson.forecast.forecastday[2].day.maxtemp_c;;
            padre.appendChild(max);
            //temperatura min
            padre = document.getElementById("miniID2");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            min = document.createElement("text");
            min.innerHTML=responseJson.forecast.forecastday[2].day.mintemp_c;;
            padre.appendChild(min);
           
            //Precipitazioni
           padre = document.getElementById("prec2");
           if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
           pioggia = document.createElement("text");
           pioggia.innerHTML=responseJson.forecast.forecastday[2].day.totalprecip_mm;
           padre.appendChild(pioggia);

            //Condizioni 0
            padre = document.getElementById("condiz2");
            if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
            cond = document.createElement("text");
            cond.innerHTML=responseJson.forecast.forecastday[2].day.condition.text;
            padre.appendChild(cond);

           //ICONA
           padre = document.getElementById("ico2");
           if(padre.lastElementChild) padre.removeChild(padre.lastElementChild);
           image = document.createElement("img");
           image.id = "immagine";
           image.className = "class";
           image.src = responseJson.forecast.forecastday[2].day.condition.icon;            
           padre.appendChild(image);   
       
            }else{
                console.log("ERRORE");
            }
 

        }
    });
    
    var valore = document.getElementById('citta');
    console.log('valore:'+valore.value);
    xhr.open("GET", "/weather?q="+valore.value);
  //  xhr.setRequestHeader("x-rapidapi-key", "ef89091173mshc17df7ae57d8719p1feafcjsn44692889a230");
    //xhr.setRequestHeader("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");
    
    xhr.send(data);

}

function initMap(x,y){
    if(x !=undefined && y!=undefined)
    {
        //correzione API su Milnao 
        if(x==52.13&&y==20.68) 
        {
            x=45.4668;
            y=9.1905;
        }
      //opzioni 
      var options = {
           zoom:10,
           center: {lat: x, lng:y}
        }
        //creazione della mappa
        var map = new google.maps.Map(document.getElementById('map'),options);
     //aggiungo il marker
     var marker = new google.maps.Marker({
            position: {lat: x, lng:y},
            map:map
        })  
    }

}

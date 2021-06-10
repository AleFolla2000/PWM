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
            var newDiv = document.createElement("div");
            console.log(responseJson.location.region);
            newDiv.innerHTML=responseJson.location.region;
            document.body.appendChild(newDiv);

            var latitudine = responseJson.location.lat;
            console.log(latitudine);
            
            var Longitudine = responseJson.location.lon;
            console.log(Longitudine);

            initMap(latitudine,Longitudine);

            
            //Ultimo Aggiornamento
            var update = document.createElement("text");
            update.innerHTML="Ultimo aggiornamento: "+responseJson.current.last_updated;
            document.body.appendChild(update);
            
            //Condizioni
            var condizioni = document.createElement("text");
            condizioni.innerHTML="<br>Condizioni meteo: "+responseJson.current.condition.text;
            document.body.appendChild(condizioni);
                

           
            //Temperatura
            var padre = document.getElementById("tmpID");
            var temperatura = document.createElement("text");
            temperatura.innerHTML=responseJson.current.temp_c+"&deg";
            padre.appendChild(temperatura);

            //ICONA
 
            padre = document.getElementById("icona");
            var image = document.createElement("img");
            image.id = "immagine";
            image.className = "class";
            image.src = responseJson.current.condition.icon;            
            padre.appendChild(image);
            

            //Città
            padre = document.getElementById("nomeC");
            var city = document.createElement("text");
            city.innerHTML=responseJson.location.name;
            padre.appendChild(city);

            
        
            //Precipitazioni
            padre = document.getElementById("pioggiaID");
            var pioggia = document.createElement("text");
            pioggia.innerHTML=responseJson.current.precip_mm;
            padre.appendChild(pioggia);
                
    
            //Vento
            padre = document.getElementById("ventoID");
            var vento = document.createElement("text");
            vento.innerHTML=responseJson.current.wind_kph;
            padre.appendChild(vento);
            
  

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

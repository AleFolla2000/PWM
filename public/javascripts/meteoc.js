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
            
            var Longitudine = responseJson.location.lat;
            console.log(Longitudine);

            //console.log(responseJson.location.region);
            //newDiv.innerHTML=responseJson.location.lon;
            //document.body.appendChild(newDiv);

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

function initMap(){
    //opzioni 
    var options = {
        zoom:10,
        center: {lat: 46.1324186, lng:9.5694737}
    }
    //creazione della mappa
    var map = new google.maps.Map(document.getElementById('map'),options);
    //aggiungo il marker
    var marker = new google.maps.Marker({
        position: {lat: 46.1324186, lng:9.5694737},
        map:map
    })

}

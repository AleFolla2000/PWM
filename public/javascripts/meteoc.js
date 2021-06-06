function chiamataServizio()
{
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    
    xhr.open("GET", "https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3");
    xhr.setRequestHeader("x-rapidapi-key", "ef89091173mshc17df7ae57d8719p1feafcjsn44692889a230");
    xhr.setRequestHeader("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");
    
    xhr.send(data);






}
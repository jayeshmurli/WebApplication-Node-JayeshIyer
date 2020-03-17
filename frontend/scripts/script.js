function myFunction() {
    var x = document.getElementById("time");
    x.style.display = "block";

    //Creating a new HTTP request to get data from backend server
    let timeRequest = new XMLHttpRequest();
    timeRequest.overrideMimeType("application/json");
    timeRequest.open("GET", 'http://127.0.0.1:5000/data', true);
    timeRequest.responseType = 'json';

    timeRequest.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            let time = timeRequest.response;
            //console.log(timeRequest.response);
            //Extracting current time from response object
            x.innerHTML = time.currentTime;
        }
        else{
            console.log("Error getting data from server")
        }
    }    
    timeRequest.send();            
}
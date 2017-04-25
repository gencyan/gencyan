var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        GetNeededData(this);
    }
};
xmlhttp.open("GET", "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=293fde5989a044348ad180530172204&q=Kremenchuk&format=xml&num_of_days=5", true);
xmlhttp.send();

function GetNeededData(xml) {
    var xmlDoc = xml.responseXML;
    var variable = document.getElementById("table2"); 

    var items = variable.getElementsByTagName("td");
    
    var temp_C = xmlDoc.getElementsByTagName("temp_C");
    items[0].innerHTML = temp_C[0].textContent;
    
    var temp_F = xmlDoc.getElementsByTagName("temp_F");
    items[1].innerHTML = temp_F[0].textContent;

    var windspeedKmph = xmlDoc.getElementsByTagName("windspeedKmph");
    items[2].innerHTML = windspeedKmph[0].textContent;
}
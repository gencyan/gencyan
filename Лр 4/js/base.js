'use strict';

var filePath = './xml/fish.xml';
var XHRequest = 'onload' in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
var xhr = new XHRequest();

xhr.open('GET', filePath, true);

xhr.onload = function() {
    var responseDoc = this.responseXML;
    var derElem = document.getElementById('der');
    var fishArr = responseDoc.getElementsByTagName('fish');
    for (var i = 0; i < recipteArr.length; i++) {
        var fishContainer = document.createElement('div');
        fishContainer.classList.add('fish');

        var recipteName = document.createElement('h3');
        fishName.classList.add('fish__header');
        var name = recipteArr[i].getAttribute('name');
        fishName.innerHTML = name

        var ingsArr = fishArr[i].getElementsByTagName('ing');

        var fishIngredientsHeader = document.createElement('h5');
        fishIngredientsHeader.classList.add('fish__ingredients-header');
        fishIngredientsHeader.innerHTML = 'Информация';

        var fishIngredients = document.createElement('ul');
        fishIngredients.classList.add('fish__ingredients');

        for (var k = 0; k < ingArr.length; k++) {
            var fishIng = document.createElement('li');
            fishIng.classList.add('fish__ing');
            var ingInf = ingsArr[k].getAttribute('inf');
            var ing = ingsArr[k].innerHTML;
            fishIng.innerHTML = ingInf + ing;
            fishIngredients.appendChild(fishIng);
        }

        var fishInfo = document.createElement('p');
        fishInfo.classList.add('fish__info');
        var info = fishArr[i].getElementsByTagName('Opis')[0].innerHTML;
        recipteInfo.innerHTML = info;

        fishContainer.appendChild(fishName);
        fishContainer.appendChild(fishIngredientsHeader);
        fishContainer.appendChild(fishIngredients);
        fishContainer.appendChild(fishInfo);
       derElem.appendChild(fishContainer);
    }
};

xhr.onerror = function() {
    console.log('Error! ' + this.status + ':' + this.statusText);
};

xhr.send();

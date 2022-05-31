const container = document.querySelector('.container'),
inputArea = container.querySelector('.input-area'),
infoArea = inputArea.querySelector('.info-area'),
inputField = inputArea.querySelector('input'),
locationButton = inputArea.querySelector('button');

let api;

inputField.addEventListener('keyup', event => {
    //Submit input data using 'enter' button if input field is not empty
    if(event.key == 'Enter' && inputField.value != '') {
        requestApi(inputField.value);
    }
});

locationButton.addEventListener('click', () => {
    //Check if the browser supports the Geolocation API
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        alert('Your browser does not support the Geoloction API');
    }
});

function onSuccess(position) {
    //Get latitude and longitude of the the user's device from the coords object
    const {latitude, longitude} = position.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    fetchData();
}

function onError(error) {
    infoArea.innerText = error.message;
    infoArea.classList.add('error');
}

var apiKey = config.API_KEY;

function requestApi(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetchData();
}

function fetchData() {
    infoArea.innerText = 'Getting weather details...';
    infoArea.classList.add('pending');
    //Get API response and parse into JSON object, then call a function passing the API result as an argument
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
}

function weatherDetails(info) {
    console.log(info);
}
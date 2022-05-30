const container = document.querySelector('.container'),
inputArea = container.querySelector('.input-area'),
infoArea = inputArea.querySelector('.info-area'),
inputField = inputArea.querySelector('input');

inputField.addEventListener('keyup', event => {
    //Submit input data using 'enter' button if input field is not empty
    if(event.key == 'Enter' && inputField.value != '') {
        requestApi(inputField.value);
    }
});

var apiKey = config.API_KEY;

function requestApi(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(api).then(response => console.log(response.json()));
}
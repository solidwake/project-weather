# WeatherGet
Location based weather app with animated SVG and search by city.

Link: https://solidwake.github.io/project-weather/

![Screen Shot 2022-06-20 at 4 28 27 PM](https://user-images.githubusercontent.com/69250073/174673851-b191a642-34fb-4f2c-91f1-c5faaba9f98f.png)
![Screen Shot 2022-06-20 at 4 28 44 PM](https://user-images.githubusercontent.com/69250073/174673848-0788251a-151f-459b-a8f4-45199a764214.png)

## How its made: HTML, CSS, JavaScript, OpenWeather API, Geolocation API
After getting the weather data from OpenWeather, it is converted to JSON. Details like humidity and 'feels like' temperature are extracted and their values converted to imperial units. Weather data is requested using latitude and longitude for location based, and city name using search. Twelve unique animated SVG correspond to API ids for different weather conditions.

## To be done:
Implement city/state so that cities with the same names are differentiated. Make it responsive.

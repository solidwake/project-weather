# WeatherGet
Location based weather app with animated SVG and search by city.

Link: https://solidwake.github.io/project-weather/

![Screen Shot 2022-06-15 at 11 41 22 PM](https://user-images.githubusercontent.com/69250073/174669643-353e47c4-4c53-44cb-a923-956e36e62098.png)
![Screen Shot 2022-06-15 at 11 41 02 PM](https://user-images.githubusercontent.com/69250073/174669649-b52c200d-078f-41e8-b4e1-eb46c29370fe.png)

## How its made: HTML, CSS, JavaScript, OpenWeather API, Geolocation API
After getting the weather data from OpenWeather, it is converted to JSON. Details like humidity and 'feels like' temperature are extracted and their values converted to imperial units. Weather data is requested using latitude and longitude for location based, and city name using search. Twelve unique animated SVG correspond to API ids for different weather conditions.

## To be done:
Implement city/state so that cities with the same names are differentiated. Make it responsive.

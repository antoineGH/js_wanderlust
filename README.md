## JS Wanderlust

## Table of contents

-   [General info](#general-info)
-   [Technologies](#technologies)
-   [Details](#setails)
-   [Setup](#setup)
-   [Screenshots](#screenshots)

## General info

Using fetch, async, and await, Wanderlust requests information from the Foursquare API and OpenWeather API to simulates a travel website.

## Details

### General Functions

-   getVenues()
-   getForecast()
-   renderVenues()
-   renderForecast()
-   executeSearch()

### Helpers

-   createVenueHTML()
-   createWeatherHTML()

## Technologies

Project is created with:

-   JavaScript

## Setup

To run this project, clone it and start index.html

```
$ git clone https://github.com/antoineratat/js_wanderlust.git
$ cd js_wanderlust
$ touch config.js
```

config.js

```Javascript
const config = {
	Foursquare_clientId: 'foursquare_client_api',
	Foursquare_clientSecret: 'foursquare_client_secret',
	openWeatherKey: 'openweather_api',
}
```

## Screenshots

![App Screenshots](https://github.com/antoineratat/github_docs/blob/main/js_wanderlust/1.PNG?raw=true)

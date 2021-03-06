// Foursquare API Info
const clientId = config.Foursquare_clientId
const clientSecret = config.Foursquare_clientSecret
const url = 'https://api.foursquare.com/v2/venues/explore?near='

// OpenWeather Info
const openWeatherKey = config.openWeatherKey
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'

// Page Elements
const $input = $('#city')
const $submit = $('#button')
const $destination = $('#destination')
const $container = $('.container')
const $venueDivs = [$('#venue1'), $('#venue2'), $('#venue3'), $('#venue4')]
const $weatherDiv = $('#weather1')
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Add AJAX functions here:
const getVenues = async () => {
	const city = $input.val()
	const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20210407`
	try {
		const response = await fetch(urlToFetch)
		if (response.ok) {
			const jsonResponse = await response.json()
			const venues = jsonResponse.response.groups[0].items.map((elem) => elem.venue)
			return venues
		}
	} catch (error) {
		console.log(error)
	}
}

const getForecast = async () => {
	const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`
	try {
		const response = await fetch(urlToFetch)
		if (response.ok) {
			const jsonResponse = await response.json()
			return jsonResponse
		}
	} catch (error) {
		console.log(error)
	}
}

// Render functions
const renderVenues = (venues) => {
	$venueDivs.forEach(($venue, index) => {
		const venue = venues[index]
		const venueLocation = venue.location.address
		const venueIcon = venue.categories[0].icon
		const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`
		let venueContent = `<h2>${venue.name}</h2>
<img class="venueimage" src="${venueImgSrc}"/>
<h3>Address:</h3>
<p>${venueLocation}</p>
<p>${venue.location.city}</p>
<p>${venue.location.country}</p>`
		$venue.append(venueContent)
		createVenueHTML(venue.name, venueLocation, venueImgSrc)
	})
	$destination.append(`<h2>${venues[0].location.city}</h2>`)
}

const renderForecast = (day) => {
	let weatherContent = createWeatherHTML(day)
	$weatherDiv.append(weatherContent)
}

const executeSearch = () => {
	$venueDivs.forEach((venue) => venue.empty())
	$weatherDiv.empty()
	$destination.empty()
	$container.css('visibility', 'visible')
	getVenues().then((venues) => {
		return renderVenues(venues)
	})
	getForecast().then((forecast) => {
		renderForecast(forecast)
	})
	return false
}

$submit.click(executeSearch)

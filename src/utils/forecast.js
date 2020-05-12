const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=af9d10bb22ceac71d46e1a5968d3bdad&query=' + lat + ',' + long;

    request({ url: url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, {
                forecast: body.current.weather_descriptions[0] + '. It is Currently ' + body.current.temperature +
                    " degrees out. It feels like " + body.current.feelslike + ' degrees out. The humidity is ' +
                    body.current.humidity + ' %.'
            })
        }
    })

}

module.exports = forecast
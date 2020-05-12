const fetchWeather = (location) => {
    const url = 'http://localhost:3000/weather?address=' + location
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message_1.textContent = data.error
                message_2.textContent = ''
                return
            }

            message_1.textContent = data.forecast
            message_2.textContent = data.location
        })
    })
}


const search = document.querySelector('input')
const message_1 = document.querySelector('#message-1')
const message_2 = document.querySelector('#message-2')

document.querySelector('form')
    .addEventListener('submit', (event) => {
        event.preventDefault()
        const location = search.value
        fetchWeather(location)
    })
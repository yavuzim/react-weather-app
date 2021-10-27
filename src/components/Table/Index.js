import axios from 'axios';
import { useState, useRef, useEffect } from 'react'
import './style.css'
function Index() {
    const [input, setInput] = useState([])
    const [days] = useState(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])
    const [months] = useState(["", "January", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September", "October", "November", "December"])
    const [images] = useState({
        'few clouds':'https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-few-clouds-256.png',
        'scattered clouds':'https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-few-clouds-256.png',
        'broken clouds':'https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-few-clouds-256.png',
        'overcast clouds':'https://cdn4.iconfinder.com/data/icons/weather-754/512/clouds_cloudy_overcast_cloud-256.png',
        'light rain':'https://cdn1.iconfinder.com/data/icons/weather-and-disaster-flat/340/lightning_storm_rain_nature_weather_cloud_light_danger_thunder_thunderstorm_bolt-256.png',
        'clear sky':'https://cdn4.iconfinder.com/data/icons/holiday-summer-filled-outline/64/Artboard_420-256.png',
        'snow':'https://cdn2.iconfinder.com/data/icons/christmas-new-year-vol-2-1/512/06-snowflake-winter-snow-256.png',
        'light snow':'https://cdn2.iconfinder.com/data/icons/christmas-new-year-vol-2-1/512/06-snowflake-winter-snow-256.png'
    })

    let count = -1
    const textInput = useRef(null);
    const buttonClick = (e) => {
        e.preventDefault()
        axios.get("https://api.openweathermap.org/data/2.5/forecast?q=" + textInput.current.value + "&appid=39e6d491f9df663775b2f106b9fa2a6b")
            .then(response => setInput(response.data.list))
            .catch(e => console.log(e))
    }
    useEffect(() => {
        console.log("input : ", input);
        console.log("input type: ", typeof input);
    }, [input])
    return (
        <>
            <div className="form-field">
                <form>
                    <div className="input-field">
                        <input className="city-text" type="text" placeholder="Enter City Name" ref={textInput} />
                        <button className="city-btn" onClick={buttonClick}>Inquire the City</button>
                    </div>
                </form>
            </div>
            <div className="col">
                {input.map((item, i) => {
                    if (i % 8 == 0) {
                        count++
                        return <div className="row" key={i}>
                            <div className="date-field">
                                <span className="date">{days[count]}</span>
                                <span className="date">{
                                    months[item.dt_txt.split('-')[1]]
                                }</span>
                            </div>
                            <div className="image">
                                {
                                /*   console.log(images.snow) */
                                  <img src={images[item.weather[0].description]} alt="" />
                                }
                               {/*  <img src={images.item.weather[0].description} alt="" /> */}
                            </div>
                            <div className="degree-field">
                                <span className="degree">Min: {
                                    Math.round(item.main.temp_min - 273)
                                }°C</span>
                                <span className="degree">Max: {
                                    Math.round(item.main.temp_max - 273)
                                }°C</span>
                            </div>
                        </div>
                    }
                })}
            </div>
        </>
    )
}

export default Index


{/*   <div className="row">
                    <div className="date-field">
                        <span className="date">Pazartesi</span>
                        <span className="date">Ekim 24</span>
                    </div>
                    <div className="image">
                        <img src="https://cdn4.iconfinder.com/data/icons/weather-717/64/rainy-haw-raining-weather-cloud-256.png" alt="" />
                    </div>
                    <div className="degree-field">
                        <span className="degree">32°C</span>
                        <span className="degree">38°C</span>
                    </div>
                </div> */}

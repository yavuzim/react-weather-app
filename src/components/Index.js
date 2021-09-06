import { useEffect } from 'react'
import { useWeather } from '../context/WeatherContext'
import axios from 'axios'
import '../App.css';
const key = "39e6d491f9df663775b2f106b9fa2a6b";
let inputValue;
function Index() {
    const { weather, setWeather } = useWeather()
    useEffect(() => {
        /*  */
    }, [])
    function handleChange(e) {
        inputValue = e.target.value
    }
    function handleSubmit(e) {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}&lang=tr&units=metric`)
            .then((res) => setWeather(res.data))
            .catch((e) => console.log(e))
        e.preventDefault()
    }

    return (
        <div className="container" style={{
        }}>

            {console.log(weather)}
            <div className="data-input">
                <div className="title">
                    Hava Durumu
                </div>
                <div className="input-field">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="textCity" placeholder="Sehir Giriniz..." onChange={handleChange} />
                    </form>
                </div>
                <div className="content">
                    {
                        weather && <>
                            <div className="city">{inputValue}</div>
                            <div className="temp">{`${Math.round(weather.main.temp)}°C`}</div>
                            <div className="desc">{weather.weather[0].description}</div></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Index

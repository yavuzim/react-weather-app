import React from 'react'
import './style.css'
function Index() {
    return (
            <div className="col">
                <div className="row">
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
                </div>
                <div className="row">
                    <div className="date-field">
                        <span className="date">Salı</span>
                        <span className="date">Ekim 25</span>
                    </div>
                    <div className="image">
                        <img src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Sun-128.png" alt="" />
                    </div>
                    <div className="degree-field">
                        <span className="degree">32°C</span>
                        <span className="degree">38°C</span>
                    </div>
                </div>
                <div className="row">
                    <div className="date-field">
                        <span className="date">Çarşamba</span>
                        <span className="date">Ekim 26</span>
                    </div>
                    <div className="image">
                        <img src="https://cdn3.iconfinder.com/data/icons/nature-emoji/50/PartlyCloudy-256.png" alt=""/>
                    </div>
                    <div className="degree-field">
                        <span className="degree">32°C</span>
                        <span className="degree">38°C</span>
                    </div>
                </div>
                <div className="row">
                    <div className="date-field">
                        <span className="date">Perşembe</span>
                        <span className="date">Ekim 27</span>
                    </div>
                    <div className="image">
                        <img src="https://cdn1.iconfinder.com/data/icons/weather-471/128/SNOWY-256.png" alt=""/>
                    </div>
                    <div className="degree-field">
                        <span className="degree">32°C</span>
                        <span className="degree">38°C</span>
                    </div>
                </div>
                <div className="row">
                    <div className="date-field">
                        <span className="date">Cuma</span>
                        <span className="date">Ekim 28</span>
                    </div>
                    <div className="image">
                        <img src="https://cdn3.iconfinder.com/data/icons/nature-emoji/50/PartlyCloudy-256.png" alt=""/>
                    </div>
                    <div className="degree-field">
                        <span className="degree">32°C</span>
                        <span className="degree">38°C</span>
                    </div>
                </div>
            </div>
    )
}

export default Index

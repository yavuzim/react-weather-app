import React from 'react'
import './style.css'

function Index() {
    return (
        <div className="form-field">
            <form>
                <div className="input-field">
                    <input className="city-text" type="text" placeholder="Enter City Name" />
                    <button className="city-btn">Inquire the City</button>
                </div>
            </form>
        </div>
    )
}

export default Index

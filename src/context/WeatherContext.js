import { createContext, useState, useContext } from 'react'


const WeatherContext = createContext()


const WeatherProvider = ({ children }) => {

    const [weather, setWeather] = useState()

    const values = { weather, setWeather }

    return (<WeatherContext.Provider value={values}>
        {children}
    </WeatherContext.Provider>)
}
const useWeather = () => useContext(WeatherContext)

export { WeatherProvider, useWeather }

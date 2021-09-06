import './App.css';
import { WeatherProvider } from './context/WeatherContext'
import Index from './components/Index';

function App() {
  
  return (
      <WeatherProvider>
        <Index/>
      </WeatherProvider>
  );
}

export default App;

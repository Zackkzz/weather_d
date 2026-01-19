import { Nav } from "./components/Nav";
import { HeroCard } from "./components/HeroCard";
import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import { DEFAULT_CITY, DEFAULT_FORECAST_DAYS } from "./config/api";
import { useState, useEffect, useCallback } from "react";
import { getCurrentWeather, getForecastWeather } from "../service/weatherAPI";
import type { WeatherData } from "./types/weather";

export function App() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [input, setInput] = useState(DEFAULT_CITY);

    const handleSearch = async (search: string) => {
        setInput(search);
    }

    //function for fetching weather data.
    const fetchWeather = useCallback(async () => {
        if (!input.trim()) {
            setError('Please enter a city name');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const data = await getCurrentWeather(input);
            const forecast = await getForecastWeather(input, DEFAULT_FORECAST_DAYS);
            console.log(forecast);
            // Assign forecast data to weatherData
            data.forecast.forecastday = forecast;
            setWeatherData(data);
        } catch (error) {
            setError('Failed to fetch weather information. Please try again later.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [input]);

    //use useEffect to render data only when 'city' is changed.
    useEffect(() => {
        if (input) {
            fetchWeather();
        }
    }, [input, fetchWeather]);

    return (
        <div>
            <Nav/>
            <h2 className="text-center text-2xl">An application that check the current and history weather information of a city</h2>

            <SearchBar onSearch={handleSearch}/>

            <div className="bg-white my-3 rounded-xl shadow-md w-1/2 basis-1/4 mx-auto px-10 py-5 hover:scale-105 transition-all duration-300">
                <HeroCard weatherData={weatherData} loading={loading} error={error}/>
            </div>
            {/* forecast weather below */}
            <div className="flex flex-wrap flex-row gap-2.5 justify-center">
                {weatherData?.forecast.forecastday.filter((f) => {
                    const today = new Date().toISOString().split('T')[0];
                    return f.date !== today;
                }).map((forecastDay, index) => (
                    <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md size-auto basis-1/4 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <Card forecastDay={forecastDay}/>
                    </div>
                ))}
            </div>
            {/* forecast weather above */}
        </div>
    )
}
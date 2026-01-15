import axios from "axios";
import {API_CONFIG} from '../src/config/api';
import type { WeatherData } from "../src/types/weather";

/**
 * Get current weather information
 * @param city City name
 * @returns Weather data
 */
export async function getCurrentWeather(city: string): Promise<WeatherData> {
    try {
        const apiKey = API_CONFIG.WEATHER_API_KEY;
        const BASE_URL = API_CONFIG.WEATHER_API_BASE_URL;
        console.log('API Key:', import.meta.env.VITE_WEATHER_API_KEY);
        if (!apiKey) {
            console.warn('No API key configured!');
            return getMockWeatherData(city);
        }

        //request for current weather
        const response = await axios.get<WeatherData>(
            `${BASE_URL}/current.json`,
            {
                params: {
                    key: apiKey,
                    q: city,
                    lang: 'en',
                },
            }
        );
        
        return response.data;
    } catch(error) {
        console.log('Failed to fetch weather data:', error)
        return getMockWeatherData(city);
    }
}

/**
 * Mock weather data (for development and testing)
 */
function getMockWeatherData(city: string): WeatherData {
    return {
        location: {
        name: city,
        country: 'GB',
        lat: 51.5074,
        lon: -0.1278,
        localtime: new Date().toISOString(),
        },
        current: {
        temp_c: 22,
        temp_f: 71.6,
        condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            code: 1000,
        },
        humidity: 65,
        wind_kph: 15,
        wind_dir: 'NE',
        pressure_mb: 1013,
        feelslike_c: 23,
        uv: 5,
        vis_km: 10,
        },
    };
}
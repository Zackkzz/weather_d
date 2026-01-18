import axios from "axios";
import {API_CONFIG} from '../src/config/api';
import { type SearchResult, type ForecastDay, type WeatherData } from "../src/types/weather";

const BASE_URL = API_CONFIG.WEATHER_API_BASE_URL;

/**
 * Get current weather information
 * @param city City name
 * @returns Weather data
 */
export async function getCurrentWeather(city: string): Promise<WeatherData> {
    try {
        const apiKey = API_CONFIG.WEATHER_API_KEY;
        if (!apiKey) {
            throw new Error("No API key found!");
        }

        //request for current weather
        console.log("data fetching......");
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
        console.log("Current weather data fetch successfully.");
        const weatherData: WeatherData = {
            current: response.data.current,
            location: response.data.location,
            forecast: {
                forecastday: []
            }
        }
        return weatherData;
    } catch(error) {
        console.log('Failed to fetch weather data:', error)
        return getMockWeatherData(city);
    }
}

/**
 * 
 * @param city City name
 * @param days The number of days for forecast
 * @returns An array of forecastDay
 */
export async function getForecastWeather(city: string, days: number): Promise<ForecastDay[]> {
    try {
        const API_KEY = API_CONFIG.WEATHER_API_KEY;
        
        
        if (!API_KEY) {
            throw new Error("No API key found!");
        }

        console.log("data fetching......");
        const response = await axios.get<WeatherData>(
            `${BASE_URL}/forecast.json`,
            {
                params: {
                    key: API_KEY,
                    q: city,
                    days: days,
                    lang: 'en',
                }
            }
        );
        console.log("Forecast weather fetch successfully.");
        // WeatherAPI returns WeatherData with forecast.forecastday array
        return response.data.forecast?.forecastday || [];
    } catch(e) {
        console.log('Failed to fetch weather data:', e);
        return [];
    }
}

export async function getSearchAutoComplete(input: string) {
    try {
        const API_KEY = API_CONFIG.WEATHER_API_KEY;
        const BASE_URL = API_CONFIG.WEATHER_API_BASE_URL;

        if (!API_KEY) {
            throw new Error("No API_KEY found!");
        }

        console.log("data fetching......");
        
        const response = await axios.get<SearchResult[]>(
            `${BASE_URL}/search.json`,
            {
                params: {
                    key: API_KEY,
                    q: input,
                    lang: 'en',
                }
            }
        );
        
        return response.data;
    } catch(e) {
        console.log("Failed to fetch SearchAutoComplete:", e);
        return [];
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
        forecast: {
            forecastday: []
        },
    };
}
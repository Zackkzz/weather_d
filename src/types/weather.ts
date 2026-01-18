// Weather data type definitions
export interface WeatherData {
    location: Location;
    current: {
        temp_c: number;
        temp_f: number;
        condition: {
        text: string;
        icon: string;
        code: number;
        };
        humidity: number;
        wind_kph: number;
        wind_dir: string;
        pressure_mb: number;
        feelslike_c: number;
        uv: number;
        vis_km: number;
    };
    forecast: {
        forecastday: ForecastDay[] | [];
    };
}

export interface ForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
        condition: {
            text: string;
            icon: string;
        };
        maxwind_kph: number;
        avghumidity: number;
    };
    hour: HourForecast[];
}

export interface HourForecast {
    time: string;
    temp_c: number;
    condition: {
        text: string;
        icon: string;
    };
    humidity: number;
    wind_kph: number;
}

// Stored weather data (simplified version for local storage)
export interface StoredWeatherData {
    location: string;
    timestamp: number;
    temperature: number;
    condition: string;
    icon: string;
    humidity: number;
    windSpeed: number;
}

export interface SearchResult {
    lat: number;
    lon: number;
    name: string;
    region: string;
    country: string;
    localtime: string;
}

export interface Location {
    name: string;
    country: string;
    region?: string;
    lat: number;
    lon: number;
    localtime: string;
}
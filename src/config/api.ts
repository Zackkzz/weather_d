export const API_CONFIG = {
    WEATHER_API_KEY: import.meta.env.VITE_WEATHER_API_KEY || '',
    WEATHER_API_BASE_URL: 'https://api.weatherapi.com/v1',
}

export const DEFAULT_CITY = 'Sydney';
export const DEFAULT_FORECAST_DAYS = 5;

export const formatTime = (timeString: string) => {
        try {
            const date = new Date(timeString);
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
        } catch {
            return timeString;
        }
    };
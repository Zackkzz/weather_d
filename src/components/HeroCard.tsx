import type { WeatherData } from "../types/weather";

interface WeatherHeroCardProps {
    weatherData: WeatherData | null;
    loading: boolean;
    error: string | null;
}


export function HeroCard({ weatherData, loading, error }: WeatherHeroCardProps) {
    

    

    if (loading) {
        return (
        <div className="flex items-center justify-center p-8">
            <div className="text-lg">Loading...</div>
        </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded text-center">
                {error}
            </div>
        );
    }

    if (!weatherData) {
        return null;
    }

    const formatTime = (timeString: string) => {
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

    return (
        <div className="flex flex-col">
            <h2 className="text-black text-center font-normal text-xl mb-2">
                {weatherData.location.name}
                {weatherData.location.region && `, ${weatherData.location.region}`}
            </h2>
            <div className="text-center text-sm text-gray-600 mb-3">
                {formatTime(weatherData.location.localtime)}
            </div>
            <div className="flex justify-center items-center mb-4">
                <img
                    src={weatherData.current.condition.icon}
                    alt={weatherData.current.condition.text}
                    className="w-16 h-16"
                />
            </div>
            <div className="flex flex-row mb-2">
                <div className="basis-1/2">
                    Temperature: {weatherData.current.temp_c}°C
                </div>
                <div className="basis-1/2 text-end">
                    Feels like: {weatherData.current.feelslike_c}°C
                </div>
            </div>
            
            <div className="mb-1">
                Humidity: {weatherData.current.humidity}%
            </div>
            <div className="mb-1">
                Wind: {weatherData.current.wind_kph} km/h {weatherData.current.wind_dir}
            </div>
            <div className="mb-1">
                {weatherData.current.condition.text}
            </div>
        </div>
    )
}
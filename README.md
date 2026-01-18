# Weather Application

A modern, responsive weather application built with React, TypeScript, and Vite. This application allows users to check current weather information and forecast data for any city using the WeatherAPI service.

## Features

- 🔍 **Smart City Search**: Search with autocomplete suggestions as you type
- ⚡ **Debounced Search**: Optimized API calls with 300ms debounce delay
- 🌡️ **Current Weather**: Display current temperature, humidity, wind speed, and weather conditions
- 📅 **Weather Forecast**: View multi-day weather forecasts (excluding today) with detailed information
- 📍 **Location Details**: Show city name, region, and local time
- 🎨 **Modern UI**: Clean and responsive design using Tailwind CSS
- 🖱️ **Interactive Elements**: Hover effects on cards with smooth transitions
- 📱 **Scrollable Suggestions**: Autocomplete dropdown with scrollable list (shows 3 items at a time)
- 🔄 **Real-time Updates**: Automatically fetch weather data when city changes
- 🛡️ **Error Handling**: Comprehensive error handling with user-friendly messages
- 🎯 **Click Outside to Close**: Suggestions dropdown closes when clicking outside

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Build tool and dev server with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **WeatherAPI** - Weather data provider

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **WeatherAPI Key** - Get your free API key from [WeatherAPI.com](https://www.weatherapi.com/)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather_d
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
   
   Replace `your_api_key_here` with your actual WeatherAPI key.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
weather_d/
├── src/
│   ├── components/          # React components
│   │   ├── HeroCard.tsx     # Main weather display card (current weather)
│   │   ├── Card.tsx         # Forecast weather card component
│   │   ├── SearchBar.tsx    # City search with autocomplete
│   │   ├── Nav.tsx         # Navigation header component
│   │   └── css/            # Component-specific CSS files
│   ├── config/
│   │   └── api.ts          # API configuration and constants
│   ├── types/
│   │   └── weather.ts      # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── service/
│   └── weatherAPI.ts       # Weather API service functions
├── public/                  # Static assets
├── .env                    # Environment variables (not in git)
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

## Usage

### Searching for Weather

1. **Start typing** a city name in the search bar
   - Autocomplete suggestions will appear as you type
   - Suggestions show city name, region, and country
   - Dropdown displays up to 3 items at a time with scrollable list

2. **Select a city** from the suggestions:
   - Click on any suggestion to select it
   - The search will automatically execute

3. **Or manually search**:
   - Type the full city name
   - Click "Enter" button or press Enter key

4. **View weather information**:
   - **Hero Card**: Displays current weather including:
     - City name and region
     - Local time (data fetch time)
     - Weather icon and condition
     - Temperature and feels-like temperature
     - Humidity, wind speed, and other details
   - **Forecast Cards**: Display forecast data for upcoming days (today is excluded)
     - Shows date, weather icon, average temperature
     - Displays humidity, wind speed, min temperature
     - Cards have hover effects for better interactivity

## API Configuration

The application uses the WeatherAPI service. To get your API key:

1. Visit [WeatherAPI.com](https://www.weatherapi.com/)
2. Sign up for a free account
3. Navigate to your dashboard to get your API key
4. Add the key to your `.env` file as `VITE_WEATHER_API_KEY`

**Note**: The free tier includes 1 million calls per month.

### API Endpoints Used

- `/current.json` - Get current weather data
- `/forecast.json` - Get weather forecast data (configurable days, default: 4)
- `/search.json` - Get city autocomplete suggestions

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_WEATHER_API_KEY` | Your WeatherAPI key | Yes |

**Important**: 
- Variable names must start with `VITE_` to be exposed to client-side code
- Never commit your `.env` file to version control
- Restart the development server after modifying `.env`

## Components

### HeroCard
Displays the main current weather information for the selected city. Shows temperature, humidity, wind speed, weather conditions, and local time. Includes loading and error states.

**Props:**
- `weatherData`: Current weather data
- `loading`: Loading state
- `error`: Error message

### Card
Displays forecast weather data for individual days. Shows date, weather icon, average temperature, humidity, wind speed, and minimum temperature. Cards are filtered to exclude today's forecast.

**Props:**
- `forecastDay`: Forecast data for a specific day

### SearchBar
Provides a search input with autocomplete functionality. Features include:
- Debounced API calls (300ms delay)
- Autocomplete suggestions dropdown
- Click outside to close dropdown
- Scrollable suggestions list (shows 3 items at a time)
- Loading state indicator

**Props:**
- `onSearch`: Callback function when a city is selected or searched

### Nav
Navigation header component displaying the application title.

## Key Features Explained

### Autocomplete Search
- **Debouncing**: API calls are delayed by 300ms to reduce unnecessary requests
- **Smart Suggestions**: Shows city name, region, and country for easy identification
- **Scrollable List**: Displays up to 3 suggestions at a time with smooth scrolling
- **Click Outside**: Dropdown automatically closes when clicking outside the search area

### Forecast Filtering
- Today's forecast is automatically excluded from the forecast cards
- Only future dates are displayed in the forecast section
- HeroCard shows current weather, while Cards show future forecasts

### Interactive UI
- **Hover Effects**: Cards scale up slightly on hover (`hover:scale-105`)
- **Smooth Transitions**: All hover effects use CSS transitions for smooth animations
- **Visual Feedback**: Clear hover states help users understand interactive elements

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory. You can preview it locally with:

```bash
npm run preview
```

## Error Handling

The application includes comprehensive error handling for:
- Invalid API keys
- Network errors
- Invalid city names
- API rate limits
- Missing forecast data
- Empty search results

When errors occur, the application will display user-friendly error messages and provide retry options.

## Development Notes

- The application uses React Hooks (`useState`, `useEffect`, `useCallback`) for state management
- Weather data is fetched automatically when the city changes
- Debouncing is implemented to optimize API calls
- The application includes mock data fallback for development/testing
- All API calls are made through the `weatherAPI.ts` service file
- TypeScript ensures type safety throughout the application
- Event listeners are properly cleaned up to prevent memory leaks

## Common Issues

### API Key Not Working

If you see "No API key configured" warnings:
- Ensure your `.env` file exists in the root directory
- Verify the variable name is `VITE_WEATHER_API_KEY` (must start with `VITE_`)
- Restart the development server after creating/modifying `.env`

### Autocomplete Not Showing

If autocomplete suggestions don't appear:
- Check browser console for API errors
- Verify API key is correctly configured
- Ensure you have typed at least one character
- Check network tab to see if API calls are being made

### Forecast Data Not Displaying

If forecast cards show "No forecast data available":
- Check that the API key has forecast access
- Verify the `DEFAULT_FORECAST_DAYS` configuration (default: 4)
- Check browser console for API errors
- Ensure today's date filter is working correctly

### Build Issues

If you encounter build errors:
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be v18+)
- Verify all dependencies are installed correctly

### Port Already in Use

If port 5173 is already in use:
- Vite will automatically try the next available port
- Or specify a port: `npm run dev -- --port 3000`

## Performance Optimizations

- **Debouncing**: Search API calls are debounced to reduce server load
- **Conditional Rendering**: Components only render when necessary
- **Event Listener Cleanup**: Proper cleanup prevents memory leaks
- **Efficient Filtering**: Forecast filtering happens at render time
- **Lazy Loading**: Components load data only when needed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [WeatherAPI](https://www.weatherapi.com/) for providing weather data
- [Vite](https://vite.dev/) for the excellent build tooling
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://react.dev/) for the powerful UI library

## Support

For issues, questions, or contributions, please open an issue on the repository.

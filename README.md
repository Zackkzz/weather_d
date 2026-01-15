# Weather Application

A modern, responsive weather application built with React, TypeScript, and Vite. This application allows users to check current weather information for any city using the WeatherAPI service.

## Features

- 🔍 **City Search**: Search for weather information by city name
- 🌡️ **Current Weather**: Display current temperature, humidity, wind speed, and weather conditions
- 📍 **Location Details**: Show city name, region, and local time
- 🎨 **Modern UI**: Clean and responsive design using Tailwind CSS
- ⚡ **Fast Performance**: Built with Vite for optimal development and build performance
- 🔄 **Real-time Updates**: Automatically fetch weather data when city changes

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
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

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
weather_d/
├── src/
│   ├── components/          # React components
│   │   ├── HeroCard.tsx     # Main weather display card
│   │   ├── Card.tsx         # Weather card component
│   │   ├── SearchBar.tsx    # City search input
│   │   └── Nav.tsx          # Navigation header
│   ├── config/
│   │   └── api.ts           # API configuration
│   ├── types/
│   │   └── weather.ts       # TypeScript type definitions
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── service/
│   └── weatherAPI.ts        # Weather API service
├── public/                  # Static assets
├── .env                     # Environment variables (not in git)
├── vite.config.ts           # Vite configuration
└── package.json             # Project dependencies
```

## Usage

1. **Enter a city name** in the search bar (e.g., "Sydney", "London", "New York")
2. **Click "Enter"** or press the Enter key to search
3. **View weather information** including:
   - Current temperature
   - Feels like temperature
   - Humidity percentage
   - Wind speed and direction
   - Weather condition and icon
   - Local time

## API Configuration

The application uses the WeatherAPI service. To get your API key:

1. Visit [WeatherAPI.com](https://www.weatherapi.com/)
2. Sign up for a free account
3. Navigate to your dashboard to get your API key
4. Add the key to your `.env` file as `VITE_WEATHER_API_KEY`

**Note**: The free tier includes 1 million calls per month.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_WEATHER_API_KEY` | Your WeatherAPI key | Yes |

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

The application includes error handling for:
- Invalid API keys
- Network errors
- Invalid city names
- API rate limits

When errors occur, the application will display error messages and provide retry options.

## Development Notes

- The application uses React Hooks (`useState`, `useEffect`, `useCallback`) for state management
- Weather data is fetched automatically when the city prop changes
- The application includes mock data fallback for development/testing
- All API calls are made through the `weatherAPI.ts` service file

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

## Troubleshooting

### API Key Issues

If you see "No API key configured" warnings:
- Ensure your `.env` file exists in the root directory
- Verify the variable name is `VITE_WEATHER_API_KEY` (must start with `VITE_`)
- Restart the development server after creating/modifying `.env`

### Build Issues

If you encounter build errors:
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be v18+)
- Verify all dependencies are installed correctly

### Port Already in Use

If port 5173 is already in use:
- Vite will automatically try the next available port
- Or specify a port: `npm run dev -- --port 3000`

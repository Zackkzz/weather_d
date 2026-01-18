import { useEffect, useState, type FormEvent } from "react"
import { getSearchAutoComplete } from "../../service/weatherAPI";
import { type SearchResult } from "../types/weather";

interface SearchBarProps {
    onSearch: (city: string) => void
}
export function SearchBar({onSearch}: SearchBarProps) {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!input.trim()) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }

        const timer = setTimeout(async () => {
            setIsLoading(true);
            try {
                const results = await getSearchAutoComplete(input);
                setSuggestions(results);
                setShowSuggestions(results.length > 0);
            } catch (error) {
                console.error('AutoComplete error:', error);
            } finally {
                setIsLoading(false);
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [input]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.search-container')) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input);
            setInput('');
        }
    }
    return (
        <div className="text-center search-container relative">
            <form onSubmit={handleSubmit}>
                <label htmlFor="cityNameInput" className="mr-3">City Name</label>
                <input
                    type='text'
                    id="cityNameInput"
                    value = {input}
                    onChange={
                        (e) => {
                            const value = e.target.value;
                            setInput(value);
                        }
                    }
                    placeholder=" Please enter a city name e.g: Sydney"
                    className="bg-white w-68 rounded-sm hover: border-dotted"
                />
                {/* show suggestion bar below */}
                {showSuggestions && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-[180px] overflow-y-auto scroll-smooth">
                        {isLoading 
                        ? (<div className="p-2 text-center text-gray-500">Loading...</div>) 
                        : suggestions.length === 0 
                        ? (<div className="p-2 text-center text-gray-500">No results found</div>) 
                        : (
                            suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        const cityName = `${suggestion.name}, ${suggestion.country}`
                                        setInput(cityName);
                                        setShowSuggestions(false);
                                        onSearch(suggestion.name);
                                    }}
                                    className="p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                                >
                                    <div className="font-medium">{suggestion.name}</div>
                                    <div className="text-sm text-gray-500">
                                    {suggestion.region && `${suggestion.region}, `}
                                    {suggestion.country}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
                {/* show suggestion bar above */}
                <button
                    type="submit"
                    className="bg-white ml-3 rounded-sm border-dashed hover:bg-gray-100 hover:shadow-md transition-all cursor-pointer">
                    Enter
                </button>
            </form>
            <div className="">

            </div>
            
        </div>
    )
}
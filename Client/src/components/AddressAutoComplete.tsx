import React, { useState } from 'react';

interface AddressAutoCompleteProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

// AddressAutoComplete component definition
const AddressAutoComplete: React.FC<AddressAutoCompleteProps> = ({ label, placeholder, value, onChange }) => {
    // State to hold the list of address suggestions
    const [suggestions, setSuggestions] = useState<string[]>([]);
    // Handle input change event
    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
         // Call the onChange prop with the new input value
        onChange(inputValue);
         // Fetch suggestions if the input value length is greater than 2
        if (inputValue.length > 2) {
            fetchSuggestions(inputValue);
        }
    };
    // Fetch address suggestions from the API
    const fetchSuggestions = async (query: string) => {
        const apiKey = process.env.LOCATION_API_KEY as string;
        const response = await fetch(`https://api.geocodify.com/v2/autocomplete?api_key=${apiKey}&q=${query}`);
        const data = await response.json();

        // Update the suggestions state with the fetched data
        if (data && data.response && data.response.docs) {
            setSuggestions(data.response.docs.map((doc: any) => doc.formatted));
        }
    };

    return (
        <div className="autocomplete">
             {/* Label for the input field */}
            <label>{label}</label>
             {/* Input field for address entry */}
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
            />
             {/* Display suggestions if there are any */}
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => onChange(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AddressAutoComplete;
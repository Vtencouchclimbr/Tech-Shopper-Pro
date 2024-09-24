import React, { useState } from 'react';
import './AddressAutoComplete.css';

interface AddressDetails {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

interface SuggestionProperties {
    label: string;
    name?: string;
    localadmin?: string;
    region?: string;
    region_a?: string;
    postalcode?: string;
    country?: string;
}

interface Suggestion {
    properties: SuggestionProperties;
}

interface AddressAutoCompleteProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    onSelectAddress: (addressDetails: AddressDetails) => void;  // Use specific type for address details
}

const AddressAutoComplete: React.FC<AddressAutoCompleteProps> = ({ label, placeholder, value, onChange, onSelectAddress }) => {
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);  // Define a more specific type for suggestions

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        onChange(inputValue);
        if (inputValue.length > 2) {
            fetchSuggestions(inputValue);
        }
    };

    const fetchSuggestions = async (query: string) => {
        const apiKey = import.meta.env.VITE_LOCATION_API_KEY;
        const url = `https://api.geocodify.com/v2/autocomplete?api_key=${apiKey}&q=${encodeURIComponent(query)}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.response && data.response.features) {
                setSuggestions(data.response.features);  // Store the full features to use properties
            }
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    // Handle selecting a suggestion
    const handleSelectSuggestion = (suggestion: Suggestion) => {
        console.log("Selected address details:", suggestion.properties);
    
        // Extract street address specifically, to avoid redundancy
        const streetAddress = suggestion.properties.name || '';  // You can adjust this based on the exact property that contains the street
        const city = suggestion.properties.localadmin || suggestion.properties.region || '';
        const state = suggestion.properties.region_a || '';
        const postalCode = suggestion.properties.postalcode || '';
        const country = suggestion.properties.country || '';
    
        // Pass only relevant fields to the parent
        onSelectAddress({
            street: streetAddress,
            city: city,
            state: state,
            postalCode: postalCode,
            country: country,
        });
    
        // Set the street address only in the input field
        onChange(streetAddress);
        
        // Clear suggestions after selection
        setSuggestions([]);
    };
    
    return (
        <div className="autocomplete">
            <label>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
                className="autocomplete-input"
            />
            {suggestions.length > 0 && (
                <ul className="autocomplete-suggestions">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelectSuggestion(suggestion)}
                            className="suggestion-item"
                        >
                            {suggestion.properties.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AddressAutoComplete;

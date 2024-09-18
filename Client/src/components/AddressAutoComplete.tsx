import React, { useState } from 'react';

interface AddressAutoCompleteProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

const AddressAutoComplete: React.FC<AddressAutoCompleteProps> = ({ label, placeholder, value, onChange }) => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    
    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        onChange(inputValue);
        if (inputValue.length > 2) {
            fetchSuggestions(inputValue);
        }
    };
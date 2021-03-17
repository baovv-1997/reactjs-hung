import { useEffect, useState } from 'react';

/**
 * Function: useDebounce
 * @param {string} value 
 * @param {number} delay 
 * @returns 
 */

const useDebounce = (value, delay) => {

    // State and setter for debounce value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // cancel the timeout if value changes
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;
import { useState, useEffect } from "react";

/**
 * useDebounce - delays updating a value until after a given delay
 *
 * @param value - the value to debounce
 * @param delay - delay in ms (default: 500)
 * @returns debounced value
 */
export function useDebounce<T>(value: T, delay = 500): T {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}

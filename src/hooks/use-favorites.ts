import { useLocalStorage } from "./use-local-storage";

import type { TCharacter } from "@/types";

export function useFavorites() {
	const [favorites, setFavorites] = useLocalStorage<TCharacter[]>("favorites", []);

	const isFavorite = (id: number) => favorites.some((character) => character.id === id);

	const addFavorite = (character: TCharacter) => {
		if (!isFavorite(character.id)) {
			setFavorites([...favorites, character]);
		}
	};

	const removeFavorite = (id: number) => {
		setFavorites(favorites.filter((c) => c.id !== id));
	};

	const toggleFavorite = (character: TCharacter) => {
		isFavorite(character.id) ? removeFavorite(character.id) : addFavorite(character);
	};

	return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
}

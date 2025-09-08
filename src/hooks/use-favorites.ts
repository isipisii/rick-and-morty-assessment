import { useLocalStorage } from "./use-local-storage";
import { toaster } from "@/components/ui/toaster";

export function useFavorites() {
	const [favorites, setFavorites] = useLocalStorage<number[]>("favorites-id", []);

	const isFavorite = (characterId: number) => favorites.includes(characterId);

	const addFavorite = (characterId: number) => {
		setFavorites((prev) => {
			if (prev.includes(characterId)) return prev; // avoid duplicates
			return [...prev, characterId];
		});

		toaster.create({
			description: "Added from favorites",
			type: "success",
		});
	};

	const removeFavorite = (characterId: number) => {
		setFavorites((prev) => prev.filter((id) => id !== characterId));

		toaster.create({
			description: "Removed from favorites",
			type: "info",
		});
	};

	const toggleFavorite = (characterId: number) => {
		setFavorites((prev) => (prev.includes(characterId) ? prev.filter((id) => id !== characterId) : [...prev, characterId]));
	};

	return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
}

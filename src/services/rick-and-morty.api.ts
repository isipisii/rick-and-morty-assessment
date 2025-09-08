import { TCharacter, TCharacterQueryParams, TResponse } from "@/types";

const BASE_URL = "https://rickandmortyapi.com/api";

// characters
export async function getCharacters(params: TCharacterQueryParams = {}, signal?: AbortSignal) {
	const url = new URL(`${BASE_URL}/character`);
	url.search = new URLSearchParams(params).toString();

	const res = await fetch(url, {
		method: "GET",
		signal,
	});

	if (!res.ok) throw new Error("Failed to fetch characters");

	const data = await res.json();
	return data as TResponse<TCharacter>;
}

// episodes
export async function getEpisodes(signal?: AbortSignal) {
	const res = await fetch(`${BASE_URL}/episode`, {
		method: "GET",
		signal,
	});

	if (!res.ok) throw new Error("Failed to fetch episodes");

	const data = await res.json();
	return data;
}

// locations
export async function getLocations(signal?: AbortSignal) {
	const res = await fetch(`${BASE_URL}/location`, {
		method: "GET",
		signal,
	});

	if (!res.ok) throw new Error("Failed to fetch locations");

	const data = await res.json();
	return data;
}

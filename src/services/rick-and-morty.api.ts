import { TCharacter, TCharacterQueryParams, TEpisode, TResponse } from "@/types";

const BASE_URL = "https://rickandmortyapi.com/api";

// characters
export async function getCharacter(id: string, signal?: AbortSignal) {
	const res = await fetch(`${BASE_URL}/character/${id}`, {
		method: "GET",
		signal,
	});

	if (res.status === 404) throw new Error("Character not found");
	if (!res.ok) throw new Error("Failed to fetch characters");

	const data = await res.json();
	return data as TCharacter;
}

// characters
export async function getCharacters(params: TCharacterQueryParams = {}, signal?: AbortSignal) {
	const url = new URL(`${BASE_URL}/character`);
	url.search = new URLSearchParams(params).toString();

	const res = await fetch(url, {
		method: "GET",
		signal,
	});

	if (res.status === 404) throw new Error("Character not found");
	if (!res.ok) throw new Error("Failed to fetch characters");

	const data = await res.json();
	return data as TResponse<TCharacter[]>;
}

// episodes
export async function getEpisodes(ids: string, signal?: AbortSignal) {
	const res = await fetch(`${BASE_URL}/episode/${ids}`, {
		method: "GET",
		signal,
	});

	if (!res.ok) throw new Error("Failed to fetch episodes");

	const data = await res.json();
	return data as TEpisode[];
}

// locations
export async function getLocations(ids: string, signal?: AbortSignal) {
	const res = await fetch(`${BASE_URL}/location/${ids}`, {
		method: "GET",
		signal,
	});

	if (!res.ok) throw new Error("Failed to fetch locations");

	const data = await res.json();
	return data;
}

import { TCharacter, TCharacterQueryParams, TResponse } from "@/types";

const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(params: TCharacterQueryParams = {}) {
	const url = new URL(`${BASE_URL}/character`);
	url.search = new URLSearchParams(params).toString();

	const res = await fetch(url, {
		method: "GET",
	});

	const data = await res.json();
	return data as TResponse<TCharacter>;
}

export async function getEpisodes() {
	const res = await fetch(`${BASE_URL}/character`, {
		method: "GET",
	});

	const data = await res.json();
	return data as TResponse<TCharacter>;
}

export async function getLocations() {
	const res = await fetch(`${BASE_URL}/location`, {
		method: "GET",
	});

	const data = await res.json();
	return data as TResponse<TCharacter>;
}

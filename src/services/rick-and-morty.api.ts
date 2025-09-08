import { TCharacter, TResponse } from "@/types";

const BASE_URL = "https://rickandmortyapi.com/api";

type TQueryParams = {
	name?: string;
	status?: "alive" | "dead" | "uknown";
	species?: string;
	type?: string;
	gender?: "female" | "male" | "genderless" | "unknown";
	page?: string;
};

export async function getCharacters(params: TQueryParams = {}) {
	const url = new URL(`${BASE_URL}/character`);
	url.search = new URLSearchParams(params).toString();

	const res = await fetch(url, {
		method: "GET",
	});

	const data = await res.json();
	console.log(data);
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

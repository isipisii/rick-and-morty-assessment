export type TResponse<T> = {
	info: {
		count: number;
		next: string | null;
		pages: number;
		prev: string | null;
	};
	results: T;
};

export type TCharacterQueryParams = {
	name?: string;
	status?: "alive" | "dead" | "uknown";
	species?: string;
	type?: string;
	gender?: "female" | "male" | "genderless" | "unknown";
	page?: string;
};

export type TCharacter = {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
};

export type TRickAndMortyEpisode = {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	characters: string[];
	url: string;
	created: string;
};

export type TLocation = {
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents: string[];
	created: string;
};

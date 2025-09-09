import { useSuspenseQuery } from "@tanstack/react-query";
import { getEpisodes } from "@/services/rick-and-morty.api";

export function useGetEpisodes(ids: string) {
	return useSuspenseQuery({
		queryKey: ["episodes", ids],
		queryFn: ({ signal }) => getEpisodes(ids, signal),
	});
}

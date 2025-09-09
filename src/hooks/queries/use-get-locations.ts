import { useSuspenseQuery } from "@tanstack/react-query";
import { getLocations } from "@/services/rick-and-morty.api";

export function useGetLocations(ids: string) {
	return useSuspenseQuery({
		queryKey: ["locations", ids],
		queryFn: ({ signal }) => getLocations(ids, signal),
	});
}

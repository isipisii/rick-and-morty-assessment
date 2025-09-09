import { useSuspenseQuery } from "@tanstack/react-query";
import { getCharacter } from "@/services/rick-and-morty.api";

export function useGetCharacter(id: string) {
	return useSuspenseQuery({
		queryKey: ["character", id],
		queryFn: ({ signal }) => getCharacter(id, signal),
	});
}

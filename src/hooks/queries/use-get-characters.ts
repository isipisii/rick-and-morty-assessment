import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "@/services/rick-and-morty.api";

const CHARACTERS_KEY = "CHARACTERS";

export function useGetCharacters() {
	return useInfiniteQuery({
		queryKey: [CHARACTERS_KEY],
		initialPageParam: "1",
		queryFn: ({ pageParam }) => getCharacters({ page: pageParam.toString() }),
		getNextPageParam: (lastPage) => {
			if (!lastPage.info.next) return undefined;

			const url = new URL(lastPage.info.next);
			const nextPage = url.searchParams.get("page");

			return nextPage ? nextPage : undefined;
		},
	});
}

import { useInfiniteQuery } from "@tanstack/react-query";
import { getCharacters } from "@/services/rick-and-morty.api";
import { TCharacterQueryParams } from "@/types";

export function useGetCharacters(params: TCharacterQueryParams = {}) {
	return useInfiniteQuery({
		queryKey: ["characters", ...Object.values(params)],
		initialPageParam: "1",
		queryFn: ({ pageParam, signal }) => getCharacters({ page: pageParam.toString(), ...params }, signal),
		getNextPageParam: (lastPage) => {
			if (!lastPage.info.next) return undefined;

			const url = new URL(lastPage.info.next);
			const nextPage = url.searchParams.get("page");

			return nextPage ? nextPage : undefined;
		},
	});
}

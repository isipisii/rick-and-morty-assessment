"use client";

import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useGetEpisodes } from "@/hooks/queries/use-get-episodes";
import EpisodeCard from "./episode-card";
type EpisodeListProps = {
	ids: string[];
};

export default function EpisodeList({ ids }: EpisodeListProps) {
	const { data } = useGetEpisodes(ids.join(","));

	return (
		<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} mt={4}>
			{data.map((ep) => (
				<EpisodeCard key={ep.id} episode={ep} />
			))}
		</SimpleGrid>
	);
}

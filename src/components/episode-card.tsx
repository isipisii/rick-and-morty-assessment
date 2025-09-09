"use client";

import { TEpisode } from "@/types";
import { Box, VStack, Text } from "@chakra-ui/react";

type EpisodeCardProps = {
	episode: TEpisode;
};

export default function EpisodeCard({ episode }: EpisodeCardProps) {
	return (
		<Box
			borderRadius="2xl"
			p={4}
			bg="rgba(10,10,10,0.85)"
			color="white"
			shadow="xl"
			border="1px solid rgba(0,255,0,0.4)"
			_hover={{
				transform: "translateY(-4px)",
				shadow: "2xl",
				borderColor: "lime",
				transition: "all 0.3s ease",
			}}
		>
			<VStack align="start" gap={1}>
				<Text fontWeight="extrabold" fontSize="lg" textShadow="0 0 6px lime">
					{episode.episode}: {episode.name}
				</Text>
				<Text fontSize="sm" color="gray.300">
					Air date: {episode.air_date}
				</Text>
			</VStack>
		</Box>
	);
}

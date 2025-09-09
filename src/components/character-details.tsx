"use client";

import { Box, VStack, Text, HStack, Image, Button, SimpleGrid } from "@chakra-ui/react";
import EpisodeList from "./episode-list";
import { useFavorites } from "@/hooks/use-favorites";
import { RiStarLine, RiStarFill, RiArrowLeftLine } from "react-icons/ri";
import { useGetCharacter } from "@/hooks/queries/use-get-character";
import { useRouter } from "next/navigation";
import { BiHeart } from "react-icons/bi";
import { toaster } from "./ui/toaster";

type CharacterDetailProps = {
	id: string;
};

export default function CharacterDetail({ id }: CharacterDetailProps) {
	const { data: character } = useGetCharacter(id);
	const router = useRouter();

	const { isFavorite, toggleFavorite } = useFavorites();
	const isFavoriteCharacter = isFavorite(character.id);

	function handleToggleFavorite() {
		toggleFavorite(character);

		if (isFavoriteCharacter) {
			toaster.create({
				description: "Removed from favorites",
				type: "info",
			});
		} else
			toaster.create({
				description: "Added to favorites",
				type: "success",
			});
	}

	if (!character) return null;

	const char = character;
	const episodeIds = char.episode.map((e: string) => e.split("/").pop()).filter(Boolean) as string[];

	return (
		<Box p={6} borderRadius="2xl" bg="rgba(10,10,10,0.85)" color="white" shadow="2xl" border="1px solid rgba(0,255,0,0.4)">
			<Button variant="outline" color="lime" mb={4} onClick={() => router.back()}>
				<RiArrowLeftLine />
				Go Back
			</Button>

			<SimpleGrid columns={{ base: 1 }} gap={6}>
				{/* info Column */}
				<VStack align="start" gap={4}>
					<HStack justify="space-between" w="full">
						<Box>
							<Image
								src={char.image}
								alt={char.name}
								borderRadius="xl"
								boxSize={{ base: "100%", md: "250px" }}
								objectFit="cover"
								shadow="xl"
								border="2px solid lime"
								mx={{ base: "auto", md: "0" }}
							/>
						</Box>
					</HStack>

					<HStack>
						{" "}
						<Text fontSize="2xl" fontWeight="extrabold" textShadow="0 0 6px lime">
							{char.name}
						</Text>
						<Button colorPalette="red" onClick={handleToggleFavorite} variant={isFavoriteCharacter ? "solid" : "outline"}>
							<BiHeart />
						</Button>
					</HStack>
					<Text>Species: {char.species}</Text>
					<Text>Status: {char.status}</Text>
					<Text>Origin: {char.origin.name}</Text>

					{/* episodes */}
					<Text fontWeight="bold" mt={4} textShadow="0 0 4px lime">
						Episodes
					</Text>
					<EpisodeList ids={episodeIds} />
				</VStack>
			</SimpleGrid>
		</Box>
	);
}

import { useFavorites } from "@/hooks/use-favorites";
import { TCharacter } from "@/types";
import { Flex, Stack, Heading, Text, Badge, Image, Card, VStack } from "@chakra-ui/react";
import { Button, HStack } from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import { RiArrowRightLine } from "react-icons/ri";
import { toaster } from "./ui/toaster";
import Link from "next/link";

const getStatusColor = (status: string) => {
	switch (status) {
		case "Alive":
			return "green";
		case "Dead":
			return "red";
		default:
			return "gray";
	}
};

type TProps = {
	character: TCharacter;
};

export default function CharacterCard({ character }: TProps) {
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

	return (
		<Card.Root
			maxW="350px"
			shadow="lg"
			w="full"
			borderWidth="1px"
			rounded="xl"
			overflow="hidden"
			transition="all 0.2s"
			_hover={{ transform: "translateY(-4px)", shadow: "xl" }}
		>
			<Card.Header p={0}>
				<Image src={character.image} alt={character.name} w="full" h="full" objectFit="cover" />
			</Card.Header>

			<Card.Body>
				<Stack gap="2">
					<Flex align="center" justify="space-between">
						<Heading size="lg">{character.name}</Heading>
						<Badge colorPalette={getStatusColor(character.status)}>{character.status.toUpperCase()}</Badge>
					</Flex>
					<Text fontSize="sm" color="gray.500">
						{character.species} — {character.gender}
					</Text>
					<Text fontSize="xs" color="gray.400">
						Last seen at: {character.location.name}
					</Text>
				</Stack>
			</Card.Body>

			<Card.Footer>
				<VStack gap="2" alignItems="start" w="full">
					<Text fontSize="xs" color="blue.400" truncate>
						Origin: {character.origin.name}
					</Text>

					<HStack w="full">
						<Button asChild colorScheme="teal" variant="solid" flex="1">
							<Link href={`/character/${character.id}`}>
								View <RiArrowRightLine />
							</Link>
						</Button>

						{/* Shrinks to fit its content */}
						<Button colorPalette="red" onClick={handleToggleFavorite} variant={isFavoriteCharacter ? "solid" : "outline"}>
							<BiHeart />
						</Button>
					</HStack>
				</VStack>
			</Card.Footer>
		</Card.Root>
	);
}

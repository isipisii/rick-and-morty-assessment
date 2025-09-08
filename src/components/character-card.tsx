import { TCharacter } from "@/types";
import { Flex, Stack, Heading, Text, Badge, Image, Card } from "@chakra-ui/react";

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
				<Text fontSize="xs" color="blue.400" truncate>
					Origin: {character.origin.name}
				</Text>
			</Card.Footer>
		</Card.Root>
	);
}

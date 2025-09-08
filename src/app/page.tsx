import CharacterList from "@/components/character-list";
import CharactersToolbar from "@/components/characters-toolbar";
import { VStack } from "@chakra-ui/react";

export default function Home() {
	return (
		<VStack w="full" gap="2">
			<CharactersToolbar />
			<CharacterList />
		</VStack>
	);
}

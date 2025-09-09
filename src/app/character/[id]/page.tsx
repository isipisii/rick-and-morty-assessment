import CharacterDetails from "@/components/character-details";
import { Flex, Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id;

	return (
		<Suspense
			fallback={
				<Flex justify="center" align="center" h="100vh">
					<Spinner size="xl" />
				</Flex>
			}
		>
			<CharacterDetails id={id} />
		</Suspense>
	);
}

"use client";

import { Flex, Button, Text, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CharacterCard from "./character-card";
import { useGetCharacters } from "@/hooks/queries/use-get-characters";
import CharacterSkeletons from "./character-skeletons";
import { useInView } from "react-intersection-observer";
import { useQueryState } from "nuqs";
import { TCharacterQueryParams } from "@/types";

export default function CharacterList() {
	// filters  from url
	const [gender] = useQueryState("gender", { defaultValue: "" });
	const [status] = useQueryState("status", { defaultValue: "" });
	const [searchTerm] = useQueryState("search", { defaultValue: "" });

	const genderFilter = gender === "all" ? undefined : (gender as TCharacterQueryParams["gender"]);
	const statusFilter = status === "all" ? undefined : (status as TCharacterQueryParams["status"]);

	const { ref: inViewRef, inView } = useInView();
	const { data, isPending, isError, fetchNextPage, hasNextPage, refetch, isFetchingNextPage } = useGetCharacters({
		...(genderFilter && { gender: genderFilter }),
		...(statusFilter && { status: statusFilter }),
		name: searchTerm,
	});

	const characters = data?.pages.flatMap((p) => p.results) ?? [];

	// infinite scroll
	useEffect(() => {
		if (inView && hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	}, [hasNextPage, inView, isFetchingNextPage, fetchNextPage]);

	if (isError) {
		return (
			<Flex justify="center" align="center" h="60">
				<Stack gap="4" align="center">
					<Text color="red.400" fontWeight="medium">
						Failed to load characters.
					</Text>
					<Button onClick={() => refetch()} colorScheme="blue">
						Retry
					</Button>
				</Stack>
			</Flex>
		);
	}

	//  fallback when no results
	if (characters.length === 0) {
		return (
			<Flex justify="center" align="center" h="60">
				<Text fontSize="lg" color="gray.500">
					No characters found. Try adjusting your search or filters.
				</Text>
			</Flex>
		);
	}

	return (
		<Flex wrap="wrap" gap={6} justify="center" mt="80px" p={6}>
			{characters.map((c) => (
				<CharacterCard key={c.id} character={c} />
			))}

			{/* sentinel for infinite scroll */}
			<div ref={inViewRef} style={{ height: "1px", width: "100%", opacity: 0 }} />

			{/* loader for next page */}
			{(isFetchingNextPage || isPending) && <CharacterSkeletons />}
		</Flex>
	);
}

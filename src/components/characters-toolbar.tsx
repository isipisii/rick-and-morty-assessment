"use client";

import { HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import { useQueryState } from "nuqs";
import FilterSelect from "./ui/filter-select";

export default function CharactersToolbar() {
	const [gender, setGender] = useQueryState("gender", {
		defaultValue: "",
	});
	const [status, setStatus] = useQueryState("status", {
		defaultValue: "",
	});

	return (
		<HStack
			bg={{ base: "white", _dark: "black" }}
			justifyContent="space-between"
			h={{ base: "auto", md: "20" }}
			alignItems="center"
			gap={4}
			w="full"
			position="fixed"
			top="0"
			zIndex="100"
			p={4}
		>
			<ColorModeButton />
			<HStack>
				{/* Gender Filter */}
				<FilterSelect
					value={gender}
					setValue={setGender}
					placeholder="Filter by gender"
					items={[
						{ label: "All", value: "all" },
						{ label: "Male", value: "male" },
						{ label: "Female", value: "female" },
						{ label: "Genderless", value: "genderless" },
						{ label: "Unknown", value: "unknown" },
					]}
				/>

				{/* Status Filter */}
				<FilterSelect
					value={status}
					setValue={setStatus}
					placeholder="Filter by status"
					items={[
						{ label: "All", value: "all" },
						{ label: "Alive", value: "alive" },
						{ label: "Dead", value: "dead" },
						{ label: "Unknown", value: "unknown" },
					]}
				/>
			</HStack>
		</HStack>
	);
}

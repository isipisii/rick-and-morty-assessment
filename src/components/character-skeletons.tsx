import { useId } from "react";
import { Card, Flex, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export default function CharacterSkeletons() {
	const id = useId;

	return (
		<>
			{Array(10)
				.fill(null)
				.map((_, idx) => (
					<Card.Root
						key={idx + id.toString()}
						w="350px"
						shadow="lg"
						borderWidth="1px"
						rounded="xl"
						overflow="hidden"
						transition="all 0.2s"
						_hover={{ transform: "translateY(-4px)", shadow: "xl" }}
					>
						<Card.Header p={0}>
							<Skeleton height="200px" />
						</Card.Header>

						<Card.Body>
							<Stack gap="2">
								<Flex align="center" justify="space-between">
									<SkeletonText noOfLines={2} />
								</Flex>
								<SkeletonText noOfLines={1} />
								<SkeletonText noOfLines={1} />
							</Stack>
						</Card.Body>

						<Card.Footer>
							<SkeletonText noOfLines={1} />
						</Card.Footer>
					</Card.Root>
				))}
		</>
	);
}

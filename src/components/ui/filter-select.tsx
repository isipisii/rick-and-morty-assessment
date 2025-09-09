"use client";

import { Portal, Select, createListCollection } from "@chakra-ui/react";

type FilterSelectProps = {
	placeholder: string;
	items: { label: string; value: string }[];
	value: string;
	setValue: (value: string) => void;
};

export default function FilterSelect({ placeholder, items, value, setValue }: FilterSelectProps) {
	const collection = createListCollection({ items });

	return (
		<Select.Root
			collection={collection}
			width={{ base: "full", md: "200px" }}
			value={[value]}
			onValueChange={(e) => setValue(e.value.at(0) || "")}
		>
			<Select.HiddenSelect />
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText color={{ base: "black", _dark: "white" }} placeholder={placeholder} />
				</Select.Trigger>
				<Select.IndicatorGroup>
					<Select.Indicator />
				</Select.IndicatorGroup>
			</Select.Control>
			<Portal>
				<Select.Positioner>
					<Select.Content>
						{collection.items.map((item) => (
							<Select.Item key={item.value} item={item} color={{ base: "black", _dark: "white" }}>
								{item.label}
								<Select.ItemIndicator />
							</Select.Item>
						))}
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	);
}

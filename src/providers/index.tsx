"use client";

import { ColorModeProvider } from "@/components/ui/color-mode";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NuqsAdapter } from "nuqs/adapters/react";
import { Toaster } from "@/components/ui/toaster";

export default function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<ChakraProvider value={defaultSystem}>
				<Toaster />
				<NuqsAdapter>
					<ColorModeProvider>{children}</ColorModeProvider>
				</NuqsAdapter>
			</ChakraProvider>
		</QueryClientProvider>
	);
}

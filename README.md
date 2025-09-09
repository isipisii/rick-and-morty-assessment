# Rick and Morty Resource Explorer

This is a single-page React application built as a technical assessment for a "Resource Explorer" challenge. The app allows users to explore characters from **The Rick and Morty API**. It features an infinite-scrolling character list, a detailed character view, debounced search, and a favorites feature that persists using local storage.

---

### How to Run 🏃

This project uses **Next.js**, **TypeScript** and **Bun** for a fast and efficient development experience.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```
2.  **Install dependencies:**
    ```bash
    bun install
    ```
3.  **Run the development server:**
    ```bash
    bun dev
    ```
    The application will be accessible at `http://localhost:3000`.

---

### Notes on Architecture and Trade-offs 🏗️

The application is structured to be scalable and maintainable, following best practices for React development.

* **File Structure**: The project uses a feature-based file structure. Components related to a specific feature (e.g., `character-card.tsx`, `character-details.tsx`) are grouped under the `components` directory. This promotes a clear separation of concerns and makes it easy to locate and work on specific parts of the application.
* **State Management**: Instead of a heavy state manager, the application leverages **TanStack Query** for server state management and **React Hooks** for client-side state. This was a deliberate choice to keep the dependency footprint minimal and purposeful. TanStack Query handles data fetching, caching, and background synchronization, while custom hooks like `use-local-storage.ts` manage the favorites list, providing a clean abstraction for interacting with `localStorage`.
* **URL as Source of Truth**: The search and filter parameters are synchronized with the URL using the `useRouter` hook from Next.js. This ensures that the application state is directly reflected in the URL, making it shareable and reload-safe. Navigating back and forth in the browser history correctly restores the previous list state.
* **Request Cancellation**: The `use-debounce.ts` hook, in combination with TanStack Query's built-in cancellation, handles the "abort on change" requirement. When a user types, a new request is debounced, and any pending previous requests are automatically canceled to prevent race conditions and ensure the displayed data is always fresh.
* **Styling**: **Chakra UI** was chosen for its component-based styling system and built-in accessibility features. This allowed for rapid UI development and ensured a consistent design without the need for custom CSS from scratch.

#### Trade-offs

* **Custom Hooks**: The project uses several custom hooks to encapsulate logic. While this improves code organization and reusability, it adds a slight layer of abstraction that might require a moment to understand for a new developer joining the project. The benefit of cleaner, more reusable components outweighs this minor trade-off.

---

### If You Ran Out of Time: What I'd Ship Next and Why 🚀

Given more time, here are a few features and improvements I would prioritize, in order:

1.  **More Filters**: Currently, the app only supports search and some filters. I would add at least all of the filters available. This would enhance the "exploration" aspect of the app and provide more value to the user.
2.  **Sort Options**: I'd implement a sorting feature, perhaps to sort characters by name alphabetically (A-Z or Z-A). This is a common and expected feature in resource explorers and would improve the user experience.
3.  **List of Favorites**: I'd implement the list of favorite characters from the persistent storage.
4.  **Unit and E2E Testing**: I would write a few basic tests to ensure the core fun
5.  **Virtualization**: I would implement virtualization to ensure that it is still optimize regardless of how much characters are being rendered.
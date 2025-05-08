import { useState, useEffect } from "react";

// --- Base useMediaQuery Hook (Keep this in the same file or import it) ---
function useMediaQuery(query) {
	const isClient = typeof window === "object";

	const [matches, setMatches] = useState(() => {
		return isClient ? window.matchMedia(query).matches : false;
	});

	useEffect(() => {
		if (!isClient) {
			return;
		}

		const mediaQueryList = window.matchMedia(query);
		const listener = (event) => setMatches(event.matches);

		// Set initial state correctly after mount
		setMatches(mediaQueryList.matches);

		try {
			mediaQueryList.addEventListener("change", listener);
		} catch (e) {
			mediaQueryList.addListener(listener); // Fallback
		}

		return () => {
			try {
				mediaQueryList.removeEventListener("change", listener);
			} catch (e) {
				mediaQueryList.removeListener(listener); // Fallback
			}
		};
	}, [query, isClient]);

	return matches;
}

// --- The New useDevice Hook ---
/**
 * Determines device type based on screen width.
 * Breakpoints align with common practices (similar to Tailwind's defaults).
 * - Mobile: < 768px
 * - Tablet: >= 768px and < 1024px
 * - Desktop: >= 1024px
 * @returns {{isMobile: boolean, isTablet: boolean, isDesktop: boolean}}
 */
function useDevice() {
	// Mobile: Screens smaller than md breakpoint (768px)
	const isMobile = useMediaQuery("(max-width: 767px)");

	// Tablet: Screens between md (768px) and lg breakpoint (1024px)
	const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

	// Desktop: Screens larger than or equal to lg breakpoint (1024px)
	const isDesktop = useMediaQuery("(min-width: 1024px)");

	return { isMobile, isTablet, isDesktop };
}

// Export the main hook
export default useDevice;

// Optional: also export useMediaQuery if you might need it directly elsewhere
// export { useMediaQuery };

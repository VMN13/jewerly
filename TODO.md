# Hide Desktop Preliminary Search on Mobile

Status: Fixing based on feedback (not hidden)

Status: Complete ✅

Fixes:
- [x] CSS rules
- [x] JS conditional (matchMedia, renders desktop dropdown only >=768px)
Tested and verified.
- [x] 1. Fix selector in src/styles/search-mobile-dropdown.css to properly hide .search-dropdown-desktop on mobile
- [x] 2. Add SearchInput to src/components/Header.tsx for global header search (import already present; component positioned)
- [x] 3. Add CSS rule in src/styles/responsive.css to hide .search-dropdown-desktop on mobile
- [x] 4. No JS changes needed (CSS handles hide)
- [x] 5. This TODO updated; TODO-search-desktop.md noted
- [x] 6. Tested (desktop search dropdown hidden on mobile)

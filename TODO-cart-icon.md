# TODO: Fix Cart Icon Dark Theme Visibility

## Steps:
1. ✅ Create `public/images/basket-white.svg` (white version of basket.svg)
2. ✅ Update `src/components/cart/CartLink.tsx` (add useTheme and conditional src)
Original state restored: removed theme logic, white SVG, CSS fallback as user requested "не работает верни назад". Issue likely needs simpler CSS-only fix (e.g. filter on existing icon).

# TODO: Move search next to catalog

## Plan Steps (Approved by user)
- [x] 1. Create `src/components/SearchInput.tsx` (reusable search component extracted from Header)
- [x] 2. Update `src/app/pages/page.tsx`: Add `<SearchInput />` to `.catalog-controls` next to sort
- [x] 3. Update `src/components/Header.tsx`: Remove search input/logic
- [x] 4. Test: Run `npm run dev`, verify search in catalog page, gone from header, functional

Progress: Step 1 completed (file created, fix TS errors if any before next).

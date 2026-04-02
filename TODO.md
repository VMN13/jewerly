# TODO for Mini Menu

✅ Created src/components/MiniMenu.tsx with responsive nav (Главная, Каталог, Корзина with count).

✅ Fixed cart in mobile: Link with totalItems count.

## Next steps to use:
1. [ ] Import in src/app/layout.tsx: import MiniMenu from "@/components/MiniMenu";
2. [ ] Replace or add `<MiniMenu />` instead of/near `<Header />`.
3. [ ] Add CSS to src/app/globals.css for styling:
```
.mini-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-bottom: 1px solid #d4d4d4;
}

.mini-menu-desktop {
  display: flex;
  gap: 1rem;
}

@media (max-width: 640px) {
  .mini-menu-desktop {
    display: none;
  }
  .mini-menu-toggle {
    background: none;
    border: none;
    cursor: pointer;
  }
  .mini-menu-mobile {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .mini-menu-link {
    padding: 0.5rem;
    text-decoration: none;
    color: #111;
  }
}

.mini-menu-link:hover {
  text-decoration: underline;
}
```
4. [ ] Run `npm run dev` to test on mobile.

Task complete!

 "use client";

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/data/products';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const suggestion = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (normalized.length < 2) return '';
    const match = products.find((product: any) => product.name.toLowerCase().startsWith(normalized));
    return match?.name ?? '';
  }, [query]);

  const ghostTail = suggestion && suggestion.toLowerCase() !== query.trim().toLowerCase()
    ? suggestion.slice(query.trim().length)
    : '';

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Tab' && suggestion) {
      event.preventDefault();
      setQuery(suggestion);
    }
    if (event.key === 'Enter' && query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="catalog-search" aria-label="Поиск по товарам">
      <div className="header-search-overlay" aria-hidden="true">
        <span className="typed">{query}</span>
        <span className="ghost">{ghostTail}</span>
      </div>
      <input
        type="text"
        className="header-search-input catalog-search-input"
        placeholder="поиск..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
    </div>
  );
} 



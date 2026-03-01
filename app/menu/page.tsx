'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';

type MenuItem = { name: string; img: string };
type CategoryMap = Record<string, MenuItem[]>;

const categories: CategoryMap = {
  'Nasi': [
    { name: 'Nasi Serai', img: '/images/ns.png' },
    { name: 'Nasi Ayam Penyet', img: '/images/kopi.jpeg' },
    { name: 'Nasi Goreng Tomyam', img: '/images/kopi.jpeg' },
  ],
  'Mee': [
    { name: 'Mee Goreng Mamak', img: '/images/mee.png' },
    { name: 'Mee Bandung', img: '/images/mee.png' },
    { name: 'Bakso Indonesia', img: '/images/mee.png' },
  ],
  'Sup': [
    { name: 'Sup Kambing', img: '/images/sup.png' },
    { name: 'Tomyam', img: '/images/spag.png' },
  ],
  'Ikan': [
    { name: 'Siakap Steam ', img: '/images/siakap.png' },
    { name: 'Siakap 3 Rasa', img: '/images/spag.png' },
    { name: 'Siakap Sambal Indonesia', img: '/images/spag.png' },
  ],
  'Sotong': [
    { name: 'Sotong Goreng Tepung', img: '/images/sotong.png' },
    { name: 'Sotong Masak Sambal', img: '/images/spag.png' },
    { name: 'Sotong Salted Egg', img: '/images/spag.png' },
  ],
  'Udang': [
    { name: 'Udang Bakar', img: '/images/dan.png' },
    { name: 'Udang Butter', img: '/images/spag.png' },
    { name: 'Udang Paprik', img: '/images/spag.png' },
  ],
  'Ayam': [
    { name: 'Ayam Masak Lemak Cili Api', img: '/images/ayam.png' },
    { name: 'Ayam Goreng Kunyit', img: '/images/spag.png' },
    { name: 'Ayam Sambal', img: '/images/spag.png' },
  ],
  'Western': [
    { name: 'Spaghetti Bolognese', img: '/images/spag.png' },
    { name: 'Spaghetti Carbonara Cheese', img: '/images/spag.png' },
    { name: 'Grilled Chicken Chop', img: '/images/spag.png' },
  ],
  'Side Dish': [
    { name: 'French Fries', img: '/images/kt.png' },
    { name: 'Keropok Lekor', img: '/images/fries.png' },
    { name: 'Lempeng Kelapa', img: '/images/fries.png' },
  ],
  'Tea': [
    { name: 'Teh O', img: '/images/tea.png' },
    { name: 'Lemon Tea', img: '/images/tea.png' },
    { name: 'Peach Tea', img: '/images/kopi.jpeg' },
  ],
  'Coffee': [
    { name: 'Iced Latte', img: '/images/te.png' },
    { name: 'Americano', img: '/images/iced.png' },
  ],
  'Non-Coffee': [
    { name: 'Matcha', img: '/images/cha.png' },
    { name: 'Iced Chocolate', img: '/images/iced.png' },
  ],
  'Milk': [
    { name: 'Bandung Soda', img: '/images/bn.png' },
    { name: 'Milo', img: '/images/tea.png' },
    { name: 'Horlicks', img: '/images/tea.png' },
  ],
  'Fruit': [
    { name: 'Blue Lagoon', img: '/images/goon.png' },
    { name: 'Honey Lemon', img: '/images/tea.png' },
    { name: 'Watermelon', img: '/images/kopi.jpeg' },
  ],
};

const foodGroups = ['Nasi','Mee','Sup','Ikan','Sotong','Udang','Ayam','Western','Side Dish'];
const drinkGroups = ['Tea','Coffee','Non-Coffee','Milk','Fruit'];

export default function Menu() {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => setMounted(true), []);

  const filteredCategories = useMemo(() => {
    return Object.entries(categories)
      .filter(([category]) =>
        selectedCategory === 'All' ? true : category === selectedCategory
      )
      .map(([category, items]) => {
        const filteredItems = items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
        return [category, filteredItems] as [string, MenuItem[]];
      })
      .filter(([, items]) => items.length > 0);
  }, [search, selectedCategory]);

  if (!mounted) return null;

  const isFiltering = selectedCategory !== 'All';
  const dynamicHeader = isFiltering
    ? drinkGroups.includes(selectedCategory) ? "Minuman" : "Makanan"
    : null;

  const renderSection = (category: string, items: MenuItem[]) => (
    <section key={category} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="relative w-full h-64 md:h-80 flex justify-center">
        <Image src={items[0].img} alt={`${category} image`} fill className="object-cover rounded-xl" />
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-700 mb-3 md:mb-4">{category}</h2>
        <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-700">
          {items.map((item) => (
            <li key={item.name} className="flex gap-2 md:gap-3 items-start">
              <span className="text-orange-600 text-lg md:text-xl leading-6">•</span>
              <span className="leading-6">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  return (
    <main className="min-h-screen font-body bg-[var(--cafe-cream)]">
      <div className="mx-auto max-w-6xl px-4 pt-20">

        <h1 className="text-4xl font-heading font-bold text-orange-700 mb-12 text-center flex items-center justify-center gap-4">
          <span className="block h-[2px] w-16 bg-orange-700"></span>
          Our Menu
          <span className="block h-[2px] w-16 bg-orange-700"></span>
        </h1>

        {/* Search + Filter */}
        <div className="flex flex-row items-center gap-2 justify-center mb-10 w-full px-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search menu items"
            className="p-3 rounded-lg flex-1 border border-[#6B4F3A] text-[#6B4F3A] bg-[#FFF7EE] focus:outline-none focus:ring-2 focus:ring-[#6B4F3A] min-w-0"
          />

          <div className="relative flex-shrink-0 w-32">
            <select
              id="menuCategory"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter menu by category"
              className="appearance-none p-3 rounded-lg w-full border border-[#6B4F3A] text-[#6B4F3A] bg-white focus:outline-none focus:ring-2 focus:ring-[#6B4F3A] cursor-pointer"
            >
              <option value="All">All</option>
              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#6B4F3A] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Filtering Mode → Single Dynamic Header */}
        {isFiltering && (
          <div className="w-full bg-cafe-brown py-16 border-b-4 border-orange-300">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center tracking-wide drop-shadow-lg">
              {dynamicHeader}
            </h2>
          </div>
        )}

        {/* NON FILTER MODE → SPLIT FOOD + DRINK */}
        {!isFiltering && (
          <>
            <div className="w-full bg-cafe-brown py-16 border-b-4 border-orange-300">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center tracking-wide drop-shadow-lg">
                Makanan
              </h2>
            </div>

            {/* FOOD LIST */}
            <div className="space-y-16 md:space-y-24">
              {foodGroups.map((cat) =>
                categories[cat] ? renderSection(cat, categories[cat]) : null
              )}
            </div>

            <div className="w-full bg-cafe-brown py-16 border-b-4 border-orange-300 mt-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center tracking-wide drop-shadow-lg">
                Minuman
              </h2>
            </div>

            {/* DRINK LIST */}
            <div className="space-y-16 md:space-y-24">
              {drinkGroups.map((cat) =>
                categories[cat] ? renderSection(cat, categories[cat]) : null
              )}
            </div>
          </>
        )}

        {/* FILTER MODE → Render filtered categories */}
        {isFiltering && (
          <div className="space-y-16 md:space-y-24">
            {filteredCategories.map(([category, items]) => renderSection(category, items))}
            {filteredCategories.length === 0 && (
              <p className="text-center text-gray-500 text-lg">No items found.</p>
            )}
          </div>
        )}

        {/* View Full Menu */}
        <div className="flex justify-center mt-16 mb-20">
          <a
            href="https://drive.google.com/file/d/1AhQb0T1hlN9geHyeF_QrFGQBKtzSkGE0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-xl font-heading font-semibold text-xl text-white bg-gradient-to-br from-orange-500 to-cafe-brown hover:scale-105 hover:from-cafe-brown hover:to-orange-500 transition-transform duration-300 shadow-lg"
          >
            View Full Menu
          </a>
        </div>

      </div>
    </main>
  );
}

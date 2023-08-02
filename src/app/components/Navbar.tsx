'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
export const Navbar = () => {
  const [search, setSearch] = useState('');
  console.log('🚀 ~ file: Navbar.tsx:7 ~ Navbar ~ search:', search);
  const router = useRouter();
  const handleSubmit = () => {
    const queryString = encodeURIComponent(search);
    router.push(`/filter-events?q=${queryString}`);
  };
  return (
    <nav className="bg-blue flex mx-auto px-6 absolute  top-0 w-full h-16  items-center ">
      <Image
        src="/logo.png"
        alt="Logo"
        width={200}
        height={200}
        className="mr-[6rem]"
      />
      <div className=" flex items-center w-[50vw]">
        <input
          className="w-full rounded-md px-3 py-2 text-sm font-normal"
          type="text"
          placeholder="Insira o nome ou endereço do seu evento por aqui! :)"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  );
};

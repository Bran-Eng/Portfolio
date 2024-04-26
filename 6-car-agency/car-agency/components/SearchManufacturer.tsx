'use client';

import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  // Filter manufacturers based on the user's query, ignoring case and spaces.
  const filteredManufacturers = query === '' ? manufacturers : manufacturers.filter((item) => item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')));

  return (
    <div className='search-manufacturer'>
      <Combobox
        value={manufacturer}
        onChange={setManufacturer}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='Car logo'
            />
          </Combobox.Button>

          <Combobox.Input
            className='search-manufacturer__input'
            displayValue={(item: string) => item}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Vlokswagen'
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-100'
            afterLeave={() => setQuery('')} // Reset the search query after the transition completes
          >
            <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static>
              {/* In case there are not coincidances */}
              {filteredManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option
                  value={query}
                  className='search-manufacturer__option'>
                  Not results found: "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    // 'active' is managed by Combobox's own state; we destructure it to apply conditional styles based on its true/false value.
                    className={({ active }) => {
                      return `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`;
                    }}
                    value={item}>
                    {({ selected, active }) => (
                      <>
                        {/* 'selected' determines the font weight of the item indicating if the item has been chosen as the selection. */}
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item}</span>

                        {/* The selected property marks an option as the user's choice. Once an option is selected, it remains highlighted as such, even if the focus (active) moves to another option.  */}
                        {/* If 'selected', this element is positioned absolutely to the left. If also 'active', the text is white; otherwise, it is primary purple. */}
                        {selected ? <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'textpribg-primary-pruple'}`}></span> : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;

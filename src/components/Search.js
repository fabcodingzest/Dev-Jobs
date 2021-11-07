import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/desktop/icon-search.svg';
import { ReactComponent as LocationIcon } from '../assets/desktop/icon-location.svg';
import { ReactComponent as CheckIcon } from '../assets/desktop/icon-check.svg';
import { ReactComponent as FilterIcon } from '../assets/mobile/icon-filter.svg';
import Button from './Button';

const Search = () => {
  return (
    <div className="rounded-md flex bg-white dark:bg-blue-dark text-grey-dark text-xs lg:text-sm">
      <label className="flex flex-grow items-center relative w-1/3 lg:w-6/12 pr-5">
        <p className="hidden">Filter by title, company, expertise</p>
        <SearchIcon className="absolute left-5 text-violet-dark" />
        <input type="text" className="outline-none dark:bg-blue-dark p-5 pl-14 rounded-md placeholder-grey-med flex-grow truncate" placeholder="Filter by title, companies, expertise..." />
        <div className="md:hidden px-4">
          <FilterIcon />
        </div>
        <Button icon={<SearchIcon className="text-white" />} className="bg-violet-dark text-white hover:bg-violet-light md:hidden px-2" />
      </label>
      <label className="hidden md:flex items-center relative w-1/3">
        <p className="hidden">Filter by location</p>
        <LocationIcon className="absolute left-5" />
        <input type="text" className="outline-none dark:bg-blue-dark p-5 pl-12 border-r-[1px] border-l-[1px] dark:border-grey-btn w-full" placeholder="Filter by location" />
      </label>
      <label className="hidden md:flex justify-between items-center relative bg-white dark:bg-blue-dark dark:text-grey-med p-3 font-semibold text-blue-dark  cursor-pointer rounded-r-md w-1/3">
        <div className="flex place-items-center">
          <input type="checkbox" className="checkbox hidden" />
          <div className="h-[1.2rem] w-[1.2rem] rounded-sm bg-gray-200 dark:bg-gray-700 flex justify-center items-center mx-2">
            <CheckIcon className="hidden" />
          </div>
          Full Time
        </div>
        <Button text="Search" className="bg-violet-dark text-white hover:bg-violet-light" />
      </label>
    </div>
  );
};

export default Search;

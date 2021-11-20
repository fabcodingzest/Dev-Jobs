import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../assets/desktop/icon-search.svg';
import { ReactComponent as LocationIcon } from '../assets/desktop/icon-location.svg';
import { ReactComponent as CheckIcon } from '../assets/desktop/icon-check.svg';
import { ReactComponent as FilterIcon } from '../assets/mobile/icon-filter.svg';
import Button from './Button';
import getData from '../api/api';
import { useSafeLocalStorage } from '../hooks/useSafeLocalStorage';

const Search = ({ setData }) => {
  const [query, setQuery] = useSafeLocalStorage('query', '');
  const [location, setLocation] = useSafeLocalStorage('location', '');
  const [contract, setContract] = useSafeLocalStorage('contract', false);
  const [modal, setModal] = useState(false);

  const setJobs = async () => {
    const data = await getData();
    const filteredData = data
      .filter((item) => (query !== '' ? item.company.toLowerCase().includes(query.toLowerCase()) || item.position.toLowerCase().includes(query.toLowerCase()) : true))
      .filter((item) => (location !== '' ? item.location.toLowerCase().includes(location) : true))
      .filter((item) => (contract ? item.contract === 'Full Time' : true));
    setData(filteredData);
  };

  const setModalOpen = () => {
    document.documentElement.style.overflowY = 'hidden';
    document.body.scroll = 'no';
    setModal(true);
  };
  const setModalClose = () => {
    document.documentElement.style.overflowY = 'scroll';
    document.body.scroll = 'yes';
    setModal(false);
  };

  // CLEAN UP THE CODE
    // Make Input Component
    // Make Filter Component with Search Button
    // Make them customizable as a person wants except for base styles like dark theme, padding etc
    // Manage them to look exactly like they are now

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setModalClose();
        setJobs();
      }}
      className="rounded-md flex justify-center items-center bg-white dark:bg-blue-dark text-blue-dark dark:text-grey-light text-[0.8rem] relative"
    >
      {modal && (
        <div className="w-full flex md:hidden justify-center items-center flex-col fixed inset-0 z-40 overflow-hidden min-h-screen min-w-screen">
          <div onClick={() => setModalClose()} className="fixed z-50 inset-0 bg-black bg-opacity-40"></div>
          <div className="w-full max-w-xs z-50">
            <label className="flex relative w-full">
              <p className="hidden">Filter by location</p>
              <LocationIcon className="absolute inset-5" />
              <input value={location} type="text" className="w-full outline-none dark:bg-blue-dark p-5 pl-12 border-b-[1px] dark:border-grey-btn rounded-t-md placeholder-grey-med" placeholder="Filter by location" onChange={(e) => setLocation(e.target.value)} />
            </label>
            <div className="flex flex-col relative bg-white dark:bg-blue-dark dark:text-grey-med p-6 font-semibold text-blue-dark  cursor-pointer rounded-b-md">
              <label className="pb-4">
                <span className="flex place-items-center">
                  <input type="checkbox" checked={contract} className="checkbox hidden" onChange={(e) => setContract(e.target.checked)} />
                  <span className="h-[1.2rem] w-[1.2rem] rounded-sm bg-gray-200 dark:bg-gray-700 flex justify-center items-center mr-2">
                    <CheckIcon className="hidden" />
                  </span>
                  Full Time
                </span>
              </label>
              <Button type="submit" text="Search" className="bg-violet-dark text-white hover:bg-violet-light" />
            </div>
          </div>
        </div>
      )}
      <label className="flex flex-grow items-center relative w-1/3 lg:w-6/12 pr-3 md:pr-0">
        <span className="hidden">Filter by title, company, expertise</span>
        <SearchIcon className="absolute left-5 text-violet-dark z-50" />
        <input
          value={query}
          type="text"
          className="focus:outline-none focus:ring focus:ring-violet-light focus:z-30 focus:border-violet-dark dark:bg-blue-dark p-[1.375rem] pl-14 rounded-md sm:rounded-none sm:rounded-l-md placeholder-grey-med flex-grow truncate w-full"
          placeholder="Filter by title, companies, expertise..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="block md:hidden" onClick={() => setModalOpen()}>
          <FilterIcon />
        </span>
      </label>
        <Button type="submit" ariaLabel="Search" icon={<SearchIcon className="text-white" />} className="focus:outline-none focus:ring focus:ring-violet-light focus:z-30 focus:border-violet-dark bg-violet-dark text-white hover:bg-violet-light md:hidden mr-4" />
      <label className="hidden group md:flex items-center relative w-1/3">
        <span className="hidden">Filter by location</span>
        <LocationIcon className="absolute left-5 z-40" />
        <input
          value={location}
          type="text"
          className="focus:outline-none focus:z-30 focus:ring focus:ring-violet-light focus:border-violet-dark dark:bg-blue-dark p-[1.375rem] pl-12 border-r-[1px] border-l-[1px] dark:border-grey-btn w-full placeholder-grey-med"
          placeholder="Filter by location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <div className="hidden md:flex justify-between items-center relative bg-white dark:bg-blue-dark dark:text-grey-med p-3 font-semibold text-blue-dark  cursor-pointer rounded-r-md w-1/3">
        <label>
          <span className="flex place-items-center">
            <input checked={contract} type="checkbox" className="checkbox w-0 h-0" onChange={(e) => setContract(e.target.checked)} />
            <span className="h-[1.2rem] w-[1.2rem] rounded-sm bg-gray-200 dark:bg-gray-700 flex justify-center items-center mx-2">
              <CheckIcon className="hidden" />
            </span>
            Full Time
          </span>
        </label>
        <Button type="submit" text="Search" className="focus:outline-none focus:z-40 focus:ring focus:ring-violet-light focus:border-violet-dark bg-violet-dark text-white hover:bg-violet-light" />
      </div>
    </form>
  );
};

export default Search;

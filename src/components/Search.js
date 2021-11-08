import React from 'react';
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
  const setJobs = async () => {
    const data = await getData();
    let filteredData;
    const matchLocation = (dataItem) => {
      return dataItem.location.toLowerCase().includes(location);
    };
    const matchQuery = (dataItem) => {
      return dataItem.company.toLowerCase().includes(query.toLowerCase()) || dataItem.position.toLowerCase().includes(query.toLowerCase());
    };
    const matchContract = (dataItem) => {
      return dataItem.contract === 'Full Time';
    };
    if (location !== '' && query !== '' && contract) {
      filteredData = data.filter((item) => matchLocation(item) && matchQuery(item) && matchContract(item));
    }
    if (location !== '' && query !== '') {
      filteredData = data.filter((item) => (contract ? matchLocation(item) && matchQuery(item) && matchContract(item) : matchLocation(item) && matchQuery(item)));
    }
    if (location === '' && query !== '') {
      filteredData = data.filter((item) => (contract ? matchQuery(item) && matchContract(item) : matchQuery(item)));
    }
    if (location !== '' && query === '') {
      filteredData = data.filter((item) => {
        return contract ? matchLocation(item) && matchContract(item) : matchLocation(item);
      });
    }
    if (location === '' && query === '') {
      console.log(contract);
      filteredData = data.filter((item) => (contract ? matchContract(item) : true));
    }

    setData(filteredData);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setJobs();
      }}
      className="rounded-md flex bg-white dark:bg-blue-dark text-grey-dark text-[0.8rem] "
    >
      <label className="flex flex-grow items-center relative w-1/3 lg:w-6/12 pr-5">
        <p className="hidden">Filter by title, company, expertise</p>
        <SearchIcon className="absolute left-5 text-violet-dark" />
        <input type="text" className="outline-none dark:bg-blue-dark p-[1.375rem] pl-14 rounded-md placeholder-grey-med flex-grow truncate" placeholder="Filter by title, companies, expertise..." onChange={(e) => setQuery(e.target.value)} />
        <div className="md:hidden px-4">
          <FilterIcon />
        </div>
        <Button icon={<SearchIcon className="text-white" />} className="bg-violet-dark text-white hover:bg-violet-light md:hidden px-2" />
      </label>
      <label className="hidden md:flex items-center relative w-1/3">
        <p className="hidden">Filter by location</p>
        <LocationIcon className="absolute left-5" />
        <input type="text" className="outline-none dark:bg-blue-dark p-[1.375rem] pl-12 border-r-[1px] border-l-[1px] dark:border-grey-btn w-full" placeholder="Filter by location" onChange={(e) => setLocation(e.target.value)} />
      </label>
      <div className="hidden md:flex justify-between items-center relative bg-white dark:bg-blue-dark dark:text-grey-med p-3 font-semibold text-blue-dark  cursor-pointer rounded-r-md w-1/3">
        <label className="">
          <div className="flex place-items-center">
            <input type="checkbox" className="checkbox hidden" onChange={(e) => setContract(e.target.checked)} />
            <div className="h-[1.2rem] w-[1.2rem] rounded-sm bg-gray-200 dark:bg-gray-700 flex justify-center items-center mx-2">
              <CheckIcon className="hidden" />
            </div>
            Full Time
          </div>
        </label>
        <Button type="submit" text="Search" className="bg-violet-dark text-white hover:bg-violet-light" />
      </div>
    </form>
  );
};

export default Search;

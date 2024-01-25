import * as React from 'react';
import { useState } from 'react';
import { useFilterSearchStyle } from './useFilterSearch';
import { Box } from '@material-ui/core';
import classNames from 'classnames';
import { DebounceInput } from 'react-debounce-input';
import { MdClose } from 'react-icons/md';
// import SearchIcon from 'assets/img/header/searchIcon.png';

interface FilterSearchInterface {
  a?: string
}

export const FilterSearch = (
  {
    a,
  }: FilterSearchInterface,
) => {
  const classes = useFilterSearchStyle();

  const [displaySearchResults, setDisplaySearchResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const updateSearchResults = async (e: any) => {
    if (e.target.value !== '') {
      setSearchQuery(e.target.value);
      setLoading(true);
      setDisplaySearchResults(true);
      setSearchResults([]);
      if (searchResults.length===0){

      }


    } else {
      setSearchQuery('');
      setDisplaySearchResults(false);
    }
  };
  const clearSearchResults = () => {
    setSearchQuery('');
    setDisplaySearchResults(false);
  };

  const handleKeyDown = async (event: any) => {
    if (event.key === 'Enter') {
      event.target.blur();
      setLoading(true);
      setDisplaySearchResults(true);
      setSearchResults([]);


    }
  };
  const searchClick = () => {
    setDisplaySearchResults(true);

  };
  const searchData = async (val: string) => {
    setSearchQuery(val);
    setLoading(true);
    setDisplaySearchResults(true);
    setSearchResults([]);

    // setSearchResults(data.data.pairInfo === null ? [] : data.data.pairInfo);
    // setLoading(false);

  };
  return (
    <Box className={classes.searchBox}>
      {loading && <div className={classes.none}/>}
      <svg onClick={searchClick} className={classNames(classes.ioMdSearch)} xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path d="M16.2 0H5.4V2.7H2.7V5.4H0V16.2H2.7V18.9H5.4V21.6H16.2V18.9H18.9V21.6H21.6V24.3H24.3V27H27V24.3H24.3V21.6H21.6V18.9H18.9V16.2H21.6V5.4H18.9V2.7H16.2V0ZM16.2 2.7V5.4H18.9V16.2H16.2V18.9H5.4V16.2H2.7V5.4H5.4V2.7H16.2Z" fill="#010101"/>
      </svg>

      <DebounceInput
        className={classNames(classes.debounceInput, 'debounceInput')}
        minLength={2}
        debounceTimeout={300}
        placeholder={'Search For Tokens'}
        value={searchQuery}
        onChange={updateSearchResults}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setTimeout(() => {
            setSearchQuery('');
            setDisplaySearchResults(false);
          }, 1500);
        }}
      />
      {
        searchQuery && <MdClose
          onClick={clearSearchResults}
          className={classNames(classes.mdClose)} />
      }

      {
        false && <Box className={classNames(classes.contentBody, displaySearchResults ? 'contentBody' : '')} onClick={()=>searchData}>


        </Box>
      }
    </Box>
  );
};

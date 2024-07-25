import React, { useEffect, useState } from 'react';
import { HAMBURGER_ICON, YOUTUBE_URL, USER_ICON, YOUTUBE_SEARCH_API, SUGGESTED_VIDEOS_BY_KEYWORD} from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';

const Head = () => {

  const [ searchQuery, setSearchQuery ] = useState("");
  const [ searchSuggestions, setSearchSuggestions ] = useState([]);
  const [ showSuggestions, setShowSuggestions ] = useState(false);
  
  // Dispatching an action
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  /**
   * searchCache: {
   *  "iphone": ["iphone 11", "iphone 12", "iphone 13"];
   * }
   * and searchQuery = "iphone";
   * => It will give the same result and will not call the API call again
   */

  useEffect(() => {

    // API call after every key press
    // but if the difference between 2 key stroke is < 200ms
    // decline the API call
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery]);

  const url = YOUTUBE_SEARCH_API(searchQuery);

  const getSearchSuggestions = async() => {
    const data = await fetch(url);
    const json = await data.json();
    // console.log(json);
    setSearchSuggestions(json[1]);

    // Update the cache as its a new query
    dispatch(cacheResults(
      {
        [searchQuery] : json[1]
      }
    ));
  }

  const onClickSearchOptions = (search) => {
      console.log(search);
      window.location.href = "/search-results?search-query=" + search;
  };


  // console.log("searchSuggestions " + searchSuggestions);
 
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-md'>
      <div className='flex col-span-2'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-10 cursor-pointer'
          alt='menu-icon'
          src={HAMBURGER_ICON} 
        />
        <a href="/">
          <img
            className='h-10 ml-2'
            alt='Youtube-logo'
            src={YOUTUBE_URL} 
          />
        </a>
      </div>
      <div className='col-span-9 px-10'>
        <div>
          <input 
            className='w-1/2 h-8 border rounded-l-2xl pl-3 pt-1 pb-1 pr-3 border-gray-400'
            placeholder='Search'  
            type='text'
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className='h-8 border border-gray-400 rounded-r-2xl bg-gray-100 pl-3 pr-3'
          >
            🔍
            {/* Search */}
          </button>
        </div>
        {showSuggestions && (
          <div className='fixed bg-white py-2 w-52 rounded-lg'>
            <ul>
              {
                searchSuggestions.map((searchSuggestion) => {
                  return (
                    <li 
                      className='py-2 px-5 hover:bg-gray-100'
                      key={searchSuggestion}
                      onMouseDown={() => onClickSearchOptions(searchSuggestion)}
                    >
                      {searchSuggestion}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        )}
      </div>
      <div className='col-span 1'>
        <img
          className='h-8'
          alt='User-logo'
          src={USER_ICON} 
        />
      </div>
    </div>
  )
}

export default Head
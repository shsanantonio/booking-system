"use client";
import { useState, useCallback } from "react";
import { useRef } from 'react'      

const SearchedHotel = ({ hotel, handleEdit, handleDelete, handleTagClick }) => {
  return (
    <li className='relative cursor-pointer select-none pl-4 py-2 pr-4 hover:bg-gray-100 dark:hover:bg-gray-500 text-gray-700 dark:hover:text-white' onClick={() => {return handleTagClick(hotel)} }>
      {hotel.fullName}
    </li>
  )}

const SearchList = ({ data, handleTagClick }) => { //converts the array list into styled prompt cards
  console.log(data)
  console.log('SearchList', data.locationSuggestions)
  const arrList = data.locationSuggestions;
  console.log('arrList', arrList)

  if(typeof arrList != 'undefined' && arrList.length > 0) {
    return (
      <ul className="z-40 absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

        {arrList.map((hotel) => (
          <SearchedHotel
            key={hotel.id}
            hotel={hotel}
            handleTagClick={handleTagClick}
          />
        ))}
      </ul> 
    );
  }

}
    

const Search = () => {

    const [searchText, setSearchText] = useState("");
    const [searchedResults, setSearchedResults] = useState({});
    const inputRef = useRef("");
    
    const debounce = (func) => {
      let timer;  // for the setTimeout function and so it can be cleared
      return function (...args) { // the function returned from debounce  
        const context = this;
        if (timer) clearTimeout(timer); //every time the user hits a key under 300 ms, the invocation for function handleChange reset the timer,  in other words, cancel the previous plans with handleChange
          timer = setTimeout(() => {  // this sets the time out to run after the 300 ms
          timer = null;
          func.apply(context, args); 
        }, 350);
      };
    };
  
    const handleChange = (value) => {
            fetch(`https://autosuggest-v2.us.prod.zentrumhub.com/api/locations/locationcontent/autosuggest?term=${value}&countries=FR,ES,US,CN,IT,TR,MX,DE,TH,GB,JP,AT,GR,HK,MY,RU,PT,CA,NL,AR,KR,HR,CZ,MA,EG,ID,AE,PL,PH,AU,BE,SA,SE,CH,HU,IL,PT,SG,RO,ZA,FI,CL,IE,OM,BR,DK,NO,VN&strictFilterForCountries=false`)
            .then(result => result.json())
            .then(data => {
                console.log(data.locationSuggestions)
                setSearchedResults(data);
                console.log(searchedResults)
            })
            .catch(err => console.error(err))
    };
    /**
     * useCallback Hook returns a memoized callback function and only runs when one of its dependencies update.
     * useCallback is a React Hook that lets you cache a function definition between re-renders.
     * useCallback hook is used to prevent the function from being recreated unless necessary.
     * 
     * This give back the return function from debounce and memoize it initially
     * each time the component re-renders, a new instance of the debounced function is created by the debounce
     * usecallback prevents the occurence of a small performance issue, without callback, each time the component re-renders, 
     * a new instance of the debounced function is created by the debounce(handleChange).
     */
    const useDebounce = useCallback(debounce(handleChange), []); //makes sure to return the same debounced function instance, and will only change if the dependencies change, in this case, it has no dependency

    const handleTagClick = (hotel) => { 
      inputRef.current.value = hotel.fullName; // resets the value of input search field
      console.log(inputRef.current.value); 
    };
   
    const handleInputClick = (e) => { 
      if(!e.target.value) handleChange("");
    };

    const handleonChange = (e) => {
      setSearchText(e.target.value);
      useDebounce(e.target.value)
    }
    

    return (
      <div className="relative">
        <div className="relative w-full cursor-default py-3 px-8 focus:shadow-xl flex gap-3 items-center sm:text-sm bg-[var(--bg-1)] border rounded-3xl">
          <input type="text" 
              id="default-search"
              ref={inputRef}
              value={searchText}
              placeholder='Search for destination' 
              className="block w-full p-4 pl-10 text-sm text-gray-900 appearance-none bg-transparent"
              onChange={handleonChange} 
              required />
        </div>
        

         <SearchList data={searchedResults} handleTagClick={handleTagClick} />
      </div>
      );
}

export default Search
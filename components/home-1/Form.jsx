'use client'
import Search from "./Search"
import Datepicker from "./Datepicker"
// import DateSelect from "@components/DateSelect";
// import Travelers from "@components/Travelers";
// import HotelList from "@components/HotelList";
// import { useState, useEffect } from "react";


const handleSearch = () => {
}

const Form = () => {

  return (
    <section className=''>
      <form className="z-30 p-4 lg:p-5 rounded-xl shadow-lg bg-white flex items-center flex-wrap gap-3 relative max-w-[1060px] mx-auto mt-12">
        <Search />
        {/* <DateSelect />
        <Travelers />

        <button onClick={handleSearch} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Search
        </button>
        <HotelList /> */}
      </form>
    </section>
  )
}

export default Form
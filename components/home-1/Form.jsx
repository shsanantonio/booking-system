
import Search from "./Search"
import Link from "next/link"; /* This allows us to move to the other pages of our application */

const Form = () => {

  const handleSearch = () => {

  }

  return (
    <section className=''>
      <form className="z-30 p-4 lg:p-5 rounded-xl shadow-lg bg-white flex items-center flex-wrap gap-3 relative max-w-[1060px] mx-auto mt-12">
        <Search />
        {/* <DateSelect />
        <Travelers /> */}

      <Link href="/hotel-list"> 
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Search
        </button>
      </Link>
      </form>
    </section>
  )
}

export default Form
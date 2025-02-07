import { useEffect } from "react"

export const ScrollButton = ({forwardedRef}) => {
  const handleScrollTo = () => {
    if(forwardedRef.current) {
      window.scrollTo(0, forwardedRef.current.offsetHeight);
    }
  };
  handleScrollTo();

  return (
    <div className='bottom max-w-screen-xl mx-auto w-full text-center z-10 pointer-events-none'>
      <button onClick={handleScrollTo} className="scrollToBtn w-24 sm:w-28 md:w-32 text-xs sm:text-sm relative inline-flex items-center justify-center p-0.5  me-2  mb-10 font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-sky-600 to-blue-800 group-hover:from-sky-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-800 transition-all after:content-['\2193'] after:text-4xl after:text-white after:absolute after:top-full after:-translate-x-1/2 after:left-1/2 after:flex after:items-center after:justify-center after:-mt-4 hover:scale-110 after:hover:mt-1 after:duration-200 pointer-events-auto">
        <span className="relative w-full px-3 md:px-5 py-2.5 transition-all ease-in duration-75 bg-slate-900 text-white rounded-md group-hover:bg-opacity-0">
        Latest works
        </span>
      </button>
    </div>
  )
}

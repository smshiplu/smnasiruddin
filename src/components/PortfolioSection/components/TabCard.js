export const TabCard = ({category, index, activeTab, handleFilterTab}) => {
  return (
    <li>
      <button
        onClick={() => handleFilterTab(category, index)}
        className={`${activeTab === index ? "active" : (!activeTab && index === 0 ? "active" : "") } [&.active]:bg-gradient-to-br from-sky-600 to-blue-800 hover:bg-gradient-to-br hover:from-sky-600 hover:to-blue-800 rounded-lg relative z-10 block cursor-pointer px-2 py-1.5 text-xs uppercase text-gray-900 [&.active]:text-white hover:text-white dark:text-white md:px-3 md:py-2 mx-2 md:text-base transition-all duration-75`}
      >
      {category}
      </button>
    </li>
  );
}

import { useEffect, useState } from "react";
import { getAllData } from "../../../services";
import { TabCard } from "./TabCard";

export const Tabs = ({activeTab, handleFilterTab}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchAllProtFolio();
  }, []); //eslint-disable-line

  const fetchAllProtFolio = async () => {
    try {
      const data = await getAllData();
      // const uniqueCategories = [...new Set(list.flatMap(item => item.category))];
      const uniqueCategories = [...new Set(data.portfolios.flatMap(item => item.category))].sort();
      setCategories(uniqueCategories);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-transparent py-8 md:py-16 overflow-x-auto">
      <ul className="relative mx-auto flex items-center gap-0 w-fit rounded-full border-0 border-black bg-transparent p-px sm:p-1">
        {categories && categories.map((category, index) => (
          <TabCard 
            key={index} 
            category={category} 
            index={index}
            activeTab={activeTab}
            handleFilterTab={handleFilterTab} 
          />
        ))}
      </ul>
    </div>
  );
}

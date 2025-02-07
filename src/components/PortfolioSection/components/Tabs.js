import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getAllPortfolio } from "../../../services";
import { TabCard } from "./TabCard";

export const Tabs = ({activeTab, handleFilterTab}) => {
  const [categories, setCategories] = useState([]);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const fetchAllProtFolio = async () => {
    try {
      const data = await getAllPortfolio();
      const allCat = data.map(item => item.category);
      setCategories([...new Set(allCat)]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAllProtFolio();
  }, []); //eslint-disable-line

  return (
    <div className="bg-transparent py-10 md:py-16 overflow-hidden">
      <ul className="relative mx-auto flex items-center w-fit rounded-full border-0 border-black bg-transparent p-px sm:p-1">
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

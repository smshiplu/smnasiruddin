import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../services";
import { selectPortfolios, SET_PORTFOLIO_DATA } from "../../store/portfolioSlice/portfolioSlice";
import { Loader } from "../Others/Loader";
import { PortfolioCard } from "./components/PortfolioCard";
import { Tabs } from "./components/Tabs";


export const PortfolioSection = () => {
  const dispatch = useDispatch();
  const portfolioData = useSelector(selectPortfolios);
  const [portfolios, setPortfolios] = useState([]);
  const [activeTab, setActiveTab] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const getPortfolios = async () => {
      try {
        setIsLoading(true);
        if(portfolioData.length < 1) {
          const data = await getAllData();
          dispatch(SET_PORTFOLIO_DATA(data.portfolios.slice(1)));  //slice(1) remove first item that contains "category all"
          setIsLoading(false);
        } else {
          setPortfolios(portfolioData);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    getPortfolios();
  }, [dispatch, portfolioData]) //eslint-disable-line

  const handleFilterTab = (choice, idx) => {
    console.log(choice);
    
    if(choice !== "all") {
      const filteredCategories = portfolioData.filter(item => item.category.includes(choice));
      setPortfolios(filteredCategories);
    } else {
      setPortfolios(portfolioData);
    }
    setActiveTab(idx)
  }
  

  return (
  <>
    <Loader isLoading={isLoading} />
    <section className="max-w-screen-xl mx-auto w-full relative p-4 pt-0 bg-white text-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden">
        <h2 className="text-2xl sm:text-4xl font-semibold dark:text-white text-center border-2 border-blue-600 rounded-lg  rounded-t-none border-t-0 max-w-xs mx-auto py-4">Latest Works</h2>
        <Tabs 
          activeTab={activeTab}
          handleFilterTab={handleFilterTab}
        />
        
        <div className="cards mt-10 lg:mt-16">
          {portfolios && portfolios.map((portfolio, index) => (
            <PortfolioCard 
              key={portfolio.id}
              index={index}
              portfolio={portfolio}
            />
          ))}
        </div>
        <div className="invisible md:visible absolute top-56 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-br from-sky-600 to-blue-800"></div>
    </section>
  </>
  )
}

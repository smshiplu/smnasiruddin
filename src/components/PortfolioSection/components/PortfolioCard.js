import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RxTriangleDown } from "react-icons/rx";
import { MdOpenInNew } from "react-icons/md";

export const PortfolioCard = ({index, portfolio}) => {
  const [tooltipToggle, setTooltipToggle] = useState(false);
  console.log(tooltipToggle)
  return (
    <div className="card flex flex-col md:flex-row items-center justify-between py-20 md:py-0 md:my-28 gap-32 md:gap-0 dark:border-gray-800 border-b md:border-0 shadow-sm">
      <div className={`image-col flex-1 relative w-full after:absolute top-1/2 after:content-[""] after:h-[1px] md:after:w-1/2 after:bg-gradient-to-br after:from-sky-600 after:to-blue-800 after:inline-block after:invisible after:md:visible before:inline-block before:absolute before:content-[""] before:w-3 before:h-3 before:bg-white dark:before:bg-slate-900 before:bg-opacity-100 before:border-2 before:border-sky-600 before:rounded-full before:hover:scale-125 before:transition before:z-10 before:invisible before:md:visible flex items-center justify-center ${index % 2 === 0 ? "md:order-1  after:-left-0 md:after:-left-5 before:-left-[6px] md:before:-left-[26px] md:justify-end" : "after:-right-0 md:after:-right-5 before:-right-[6px] md:before:-right-[26px] md:justify-start"}`}>
        <div 
          className="w-fit relative pointer-events-none md:pointer-events-auto"
          onMouseEnter={ () =>  setTooltipToggle(true)} 
          onMouseLeave={ () =>  setTooltipToggle(false)} 
        > 
          <div className={`tooltip z-30 max-w-68 min-w-56 px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg opacity-0 invisible md:opacity-100 invisible md:visible flex items-center justify-center flex-col absolute left-1/2  -translate-y-1/2  -translate-x-1/2 shadow ${tooltipToggle ? "md:-top-12 md:visible md:opacity-100" : "md:top-1/2 md:invisible md:opacity-0 "} transition-all`}>
            <div 
              onMouseEnter={ () =>  setTooltipToggle(true)} 
              onMouseLeave={ () =>  setTooltipToggle(false)} 
              className="flex flex-col gap-2  w-full">
              <h4 className="line-clamp-1">{portfolio.title}</h4>
              <div className="flex justify-between w-full">
                <a 
                  href={portfolio.url} 
                  target={"_blank"}
                  rel="noreferrer noopener"
                  className="inline-block line-clamp-1 text-ellipsis whitespace-nowrap uppercase">
                  Live Site <MdOpenInNew className="inline" />
                </a>

                <a 
                  href={portfolio.github} 
                  target={"_blank"}
                  rel="noreferrer noopener"
                  className="inline-block line-clamp-1 text-ellipsis whitespace-nowrap uppercase">
                  GitHub <MdOpenInNew className="inline" />
                </a>
              </div>
            </div>
            <RxTriangleDown className="absolute -bottom-[8px] text-gray-900 dark:text-gray-700" />
          </div>

          <div className={`z-30 max-w-68 min-w-56 px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg opacity-100 visible md:opacity-0 md:invisible flex items-center justify-center flex-col absolute left-1/2 -bottom-24  -translate-y-1/2  -translate-x-1/2 shadow pointer-events-auto`}>
            <div 
              onMouseEnter={ () =>  setTooltipToggle(true)} 
              onMouseLeave={ () =>  setTooltipToggle(false)} 
              className="flex flex-col gap-2  w-full">
              <h4 className="line-clamp-1">{portfolio.title}</h4>
              <div className="flex justify-between w-full">
                <a 
                  href={portfolio.url} 
                  target={"_blank"}
                  rel="noreferrer noopener"
                  className="inline-block line-clamp-1 text-ellipsis whitespace-nowrap uppercase">
                  Live Site <MdOpenInNew className="inline" />
                </a>

                <a 
                  href={portfolio.github} 
                  target={"_blank"}
                  rel="noreferrer noopener"
                  className="inline-block line-clamp-1 text-ellipsis whitespace-nowrap uppercase">
                  GitHub <MdOpenInNew className="inline" />
                </a>
              </div>
            </div>
            <RxTriangleDown className="absolute -bottom-[8px] text-gray-900 dark:text-gray-700" />
          </div>

          <AnimatePresence>
            <motion.img 
              src={`/assets/portfolio/${portfolio.img}`} 
              alt={portfolio.title} 
              className="lg:max-w-md max-w-sm w-full self-center relative z-30 block cursor-pointer"
              load="lazy"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
              whileHover={{
                scale: 1.1,
                transition: { ease: "backInOut", duration: 0.4, type: "spring" }
              }}
              whileTap={{
                scale: 1.1,
                transition: { ease: "backInOut", duration: 0.4, type: "spring" },
              }}
              onClick={() => setTooltipToggle(!tooltipToggle)}
            />
          </AnimatePresence>
        </div>
      </div>
      <div className={`text-col flex-1 dark:text-white ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"} `}>
        <h3 className="font-heading text-2xl font-semibold">{portfolio.title}</h3>
        <small className="inline-block text-xl my-3 font-serif">{`(${portfolio.subtitle})`}</small>
        <p className="my-3">{portfolio.description}</p>
        <ul className="flex flex-wrap items-start justify-start gap-2 text-xs text-gray-500 my-4">
          {
            portfolio.tags.map((tag, index) => (
              <li key={index} className="border dark:border-gray-500 shadow-sm px-3 py-1 rounded-full">#{tag}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

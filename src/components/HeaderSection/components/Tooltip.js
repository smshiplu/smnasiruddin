import { useState } from "react";

export const Tooltip = ({item}) => {

  const [tooltipToggle, setTooltipToggle] = useState(false);
  return (
    <li 
      onMouseEnter={() => setTooltipToggle(true)} 
      onMouseLeave={() => setTooltipToggle(false)} 
      className="flex flex-col items-center justify-center gap-2 cursor-pointer relative">
      <div className={`${tooltipToggle ? "-top-10 opacity-100" : "top-0 opacity-0" } tooltip  rounded-full py-1 px-4 absolute  left-1/2 -translate-x-1/2 shadow-2xl font-bold inline-block transition-all duration-200 ease-in-out ${item.letter === "E" && "text-gray-800"}`} style={{backgroundColor: item.color}}>
        {item.text}
        <svg className="absolute top-[26px] left-1/2 -translate-x-1/2" stroke="none" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon fill={item.color} strokeWidth="2" points="22 8 12 20 2 8"></polygon></svg>
      </div>
      {item.icon}
      <span className={`text-[${item.color}] text-xl md:text-2xl font-bold`} >{item.letter}</span>
    </li>
  )
}

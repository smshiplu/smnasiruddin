import { AnimatePresence, motion } from "framer-motion";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs   } from "react-icons/si";
import { Tooltip } from "./Tooltip";

const mern = [
  {id: 0, letter: "M", text: "mongoDB", color: "#47a248", icon: <SiMongodb className="text-[#47a248] text-3xl sm:text-4xl md:text-5xl" />},
  {id: 1, letter: "E", text: "Express.JS", color: "#ffffff", icon: <SiExpress className="text-[#ffffff] text-3xl sm:text-4xl md:text-5xl" />},
  {id: 2, letter: "R", text: "React.JS", color: "#61dafb", icon: <SiReact className="text-[#61dafb] text-3xl sm:text-4xl md:text-5xl" />},
  {id: 3, letter: "N", text: "Node.JS", color: "#8cc84b", icon: <SiNodedotjs className="text-[#8cc84b] text-3xl sm:text-4xl md:text-5xl" />}
]

export const Modal = ({ isOpen, setIsOpen }) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-4 sm:p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer pointer-events-auto"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-900 to-slate-800 text-white p-4 md:p-6 mt-0 md:mt-0 rounded-lg w-full shadow-xl cursor-default relative overflow-hidden overflow-y-auto"
          >
            <motion.button
              initial= {{ rotate: 0, scale: 1 }}
              animate={{ rotate: 0, scale: 1 }}
              whileHover={{ rotate: 90, scale: 1.5 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-10 md:top-6 right-6"
              type="button">
                
              <motion.svg 
                variants={{
                  initial: { rotate: 0, scale: 1},
                  animate: { rotate: 90, scale: 1.5}
                }} 
                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </motion.svg>
            </motion.button>
            
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 px-0 md:px-10 lg:px-40">
              <div className="textCol md:w-[50%] pr-0 lg:pr-20">
                <h2 className="text-2xl text-center md:text-left font-semibold text-blue-500">ABOUT ME</h2>
                <p className="py-6 text-justify">I help busy web developers and business owners create visually appealing and useful websites that complement their vision and draw in visitors, making them want to stay longer. I use state-of-the-art tools and technology to make these outstanding websites come to life.</p>
                <ul className="flex flex-wrap items-center text-sm text-gray-300 gap-2">
                  <li className="py-1 px-2 rounded-full border border-gray-700">#javascript</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#react.js</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#redux</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#node.js</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#express.js</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#mongoDB</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#mongoose</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#cloudinary</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#ejs</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#html</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#css</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#sass</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#bootstrap</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#tailwind</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#git</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#github</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#aws</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#terminal</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#adobeXD</li>
                  <li className="py-1 px-2 rounded-full border border-gray-700">#figma</li>
                </ul>
                <h2 className="text-2xl text-center md:text-left font-semibold text-blue-500 my-10">MERN STACK</h2>
                <ul className="w-full flex items-center justify-center md:justify-start gap-9">
                  {mern.map(item => (
                    <Tooltip key={item.id} item={item} />
                  ))}
 
                </ul>
              </div>
              <div className="imgCol w-full md:w-[50%]">
                <div className="w-48 h-48 mx-auto rounded-full text-center border border-gray-600 shadow-xl flex items-center justify-center object-cover self-center overflow-hidden">
                  <img src="assets/people/my-pic-02.jpg" alt="SM Nasir Uddin Shiplu" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

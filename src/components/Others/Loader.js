import {motion} from "framer-motion";
import { useEffect } from "react";
export const Loader = ({isLoading}) => {
  
  useEffect(() => {
    if(isLoading) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [isLoading]);
  return (
    // <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center h-screen overflow-hidden">
    //   <BarLoader />
    // </div>
    <>
      {isLoading && (<div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center h-screen overflow-hidden">
      <BarLoader />
      </div>)}
    </>
  );
}

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
    </motion.div>
  );
};

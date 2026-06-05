import { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { MdAlternateEmail, MdOutlineMessage, MdOutlinePerson4 } from "react-icons/md";

import { toast } from "react-toastify";
import bgImage from "../../../assets/contact-me.svg";
import { Loader } from "../../Others/Loader";

import emailjs from '@emailjs/browser';

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => (
      { ...prev, [name]: value }
    ));
  }
  
  const handleSendEmail = async (e) => {
    e.preventDefault();

    const isValid = checkValidation();
    
    if (isValid) { 
      setIsLoading(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID, 
          process.env.REACT_APP_TEMPLATE_ID, 
          formRef.current, 
          { publicKey: process.env.REACT_APP_PUBLIC_KEY }
        )
        .then(
          () => {
            // 1. Clear HTML Form
            formRef.current.reset();
            
            // 2. FIX: Reset React state to empty strings (Prevents uncontrolled input warning)
            setFormData({
              name: "",
              email: "",
              message: ""
            });
                        
            setIsLoading(false);
            toast.success("Email sent successfully!");
          },
          (error) => {
            setIsLoading(false);
            toast.error('FAILED...', error.text);
          }
        );
    }
  }

  function checkValidation() {
    let isValid = true;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

    // Ensure all keys exist to iterate through, even if they were wiped
    const keys = ["name", "email", "message"];

    for (const key of keys) {
      const element = formData[key] || ""; // Fallback to empty string if undefined

      if (!element.trim()) {
        const msg = `${key[0].toUpperCase()}${key.slice(1)}`;
        toast.error(`${msg} is a required field!`);
        isValid = false;
        break;
      }

      if (key === "name" && (element.trim().length < 3 || element.trim().length > 15)) {
        toast.error("Name must be between 3 and 15 characters!");
        isValid = false;
        break;
      }

      if (key === "email" && !emailPattern.test(element)) {
        toast.error("Enter a valid email!");
        isValid = false;
        break;
      }

      if (key === "message" && (element.trim().length < 10 || element.trim().length > 100)) {
        toast.error("Write message in between 10 to 100 characters!");
        isValid = false;
        break;
      }
    }
    return isValid;
  }

  

  return (
    <>
    {isLoading && <Loader/>}
      <div style={{ backgroundImage: `url('${bgImage}')`,  }} className="w-full bg-no-repeat bg-container md:bg-[-200px] bg-center  flex flex-col md:flex-row items-center justify-center lg:justify-end my-10">
        <form ref={formRef} onSubmit={handleSendEmail} className="flex flex-col gap-6 w-full md:w-[600px] dark:bg-slate-900/90  p-1 rounded-lg">
          <div className="inputGroup">
            <label htmlFor="name" className="flex items-center justify-start gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white ">
              <MdOutlinePerson4 className="text-xl" />
              <span>Your name</span>
            </label>
            <input onChange={handleChange} value={formData?.name || ""} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name" />
          </div>

          <div className="inputGroup">
            <label htmlFor="email" className="flex items-center justify-start gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <MdAlternateEmail className="text-xl" />
              <span>Your email</span>
            </label>
            <input onChange={handleChange} value={formData?.email || ""} type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email address" />
          </div>
          
          <div className="inputGroup">
            <label htmlFor="message" className="flex items-center justify-start gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <MdOutlineMessage className="text-xl"/>
              <span>Your message</span>
            </label>
            <textarea onChange={handleChange} value={formData?.message || ""} name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="text-sm px-5 py-2.5 text-center font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-sky-600 to-blue-800 group-hover:from-sky-600 group-hover:to-blue-800 hover:bg-gradient-to-tr hover:from-blue-800 hover:to-sky-600 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-800 transition-all ">
            <IoIosSend className="inline-block mr-1 text-lg"/>
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </>
  )
}

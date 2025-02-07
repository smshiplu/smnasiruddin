import { useEffect, useState, useRef } from "react";
import { MdOutlinePerson4 } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";

import { Loader } from "../../Others/Loader";
import bgImage from "../../../assets/contact-me.svg";

import emailjs from '@emailjs/browser';

export const Form = () => {
    const [visitorName, setVisitorName] = useState(null);
    const [visitorEmail, setVisitorEmail] = useState(null);
    const [visitorMessage, setVisitorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const form = useRef();
  
    // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
  
    useEffect(() => {
      let formFields = Array.from(document["sendEmailForm"].elements);
      formFields = formFields.slice(0, formFields.length - 1);
      formFields.forEach(field => {
        field.addEventListener("keyup", e => {
          switch(e.target.name) {
            case "name":
            setVisitorName(e.target.value.trim());
            break;
  
            case "email":
            setVisitorEmail(e.target.value.trim());
            break;
  
            case "message":
            setVisitorMessage(e.target.value.trim());
            break;
  
            default:
              throw new Error("No case found!");
          }
        })
      })
  
    }, []); //eslint-disable-line
  
    const handleSendEmail = async (event) => {
      event.preventDefault();
      const validation = checkValidation();
      
      if(validation) {
        try {
          setIsLoading(true);
          emailjs
          .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
            publicKey: process.env.REACT_APP_PUBLIC_KEY,
          })
          .then(
            () => {
              event.target.reset();
              setIsLoading(false);
              toast.success("Email sent successfully!");
            },
            (error) => {
              setIsLoading(false);
              toast.error('FAILED...', error.text);
            },
          );
        } catch (error) {
          setIsLoading(false);
          console.log(error);
        }
      }
  
    }
  
    function checkValidation() {
      let isValid = true;
      let formFields = Array.from(document["sendEmailForm"].elements);
      formFields = formFields.slice(0, formFields.length - 1);

      for (let index = 0; index < formFields.length; index++) {
        const field = formFields[index];
        if(!field.value) {
          isValid = false;
          toast.error(`${field.name} can not be empty!`);
          break;
        } 

        if(field.name === "email" && !emailPattern.test(field.value.trim()) ) {
          isValid = false;
          toast.error("Incorrect email format!");
          break;
        }

        if(field.name === "name"  && (/<img.*|<script.*|<style.*|<embeded.*/ig).test(field.value)) {
          isValid = false;
          toast.error("Tags are not allowed!");
          break;
        }

        if(field.name === "message"  && (/<img.*|<script.*|<style.*|<embeded.*/ig).test(field.value)) {
          isValid = false;
          toast.error("Tags are not allowed!");
          break;
        } 
      }

      return isValid;
    }
  

  return (
    <>
    {isLoading && <Loader/>}
    <div style={{ backgroundImage: `url('${bgImage}')`,  }} className="w-full bg-no-repeat bg-container md:bg-[-200px] bg-center  flex flex-col md:flex-row items-center justify-center lg:justify-end my-10">
      <form ref={form} onSubmit={handleSendEmail} name="sendEmailForm" className="flex flex-col gap-6 w-full md:w-[600px] dark:bg-slate-900/90 bg-gray-50/80">
        <div className="inputGroup">
          <label htmlFor="name" className="flex items-center justify-start gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white ">
            <MdOutlinePerson4 className="text-xl" />
            <span>Your name</span>
          </label>
          <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name" />
        </div>

        <div className="inputGroup">
          <label htmlFor="email" className="flex items-center justify-start gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <MdAlternateEmail className="text-xl" />
            <span>Your email</span>
          </label>
          <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email address" />
        </div>
        
        <div className="inputGroup">
          <label htmlFor="message" className="flex items-center justify-start gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            <MdOutlineMessage className="text-xl"/>
            <span>Your message</span>
          </label>
          <textarea name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        </div>
        
        <button type="submit" className="text-white bg-[#1788ae] hover:text-white border-2 border-blue-700 hover:bg-gradient-to-tr hover:from-sky-600 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:gradient-to-br dark:hover:from-sky-600 to dark:hover:to-blue-800  dark:focus:ring-blue-800 block">
          <IoIosSend className="inline-block mr-1 text-lg"/>
          <span>Send Message</span>
        </button>
      </form>
    </div>
    </>
  )
}

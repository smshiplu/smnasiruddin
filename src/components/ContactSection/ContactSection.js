import { Form } from "./components/Form";

export const ContactSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto w-full relative px-4 my-10 bg-white text-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden">
      <h2 className="text-2xl sm:text-4xl font-semibold dark:text-white text-center border-2 border-blue-600 rounded-lg  max-w-xs mx-auto py-4">Let's Connect</h2>
      <Form />
    </section>
  )
}

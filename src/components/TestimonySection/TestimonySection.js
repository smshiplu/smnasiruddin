import { SwiperSlider } from "./components/SwiperSlider";

export const TestimonySection = () => {
  return (
    <section className="max-w-screen-xl mx-auto w-full relative p-4 pt-0 bg-white text-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden">
      <h2 className="text-2xl sm:text-4xl font-semibold dark:text-white text-center border-2 border-blue-600 rounded-lg max-w-sm sm:max-w-lg md:max-w-lg mx-auto py-4">What my clients are saying?</h2>
      <SwiperSlider />
    </section>
  )
}

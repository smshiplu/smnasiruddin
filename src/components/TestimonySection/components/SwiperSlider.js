import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getAllTestimonial } from '../../../services';
import { selectTestimonials, SET_TESTIMONY_DATA } from '../../../store/testimonySlice/testimonySlice';
import { Loader } from "../../Others/Loader";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const SwiperSlider = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector(selectTestimonials);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTestimonials = async () => {
      
      try {
        setIsLoading(true);
        if(testimonials.length < 1) {
          const data = await getAllTestimonial();
          dispatch(SET_TESTIMONY_DATA(data));
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    }
    getTestimonials();
  }, [dispatch, testimonials]); //eslint-disable-line
  

  return (
  <>
    {isLoading && <Loader />}
    <Swiper
      spaceBetween={300}
      centeredSlides={true}
      effect={"coverflow"}
      grabCursor={true}
      slidesPerView={"auto"}
      modules={[Navigation, Pagination, EffectCoverflow,  A11y]}
      navigation
      // effectCoverflow= {{
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: false,
      // }}

      draggable
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      
    >
      {testimonials.map(testimony => (
        <SwiperSlide key={testimony.id} className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-lg md:min-h-[360px] md:max-w-2xl lg:max-w-3xl w-full mx-auto mt-20 pt-10 md:pt-20 pb-10 px-10 rounded-lg border dark:border-gray-800 shadow-xl dark:shadow-none drop-shadow-xl dark:bg-slate-900 relative">
        
          <div className="md:-mt-20 w-40 h-40 mx-auto rounded-full text-center border border-gray-600 shadow-xl flex items-center justify-center  object-cover self-center overflow-hidden">
            <img src={`/assets/people/${testimony.img}`} alt={testimony.name} />
          </div>
          <div className="flex-1 flex flex-col-reverse gap-10">
            <div className="text-right">
              <h4 className="text-2xl md:text-3xl font-bold text-sky-700">{testimony.name}</h4>
              <small className="font-semibold text-sky-700">{testimony.designation}</small>
            </div>
            
            <p className="text-lg relative text-left md:text-justify min-h-7xl">
             <span className="text-4xl font-semibold font-serif inline-block absolute -top-4 -left-5">&#x201C;</span> 
             {testimony.testimony}
             <span className="text-4xl font-semibold font-serif inline-block absolute -bottom-8 ml-2">&#8221;</span></p> 
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
  );
}

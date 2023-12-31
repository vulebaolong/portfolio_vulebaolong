// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// requiered module
import { Navigation, Pagination } from "swiper/modules";

// testimonial data
const testimonialData = [
    {
        image: "/t-avt-1.png",
        name: "Anne Smith",
        position: "Customer",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
        image: "/t-avt-2.png",
        name: "Jane Doe",
        position: "Customer",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
    {
        image: "/t-avt-3.png",
        name: "Jhon Doe",
        position: "Customer",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
    },
];

// icons
import { FaQuoteLeft } from "react-icons/fa";

// next image
import Image from "next/image";

function TestimonialSlider() {
    return (
        <Swiper
            navigation={true}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="h-[400px]"
        >
            {testimonialData.map((person, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center md:flex-row h-full py-16 divide-x divide-white/20">
                            {/* avatar, name, position */}
                            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                                <div className="flex flex-col justify-center text-center">
                                    {/* avatar */}
                                    <div className="mb-2 mx-auto">
                                        <Image src={person.image} width={100} height={100} alt="personImg" />
                                    </div>

                                    {/* name */}
                                    <div className="text-lg">{person.name}</div>

                                    {/* position */}
                                    <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                                </div>
                            </div>


                            {/* quote & message */}
                            <div className="flex-1 flex-col justify-center md:px-20">
                                {/* quote icon */}
                                <div className="mb-4">
                                    <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                                </div>

                                {/* message */}
                                <div className="xl:text-lg text-center md:text-left">{person.message}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default TestimonialSlider;

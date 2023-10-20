import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { ReactNode } from "react";

interface IEditFormSliderProps {
    children?: ReactNode;
}

const EditFormSlider = ({ children }: IEditFormSliderProps) => {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            direction="vertical"
            coverflowEffect={{
                rotate: -5,
                stretch: 190,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper rounded-[20px]"
        >
            {[...Array(8)].map((_) => (
                <SwiperSlide className="">
                    <div
                        className={`w-[350px] h-[210px] transition rounded-[20px] bg-white shadow-md border`}
                    >
                        {children}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default EditFormSlider;

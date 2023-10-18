import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import practice from "../../assets/practice.png"
import Edit from "../../assets/icons/edit.svg?react"
import Link from "../../assets/icons/link.svg?react"
type Props = {};

const Projects = ({}: Props) => {
    return (
        <div className="h-screen grid grid-rows-6 items-center">
            <h2 className=" header ">YOUR PROJECTS</h2>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper row-start-2 row-end-5 max-w-[430px] w-[60vw] h-[100%] m-auto  "
                cardsEffect={{
                    rotate: false,
                    perSlideOffset: 10,
                }}
            >
                {[...new Array(3)].map((_,i)=>{
                    return (
                        <SwiperSlide className={`bg-gray-${3+i % 3}00 rounded-[20px] text-center  grid grid-rows-5 items-center justify-center`}>
                            <h2 className="text-[20px] font-bold">PROJECT NAME</h2>
                            <div className=" row-start-2 row-end-5">
                                <img src={practice} alt="" />
                            </div>
                            <div className="flex justify-between">
                                <Edit stroke="black"/>
                                <p>Preview</p>
                                <Link fill="black"/>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    );
};

export default Projects;

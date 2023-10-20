import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import practice from "../../assets/practice.png";
import Edit from "../../assets/icons/edit.svg?react";
import Link from "../../assets/icons/link.svg?react";
import { useState } from "react";


interface Props { }


const Projects = ({}: Props) => {
    const [active, setActive] = useState(0);
    // window.scrollTo({
    //     top: 1,
    // });
    // window.addEventListener("scroll", (event) => {
    //     if (window.scrollY < 1) {
    //         window.scrollTo({
    //             top: 1,
    //         });
    //     }
    // });
    return (
        <div className="projects grid grid-rows-6 items-center">
            <h2 className=" header ">YOUR PROJECTS</h2>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper row-start-2 row-end-5 max-w-[306px] w-[70vw] h-[100%] m-auto  "
                cardsEffect={{
                    rotate: false,
                    perSlideOffset: 10,
                }}
                onSlideChange={(e) => setActive(e.realIndex)}
            >
                {[...new Array(5)].map((_, i) => {
                    return (
                        <SwiperSlide
                            style={{
                                backgroundColor:
                                    i === active
                                        ? " rgb(255 255 255)"
                                        : "rgb(107 114 128)",
                            }}
                            className={` transition rounded-[20px] text-center grid grid-rows-5 items-center justify-center`}
                        >
                            <h2 className="text-[practice20px] font-bold">
                                PROJECT NAME
                            </h2>
                            <div className=" row-start-2 row-end-5">
                                <img src={practice} alt="" />
                            </div>
                            <div className="flex justify-between">
                                <Edit stroke="black" />
                                <p>Preview</p>
                                <Link fill="black" />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="w-10 h-10 "></div>
        </div>
    );
};

export default Projects;

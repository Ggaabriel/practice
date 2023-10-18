import { useState } from "react";
import tiktok from "../../assets/tiktok.png";

interface Props {}

const Gallery = (_props: Props) => {
    window.scrollTo({
        top: window.innerHeight,
    });
    window.addEventListener("scroll", (_event) => {
        window.scrollTo({
            top: window.innerHeight,
        });
    });
    const [touch, setTouch] = useState<number>(0);

    function swipe(
        event: React.MouseEvent<HTMLImageElement, MouseEvent> | any
    ) {
        let centerCoor = event.touches[0].clientY - window.innerHeight / 2;

        // let touchCoor = (event.touches[0].clientY - targetCoords.top) / 2
        let y = centerCoor - touch;

        event.target.style.transform = "translateY(" + y + "px) ";
    }

    return (
        <div className="gallery max-w-[410px] relative m-auto flex justify-center items-center h-screen select-none  ">
            <img
                draggable={false}
                className=" w-1/2  absolute mt-8 opacity-50"
                src={tiktok}
                alt=""
            />
            <img
                onTouchMove={(e) => swipe(e)}
                onTouchStart={(e: any) =>
                    setTouch(
                        e.touches[0].clientY -
                            e.target.getBoundingClientRect().top -
                            e.target.getBoundingClientRect().height / 2
                    )
                }
                // onMouseUp={(e) => addSwipe(e)}
                // onTouchEnd={(e)=>removeSwipe(e)}
                draggable={false}
                className=" w-1/2   absolute select-none"
                src={tiktok}
                alt=""
            />
        </div>
    );
};

export default Gallery;

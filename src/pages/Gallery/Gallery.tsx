import { useEffect, useRef, useState } from "react";
import tiktok from "../../assets/tiktok.png";

interface Props {}

const Gallery = (_props: Props) => {
    // window.scrollTo({
    //     top: window.innerHeight,
    // });
    // window.addEventListener("scroll", (_event) => {
    //     window.scrollTo({
    //         top: window.innerHeight,
    //     });
    // });
    // const [touch, setTouch] = useState<number>(0);

    // function swipe(
    //     event: React.MouseEvent<HTMLImageElement, MouseEvent> | any
    // ) {
    //     let centerCoor = event.touches[0].clientY - window.innerHeight / 2;

    //     // let touchCoor = (event.touches[0].clientY - targetCoords.top) / 2
    //     let y = centerCoor - touch;

    //     event.target.style.transform = "translateY(" + y + "px) ";
    // }
    const [active, setActive] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const numberOfBlocks = 15;
      const blockHeight = scrollHeight / numberOfBlocks;

      const currentBlock = Math.floor(scrollTop / blockHeight);

      setActive(currentBlock);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="gallery max-w-[410px] m-auto h-fit snap-y snap-mandatory overflow-scroll"
    >
      {[...new Array(15)].map((_, i) => {
        return (
          <div key={i} className="h-screen snap-start">
            <img
              draggable={false}
              className={`h-[320px] transition ${
                i === active ? 'relative z-20 top-[200px] scale-100' : 'fixed z-10 top-[230px] scale-90'
              }`}
              src={tiktok}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;

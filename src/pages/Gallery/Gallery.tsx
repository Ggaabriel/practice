import { useEffect, useRef, useState } from "react";
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
  const [active, setActive] = useState(0);
  const scrollContainerRef = useRef(null);
    console.log(active);
    
  const handleScroll = () => {
    const container:any = scrollContainerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
    //   const clientHeight = container.clientHeight;
      const numberOfBlocks = 15;
      const blockHeight = scrollHeight / numberOfBlocks;

      const currentBlock = Math.floor((scrollTop+1) / blockHeight);

      setActive(currentBlock);
    }
  };

  useEffect(() => {
    const container:any = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="gallery m-auto h-fit snap-y snap-mandatory overflow-scroll"
    >
      {[...new Array(15)].map((_, i,a) => {
        const isCurrent = i === active;

        return (
          <div key={i} className="h-screen snap-center flex justify-center overflow-hidden">
            <img
              draggable={false}
             
              className={`h-[50vh] pointer-events-none ${
                isCurrent
                  ? "relative top-[15vh] scale-100 transition"
                  : "fixed  top-[19vh] scale-90 "
              }`}
              style={{
                transform: isCurrent ? "scale(1.1)" : "none",
                filter:`hue-rotate(${i*50}deg)`,
                zIndex: isCurrent ? a.length : i===active+1 ? a.length-1 : i===0? a.length-i-1 : a.length-i
              }}
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

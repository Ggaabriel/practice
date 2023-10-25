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
      const numberOfBlocks = 30;
      const blockHeight = scrollHeight / numberOfBlocks;

      const currentBlock = Math.floor((scrollTop) / blockHeight);
     
    
      setActive(currentBlock);
      // container.children[currentBlock+1].children[0].classList.add("bob")
      
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
      className="gallery m-auto  h-fit snap-y snap-mandatory overflow-auto"
    >
      {[...new Array(30)].map((_, i,a) => {
        const isCurrent = i === active;
        
        return (
          <div key={i} className="h-screen  snap-center flex justify-center overflow-hidden">
            <img
              draggable={false}
             
              className={`h-[60vh] max-w-[410px] w-[70vw] pointer-events-none ${
                isCurrent
                  ? "relative top-[15vh] scale-100 bob  "
                  : "fixed  top-[19vh] scale-90 "
              } ${active+1 === i ? " visible":active === i ?" visible" :" invisible "} `}
              style={{
                transform: isCurrent ? "scale(1.1)" : "none",
                filter:`hue-rotate(${i*50}deg)`,
                zIndex: isCurrent ? a.length : i===active+1 ? a.length-1 : i===0? a.length-i-1 : a.length-i,
                transition: active + 1 === i ?"500ms" : "",
                
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
